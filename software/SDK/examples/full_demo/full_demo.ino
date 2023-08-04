#include <Adafruit_PWMServoDriver.h>
#include <math.h>
#include "BluetoothSerial.h"
#include <Adafruit_NeoPixel.h>
using namespace std;

#if !defined(CONFIG_BT_ENABLED) || !defined(CONFIG_BLUEDROID_ENABLED)
#error Bluetooth is not enabled! Please run `make menuconfig` to and enable it
#endif

BluetoothSerial SerialBT;

// DEFINE SERVO MOTOR CONTROLLER
Adafruit_PWMServoDriver pwm = Adafruit_PWMServoDriver(0x43);

#define SERVOMIN  100 // this is the 'minimum' pulse length count (out of 4096)
#define SERVOMAX  600 // this is the 'maximum' pulse length count (out of 4096)
#define FREQUENCY 60

#define DELAY_TIME 1

// DEFINE NEOPIXEL CONTROLLER
#define MATRIX_LED_PIN 33
//#define MATRIX_LED_COUNT 23
#define MATRIX_LED_COUNT 33
#define RING_LED_PIN 13 //16 for Crawler v1.0, 26 for Crawler v2.0, 15 for Crawler v3.0, 13 for Crawler v2.0
#define RING_LED_COUNT 12

Adafruit_NeoPixel ring(RING_LED_COUNT, RING_LED_PIN, NEO_GRB + NEO_KHZ800);
Adafruit_NeoPixel matrix(MATRIX_LED_COUNT, MATRIX_LED_PIN, NEO_GRB + NEO_KHZ800);

struct Pixel {
  byte red;
  byte green;
  byte blue;
};

typedef struct leg{
  byte lower;
  byte upper;
  byte centerOffsetLower;
  byte centerOffsetUpper;
  byte currentAngleLower;
  byte currentAngleUpper;
};

unsigned long matrix_timer;
unsigned long ring_timer;

//############# CHANNEL OF SERVO ON CYOCrawler #################
// legx = {lower, upper}
leg leg0 = {0, 1};
leg leg1 = {3, 4};
leg leg2 = {6, 7};
leg leg3 = {9, 10};
//##############################################################

int pulseWidth(byte angle);
void dynamicServoAssignment();
void updateServoState();

//############################# PRE-WRITTEN FUNCTIONS  #############################################

void reset_matrix(Adafruit_NeoPixel &strip, byte LED_COUNT){
  for(int i = 0; i < LED_COUNT; i++){
    strip.setPixelColor(i, strip.Color(0, 0, 0));
  }
  strip.show();
}

void set_all(Adafruit_NeoPixel &strip, byte LED_COUNT, Pixel pixel){
  for(int i = 0; i < LED_COUNT; i++){
    strip.setPixelColor(i, strip.Color(pixel.red, pixel.green, pixel.blue));
  }
  strip.show();
}

void set_manual(Adafruit_NeoPixel &strip, byte index, Pixel pixel){
  strip.setPixelColor(index, strip.Color(pixel.red, pixel.green, pixel.blue));
  strip.show();
}

void updateServoState(){
  pwm.setPWM(leg0.upper, 0, pulseWidth(leg0.currentAngleUpper));
  pwm.setPWM(leg0.lower, 0, pulseWidth(leg0.currentAngleLower));
  pwm.setPWM(leg1.upper, 0, pulseWidth(leg1.currentAngleUpper));
  pwm.setPWM(leg1.lower, 0, pulseWidth(leg1.currentAngleLower));
  pwm.setPWM(leg2.upper, 0, pulseWidth(leg2.currentAngleUpper));
  pwm.setPWM(leg2.lower, 0, pulseWidth(leg2.currentAngleLower));
  pwm.setPWM(leg3.upper, 0, pulseWidth(leg3.currentAngleUpper));
  pwm.setPWM(leg3.lower, 0, pulseWidth(leg3.currentAngleLower));
}

