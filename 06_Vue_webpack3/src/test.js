//在ES6中  使用export default和export向外暴露成员   


var info={
    name:"wym",
    say:"qtmd,爱谁谁"
}


export  default info
//使用export default向外暴露成员时  可以使用 任意变量也接受
//在一个模块中 只能使用一次export default向外暴露成员 
//同时在一个模块中 可以同时使用 export default 和export向外暴露成员 ，
//


export  var stars='flashing star'
export  var time='at night'

//使用export 向外暴露成员时,只能使用 { } 的形式来接收，被称为 按需导出
//export可以同时向外暴露多个成员,但是接收的时候可以自定义接受的个数，不要的时可以不在{}中定义
//export 导出的成员想更换名称的时候可以使用as来操作  as name