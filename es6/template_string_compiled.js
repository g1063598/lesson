'use strict';

var dogs = [{ name: '小白', age: 2 }, { name: '小黑', age: 3 }, { name: '飞飞', age: 1 }];
// map 函数， 属于dogs 数组
// iterator 迭代（全部执行一次）
document.body.innerHTML = dogs.map(function (dog) {
    return '<li>' + dog.name + ' is ' + dog.age + ' years old</li>';
}).join('');
document.body.innerHTML = dogs.map(function (dog) {
    return '\n    <li>\n        ' + dog.name + ' is ' + dog.age + ' years old\n    </li>\n    ';
});

// const name = 'Snickers';
// const age = 2;
// const dog = `My dog is ${name}, ${age} years old.She is married, and I still single`;
// console.log(dog);
// const beer = {
//     name: 'Belgian Wit',
//     brewery: 'Steam Whistle Brewery',
//     keywords: ['pale','cloudy','spiced','crisp']
// };
// function renderKeywords(keywords) {
//    return `
//        <ul>
//        ${keywords.map(keyword => `<li>${keyword}</li>`).join('')}
//        </ul>
//    `;
// }
// const markup = `
//     <div class="beer">
//         <h2>${beer.name}</h2>
//         <p class="brewery">${beer.brewery}</p>
//         ${renderKeywords(beer.keywords)}
//     </div>
// `;
// // 可声明的HTML标记 运行在JS
// document.body.innerHTML = markup;