void dynamicServoAssignment(
  float leg0NewUpper, float leg0NewLower, 
  float leg1NewUpper, float leg1NewLower, 
  float leg2NewUpper, float leg2NewLower, 
  float leg3NewUpper, float leg3NewLower
  ){
    
  float leg0UpperDiff = float(leg0.currentAngleUpper) - leg0NewUpper;
  float leg0LowerDiff = float(leg0.currentAngleLower) - leg0NewLower;
  
  float leg1UpperDiff = float(leg1.currentAngleUpper) - leg1NewUpper;
  float leg1LowerDiff = float(leg1.currentAngleLower) - leg1NewLower;
  
  float leg2UpperDiff = float(leg2.currentAngleUpper) - leg2NewUpper;
  float leg2LowerDiff = float(leg2.currentAngleLower) - leg2NewLower;
  
  float leg3UpperDiff = float(leg3.currentAngleUpper) - leg3NewUpper;
  float leg3LowerDiff = float(leg3.currentAngleLower) - leg3NewLower;

  byte leg0CurrentUpper = leg0.currentAngleUpper;
  byte leg0CurrentLower = leg0.currentAngleLower;
  
  byte leg1CurrentUpper = leg1.currentAngleUpper;
  byte leg1CurrentLower = leg1.currentAngleLower;
  
  byte leg2CurrentUpper = leg2.currentAngleUpper;
  byte leg2CurrentLower = leg2.currentAngleLower;
  
  byte leg3CurrentUpper = leg3.currentAngleUpper;
  byte leg3CurrentLower = leg3.currentAngleLower;

  for(int i = 0; i < 50; i++){
    leg0.currentAngleLower = byte(constrain(leg0CurrentLower - float(i*0.02)*leg0LowerDiff, 0, 180));
    leg0.currentAngleUpper = byte(constrain(leg0CurrentUpper - float(i*0.02)*leg0UpperDiff, 0, 180));
    leg1.currentAngleLower = byte(constrain(leg1CurrentLower - float(i*0.02)*leg1LowerDiff, 0, 180));
    leg1.currentAngleUpper = byte(constrain(leg1CurrentUpper - float(i*0.02)*leg1UpperDiff, 0, 180));
    leg2.currentAngleLower = byte(constrain(leg2CurrentLower - float(i*0.02)*leg2LowerDiff, 0, 180));
    leg2.currentAngleUpper = byte(constrain(leg2CurrentUpper - float(i*0.02)*leg2UpperDiff, 0, 180));
    leg3.currentAngleLower = byte(constrain(leg3CurrentLower - float(i*0.02)*leg3LowerDiff, 0, 180));
    leg3.currentAngleUpper = byte(constrain(leg3CurrentUpper - float(i*0.02)*leg3UpperDiff, 0, 180));
    updateServoState();
    delay(DELAY_TIME);
  }
}

int pulseWidth(byte angle){
  float unit_angle = float(int(SERVOMAX - SERVOMIN)*0.005555);
  return angle*unit_angle + SERVOMIN;
}

void setup() {
  Serial.begin(9600);
  pwm.begin();
  pwm.setPWMFreq(FREQUENCY);  // Analog servos run at ~60 Hz updates
  delay(10);

  SerialBT.begin("CYOCrawler"); //Bluetooth device name
  Serial.println("The device started, now you can pair it with bluetooth!");
  
  /*
   * Write your CYOCrawler offset value for each motor here
   */
  //############### OFFSET VALUE FOR EACH MOTOR ##################
  leg0.centerOffsetLower = 96;
  leg0.centerOffsetUpper = 89;
  leg1.centerOffsetLower = 90;
  leg1.centerOffsetUpper = 85;
  leg2.centerOffsetLower = 83;
  leg2.centerOffsetUpper = 99;
  leg3.centerOffsetLower = 86;
  leg3.centerOffsetUpper = 84;
  //##############################################################

  leg0.currentAngleLower = leg0.centerOffsetLower;
  leg0.currentAngleUpper = leg0.centerOffsetUpper;
  leg1.currentAngleLower = leg1.centerOffsetLower;
  leg1.currentAngleUpper = leg1.centerOffsetUpper;
  leg2.currentAngleLower = leg2.centerOffsetLower;
  leg2.currentAngleUpper = leg2.centerOffsetUpper;
  leg3.currentAngleLower = leg3.centerOffsetLower;
  leg3.currentAngleUpper = leg3.centerOffsetUpper;

  delay(2000);
  updateServoState();

  reset_matrix(matrix, MATRIX_LED_COUNT);
  reset_matrix(ring, RING_LED_COUNT);
  Pixel pixel = {100, 0, 20};
  set_all(matrix, MATRIX_LED_COUNT, pixel);

  matrix_timer = millis();
  ring_timer = millis();
}

void fourPhaseGaitPropagation(int gait[8]){
  for(int i = 0; i < 4; i++){
    dynamicServoAssignment(
      leg0.centerOffsetUpper + gait[i*2+0], leg0.centerOffsetLower + gait[i*2+1], 
      leg1.centerOffsetUpper + gait[((i+3)*2+0)%8], leg1.centerOffsetLower + gait[((i+3)*2+1)%8], 
      leg2.centerOffsetUpper + gait[((i+1)*2+0)%8], leg2.centerOffsetLower + gait[((i+1)*2+1)%8], 
      leg3.centerOffsetUpper + gait[((i+2)*2+0)%8], leg3.centerOffsetLower + gait[((i+2)*2+1)%8]
    );
  }
}

