# my-project

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

## template中有且只有一个根标签
css作用域： scoped

全局注册组件 在main.js中添加： import Users from './components/Users'  Vue.component("users",Users); 

父组件向子组件传值：在父组件标签中v-bind:users="users"
                  在子组件中props:["users"] (标准写法：props:{type:string,required:true})
传值：string number boolean
传引用：array object