"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[75],{4096:function(e,t,l){l.d(t,{z:function(){return d}});var n=l(9219),o=l(1011),a=l(5762),i=l(2564),r=l(1962);let s=(0,a.j)("inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",{variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",muted:"bg-muted text-muted-foreground hover:bg-muted/90",positive:"bg-positive text-positive-foreground hover:bg-positive/90",destructive:"bg-destructive text-destructive-foreground hover:bg-destructive/90",outline:"border border-input bg-background hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-10 px-4 py-2",sm:"h-9 rounded-md px-3",lg:"h-11 rounded-md px-8",icon:"h-10 w-10"}},defaultVariants:{variant:"default",size:"default"}}),d=i.forwardRef((e,t)=>{let{className:l,variant:a,size:i,asChild:d=!1,...c}=e,m=d?o.g7:"button";return(0,n.jsx)(m,{className:(0,r.cn)(s({variant:a,size:i,className:l})),ref:t,...c})});d.displayName="Button"},1891:function(e,t,l){l.d(t,{B:function(){return a}});var n=l(9219),o=l(1962);let a=e=>{let{children:t,className:l}=e;return(0,n.jsx)("h3",{className:(0,o.cn)("scroll-m-20 text-2xl font-semibold tracking-tight",l),children:t})}},9187:function(e,t,l){l.d(t,{_:function(){return n}});let n={localStorage:{cyobot_portal_robot_ip_address:"cyobot_portal_robot_ip_address",cyobot_local_storage_code:"cyobot_local_storage_code"}}},3552:function(e,t,l){l.d(t,{k:function(){return o},n:function(){return a}});var n=l(2564);let o=(0,n.createContext)(void 0),a=()=>{let e=(0,n.useContext)(o);if(!e)throw Error("useBlockEditor must be used within a BlockEditorContextProvider");return e}},6833:function(e,t,l){l.d(t,{q:function(){return a}});var n=l(3916),o=l(2564);let a=(0,o.createContext)({code:"",setCode:n.Z})},1984:function(e,t,l){l.d(t,{E:function(){return i}});var n=l(810),o=l(3916),a=l(2564);let i=(0,a.createContext)({config:n.u,setConfig:o.Z})},5767:function(e,t,l){l.d(t,{D:function(){return a}});var n=l(3916),o=l(2564);let a=(0,o.createContext)({open:!1,setOpen:n.Z})},1679:function(e,t,l){l.d(t,{p:function(){return i}});var n=l(810),o=l(2072),a=l(2564);let i=(0,a.createContext)(new o.v({endpoint:n.u.pythonWebREPL.endpoint,password:n.u.pythonWebREPL.password}))},1991:function(e,t,l){l.d(t,{L:function(){return a}});var n=l(3916),o=l(2564);let a=(0,o.createContext)({clientResponses:[],setClientResponses:n.Z})},734:function(e,t,l){l.d(t,{I:function(){return a}});var n=l(3916),o=l(2564);let a=(0,o.createContext)({robotIPAddress:null,setRobotIPAddress:n.Z})},810:function(e,t,l){l.d(t,{u:function(){return n}});let n={editor:"code",pythonWebREPL:{endpoint:"ws://192.168.4.1:8266",password:"cyobot"},codeEditor:{loading:{progressIntervalMs:1e3,progressIncrementValue:10,messageIntervalMs:3e3,messages:["Hang on tight...","Almost there...","Patience is a virtue of all programmers","Sometimes taking a walk is the best debug strategy","Don't forget to drink water, programmers are human too","Have you touched grass today?"],onFinishLoadingMessage:"We're ready, have fun!",onFinishLoadingDelayMs:1e3}},onboarding:{hasProvidedWifiCredentials:!0,hasProvidedCodeEditorPreference:!1,openPortalInstructionCards:[{header:"1. Connect your laptop to wifi",content:"Use your navigation bar to connect your laptop to the same wifi network that CYOCrawler connected to previously."},{header:"2. Type CYOCrawler’s IP into a new browser",content:"Your Crawler will show a unique IP on its LED screen (e.g, 192.168.100.200). Type the IP shown into a new tab on your browser."},{header:"3. Finish!",content:"Now, your Crawler’s IP address has become your personal portal address. Next time, just type in this IP into your browser to connect to the portal while going online."}]},queryIndices:{useConfig:"useConfig",useNetworks:"useNetworks",useCyobrainInternetConnectionStatus:"useCyobrainInternetConnectionStatus"},activitiesLibrary:{levelDropdown:{triggerPlaceholder:"Level",options:[{displayName:"Beginner",value:"beginner"},{displayName:"Intermediate",value:"intermediate"},{displayName:"Advanced",value:"advanced"}]},topicDropdown:{triggerPlaceholder:"Topic",options:[{displayName:"Embedded System",value:"embedded"},{displayName:"Control",value:"control"},{displayName:"Internet of Things",value:"iot"},{displayName:"AI/Machine Learning",value:"aiml"}]},activities:[{title:"Blink an LED on matrix",description:"Blink an LED on the LED matrix display of the robot. Click on Break to terminate the program once you are done.",slug:"matrix_led_blink",tags:{topic:{displayName:"Embedded System",slug:"embedded",color:"#19d164"},level:{displayName:"Beginner",slug:"beginner",color:"#ffc800"}},block:'<xml xmlns="https://developers.google.com/blockly/xml"><block type="matrix_init" id="pHU(@FdyVcihzO/*XL(Q" x="270" y="110"><next><block type="time_init" id="L8_^im:kVD+0c3shhvmS"><next><block type="controls_whileUntil" id="![o_Zc2XHyZ:MsG8uJ3j"><field name="MODE">WHILE</field><value name="BOOL"><block type="logic_boolean" id=",DZ0y1,t#XY?g[@$$9j,"><field name="BOOL">TRUE</field></block></value><statement name="DO"><block type="matrix_manual" id="o#]$[O#OZXF^(1qcmYLf"><field name="COLOR">#40ff40</field><value name="INDEX"><block type="value_number" id="EPDpCyBqce/Ll~Y#YplG"><field name="NUM">0</field></block></value><next><block type="timing_sleep" id="q:s0X[fU}o*#KqncLgYM"><value name="SECS"><block type="value_number" id="e^m,~FR]|UtCGGt~T*$}"><field name="NUM">1</field></block></value><next><block type="matrix_reset" id="bI#NLa9y1n|O^_uEuVL;"><next><block type="timing_sleep" id="~g]yFHJ,)5Jnt%%EZ]51"><value name="SECS"><block type="value_number" id="e|)]DHz]VR/W6wYsQdgR"><field name="NUM">1</field></block></value></block></next></block></next></block></next></block></statement><next><block type="matrix_reset" id="QHbhXA2T6B2%%WB/fj`m"></block></next></block></next></block></next></block></xml>',code:"from lib.brain.display import *\nimport time\nmatrix = Matrix()\nwhile True:\n    matrix.set_manual(0, (0, 0, 200))\n    time.sleep(1.0)\n    matrix.reset()\n    time.sleep(1.0)\nmatrix.reset()"},{title:"Display a character",description:"Display a character on the LED matrix display. You can display alphabet characters (A~Z), and numbers (0~9).",slug:"matrix_character",tags:{topic:{displayName:"Embedded System",slug:"embedded",color:"#19d164"},level:{displayName:"Beginner",slug:"beginner",color:"#ffc800"}},block:'<xml xmlns="https://developers.google.com/blockly/xml"><block type="matrix_init" id="(%x^}(eFk5%6~Y!:8ci=" x="350" y="170"><next><block type="matrix_character" id="`_|1^df%fr%rH_2:,Q5k"><field name="CHAR">B</field><field name="COLOR">#40ff40</field></block></next></block></xml>',code:'from lib.brain.display import Matrix\nmatrix = Matrix()\nmatrix.set_character("A", red=64, green=255, blue=64)'},{title:"Scroll a word",description:"Use the built-in function to scroll a word on the LED display. You can further change the speed, the color of the word. Currently, the library on supports capital letters and numbers.",slug:"scroll_word",tags:{topic:{displayName:"Embedded System",slug:"embedded",color:"#19d164"},level:{displayName:"Beginner",slug:"beginner",color:"#ffc800"}},block:'<xml xmlns="https://developers.google.com/blockly/xml"><block type="matrix_init" id="DVxp%I()h,21g{m),BhZ" x="-70" y="-70"><next><block type="matrix_scroll" id="~6o@A6+?q@Bi~j[+{yxh"><value name="VALUE"><block type="text" id="0LxmV7;ry5HsquXA-xpO"><field name="TEXT">hello</field></block></value><next><block type="matrix_reset" id="R,]2E]|bdMbE;q#5Kt4S"></block></next></block></next></block></xml>',code:'from lib.brain.display import Matrix\nmatrix = Matrix()\nmatrix.scroll("HELLO")\nmatrix.reset()\n'},{title:"Turn on LED on ring",description:"Turn on an LED on the LED ring of the robot.",slug:"ring_manual",tags:{topic:{displayName:"Embedded System",slug:"embedded",color:"#19d164"},level:{displayName:"Beginner",slug:"beginner",color:"#ffc800"}},block:'<xml xmlns="https://developers.google.com/blockly/xml"><block type="ring_init" id="]7]TRDZ=m_we/{{?k._T" x="70" y="30"><next><block type="ring_manual" id="vQkL4HEsTF%D|*#clyXt"><field name="COLOR">#40ff40</field><value name="INDEX"><block type="value_number" id="`9-pY@UiKMu-Ojh#mFcq"><field name="NUM">0</field></block></value></block></next></block></xml>',code:"from lib.crawler.display import LEDRing\nring = LEDRing()\nring.set_manual(0, (64, 255, 64))"},{title:"Move LED lights in circle",description:"Turn on an LED on the LED ring of the robot and move it in circle.",slug:"ring_loading",tags:{topic:{displayName:"Embedded System",slug:"embedded",color:"#19d164"},level:{displayName:"Beginner",slug:"beginner",color:"#ffc800"}},block:'<xml xmlns="https://developers.google.com/blockly/xml"><block type="ring_init" id="VxRqx5Xp+;@y5a[x_Z6@" x="350" y="190"><next><block type="ring_spin" id="v.N`[S?NTHM6n1I~xeZB"><field name="COLOR">#40ff40</field><field name="SPEED">0.1</field></block></next></block></xml>',code:"from lib.crawler.display import LEDRing\nring = LEDRing()\nring.loading(speed=0.1, red=64, green=255, blue=64)"},{title:"Detect pressed button",description:"Detect pressed button. If left button is pressed, turn on an LED on matrix display. Else, turn off LED. Click on Break to terminate the program once you are done.",slug:"button_pressed",tags:{topic:{displayName:"Embedded System",slug:"embedded",color:"#19d164"},level:{displayName:"Beginner",slug:"beginner",color:"#ffc800"}},block:'<xml xmlns="https://developers.google.com/blockly/xml"><block type="button_init" id=".W*SLyy5@Z6zzi~tlXll" x="370" y="150"><next><block type="matrix_init" id="5utcN_Q8=hBv{Jxd!~Q0"><next><block type="controls_whileUntil" id="`v^B_E5zaV|n90|JAC=y"><field name="MODE">WHILE</field><value name="BOOL"><block type="logic_boolean" id="([p7gmpmK-Fry,Xm/dA("><field name="BOOL">TRUE</field></block></value><statement name="DO"><block type="controls_if" id=".*]Bev#OKv:`){2YwY^J"><mutation else="1"></mutation><value name="IF0"><block type="logic_compare" id="H=w6oPi*]:V7-hJM?EZz"><field name="OP">EQ</field><value name="A"><block type="sensing_button" id="C=?zwa8seH-:bVnw$x#5"><field name="BUTTON">left</field></block></value><value name="B"><block type="value_number" id="n~q^h(=M~1mV9$N{ImAj"><field name="NUM">0</field></block></value></block></value><statement name="DO0"><block type="matrix_manual" id="UV#htkO,^40ACT!L0H7_"><field name="COLOR">#40ff40</field><value name="INDEX"><block type="value_number" id="Zx)lDHnPtTVip,ZK4ds}"><field name="NUM">0</field></block></value></block></statement><statement name="ELSE"><block type="matrix_reset" id="|PB*kuq`Md`rk:VfRPPR"></block></statement><next><block type="timing_sleep" id="rCWrN5NGW;(RRS^d0_Zc"><value name="SECS"><block type="value_number" id="*5%{2P*Li#/S(_)AGJh!"><field name="NUM">0.001</field></block></value></block></next></block></statement><next><block type="matrix_reset" id="7GkL0V8BjSJ-G1Y|hc9h"></block></next></block></next></block></next></block></xml>',code:"import machine\nleft = machine.Pin(27, machine.Pin.IN)\nright = machine.Pin(0, machine.Pin.IN)\nfrom lib.brain.display import Matrix\nmatrix = Matrix()\nwhile True:\n  if (left.value()) == 0:\n    matrix.set_manual(0, (64, 255, 64))\n  else:\n    matrix.reset()\n  time.sleep(0.001)\nmatrix.reset()"},{title:"Play a music file",description:"Play a music file stored in the micro SD card, using the built-in speaker of the robot.",slug:"speaker_play",tags:{topic:{displayName:"Embedded System",slug:"embedded",color:"#19d164"},level:{displayName:"Beginner",slug:"beginner",color:"#ffc800"}},block:'<xml xmlns="https://developers.google.com/blockly/xml"><block type="speaker_init" id="U3)={nD)[Z6yE98[DQ-j" x="70" y="30"><next><block type="sound_play" id="eu+M-L4$JTC@cYQ-]J_N"></block></next></block></xml>',code:"from lib.crawler.sound import Speaker\nspeaker = Speaker()\nspeaker.play()"},{title:"Play a tone/music note",description:"Play a tone or music note using the built-in speaker of the robot.",slug:"speaker_tone",tags:{topic:{displayName:"Embedded System",slug:"embedded",color:"#19d164"},level:{displayName:"Beginner",slug:"beginner",color:"#ffc800"}},block:'<xml xmlns="https://developers.google.com/blockly/xml"><block type="speaker_init" id="U3)={nD)[Z6yE98[DQ-j" x="70" y="30"><next><block type="sound_tone" id="Z$Pe.uhj+-@;@aHUCmJW"><field name="TONE">261</field><field name="VOLUME">2</field><value name="SECS"><block type="value_number" id="n{9oAM_^`e8(*%,s1Jb0"><field name="NUM">1</field></block></value></block></next></block></xml>',code:"from lib.crawler.sound import Speaker\nspeaker = Speaker()\nspeaker.play_tone(frequency=261, duration=1, volume=2)"},{title:"Capture motion data",description:"Capture motion data by tilting the robot in different directions and observe the LED displaying accordingly. Click on Break to terminate the program once you are done.",slug:"imu_tilt_test",tags:{topic:{displayName:"Embedded System",slug:"embedded",color:"#19d164"},level:{displayName:"Beginner",slug:"beginner",color:"#ffc800"}},block:'<xml xmlns="https://developers.google.com/blockly/xml"><block type="matrix_init" id="3|L(y`fU6qdUcVf^hI!N" x="130" y="10"><next><block type="time_init" id="!UyiU*M;[1xDm(Zf8=dR"><next><block type="imu_init" id="G=~85GyB4PX5*{dj~T8s"><next><block type="controls_whileUntil" id="?u=tcz~LJpN3_[u8?9Bh"><field name="MODE">WHILE</field><value name="BOOL"><block type="logic_boolean" id="DtP%}m|T!H=/Ci)_WM}("><field name="BOOL">TRUE</field></block></value><statement name="DO"><block type="controls_if" id="Fh.W+Jp0-7a|!#fI~S?v"><mutation elseif="3" else="1"></mutation><value name="IF0"><block type="logic_compare" id="]#)6Cpq|Sz+`2nW=9glv"><field name="OP">LT</field><value name="A"><block type="sensing_gyro" id="K2gyZNC%E~:YN5izUD%$"><field name="AXIS">1</field></block></value><value name="B"><block type="value_number" id="1{1nbF6+n5MV4~E!KH9e"><field name="NUM">-1</field></block></value></block></value><statement name="DO0"><block type="matrix_manual" id=";:}ThojmzWmWB+i:@f!p"><field name="COLOR">#40ff40</field><value name="INDEX"><block type="value_number" id="*v%1.}#`JgL(s;PI7=29"><field name="NUM">20</field></block></value></block></statement><value name="IF1"><block type="logic_compare" id="=JjTak-?um=l,D59glw`"><field name="OP">GT</field><value name="A"><block type="sensing_gyro" id="D*JLoL)q%t.J0;5;KiR%"><field name="AXIS">1</field></block></value><value name="B"><block type="value_number" id="}-+GX80`Bkn-3!GLY4sQ"><field name="NUM">1</field></block></value></block></value><statement name="DO1"><block type="matrix_manual" id="7_AHP[rg$H=@{[ps.;PT"><field name="COLOR">#40ff40</field><value name="INDEX"><block type="value_number" id="nO$L{n6fgInWDRv]H^(B"><field name="NUM">12</field></block></value></block></statement><value name="IF2"><block type="logic_compare" id="kwvI2u22]$A/*26kPm{c"><field name="OP">LT</field><value name="A"><block type="sensing_gyro" id="$cZKQ[}s$_1pEfUn}QSy"><field name="AXIS">0</field></block></value><value name="B"><block type="value_number" id="?hXl#D1A8Q4J1SC[|.@U"><field name="NUM">-1</field></block></value></block></value><statement name="DO2"><block type="matrix_manual" id="=8ZT*(%:YC$56]9rUZ[q"><field name="COLOR">#40ff40</field><value name="INDEX"><block type="value_number" id="c;K4mc8IuLpWsPU5A-HU"><field name="NUM">2</field></block></value></block></statement><value name="IF3"><block type="logic_compare" id="I#?W4826PGyiRL*;/I89"><field name="OP">GT</field><value name="A"><block type="sensing_gyro" id="eyb4q9Gd,j`4`O?bO7z:"><field name="AXIS">0</field></block></value><value name="B"><block type="value_number" id="pw_ny72F4B;czI3;GEP;"><field name="NUM">1</field></block></value></block></value><statement name="DO3"><block type="matrix_manual" id="5C#!5YE9g6h_FbHNq@U,"><field name="COLOR">#40ff40</field><value name="INDEX"><block type="value_number" id="l2wp;jCvvU/v:azhr?`y"><field name="NUM">30</field></block></value></block></statement><statement name="ELSE"><block type="matrix_reset" id="s~yDS-%}Yq2z+u^KkW6o"></block></statement><next><block type="timing_sleep" id="%.)NSRcO%pLaY*uUHorH"><value name="SECS"><block type="value_number" id="}?wfk[`?z|;LH79=7pK@"><field name="NUM">0.001</field></block></value></block></next></block></statement></block></next></block></next></block></next></block></xml>',code:"from lib.brain.display import Matrix\nmatrix = Matrix()\nimport time\nfrom lib.crawler.imu import IMU\nimu = IMU()\nwhile True:\n  if (imu.gyro[1]) < -1:\n    matrix.set_manual(20, (64, 255, 64))\n  elif (imu.gyro[1]) > 1:\n    matrix.set_manual(12, (64, 255, 64))\n  elif (imu.gyro[0]) < -1:\n    matrix.set_manual(2, (64, 255, 64))\n  elif (imu.gyro[0]) > 1:\n    matrix.set_manual(30, (64, 255, 64))\n  else:\n    matrix.reset()\n  time.sleep(0.001)"},{title:"Capture sound",description:"Capture sound using built-in microphone and show how loud the sound is using LED display. Click on Break to terminate the program once you are done.",slug:"microphone_led",tags:{topic:{displayName:"Embedded System",slug:"embedded",color:"#19d164"},level:{displayName:"Beginner",slug:"beginner",color:"#ffc800"}},block:'<xml xmlns="https://developers.google.com/blockly/xml"><block type="matrix_init" id="{|fHA@-U4(B03o~GA?/=" x="250" y="70"><next><block type="time_init" id="?1I@geVu!]`{[3#:RNoj"><next><block type="microphone_init" id="[KlinAFw%/X-a.Jy+w!w"><next><block type="controls_whileUntil" id="fbfyv]ez8Lo/|h*:zZNr"><field name="MODE">WHILE</field><value name="BOOL"><block type="logic_boolean" id="8EG,2|Nsj`D4C92K0e/k"><field name="BOOL">TRUE</field></block></value><statement name="DO"><block type="matrix_all_2" id="RPegtliSO/3uj^lo/_7C"><value name="RED"><block type="math_arithmetic" id="0CEmp70z-:Vm+D|.xWxG"><field name="OP">MINUS</field><value name="A"><block type="value_number" id="L|e.).{@K=Jm?_ONyX+h"><field name="NUM">100</field></block></value><value name="B"><block type="math_arithmetic" id="e2t/*UCGU@m{P%tKbyDJ"><field name="OP">DIVIDE</field><value name="A"><block type="math_on_list" id="}m%)Z%9j[#-zdL_xfCZU"><mutation op="SUM"></mutation><field name="OP">SUM</field><value name="LIST"><block type="sensing_microphone" id="eI1b*BoZyS/Luo0p)gkY"><value name="BUFFER"><block type="value_number" id="=b~iWrh/|B[W)-R`qK0Z"><field name="NUM">1</field></block></value></block></value></block></value><value name="B"><block type="value_number" id="2Pl#K[f/a%O2r??H-LIf"><field name="NUM">40</field></block></value></block></value></block></value><value name="GREEN"><block type="value_number" id="=DUccaMPGpGkN_VGodOL"><field name="NUM">0</field></block></value><value name="BLUE"><block type="value_number" id="$`EV^p1f%Sd-HpGoa=z^"><field name="NUM">0</field></block></value><next><block type="timing_sleep" id="*ujgzER(8SsqhG#ooI?v"><value name="SECS"><block type="value_number" id="gQogA*C#wIsb:^Ax(mHH"><field name="NUM">0.001</field></block></value></block></next></block></statement></block></next></block></next></block></next></block></xml>',code:"from lib.brain.display import Matrix\nmatrix = Matrix()\nimport time\nfrom lib.crawler.sound import Microphone\nmicrophone = Microphone()\nwhile True:\n  matrix.set_all((int((100 - sum(microphone.read(buffer=1)) / 40)/255.0*100.0), int(0/255.0*100.0), int(0/255.0*100.0)))\n  time.sleep(0.001)"},{title:"Walk forward 3 steps on 4 legs",description:"Use the built-in functions to control the robot to walk forward 3 steps in its spider-form.",slug:"forward_command",tags:{topic:{displayName:"Embedded System",slug:"embedded",color:"#19d164"},level:{displayName:"Beginner",slug:"beginner",color:"#ffc800"}},block:'<xml xmlns="https://developers.google.com/blockly/xml"><block type="motor_init" id="m!BgDI,^4;T?qFY?bD_E" x="490" y="130"><next><block type="motion_command" id="EVEs8!;})#X4zRwT+8mS"><field name="COMMAND">forward</field><value name="STEPS"><block type="value_number" id="pE9d*VfG+IJ^Vi)0cU.a"><field name="NUM">3</field></block></value><next><block type="motion_off" id="z=,9prI4SkMg}Ve{WbH6"></block></next></block></next></block></xml>',code:'from lib.crawler.kinematics import Crawler\ncrawler = Crawler()\nfor i in range(3):\n    crawler.command("forward")\ncrawler.pca.all_off()'},{title:"Rotate 3 steps to left on 4 legs",description:"Use the built-in functions to control the robot to rotate 3 steps to the left in its spider-form.",slug:"rotate_command",tags:{topic:{displayName:"Embedded System",slug:"embedded",color:"#19d164"},level:{displayName:"Beginner",slug:"beginner",color:"#ffc800"}},block:'<xml xmlns="https://developers.google.com/blockly/xml"><block type="motor_init" id="=SZ5@HX#EI,^s4g-wB]#" x="350" y="150"><next><block type="motion_command_2" id="MlKjJj[-eM)=PjUbd_~="><field name="COMMAND">rotate_left</field><value name="STEPS"><block type="value_number" id="/`!2M]U!+y[B`Lknc$_j"><field name="NUM">3</field></block></value><next><block type="motion_off" id="J}o@fK#EKm/Gy|^(sOrC"></block></next></block></next></block></xml>',code:'from lib.crawler.kinematics import Crawler\ncrawler = Crawler()\nfor i in range(3):\n    crawler.command("rotate_left")\ncrawler.pca.all_off()'},{title:"Wave right hand standing up",description:"Control 1 motor at the hip of the first leg while positioning the robot standing up in human form to make it wave at you 3 times.",slug:"waving",tags:{topic:{displayName:"Embedded System",slug:"embedded",color:"#19d164"},level:{displayName:"Beginner",slug:"beginner",color:"#ffc800"}},block:'<xml xmlns="https://developers.google.com/blockly/xml"><variables><variable id="Y!f-[HGJEs1H0%DuwZQA">i</variable></variables><block type="motor_init" id="uZqN3zUJg2t`/RJh69Cb" x="110" y="30"><next><block type="time_init" id="M6cg00m=kECIjkE~sMSh"><next><block type="controls_repeat_ext" id="~n=yt~k^+#s(o9{KO7rv"><value name="TIMES"><block type="value_number" id="Xw5W5+BPgh4U/r19]hP."><field name="NUM">3</field></block></value><statement name="DO"><block type="controls_for" id="/HkuG.n/3eIFhZTgw)*m"><field name="VAR" id="Y!f-[HGJEs1H0%DuwZQA">i</field><value name="FROM"><block type="value_number" id="|}rHgTk~sBr2uXuX)XBF"><field name="NUM">-30</field></block></value><value name="TO"><block type="value_number" id="KPe%*fDSCHyDdaA}0^!X"><field name="NUM">30</field></block></value><value name="BY"><block type="value_number" id="3:V,d8xypa:y2)Gw:=IE"><field name="NUM">1</field></block></value><statement name="DO"><block type="motion_set_angle" id="Ald|Vk~oWv1=1S)(d}C*"><field name="CHANNEL">0</field><value name="ANGLE"><block type="variables_get" id="xm-lDO8[a`FJ?A34[|^^"><field name="VAR" id="Y!f-[HGJEs1H0%DuwZQA">i</field></block></value><next><block type="timing_sleep" id="oOU(4_1j`~/#gsCwB1$r"><value name="SECS"><block type="value_number" id="x13$!D70!-kTALuhTv6T"><field name="NUM">0.02</field></block></value></block></next></block></statement><next><block type="controls_for" id="R+?5*Zn-b-WbG.DWHCqB"><field name="VAR" id="Y!f-[HGJEs1H0%DuwZQA">i</field><value name="FROM"><block type="value_number" id="8baj6Yws1utpfwRa9%gO"><field name="NUM">30</field></block></value><value name="TO"><block type="value_number" id="SAfb.h/44V.*nfW!;gxw"><field name="NUM">-30</field></block></value><value name="BY"><block type="value_number" id="nr,kNQrf.j~|$DStN)dw"><field name="NUM">-1</field></block></value><statement name="DO"><block type="motion_set_angle" id="nC6J~crqJ!h27(7ZZ7cw"><field name="CHANNEL">0</field><value name="ANGLE"><block type="variables_get" id="pUT~rr3QREy%U.*A4ej~"><field name="VAR" id="Y!f-[HGJEs1H0%DuwZQA">i</field></block></value><next><block type="timing_sleep" id=")+^z|PXEvd6zmzcw`c`W"><value name="SECS"><block type="value_number" id="(-57fZ8T36k#6H,s`jWW"><field name="NUM">0.02</field></block></value></block></next></block></statement></block></next></block></statement><next><block type="motion_off" id="dcWN1.x?/@Z!XW3J!+-;"></block></next></block></next></block></next></block></xml>',code:"from lib.crawler.kinematics import Crawler\ncrawler = Crawler()\nimport time\nfor count in range(3):\n  for i in range(-30, 31):\n    crawler.pca.set_angle(0, i)\n    time.sleep(0.02)\n  for i in range(30, -31, -1):\n    crawler.pca.set_angle(0, i)\n    time.sleep(0.02)\ncrawler.pca.all_off()"},{title:"Push up",description:"Control 2 motors at the knees of 2 legs to make your robot push up in human form.",slug:"pushup",tags:{topic:{displayName:"Embedded System",slug:"embedded",color:"#19d164"},level:{displayName:"Beginner",slug:"beginner",color:"#ffc800"}},block:'<xml xmlns="https://developers.google.com/blockly/xml"><block type="motor_init" id="uZqN3zUJg2t`/RJh69Cb" x="110" y="30"><next><block type="time_init" id="M6cg00m=kECIjkE~sMSh"><next><block type="motion_all" id="*.;-S1Y6KGF*r[M-?jc$"><value name="UPPER0"><block type="value_number" id="cPg.l=[/T/GNisPE?51H"><field name="NUM">-40</field></block></value><value name="LOWER0"><block type="value_number" id="?gdAlr]l!k%YD7z:CM$]"><field name="NUM">0</field></block></value><value name="UPPER1"><block type="value_number" id="u_g)a3$J}yGbihwAPZ@9"><field name="NUM">-40</field></block></value><value name="LOWER1"><block type="value_number" id="u-Gdd%iDi@v9E*NK(}J3"><field name="NUM">0</field></block></value><value name="UPPER2"><block type="value_number" id=":ALi9[/{%sd8V.MhTbam"><field name="NUM">-40</field></block></value><value name="LOWER2"><block type="value_number" id="Icnq#mk:Nmh^x|n34r`o"><field name="NUM">0</field></block></value><value name="UPPER3"><block type="value_number" id=",(Q.lc1W:3!|6p,f~~2L"><field name="NUM">-40</field></block></value><value name="LOWER3"><block type="value_number" id="ea+(|96%7_0,0aeO8myJ"><field name="NUM">0</field></block></value><next><block type="controls_repeat_ext" id="~n=yt~k^+#s(o9{KO7rv"><value name="TIMES"><block type="value_number" id="Xw5W5+BPgh4U/r19]hP."><field name="NUM">3</field></block></value><statement name="DO"><block type="motion_all" id="z#:IRX:U5?WZW#hw{bf_"><value name="UPPER0"><block type="value_number" id="?R^dh7q6@(HkE(Rvv5aW"><field name="NUM">-40</field></block></value><value name="LOWER0"><block type="value_number" id="a)q^fCPKPgu|Q8Z::K}e"><field name="NUM">30</field></block></value><value name="UPPER1"><block type="value_number" id="M^tZ;Mcb%O0xB*+qgSMW"><field name="NUM">-40</field></block></value><value name="LOWER1"><block type="value_number" id="Im*CXlZD-?ovV%(GboS+"><field name="NUM">0</field></block></value><value name="UPPER2"><block type="value_number" id="xc_b[4dPrS3@etEGdLp3"><field name="NUM">-40</field></block></value><value name="LOWER2"><block type="value_number" id="t!(LiIf%O^w]c5J#ZAj@"><field name="NUM">0</field></block></value><value name="UPPER3"><block type="value_number" id="*HHe$1*geG)wgQ[B;e#t"><field name="NUM">-40</field></block></value><value name="LOWER3"><block type="value_number" id="Qpgh0?F5{O^.{y/R{QV)"><field name="NUM">30</field></block></value><next><block type="motion_all" id="Fa!R+IM+^6:^;;:BNbmj"><value name="UPPER0"><block type="value_number" id="VJ~OK,;juoCD9!jC)GAH"><field name="NUM">-40</field></block></value><value name="LOWER0"><block type="value_number" id="JgJ?=r%aJ0QR;E^djYD?"><field name="NUM">-30</field></block></value><value name="UPPER1"><block type="value_number" id="*QdYB;.wjK[=I?-CX-C|"><field name="NUM">-40</field></block></value><value name="LOWER1"><block type="value_number" id=".n$j]HiE5,$V}6vNiuwt"><field name="NUM">0</field></block></value><value name="UPPER2"><block type="value_number" id="D2#flc~,6_|g*K-CKFS?"><field name="NUM">-40</field></block></value><value name="LOWER2"><block type="value_number" id="7K31=%2.2j%T/Z|pe3l?"><field name="NUM">0</field></block></value><value name="UPPER3"><block type="value_number" id="W?lb[-d^CU=zBCB5Am2X"><field name="NUM">-40</field></block></value><value name="LOWER3"><block type="value_number" id="ea4_PnmI`:PC;k*evpKY"><field name="NUM">-30</field></block></value></block></next></block></statement><next><block type="motion_off" id="dcWN1.x?/@Z!XW3J!+-;"></block></next></block></next></block></next></block></next></block></xml>',code:"from lib.crawler.kinematics import Crawler\ncrawler = Crawler()\nimport time\ncrawler.centeredDynamicServoAssignment(-40, 0, -40, 0, -40, 0, -40, 0)\nfor count in range(3):\n  crawler.centeredDynamicServoAssignment(-40, 30, -40, 0, -40, 0, -40, 30)\n  crawler.centeredDynamicServoAssignment(-40, -30, -40, 0, -40, 0, -40, -30)\ncrawler.pca.all_off()"}],loadCodeDialog:{title:"Are you absolutely sure?",description:"Loading code will delete all existing code and this action cannot be undone."}}}},8992:function(e,t,l){l.d(t,{Z:function(){return m}});var n=l(1984),o=l(810),a=l(1310),i=l(678);let r=i.z.object({editor:i.z.literal("code").or(i.z.literal("block")),pythonWebREPL:i.z.object({endpoint:i.z.string(),password:i.z.string()}),codeEditor:i.z.object({loading:i.z.object({progressIntervalMs:i.z.number(),progressIncrementValue:i.z.number(),messageIntervalMs:i.z.number(),messages:i.z.array(i.z.string()),onFinishLoadingMessage:i.z.string(),onFinishLoadingDelayMs:i.z.number()})}),onboarding:i.z.object({hasProvidedWifiCredentials:i.z.boolean(),hasProvidedCodeEditorPreference:i.z.boolean(),openPortalInstructionCards:i.z.array(i.z.object({header:i.z.string(),content:i.z.string()}))}),queryIndices:i.z.object({useConfig:i.z.string(),useNetworks:i.z.string(),useCyobrainInternetConnectionStatus:i.z.string()}),activitiesLibrary:i.z.object({levelDropdown:i.z.object({triggerPlaceholder:i.z.string(),options:i.z.array(i.z.object({displayName:i.z.string(),value:i.z.string()}))}),topicDropdown:i.z.object({triggerPlaceholder:i.z.string(),options:i.z.array(i.z.object({displayName:i.z.string(),value:i.z.string()}))}),activities:i.z.array(i.z.object({title:i.z.string(),slug:i.z.string(),description:i.z.string(),tags:i.z.object({topic:i.z.object({displayName:i.z.string(),slug:i.z.string(),color:i.z.string()}),level:i.z.object({displayName:i.z.string(),slug:i.z.string(),color:i.z.string()})}),code:i.z.string(),block:i.z.string()})),loadCodeDialog:i.z.object({title:i.z.string(),description:i.z.string()})})}).default(o.u);var s=l(8553),d=l(2564),c=l(3328);let m=()=>{let{config:e,setConfig:t}=(0,d.useContext)(n.E),{robotIPAddress:l}=(0,a.W)(),{data:i,refetch:m}=(0,c.useQuery)(e.queryIndices.useConfig,async()=>{try{let e=await s.Z.get("".concat(null===l?"":"http://".concat(l),"/api/config"));if(200!==e.status)throw await e;return r.parse(e.data)}catch(e){return console.error(e),console.error("Error fetching config, fallback to default config"),r.parse(void 0)}});return(0,d.useEffect)(()=>{i?t(i):t(o.u)},[i,t]),{config:e,setConfig:t,refetchConfig:async()=>{await m()}}}},7501:function(e,t,l){l.d(t,{c:function(){return s}});var n=l(8992),o=l(1310),a=l(8553),i=l(3328),r=l(678);let s=()=>{var e;let{config:t}=(0,n.Z)(),{robotIPAddress:l}=(0,o.W)(),{data:s,refetch:d}=(0,i.useQuery)(t.queryIndices.useCyobrainInternetConnectionStatus,async()=>{try{let e=await a.Z.get("".concat(null===l?"":"http://".concat(l),"/api/internet"),{headers:{Origin:null!=l?l:""}});if(200!==e.status)throw e;return r.z.object({status:r.z.literal("connected").or(r.z.literal("disconnected"))}).parse(e.data)}catch(e){return console.error(e),{status:"disconnected"}}});return{status:null!==(e=null==s?void 0:s.status)&&void 0!==e?e:"disconnected",refetchStatus:async()=>{await d()}}}},2145:function(e,t,l){l.d(t,{K:function(){return a}});var n=l(5767),o=l(2564);let a=()=>{let{open:e,setOpen:t}=(0,o.useContext)(n.D);return{open:e,setOpen:t}}},1392:function(e,t,l){l.d(t,{x:function(){return a}});var n=l(1679),o=l(2564);let a=()=>{let e=(0,o.useContext)(n.p),[t,l]=(0,o.useState)(e.status);(0,o.useEffect)(()=>{e.addOnAfterStatusChangedCallback("setStatusCallback",(e,t)=>l(t))},[e]);let a=(0,o.useCallback)(()=>{e.connect()},[e]);return{client:e,status:t,refetchStatus:a}}},1310:function(e,t,l){l.d(t,{W:function(){return a}});var n=l(734),o=l(2564);let a=()=>{let{robotIPAddress:e,setRobotIPAddress:t}=(0,o.useContext)(n.I);return{robotIPAddress:e,setRobotIPAddress:t}}},5814:function(e,t,l){l.d(t,{pm:function(){return u}});var n=l(2564);let o=0,a=new Map,i=e=>{if(a.has(e))return;let t=setTimeout(()=>{a.delete(e),c({type:"REMOVE_TOAST",toastId:e})},1e6);a.set(e,t)},r=(e,t)=>{switch(t.type){case"ADD_TOAST":return{...e,toasts:[t.toast,...e.toasts].slice(0,1)};case"UPDATE_TOAST":return{...e,toasts:e.toasts.map(e=>e.id===t.toast.id?{...e,...t.toast}:e)};case"DISMISS_TOAST":{let{toastId:l}=t;return l?i(l):e.toasts.forEach(e=>{i(e.id)}),{...e,toasts:e.toasts.map(e=>e.id===l||void 0===l?{...e,open:!1}:e)}}case"REMOVE_TOAST":if(void 0===t.toastId)return{...e,toasts:[]};return{...e,toasts:e.toasts.filter(e=>e.id!==t.toastId)}}},s=[],d={toasts:[]};function c(e){d=r(d,e),s.forEach(e=>{e(d)})}function m(e){let{...t}=e,l=(o=(o+1)%Number.MAX_VALUE).toString(),n=()=>c({type:"DISMISS_TOAST",toastId:l});return c({type:"ADD_TOAST",toast:{...t,id:l,open:!0,onOpenChange:e=>{e||n()}}}),{id:l,dismiss:n,update:e=>c({type:"UPDATE_TOAST",toast:{...e,id:l}})}}function u(){let[e,t]=n.useState(d);return n.useEffect(()=>(s.push(t),()=>{let e=s.indexOf(t);e>-1&&s.splice(e,1)}),[e]),{...e,toast:m,dismiss:e=>c({type:"DISMISS_TOAST",toastId:e})}}},2072:function(e,t,l){l.d(t,{v:function(){return a}});let n=e=>(" "+e).slice(1);var o=l(7883);class a{connect(){var e;"connected"===this.status&&(null===(e=this.socket)||void 0===e||e.close()),this.setStatus("loading");let t=setTimeout(()=>{"loading"===this.status&&this.close()},3e3);this.socket=new o.w3cwebsocket(this.endpoint),this.socket.onopen=()=>{var e;null===(e=this.socket)||void 0===e||e.send("".concat(this.password,"\n"))},this.socket.onmessage=async e=>{if("connected"!==this.status)"\r\nWebREPL connected\r\n>>> "===e.data?(this.setStatus("connected"),clearTimeout(t)):"Password: "===e.data?this.setStatus("loading"):this.setStatus("disconnected");else if("connected"===this.status)for(let t=0;t<this.onMessageReceiveCallbacks.length;t++)await this.onMessageReceiveCallbacks[t](e.data.toString())},this.socket.onerror=e=>{console.error(e)}}close(){var e;null===(e=this.socket)||void 0===e||e.close(),this.setStatus("disconnected")}async send(e){let t=async()=>{let t=n(e);if(this.socket){for(this.socket.send('\x01_g=globals().copy();_g.pop("_g", None);'),this.socket.send('exec("""');""!==t;)this.socket.send(t.substring(0,20)),t=t.substring(20),await new Promise(e=>setTimeout(e,50));this.socket.send('\n""", _g)\x04')}};for(let t=0;t<this.onBeforeSendCallbacks.length;t++)await this.onBeforeSendCallbacks[t](e);await t();for(let t=0;t<this.onAfterSentCallbacks.length;t++)await this.onAfterSentCallbacks[t](e)}async interrupt(){var e;null===(e=this.socket)||void 0===e||e.send("\x02\x03")}async reboot(){var e;null===(e=this.socket)||void 0===e||e.send("\x02\x04"),this.setStatus("disconnected")}async setStatus(e){let t=this.status;Object.defineProperty(this,"status",{writable:!1,configurable:!0,value:e});for(let l=0;l<this.onAfterStatusChangedCallbacks.length;l++)await this.onAfterStatusChangedCallbacks[l](t,e)}addOnMessageReceiveCallback(e,t){this.onMessageReceiveCallbackIds.has(e)||(this.onMessageReceiveCallbacks.push(t),this.onMessageReceiveCallbackIds.add(e))}addOnAfterStatusChangedCallback(e,t){this.onAfterStatusChangedCallbackIds.has(e)||(this.onAfterStatusChangedCallbacks.push(t),this.onAfterStatusChangedCallbackIds.add(e))}addOnBeforeSendCallbacks(e,t){this.onBeforeSendCallbackIds.has(e)||(this.onBeforeSendCallbacks.push(t),this.onBeforeSendCallbackIds.add(e))}addOnAfterSentCallbacks(e,t){this.onAfterSentCallbackIds.has(e)||(this.onAfterSentCallbacks.push(t),this.onAfterSentCallbackIds.add(e))}constructor({endpoint:e,password:t}){this.onMessageReceiveCallbacks=[],this.onMessageReceiveCallbackIds=new Set,this.onAfterStatusChangedCallbacks=[],this.onAfterStatusChangedCallbackIds=new Set,this.onBeforeSendCallbacks=[],this.onBeforeSendCallbackIds=new Set,this.onAfterSentCallbacks=[],this.onAfterSentCallbackIds=new Set,this.endpoint=e,this.password=t,this.status="disconnected"}}},1962:function(e,t,l){l.d(t,{cn:function(){return a}});var n=l(4686),o=l(7226);function a(){for(var e=arguments.length,t=Array(e),l=0;l<e;l++)t[l]=arguments[l];return(0,o.m)((0,n.W)(t))}},3916:function(e,t,l){l.d(t,{Z:function(){return n}});let n=function(){for(var e=arguments.length,t=Array(e),l=0;l<e;l++)t[l]=arguments[l]}}}]);