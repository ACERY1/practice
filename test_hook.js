//用js实现hook机制
//hook机制可以减少很多条件判断

//下面是一个典型的ajax判断
let code=404

if(code==200){
    console.log("OK")
}else if (code == 404){
    console.log("NOT FOUND")
}else if (code == 403){
    console.log("FORBIDDEN")
}else {
    console.log("UNKNOWN")
}

//稍微做的优化可以是switch,但是都无法避免分支判断
let code2=404

switch(code2){
    case 200: 
    console.log("OK");
    break;
    case 404: 
    console.log("NOT FOUND")
    break;
    case 403:
    console.log("FORBIDDEN");
    break;
    default:
    console.log("UNKNOWN")
}

//hook简单实现：原理上来看就是将动态的内容抽象出来
let codeList={
    404:'not found',
    403:'forbidden',
    200:'ok'
}

let code3=404

if(codeList[code3]){
    console.log(codeList[code3])
}else {
    console.log("unknown")
}

// 升级版：现在我们需要给代码为403的请求接口，200做欢迎提示，404做提示错误，其他做重定向
let queryInterface=()=>{
    console.log("请求接口!")
}

let welcome=()=>{
    console.log("欢迎！")
}

let notFound=()=>{
    console.log("未找到！")
}

let defaultFunc=()=>{
    console.log("重定向！")
}



let codeList2={
    404:notFound,
    403:queryInterface,
    200:welcome
}

let code4=404

if(codeList2[code4]){
    codeList[code4]()
}else {
   defaultFunc()
}

//总结：如果我们把codeList2给export出去，那么就可以实现在固定状态码下的不同函数执行，好好结合Vue的生命周期想想
//一个个的生命周期就是被提前固定好的'钩子'(hook),然后Vue的设计是让这几个hook串行执行。


//http://blog.csdn.net/luffy_ying/article/details/60580437
//https://www.2cto.com/kf/201706/649649.html
//http://www.cnblogs.com/pannengzhi/p/5203467.html



created={
    test (){
        console.log('hello')
    },
    hello (){
        console.log("hello")
    }
}

