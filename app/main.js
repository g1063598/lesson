// jquery是date-picker的依赖
import $ from 'jquery';
// 事件冒泡
// console.log('aaa');
import Factory from './Factory';

$('body').on('click','.tqb-date-picker-input',
    event => {
      let target = $(event.currentTarget);
      console.log(target);
      let options = target.data();
      console.log(options);
    //   Factory用的太大了 如果别的地方也要用Factory概念？打包时会命名空间
      let picker = Factory.createDatePicker(target,options);
      // let target = $(event.currentTarget);
  })
  
