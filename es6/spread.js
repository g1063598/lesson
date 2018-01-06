// 小吃店 pizza
// const 声明常量 分配的空间是固定的 es6 先考虑const定义 再let(更加安全) 最后var(基本不用)
// 类型不能变，除了基本类型外，值是可变的
const featured = ['Deep Dish','Pepperoni','Hawaiian'];
featured.push('芝士');
// console.log(featured);
// featured = {'hh':'nn'};
const specialty = ['Meatzza','Spicy Mama','Marghrita'];
const pizzas = [...featured, 'veg',...specialty];
console.log(pizzas);

const fridayPizzas = [...pizzas];
