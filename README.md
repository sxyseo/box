# 可视化动态布局

通过拖拽的方式动态生成网页或表单，支持生成不同风格的html片断或文件。


安装CoffeeScript

介绍一下如何在本地安装CoffeeScript，虽然在官网都有，而且也可以在官网找到在线工具，但是为了文章的完整性，在最后还是附上。

安装 NodeJS
npm install -g coffee-script  运行安装coffee script
coffee -o lib/ -cw src/  这个表示运行自动监控src下面的".coffee"文件，然后以相同的文件名编译输出到lib目录下面，只是文件名后缀为js。

Examples:

Compile a directory tree of .coffee files in src into a parallel tree of .js files in lib:
coffee --compile --output lib/ src/

Watch a file for changes, and recompile it every time the file is saved:
coffee --watch --compile experimental.coffee

Concatenate a list of files into a single script:
coffee --join project.js --compile src/*.coffee

Print out the compiled JS from a one-liner:
coffee -bpe "alert i for i in [0..10]"

All together now, watch and recompile an entire project as you work on it:
coffee -o lib/ -cw src/

Start the CoffeeScript REPL (Ctrl-D to exit, Ctrl-Vfor multi-line):
coffee


此项目安装coffee script后，需要在boxes和js文件下编译成js



演示: http://www.whatled.com/box
