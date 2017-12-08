// function XiaoCai(name,haircut) {
//     this.name = name;
//     this.haircut = haircut;
// }

// XiaoCai.prototype.hobbies = function() {
//     console.log('不管怎样，你开心就好');
// }

// var xc = new XiaoCai('小蔡','飞刘海');
// var xc2 = new XiaoCai('小蔡','爆炸头');
// console.log(xc == xc2);
// xc.hobbies();
// xc2.hobbies();

// 如何在多次new 只得到一个对象 单例
// class new 
// var Singleton = function(name) {
//     this.name = name;
//     this.instance = null;
// }
// // static 方法， 静态方法， 不需要new 可以在类上调用
// // 废掉constructor new
// Singleton.getInstance = function(name) {
//     if(!this.instance) {
//         this.instance = new Singleton(name);
//     }

//     return this.instance;
// }
// // 只实例化一次
// var a = Singleton.getInstance('sven1');
// var b = Singleton.getInstance('sven2');
// // a === b 引用式赋值
// console.log(a === b);
// console.log(a.name);
// console.log(b.name);

// es6实现单例模式
class Singleton {
    constructor(name) {
        this.name = name;
        this.instance = null;
    }
    static getInstance(name) {
        if(!this.instance) {
            this.instance = new Singleton(name);
        }
    
        return this.instance;
    }
}
var a = Singleton.getInstance('sven1');
var b = Singleton.getInstance('sven2');
// a === b 引用式赋值
console.log(a === b);
console.log(a.name);
console.log(b.name);
