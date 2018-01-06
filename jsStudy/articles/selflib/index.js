// js 全局变量 js bad parts
// 减少空间污染
const Song = {
    // es6 简写
    trims (str,type) {
        // 1 去除前后的空格
        // 2 去除左边的空格
        // 3 去除右边的空格
        // 4 去除所有的空格
        switch (type) {
            // 1 去除前后的空格
            case 1: return str.replace(/(^\s+)|(\s+$)/g,"");break;
            // 2 去除左边的空格
            case 2: return str.repace(/^\s+/,"");break;
            // 3 去除右边的空格
            case 3: return str.replace(/\s+$/,"");break;
            // 4 去除所有的空格
            case 4: return str.replace(/\s+/g,"");break;
        }
        
        // trim 有兼容性
        // return str.trim();
        // 正则表达式 \d数字 \s空格 g全局
        // /regExp对象/ +表示出现一次或多次（贪婪匹配）
    }
};
console.log(Song.trims("  s s  dv "));
// const strHello = 'Hello Baidu!';
// console.log(strHello.replace('Baidu','Google'));
// console.log(Song.trim(" mel ody "));
// 立即执行函数妙用，对象封装。
// 方便的提供私有属性或方法 _
const user = (function(){
    // 以_开始，表示一个私有变量
    let _name = 'sven',
    _age = 19;

    // 闭包的魔法
    return  {
        // 形成闭包 closure 函数运行时的上下文环境
        getUserInfo: function() {
            // 查找变量  是查找在相应作用域下的变量
            // 闭包引用
            return _name + ',年方' + _age;
        }
    }
})();
// 立即执行函数已经运行，但是它的内部却有返回
// 返回可以在任何时刻被执行
// 上下文环境 context 
// 立即函数试行时 闭包函数被定义 引用变量，函数，都可以被调用
// 在闭包的夹层里的变量得永生

console.log(user.getUserInfo());
// Teel sayHello方法 hello,world
// const Teel = (function() {
//     return {
//         sayHello: function() {
//             console.log("hello world!");
//         }
//     }
// })()

// 在立即执行函数前面加一个!,表示截断
// !(function(global) {
//     global.Teel = {
//         sayHello: function() {
//             console.log('hello world!');
//         }
//     }
// // 给立即执行函数传递一个参数
// })(window);