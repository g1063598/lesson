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

#### template中有且只有一个根标签
css作用域： scoped

#### 全局注册组件 
在main.js中添加： import Users from './components/Users'  Vue.component("users",Users); 

父组件向子组件传值：在父组件标签中v-bind:users="users"
                  在子组件中props:["users"] (标准写法：props:{type:string,required:true})
传值：string number boolean (不会互相影响，只会改变自身)
传引用：array object (会互相影响，一个改变了其他的都会改变)

#### 生命周期函数：
beforeCreate: 实例Vue没有创建对象之前，没有将当前对象的Vue创建出来时调用beforeCreate方法，可加载动画
created: 实例创建好了，组件创建好了，属性也成功被绑定了，但是DOM还没有生成，通常获取对应的数据（网络接口），结束beforeCreate中的loading加载
beforeMount: 开始编译当前模板，在虚拟DOM中执行beforeMount,还没有将真实的内容渲染到页面上
mounted: 模板编译完成开始挂载，mounted一旦结束，界面就已经显示出来（DOM已经完成），页面显示出来之后要进行的操作写在mounted中，例如从后台获取数据
beforeUpdate: 组件更新之前调用的函数
updated: 组件更新之后，update一旦执行完页面就展示出来了
beforeDestory: 在销毁之前执行的函数
destoryed: 