Search.setIndex({docnames:["api_reference/descriptor-runner/index","api_reference/graph_transpiler/axis","api_reference/graph_transpiler/backend/index","api_reference/graph_transpiler/constant_variable","api_reference/graph_transpiler/environment_variable","api_reference/graph_transpiler/frontend/chainer","api_reference/graph_transpiler/frontend/converter","api_reference/graph_transpiler/frontend/index","api_reference/graph_transpiler/frontend/keras","api_reference/graph_transpiler/graph","api_reference/graph_transpiler/index","api_reference/graph_transpiler/operator","api_reference/graph_transpiler/operators","api_reference/graph_transpiler/optimize_rule","api_reference/graph_transpiler/order","api_reference/graph_transpiler/placeholder","api_reference/graph_transpiler/variable","contributing/index","index","tips/build_js","tips/enable_webgpu_ios","tips/enable_webgpu_ios_ja","tips/enable_webgpu_macos","tips/enable_webgpu_macos_ja","tips/es5","tips/index","tips/lstm","tips/safari_webcam","tutorial/caffe","tutorial/chainer","tutorial/custom_operator/index","tutorial/custom_operator/section0","tutorial/custom_operator/section1","tutorial/custom_operator/section2","tutorial/custom_operator/section3","tutorial/index","tutorial/introduction","tutorial/keras","tutorial/setup","tutorial/setup_windows"],envversion:51,filenames:["api_reference/descriptor-runner/index.md","api_reference/graph_transpiler/axis.rst","api_reference/graph_transpiler/backend/index.rst","api_reference/graph_transpiler/constant_variable.rst","api_reference/graph_transpiler/environment_variable.rst","api_reference/graph_transpiler/frontend/chainer.rst","api_reference/graph_transpiler/frontend/converter.rst","api_reference/graph_transpiler/frontend/index.rst","api_reference/graph_transpiler/frontend/keras.rst","api_reference/graph_transpiler/graph.rst","api_reference/graph_transpiler/index.rst","api_reference/graph_transpiler/operator.rst","api_reference/graph_transpiler/operators.rst","api_reference/graph_transpiler/optimize_rule.rst","api_reference/graph_transpiler/order.rst","api_reference/graph_transpiler/placeholder.rst","api_reference/graph_transpiler/variable.rst","contributing/index.rst","index.rst","tips/build_js.md","tips/enable_webgpu_ios.rst","tips/enable_webgpu_ios_ja.rst","tips/enable_webgpu_macos.rst","tips/enable_webgpu_macos_ja.rst","tips/es5.md","tips/index.rst","tips/lstm.md","tips/safari_webcam.md","tutorial/caffe.md","tutorial/chainer.rst","tutorial/custom_operator/index.rst","tutorial/custom_operator/section0.rst","tutorial/custom_operator/section1.rst","tutorial/custom_operator/section2.rst","tutorial/custom_operator/section3.rst","tutorial/index.rst","tutorial/introduction.rst","tutorial/keras.rst","tutorial/setup.md","tutorial/setup_windows.md"],objects:{"":{DEBUG:[4,5,1,"-"],OPTIMIZE:[4,5,1,"-"]},"webdnn.ConstantVariable":{change_order:[3,2,1,""],input_to:[3,0,1,""],name:[3,0,1,""],ndim:[3,0,1,""],order:[3,0,1,""],output_from:[3,0,1,""],replace:[3,2,1,""],shape:[3,0,1,""],shape_dict:[3,0,1,""],size:[3,0,1,""],stride:[3,0,1,""],stride_dict:[3,0,1,""]},"webdnn.Operator":{append_input:[11,2,1,""],append_output:[11,2,1,""],inputs:[11,0,1,""],outputs:[11,0,1,""],remove_all:[11,2,1,""],remove_input:[11,2,1,""],remove_output:[11,2,1,""],replace:[11,2,1,""],replace_input:[11,2,1,""],replace_output:[11,2,1,""]},"webdnn.OptimizeRule":{flags:[13,2,1,""],optimize:[13,2,1,""],register:[13,2,1,""]},"webdnn.Order":{check_same_axes:[14,2,1,""],get_all_axes:[14,2,1,""],get_common_axes:[14,2,1,""]},"webdnn.Placeholder":{check_resolved:[15,3,1,""],force_int:[15,3,1,""],generate_js_function:[15,2,1,""],get_depend_placeholders:[15,2,1,""],is_resolved:[15,0,1,""],to_int:[15,3,1,""],value:[15,0,1,""]},"webdnn.Variable":{change_order:[16,2,1,""],input_to:[16,0,1,""],name:[16,0,1,""],ndim:[16,0,1,""],order:[16,0,1,""],output_from:[16,0,1,""],replace:[16,2,1,""],shape:[16,0,1,""],shape_dict:[16,0,1,""],size:[16,0,1,""],stride:[16,0,1,""],stride_dict:[16,0,1,""]},"webdnn.backend":{generate_descriptor:[2,2,1,""]},"webdnn.backend.interface.graph_descriptor":{IGraphExecutionData:[2,1,1,""]},"webdnn.backend.interface.graph_descriptor.IGraphExecutionData":{save:[2,2,1,""]},"webdnn.frontend.chainer":{ChainerConverter:[5,1,1,""]},"webdnn.frontend.chainer.ChainerConverter":{convert:[5,2,1,""],convert_from_inout_vars:[5,2,1,""]},"webdnn.frontend.converter":{Converter:[6,1,1,""]},"webdnn.frontend.converter.Converter":{convert:[6,2,1,""],get_variable:[6,2,1,""],has_variable:[6,2,1,""],register_handler:[6,4,1,""],serialize_operator_type:[6,2,1,""],set_variable:[6,2,1,""]},"webdnn.frontend.keras":{KerasConverter:[8,1,1,""]},"webdnn.frontend.keras.KerasConverter":{convert:[8,2,1,""],convert_to_constant_variable:[8,2,1,""],get_input_tensor:[8,2,1,""],get_output_tensor:[8,2,1,""]},"webdnn.graph.operators.abs":{Abs:[12,1,1,""]},"webdnn.graph.operators.average_pooling_2d":{AveragePooling2D:[12,1,1,""]},"webdnn.graph.operators.axiswise_bias":{AxiswiseBias:[12,1,1,""]},"webdnn.graph.operators.axiswise_scale":{AxiswiseScale:[12,1,1,""]},"webdnn.graph.operators.clipped_relu":{ClippedRelu:[12,1,1,""]},"webdnn.graph.operators.concat":{Concat:[12,1,1,""]},"webdnn.graph.operators.convolution2d":{Convolution2D:[12,1,1,""]},"webdnn.graph.operators.deconvolution2d":{Deconvolution2D:[12,1,1,""]},"webdnn.graph.operators.elementwise":{Elementwise:[12,1,1,""]},"webdnn.graph.operators.elementwise_add":{ElementwiseAdd:[12,1,1,""]},"webdnn.graph.operators.elementwise_div":{ElementwiseDiv:[12,1,1,""]},"webdnn.graph.operators.elementwise_mul":{ElementwiseMul:[12,1,1,""]},"webdnn.graph.operators.elementwise_pow":{ElementwisePow:[12,1,1,""]},"webdnn.graph.operators.elu":{Elu:[12,1,1,""]},"webdnn.graph.operators.embedding":{Embedding:[12,1,1,""]},"webdnn.graph.operators.hard_sigmoid":{HardSigmoid:[12,1,1,""]},"webdnn.graph.operators.leaky_relu":{LeakyRelu:[12,1,1,""]},"webdnn.graph.operators.linear":{Linear:[12,1,1,""]},"webdnn.graph.operators.local_response_normalization":{LocalResponseNormalization:[12,1,1,""]},"webdnn.graph.operators.max_pooling_2d":{MaxPooling2D:[12,1,1,""]},"webdnn.graph.operators.pooling_2d":{Pooling2D:[12,1,1,""]},"webdnn.graph.operators.reinterpret_axis":{ReinterpretAxis:[12,1,1,""]},"webdnn.graph.operators.relu":{Relu:[12,1,1,""]},"webdnn.graph.operators.reshape":{Reshape:[12,1,1,""]},"webdnn.graph.operators.scalar_add":{ScalarAdd:[12,1,1,""]},"webdnn.graph.operators.scalar_affine":{ScalarAffine:[12,1,1,""]},"webdnn.graph.operators.scalar_mul":{ScalarMul:[12,1,1,""]},"webdnn.graph.operators.scalar_pow":{ScalarPow:[12,1,1,""]},"webdnn.graph.operators.sigmoid":{Sigmoid:[12,1,1,""]},"webdnn.graph.operators.softmax":{Softmax:[12,1,1,""]},"webdnn.graph.operators.softplus":{Softplus:[12,1,1,""]},"webdnn.graph.operators.softsign":{Softsign:[12,1,1,""]},"webdnn.graph.operators.tanh":{Tanh:[12,1,1,""]},"webdnn.graph.operators.threshold_relu":{ThresholdRelu:[12,1,1,""]},"webdnn.graph.operators.zero_padding_1d":{ZeroPadding1D:[12,1,1,""]},"webdnn.graph.operators.zero_padding_2d":{ZeroPadding2D:[12,1,1,""]},Placeholder:{label:[15,0,1,""]},webdnn:{Axis:[1,1,1,""],ConstantVariable:[3,1,1,""],Graph:[9,1,1,""],Operator:[11,1,1,""],OptimizeRule:[13,1,1,""],Order:[14,1,1,""],Placeholder:[15,1,1,""],Variable:[16,1,1,""]}},objnames:{"0":["py","attribute","Python attribute"],"1":["py","class","Python class"],"2":["py","method","Python method"],"3":["py","staticmethod","Python static method"],"4":["py","classmethod","Python class method"],"5":["std","envvar","environment variable"]},objtypes:{"0":"py:attribute","1":"py:class","2":"py:method","3":"py:staticmethod","4":"py:classmethod","5":"std:envvar"},terms:{"11\u306b\u642d\u8f09\u306eweb\u30d6\u30e9\u30a6\u30b6safari\u306b\u306f":21,"3_64bit":39,"64bit":[38,39],"67e894c6cd8f":38,"\u3053\u306e\u30da\u30fc\u30b8\u3067\u306f":[21,23],"\u3053\u308c\u306b\u3088\u308a":[21,23],"\u306b\u30c1\u30a7\u30c3\u30af\u3092\u5165\u308c\u308b":23,"\u3092\u9078\u629e":23,"\u30d6\u30e9\u30a6\u30b6\u306e\u52d5\u4f5c\u3092\u4e0d\u5b89\u5b9a\u306b\u3059\u308b\u53ef\u80fd\u6027\u304c\u3042\u308a\u307e\u3059":[21,23],"\u30db\u30fc\u30e0\u30dc\u30bf\u30f3\u3092\u30c0\u30d6\u30eb\u30af\u30ea\u30c3\u30af":21,"\u30e1\u30cb\u30e5\u30fc\u3092\u8868\u793a":23,"\u30e1\u30cb\u30e5\u30fc\u30d0\u30fc\u304b\u3089":23,"\u30e1\u30cb\u30e5\u30fc\u30d0\u30fc\u306b":23,"\u4e00\u65e6\u7d42\u4e86\u3059\u308b":21,"\u521d\u671f\u8a2d\u5b9a\u3067\u306fwebgpu\u306f\u7121\u52b9\u306b\u306a\u3063\u3066\u3044\u308b\u305f\u3081":[21,23],"\u5b9f\u9a13\u7684\u306a\u6a5f\u80fd":23,"\u5b9f\u9a13\u7684\u6a5f\u80fd\u3068\u3057\u3066webgpu\u304c\u642d\u8f09\u3055\u308c\u3066\u3044\u307e\u3059":[21,23],"\u65e5\u672c\u8a9e\u7248":[20,22],"\u74b0\u5883\u8a2d\u5b9a":23,"\u8a2d\u5b9a\u3092\u958b\u304d":21,"\u8a73\u7d30\u3092\u30bf\u30c3\u30d7":21,"\u958b\u767a":23,"boolean":13,"case":[12,24,26,27,30,31,32,34],"char":26,"class":[1,2,3,5,6,7,8,9,10,11,12,13,14,15,16,32,33,34],"default":[4,6,8,20,22,24],"enum":1,"export":38,"features\u3092\u30bf\u30c3\u30d7":21,"final":32,"float":12,"function":[2,11,26,31,32,33,34,37],"import":[29,32,33,34,36,37],"int":[8,12,15,39],"ios\u306e\u5834\u5408":23,"long":26,"macos\u306e\u5834\u5408":21,"new":[3,11,13,14,15,16,18,26,32],"public":17,"return":[2,5,6,8,13,14,15,28,32,33,34,39],"safari\u304c\u8d77\u52d5\u3057\u3066\u3044\u308b\u5834\u5408":21,"safari\u3067webgpu\u304c\u5229\u7528\u3067\u304d\u308b\u3088\u3046\u306b\u306a\u308a\u307e\u3059":[21,23],"safari\u306e\u753b\u9762\u3092\u4e0a\u306b\u30b9\u30ef\u30a4\u30d7":21,"safari\u3092\u30bf\u30c3\u30d7":21,"safari\u3092\u518d\u8d77\u52d5\u3059\u308b":23,"safari\u3092\u8d77\u52d5\u3057":23,"sierra\u306b\u642d\u8f09\u306eweb\u30d6\u30e9\u30a6\u30b6safari\u306b\u306f":23,"static":15,"super":33,"switch":26,"true":[3,6,11,15,16,26,37],"try":[38,39],"var":11,"webdnn\u306e\u52d5\u4f5c\u306f\u5927\u5e45\u306b\u9ad8\u901f\u5316\u3055\u308c\u307e\u3059":[21,23],"webgpu\u306b\u3088\u308a":[21,23],"webgpu\u306f\u5b9f\u9a13\u7684\u6a5f\u80fd\u3067\u3042\u308a":[21,23],"webgpu\u3092\u4f7f\u7528\u3057\u305f\u3044\u5834\u5408\u4ee5\u5916\u306f\u7121\u52b9\u5316\u3057\u3066\u304a\u304f\u3053\u3068\u304c\u671b\u307e\u3057\u3044\u3067\u3059":[21,23],"webgpu\u3092\u6709\u52b9\u306b\u3059\u308b\u65b9\u6cd5\u3092\u8aac\u660e\u3057\u307e\u3059":[21,23],"webgpu\u3092on\u306b\u3059\u308b":21,But:26,For:[0,12,14,17,20,22,31,33,34,38],Its:12,Not:3,One:[26,36],That:[28,32,37],The:[0,15,17,26,32,33,34,36,39],Then:[17,26,28,37,39],There:[17,27,31,36],These:36,Use:[5,6,8,12,18,35],Using:[18,25],__init__:33,about:[28,31,32,33,34],abov:[17,26],abs:[12,16],absolut:12,acceler:[20,22,36],accept:[12,17,26],access:[17,27],accompilsh:39,accord:26,accuraci:26,achiev:36,activ:[26,31,38],actual:12,add:[12,15,26,37,39],add_weight:34,added:[17,39],adding:39,addit:36,adob:27,advanc:20,affect:26,affin:12,aggress:36,agre:17,ajax:24,alias:10,align:14,all:[3,4,8,11,12,15,16,17,28,31,32,33,37],allow:[17,27],almost:[12,33],along:[12,34,38],alpha:12,alreadi:[8,14,15,20,31,32,34,36],also:[3,8,10,12,13,15,17,24,26,29,31,32,34,37,38,39],ambigu:12,anaconda3:39,anaconda:39,analysi:[13,26],ani:[31,36],anoth:[12,36],anyth:12,api:[18,36],api_doc:12,api_refer:37,append:[11,15],append_input:11,append_output:11,appl:38,appli:[4,13,36],applic:[26,28,32,33,34,36,37,39],appropri:17,architectur:[30,32],archiv:39,arg:6,argmax:[28,37],argument:[6,32,33],arrai:[3,12,37],articl:26,arxiv:12,ask:17,asm:38,assert:12,assign:8,assum:12,async:[32,33,34],attent:36,attract:36,attribut:[3,12,32],automat:[11,24,26,28,32,37,38],avail:[29,37,39],averag:[12,31],average_pooling_2d:12,average_pooling_2d_test:17,averagepooling2d:17,await:[15,24,26,28,32,33,34,37],axes:[3,12,14,16,34],axi:[3,10,12,14,16],axiswise_bia:12,axiswise_scal:12,babel:24,backend:[4,8,10,17,28,29,32,33,34,37,38,39],backendnam:[28,37],bar:22,base:[7,12,15,17,26,28,32,34,37,39],basic:[10,15,16],bat:39,batch:[8,14,15,34],batch_siz:[8,32,33,34,37],becaus:[12,32,34],befor:39,behavior:[4,6,19],being:12,berkeleyvis:12,best:[17,28,37],beta:12,between:[8,32],bia:[12,31],biaslay:34,bin:[4,37],binari:[16,36],binaryen:38,bind:32,bitbucket:38,bool:[3,6,11,13,15,16],both:[14,15,31],branch:17,bring:36,browser:[0,17,20,22,24,27,29,36,38,39],bug:17,build:[5,17,18,25,32,34],bus:37,button:[17,20,27,32,33,34],bz2:38,caff:[12,36,38,39],caffemodel:[18,35],caffenet:28,calcul:[12,31,32,33],call:[12,13,26,31,32,33,34],callabl:12,camera:[18,25],can:[4,6,12,14,15,17,24,26,28,30,31,32,33,34,36,37,38,39],cannot:[15,36],cap:12,capac:36,caption:26,care:33,caus:15,cdn:24,cdnj:24,certif:17,certifi:17,chain:31,chainer:[5,7,18,26,31,35,36,38,39],chainerconvert:[7,29],chang:[3,6,12,13,16,17,27],change_ord:[3,16],channel:[12,14],channel_last:8,charact:26,check:[3,6,8,11,14,15,16,17,28,37],check_resolv:15,check_same_ax:14,child:6,choic:31,classif:[26,29,37],classifi:[28,37],classmethod:6,cli:24,click:[17,20,27],clip:12,clipped_relu:12,clone:[38,39],close:20,cloud:36,cloudflar:24,cnn:26,code:[15,17,19,28,31,32,33,34,36,37],coeffici:12,colus:24,com:[24,26,27,38,39],comma:32,command:[17,19,38,39],comment:17,common:26,compar:[15,26],compat:24,compil:[15,24,28,37,38,39],complet:[28,32,33,34,36,37],complex:26,compliant:24,compon:[2,10,32],comput:[5,6,9,11,12,13,28,29,31,32,34,36],computation:36,concaten:[12,26],concret:[15,26,39],confer:[29,37],configur:[27,39],conflict:39,congratul:[28,37],connect:[3,11,12,16,31],consid:[14,32,34],consider:[20,22],consist:[17,31,36],consol:[17,28,32,33,34,37],constant:[3,8],constantvari:[8,10],construct:[5,29,31],constructor:32,contain:[2,6,7,10,12,13,16,17,33],content:[17,39],continuum:39,contribut:18,contributor:17,control:4,conv2d_handl:31,convers:[3,16,26,28,31],convert:[5,7,8,10,12,15,17,26,29,36,38,39],convert_caff:28,convert_from_inout_var:5,convert_kera:[4,37],convert_to_constant_vari:[8,34],convolut:[12,31],copi:17,copyright:17,correspond:[6,12,17,31,32],cost:36,cout:39,cover:17,cplus_include_path:[38,39],cpp:39,cpu:36,creat:[2,3,16,17,33,39],cross:12,current:[26,38,39],custom:[6,8,12,18,31,34,35],custom_oper:[32,33,34],cvpr:[29,37],d4700:17,data:[3,8,12,14,16,28,29,31,34,36,37],data_format:8,datum:2,debug:[4,17],decompress:39,deconvolut:12,decor:[6,32],decreas:[3,16],deep:[17,29,36,37],def:[32,33,34],defin:[6,12,14,29,30],definit:26,dens:[12,26,39],dense_handl:31,depend:[15,39],deprec:12,describ:[12,17,20,22,24,26,27,28,31,36],descriptor:[2,10,14,15,26,28,31,32,33,34,36,37,39],descriptor_runn:[19,24,37],descriptorgener:[2,31],descriptorrunn:[0,28,37],design:[34,36],destin:2,detail:12,determin:[15,34],develop:[17,22,36,38,39],devic:36,dialog:27,dictionari:[3,12,16,33],differ:[17,27,33,34,36],difficulti:36,dilat:12,dilation_r:12,dimens:[1,3,12,16,34],directli:17,directori:[2,17,19,24,36,37,39],dirnam:2,disabl:[20,22],disconnect:[3,11,16],displai:36,dist:[19,24,32,33,34],distribut:17,div:15,divid:12,dnn:[0,6,7,9,10,11,17,26,31,36],dnndescriptorrunn:37,doc:[29,39],documant:17,document:[12,17,18,24,26,27,37,39],doe:[12,24,26,27,38,39],doesn:31,don:[32,38],done:[12,17],dot:12,doubl:20,drive:17,dropout:26,dsth:37,dstw:37,dtype:[5,29],dummi:[5,29],each:[1,3,6,10,12,16,31,32,33,34,36,39],easi:[27,32],easili:[30,36],ecmascript5:[18,25],edit:36,either:[14,15],element:[3,8,12,16,26],elementwis:[30,31,34],elementwise_add:12,elementwise_div:12,elementwise_mul:12,elementwise_pow:12,elementwiseab:16,elementwiseadd:[16,34],elementwisesum:31,emb:12,embed:[15,26],emcc:39,empti:[5,29],emsdk:[38,39],emsdk_env:38,enabl:[18,25,27,38,39],encount:36,end:36,endl:39,english:[21,23],env:24,environ:[10,17,36],equat:15,error:[12,15],es2015:24,es5:19,es6:37,essenc:37,etc:[15,31,32],even:8,everi:17,everyon:17,exampl:[14,17,28,31,36,37],except:12,exe:39,exec_info:[29,37],execut:[17,26,29,31,36,37,39],exist:39,expens:36,experiment:[20,21,22],exponenti:[12,34],extend:[30,32],extract:[26,32],fallback:[13,29,32,33,34,37],fallbackdescriptorgener:[32,33,34],fals:[13,15],familiar:36,fastest:38,fc6:[5,29],featur:[12,17,20,22,24,26,33,34,36],feed:26,feel:17,fetch:24,few:36,field:36,figur:31,file:[2,17,24,28,36,37,39],fill:39,find:36,finish:37,first:[8,15,17,26,27,28,32,33,34,37],fix:17,flag:[13,24],flag_semicolon:15,float32:[5,29],float32arrai:28,floor:15,focus:36,follow:[4,12,14,15,16,17,19,24,26,31,32,33,34,36,39],foo:24,force_int:15,forget:32,fork:17,format:[6,26,29,36],forward:5,found:[17,31,32,37],foundat:17,framework:[6,7,10,17,18,31,35,38,39],francisco:17,free:17,from:[3,5,16,17,19,26,27,29,31,32,33,34,36,37,38,39],frontend:[5,6,8,10,29,32,33,34,37],full:[36,39],fulli:12,futur:5,game:36,gate:24,gener:[2,6,10,11,12,15,17,19,28,29,34,36,38,39],generat:2,generate_descriptor:[29,37],generate_js_funct:15,get:[6,28,32,34,37,38,39],get_all_ax:14,get_common_ax:14,get_depend_placehold:15,get_input_tensor:[8,32,33,34],get_output_tensor:[8,32,33,34],get_vari:[6,32,33,34],getimagearrai:37,getinputview:[26,28,32,33,34,37],getoutputview:[26,28,32,33,34,37],git:[38,39],github:[18,26,38,39],give:[17,38],given:[13,26,31],good:27,gpu:[17,36],graph:[2,3,4,5,6,8,10,11,12,13,14,15,16,17,29,30,32,33,34,36],graph_descriptor:2,graphic:36,guid:[18,35],handl:8,handler:[6,8,12],har:36,hard:12,hard_sigmoid:12,hardwar:36,has:[12,20,22,33,34],has_vari:6,have:[12,14,17,24,26,27,28,31,32,34,36,37,38,39],height:34,hello:39,help:[12,36,38],helpx:27,her:17,here:[32,37,39],herein:17,high:[18,25],higher:26,highest:26,highli:36,his:17,hit:17,hold:17,holder:8,home:20,hot:26,how:[18,20,22,24,27,28,30,32,33,34,36],howev:[27,30,34,36],html:[12,17,24,27,28,29,32,33,34,36,37,39],http:[12,24,26,27,29,37,38,39],hyper:[32,33],iOS:[18,21,22,25],ie11:24,ieee:[29,37],illustr:[26,37],imag:[26,28,29,34,36,37],imagenet:[28,37],implement:[6,8,10,12,17,26,31,32,33,34,36],improv:17,in_ord:12,includ:[14,17,32,33,34,38,39],include_top:37,incom:38,increas:[3,16],incur:36,indefinit:17,index:[12,32,33,34,39],indic:17,inflat:24,inform:[8,17,29],inherit:12,initi:[28,34,37],inplac:32,input:[3,5,8,9,11,12,16,28,31,32,33,34,36,37],input_ord:8,input_sequ:26,input_shap:[26,34,37],input_to:[3,16],insert:[12,24],instal:[19,24,27],instanc:[6,12,14,33],instead:[12,17,24],instruct:27,integ:15,interfac:[2,37],intermedi:31,intern:26,interpret:[12,17,36],introduct:[18,35],involv:17,iostream:39,ipynb:28,is_resolv:15,issu:18,its:[12,17,26,36],itself:[15,26,31,32],japanes:[20,22],javascript:[15,18,24,26,32,33,34,36,37],jpg:37,juj:38,jump:38,jupyt:28,just:[12,13],jxf:38,k_op:8,kei:[6,32,33,36],kera:[7,8,18,26,29,31,32,33,34,35,36],keras_i:[32,33,34],keras_lay:[32,33,34],keras_x:[32,33,34],kerasconvert:[7,32,33,34,37],kerasmodel:8,kernel:[12,31,32,33],kind:[17,26],knowledg:17,kripken:39,ksize:12,kwarg:[2,6,33],label:[15,28,37],labelid:[28,37],lambda:33,languag:[26,36],laptop:36,last:[26,32],latest:[29,39],lauguag:26,launch:22,layer:[5,8,11,12,17,26,29,30,31,32,33],leaki:12,leaky_relu:12,learn:[17,28,29,32,33,34,37],least:[17,29,37],left:[12,31],len:26,length:[12,15,34],let:[26,28,32,33,34,37],letterman:17,level:24,lib:24,librari:[0,6,24,27,36,38,39],licens:18,like:[12,15,17,24,31,32,33,34],limit:8,line:34,link:[5,29],linux:[17,18,35,39],list:[5,8,9,12,13,14,15,32],load:[0,15,24,28,29,32,33,34,37,39],load_model:8,loadimagedata:28,local:12,local_response_norm:12,log:[4,28,32,33,34,37],logic:32,look:[28,37],lot:36,lrn:12,lstm:[18,25],lucki:27,luckili:[32,34],mac:[17,18,27,35],maco:[18,20,23,25,38],mai:[12,17,20,22,38],main:[32,33,34,39],maintain:17,major:[14,36],make:[17,20,22,27],mandatori:17,mani:[17,30,31],manual:26,map:8,master:[17,38,39],match:12,math:[28,33,37],max:12,max_featur:26,max_pooling_2d:12,maxlen:26,mean:[12,14],mention:26,menu:22,merg:12,metal:33,method:[5,6,8],mic:27,microphon:27,mil:[17,38,39],milhidaka:26,min:24,minor:14,minut:17,misc:10,mit:17,mnist:39,mod:15,mode:12,model:[5,7,8,9,10,18,25,28,31,32,33,34,35,36,38,39],modern:[27,36,37,38],modif:[17,26],modifi:[3,17,19],modul:[2,7,10,12,31,36,37],more:[12,13,17],most:[0,26,27,38],move:39,mul:15,multipl:[12,13,26],multipli:12,must:[3,12,16],my_keras_model:4,my_model:15,name:[1,2,3,6,8,11,12,16,17,31,32,33,34,39],nativ:36,natual:26,natur:[26,36],ndim:[3,16],need:[0,12,17,24,27,29,32,34,36,37,38,39],network:36,neural:36,new_vari:[3,16],newer:24,next:[26,28,31,32,33,36,37],next_char:26,nhwc:12,node:[31,32],none:[8,11,15,32,33],nonetyp:12,normal:[12,34],nose:17,nosetest:17,notebook:28,now:[20,22,26,37],npm:[19,24],ntc:12,nthwc:12,num_sampl:34,number:[3,16,31,34,36],numpi:[12,29,34],obj:12,object:[6,24,34],off:17,offici:27,offlin:[28,36,39],older:24,onc:[20,28,29,37],onclick:[32,33,34],one:[3,8,12,16,17,26],ones:34,onli:[0,3,8,12,13,15,17,26,27,28,31,32,34,36,37,38,39],onlin:36,op_new:11,open:[18,20,22,27],oper:[3,6,8,10,15,16,18,31,34,35],operand:15,operatorclass:[32,33],operators_test:17,optim:[4,12,13,31],optimizerul:10,option:[33,39],order:[3,8,10,11,12,16],orderc:34,ordercn:[12,16,34],orderhcnw:14,ordernc:[8,12,16,34],ordernchw:12,ordernhwc:[8,12,14],ordernt:12,orderntc:[8,12],ordertn:12,ordinari:12,org:[12,29,38,39],organ:17,origin:17,other:[6,7,11,14,17,31,32,33,34],otherwis:[4,12,15,17,31],our:[17,29],out:[4,24,36,37],out_ord:12,out_shap:12,out_vec:26,output:[2,3,4,5,8,9,11,12,16,17,28,29,31,32,33,34,36,37,39],output_from:[3,16],overrid:6,own:19,packag:39,pad:12,page:[20,22,27,28,36,39],pair:[3,16],param:15,paramet:[2,3,5,6,8,9,11,12,13,14,15,16,30,31,34],part:17,pass:[8,32],path:39,pattern:[29,37],perform:[17,36,38],permiss:27,permit:17,person:17,phase:[31,32],php:39,pip:38,pipelin:36,pixel:12,place:8,placehold:[8,10,12],pleas:[8,12,17,29,33],plugin:24,pool:12,pooling_2d:12,popular:[14,39],posit:12,possibl:[15,36],pow:32,power:[12,33],powf:33,powlay:33,powoper:33,practic:36,pre:[14,30,32,34],pre_trained_model:8,predict:[26,28,37],prediction_vector:26,prefer:[22,27],preset:[24,31],pretrain:29,prev:[32,33,34],preview:[20,38],previou:[17,32,34],print:[4,15],probabl:26,problem:36,procedur:[12,17,26],process:36,product:[12,36],program:[36,39],programdata:39,prohibit:12,project:17,promis:24,prompt:39,propag:5,propos:17,provid:[8,17,33,36],pull:18,purpos:36,pwd:38,pyenv:38,python2:38,python3:[38,39],python:[12,17,18,36,37],question:17,rais:[12,15],randomli:26,rate:12,receiv:[33,34],recent:36,recognit:[29,36,37],recommend:17,record:17,rectifi:12,recurrent_dropout:26,recurs:17,redistribut:17,refer:[18,26,28,29,31,37,39],referenc:[31,34],regener:24,regist:[6,8,12,13,31,32],register_elementwise_kernel:[32,33],register_elementwise_kernel_fallback:[32,33],register_elementwise_kernel_webassembl:[32,33],register_elementwise_kernel_webgpu:[32,33],register_handl:[6,32,33,34],reinterpret_axi:12,relat:[2,10,31,32],releas:17,remov:[3,5,11,12,16],remove_al:11,remove_input:11,remove_output:11,ren:[29,37],replac:[3,11,16,39],replace_input:11,replace_output:11,report:17,repositori:17,repres:[1,14,15,31,32,34],represent:31,request:18,requir:[17,26,31,36,38,39],residu:[29,37],resnet50:[29,37],resnet50lay:[5,29],resnet:[5,29],resolv:15,respect:31,respons:12,restart:22,restrict:17,result:[17,32,33,34],return_sequ:26,revis:17,rgb:37,right:[12,17,31],rtype:13,rule:[4,13,17],run:[0,17,19,20,26,29,32,33,34,36,38],runner:[15,26,28,32,33,34,36,37],runtim:[15,32],safari:[18,20,22,25,38],same:[3,11,12,14,16,17,26,33,36],sampl:[26,32,33,34],sample_next_char:26,san:17,save:[2,29,32,33,34,37],scalar:[12,26],scalar_add:12,scalar_affin:12,scalar_mul:12,scalar_pow:12,scalaraffin:31,scale:12,school:37,school_bu:37,script:[24,27,32,33,34,37],sdk:[38,39],second:[32,34],section1:32,section2:33,section3:34,section:[12,28,31,32,33,34,38,39],see:[6,8,12,28,29,38],seem:39,select:[22,26,28,37],self:[32,33,34],semant:[1,12,14,34],semicolon:15,send:18,sentenc:26,sentence_se:26,sentence_to_arrai:26,sentiment:26,sequenti:26,seri:[12,15,34],serial:6,serialize_operator_typ:6,server:[28,37],set:[15,20,26,28,32,33,34,36,37],set_valu:34,set_vari:[6,32,33,34],setplaceholdervalu:15,setup:[0,18,35,36],sever:36,shape:[3,8,11,12,16,34,37],shape_dict:[3,12,16],sheepdog:28,shell:38,shetland:28,shift:12,should:[14,20,22,39],show:[22,28,37],side:26,sierra:[18,25],sigmoid:26,sign:17,signatur:12,similar:[32,33,38],similarli:31,simpl:26,simplest:26,simpli:[14,17,32],simplifi:15,sinc:12,singl:13,site:[27,39],size:[3,8,12,14,15,16,31,34],skip:[38,39],slope:12,smartphon:36,softmax:[26,34],solut:36,some:[10,17,19,24,26],sometim:[27,30],sourc:[1,2,3,5,6,8,9,11,12,13,14,15,16,17,19,31,32,38,39],spatial:12,special:27,specifi:[2,3,8,12,15,16,17,33,34,37],speed:31,speedi:36,speedier:36,squar:33,square_converter_handl:[32,33,34],squarelay:[32,33],squareoper:32,src:[19,24,32,33,34],stack:26,standard:[24,36],start:[38,39],stateless:31,statement:24,std:39,step:[32,36],sterategi:36,still:39,store:[6,32,34],str:[2,6,11,12,15],stride:[3,12,16],stride_dict:[3,16],string:6,structur:[18,32,35],sub:[13,15,37],submit:17,suffix:17,suit:17,suitabl:36,sun:[29,37],suppli:[24,36],support:[8,12,13,15,16,18,25,26,27,31,36,38,39],suppos:12,swap:12,swipe:20,symbol:15,symbolicfloat32arrai:[28,37],syntax:24,system:[27,39],tab:27,tap:20,tar:38,target:[2,12,17,27],techniqu:26,technolog:38,tensor:[8,32,34],tensor_dot:12,tensordot:12,tensorflow:[8,12],term:17,test:[18,38,39],test_fallback:17,test_kernel:17,test_webassembl:17,test_webgl:17,test_webgpu:17,text_gener:26,tf_var:8,than:[13,17],thei:[12,15,36],them:[17,36,39],therefor:[17,29,31,32,34,36],thi:[2,3,5,6,8,11,12,13,15,16,17,18,20,22,24,26,27,28,29,30,31,32,33,34,36,37,38,39],third:33,three:31,threshold:12,threshold_relu:12,through:17,time:[12,13,15],tip:18,titl:39,to_int:15,toactual:[26,28,32,33,34,37],tokyo:[17,38,39],too:34,top:[12,39],tradit:37,train:[31,36,37],train_mnist_chain:39,trainabl:34,transform:[12,13,24,31],transpil:[4,10,17,30,32,36],travers:[17,31,32],tsc:24,tsconfig:24,tupl:[12,13,32],turn:20,tutori:[12,18,29,37],tuxfamili:39,two:[14,26,31,36],type:[5,6,8,12,13,15,28,31,32,33,34,37,38,39],typenam:32,typic:34,unari:16,under:17,understand:[12,17],undetermin:8,uniform:34,union:12,unit:12,unknown:15,unless:[17,20,22],unresolv:15,unstabl:[20,22],until:13,updat:26,upon:17,usag:26,use:[14,19,20,22,24,26,27,30,32,36],used:[8,11,12,13,26,33,34,36,38,39],user:[0,12,18,36,38],uses:[17,24,36],using:[26,36,37],usual:36,util:[2,32],v_new:11,v_old:11,valid:8,valu:[6,8,12,13,15,26,33,34],valueerror:15,variabl:[1,3,5,6,8,9,10,11,12,28,29,31,32,34,37],variou:[10,34,36],vector:[26,28,37],verbatim:17,veri:[32,36],version:[5,12,17,36,37,39],via:37,video:36,view:28,vision:[5,29,37],visit:27,vocabulari:12,want:[6,8,12,17,19,20,22,24,27,30,38,39],wasm:39,web:[0,17,18,20,22,25,29,36],webassembl:[17,29,32,33,34,36,37,38,39],webassemblydescriptorgener:[32,33,34],webcamj:27,webdnn:[1,2,3,5,6,7,8,9,10,11,12,13,14,15,16,17,20,22,25,26,28,29,30,32,33,34,35,37,38,39],webdnn_b:34,webdnn_i:[32,33,34],webdnn_oper:[32,33],webdnn_test:17,webdnn_x:[32,33,34],webgl:[29,36,37],webgpu:[2,4,17,18,23,25,29,32,33,34,36,37,39],webgpudescriptorgener:[32,33,34],webrtc:27,websit:27,weight:[12,30,33,36,37],welcom:17,well:[28,37,39],wget:38,when:[3,12,13,15,16,27,31,32,39],where:[12,39],whether:[3,6,11,13,15,16,17],which:[3,11,14,15,16,24,26,27,31,32,33,34,36,38,39],who:17,whole:[17,26],whose:[3,12,16,17],wide:26,width:34,window:[18,24,35,38],with_assert:[3,11,16],without:[30,31,33,36],withs:32,word:[12,26],work:[17,27,28,37,39],workaround:27,worker:39,world:39,wrap:[8,27],written:[32,33],www:[12,39],y_typed_arrai:[28,37],you:[4,6,8,12,14,17,19,20,22,24,26,27,28,30,31,32,33,34,36,37,38,39],your:[6,8,12,17,18,19,27,28,31,35,37],zero:[12,13],zero_padding_1d:12,zero_padding_2d:12,zhang:[29,37],zip:39},titles:["JavaScript API","Axis","backend","ConstantVariable","Environment Variables","ChainerConverter","Converter","frontend","KerasConverter","Graph","Python API","Operator","operators","OptimizeRule","Order","Placeholder","Variable","How to Contribute","MIL WebDNN","Building webdnn.js","Enabling WebGPU on iOS 11","WebGPU\u3092iOS 11\u3067\u6709\u52b9\u306b\u3059\u308b\u65b9\u6cd5","Enabling WebGPU on macOS 10.13 High Sierra","WebGPU\u3092macOS 10.13 High Sierra\u3067\u6709\u52b9\u306b\u3059\u308b\u65b9\u6cd5","EcmaScript5 support","Tips","Using LSTM model","Using web camera in Safari","Use with caffemodel","Use with chainer model","Use your custom operator","0. Architecture of Graph Transpiler and How to Extend","1. Elementwise Operator without Parameters","2. Elementwise Operator with Parameters","3. Layer with Weights","Tutorial","Introduction to WebDNN","Use with keras model","Setup guide (for Mac / Linux)","Setup guide (for Windows)"],titleterms:{"11\u3067\u6709\u52b9\u306b\u3059\u308b\u65b9\u6cd5":21,"export":37,"final":26,"new":17,"sierra\u3067\u6709\u52b9\u306b\u3059\u308b\u65b9\u6cd5":23,"webgpu\u3092io":21,"webgpu\u3092maco":23,Abs:12,Use:[24,28,29,30,37],Using:[26,27],advanc:26,api:[0,10],architectur:31,averagepooling2d:12,axi:[1,34],axiswisebia:12,axiswisescal:12,backend:2,background:27,bia:34,browser:[28,37],build:19,caffemodel:28,camera:27,chainer:29,chainerconvert:5,clippedrelu:12,code:[24,38,39],compil:17,comput:37,concat:12,constantvari:3,content:18,contribut:17,convert:[6,24,28,31,32,33,34,37],convolution2d:12,custom:[30,32,33],deconvolution2d:12,defin:[32,33,34],download:[38,39],ecmascript5:24,eigen:[38,39],elementwis:[12,32,33],elementwiseadd:12,elementwisediv:12,elementwisemul:12,elementwisepow:12,elu:12,embed:12,emscripten:[38,39],enabl:[20,22],environ:[4,38,39],es5:24,exampl:[2,5,8,26,32,33,34,39],extend:31,flash:27,format:37,framework:36,free:36,frontend:7,gener:[26,31,32,33],generate_descriptor:2,graph:[9,31,37,39],graphdescriptor:28,guid:[38,39],handler:[31,32,33,34],hardsigmoid:12,high:[22,23],how:[17,31],iOS:20,igraphexecutiondata:2,infer:36,input:26,instal:[36,38,39],interfac:36,introduct:36,issu:17,iter:26,javascript:0,kera:37,kerasconvert:8,layer:34,leakyrelu:12,licens:17,linear:12,linux:38,localresponsenorm:12,lstm:26,mac:38,maco:22,maxpooling2d:12,mil:18,model:[26,29,37],more:26,non:36,note:38,open:17,oper:[11,12,30,32,33],optim:36,optimizerul:13,order:[14,34],our:37,output:26,overhead:36,overview:31,own:24,packag:38,paramet:[32,33],phase:36,placehold:15,player:27,polyfil:24,pooling2d:12,pow:33,pretrain:37,proper:39,pull:17,python:[10,38,39],reinterpretaxi:12,relu:12,request:17,reshap:12,run:[28,37,39],runtim:17,safari:27,scalaradd:12,scalaraffin:12,scalarmul:12,scalarpow:12,secur:27,send:17,sequenc:26,set:[27,39],setup:[38,39],sierra:22,sigmoid:12,softmax:12,softplu:12,softsign:12,special:36,squar:32,state:26,structur:36,support:24,tanh:12,test:[17,32,33,34],thresholdrelu:12,time:17,tip:25,transpil:[31,39],tutori:35,using:39,variabl:[4,16],verif:39,web:[27,28,37],webdnn:[18,19,24,31,36],webgpu:[20,22,38],weight:34,window:39,without:32,your:[24,30],zeropadding1d:12,zeropadding2d:12}})