void twoPhaseGaitPropagation(int gait[8]){
  for(int i = 0; i < 4; i++){
    dynamicServoAssignment(
      leg0.centerOffsetUpper + gait[((i)*2+0)%8], leg0.centerOffsetLower + gait[((i)*2+1)%8], 
      leg1.centerOffsetUpper + gait[((i+2)*2+0)%8], leg1.centerOffsetLower + gait[((i+2)*2+1)%8], 
      leg2.centerOffsetUpper + gait[((i)*2+0)%8], leg2.centerOffsetLower + gait[((i)*2+1)%8], 
      leg3.centerOffsetUpper + gait[((i+2)*2+0)%8], leg3.centerOffsetLower + gait[((i+2)*2+1)%8]
    );
  } 
}

void twoPhaseRotate(int gait[8]){
  for(int i = 0; i < 4; i++){
    dynamicServoAssignment(
      leg0.centerOffsetUpper + gait[((i)*2+0)%8], leg0.centerOffsetLower + gait[((i)*2+1)%8], 
      leg1.centerOffsetUpper + gait[((i+2)*2+0)%8], leg1.centerOffsetLower + gait[((i+2)*2+1)%8], 
      leg2.centerOffsetUpper - gait[((i)*2+0)%8], leg2.centerOffsetLower + gait[((i)*2+1)%8], 
      leg3.centerOffsetUpper - gait[((i+2)*2+0)%8], leg3.centerOffsetLower + gait[((i+2)*2+1)%8]
    );
  }
}

void twoPhaseRotate_reverse(int gait[8]){
  for(int i = 0; i < 4; i++){
    dynamicServoAssignment(
      leg0.centerOffsetUpper - gait[((i)*2+0)%8], leg0.centerOffsetLower + gait[((i)*2+1)%8], 
      leg1.centerOffsetUpper - gait[((i+2)*2+0)%8], leg1.centerOffsetLower + gait[((i+2)*2+1)%8], 
      leg2.centerOffsetUpper + gait[((i)*2+0)%8], leg2.centerOffsetLower + gait[((i)*2+1)%8], 
      leg3.centerOffsetUpper + gait[((i+2)*2+0)%8], leg3.centerOffsetLower + gait[((i+2)*2+1)%8]
    );
  }
}

int upData[] = {+20, -10, +20, +20, -30, +20, -30, -10};
int downData[] = {-20, -10, -20, +20, +30, +20, +30, -10};
int rotateData[] = {-30, -30, -30, 0, +30, +20, +30, 0};

byte mode = 0;
byte ring_index = 0;
byte matrix_index_list[] = {0, 1, 2, 7, 14, 19, 22, 21, 20, 15, 8, 3};
byte matrix_index = 0;

void loop() {
  if(SerialBT.available() > 0){
    byte data = SerialBT.read() - '0';
    if(data < 9 && data >= 0){
      mode = data; 
      SerialBT.println(mode);
      Serial.println(mode);
    }
  }
  
  switch(mode){
    case 0:
    {
      dynamicServoAssignment(
        leg0.centerOffsetUpper, leg0.centerOffsetLower, 
        leg1.centerOffsetUpper, leg1.centerOffsetLower, 
        leg2.centerOffsetUpper, leg2.centerOffsetLower, 
        leg3.centerOffsetUpper, leg3.centerOffsetLower
      );
      break;
    }
    case 1: //forward
    {
      twoPhaseGaitPropagation(upData);
      break;
    }
    case 2: //backward
    { 
      twoPhaseGaitPropagation(downData);
      break;
    }
    case 3: //rotate
    {
      twoPhaseRotate(rotateData);
      break;
    }
    case 4: //rotate reverse
    {
      twoPhaseRotate_reverse(rotateData);
      break;
    }
    default:
      break;
  }

  // loop through NeoPixel functions
  Pixel pixel = {100, 0, 20};
  if(millis() - ring_timer > 30){
    reset_matrix(ring, RING_LED_COUNT);
    set_manual(ring, ring_index, pixel);
    ring_index = (ring_index + 1)%RING_LED_COUNT;
    ring_timer = millis();
  }

  if(millis() - matrix_timer > 10){
    set_all(matrix, MATRIX_LED_COUNT, {10, 30, 10});
    set_manual(matrix, matrix_index_list[matrix_index], pixel);
    matrix_index = (matrix_index + 1)%sizeof(matrix_index_list);
    matrix_timer = millis();
  }
}