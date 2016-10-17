config =
  debug: true
  boxpath: "boxes/"
  excsspath: 'css/'
  exjspath: 'js/'
#输出html到用户态的时候使用
  outcsspath: '/itsm/static/css/'
  outjspath: '/itsm/static/js/'
#  rooturl: "http://localhost:8080" #test
#  rooturl: "http://10.38.9.252:8080"
  rooturl: "http://www.whatled.com/box"
#  rooturl: "http://10.6.222.62:8080"
  boxes:[
    ['布局'
      '在这里设置网站的布局, 包含多种排版形式，可任意组合多种不同的排版布局风格。'
      ['Layout', '布局6,6']
      ['Layout', '布局1,11', "1 11"]
      ['Layout', '布局3,9', "3 9"]
      ['DynamicLayout', '动态布局']
      ['TabLayout', '标签布局']
    ]
    ['静态组件'
      '一些基本的组件。'
      ['Input', '测试输入框']
      ['PubInput', '普通输入框']
      ['Email', '邮箱输入框']
      ['CheckBox', '复选框组']
      ['Radio', '单选框']
      ['TextArea', '文本框']
      ['Select', '下拉选择框']
      ['DatePicker', '日期选择插件']
      ['SubsysForm', '申请子系统表单']
    ]
    ['动态组件'
      '需要请求后台,配置比较复杂逻辑的组件。'
      ['DynamicFormPanel', '动态表单生成器']
    ]
  ]


# set if requirejs
if define? and define.amd
  define [], -> config
else if window?
  window.config = config
