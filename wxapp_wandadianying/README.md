# 圣诞节即将来临，带上那个心仪的她（他）去万达看场电影吧
![](https://user-gold-cdn.xitu.io/2017/12/18/1606545178bc4205?w=446&h=295&f=gif&s=142535)

前几天和朋友约着去万达看IMAX版的正义联盟，刚好可以弄个抽奖，满60减20，无奈运气太差，让十个人帮忙抽就是抽不到，后来刚好要仿一个小程序，就想着那就万达电影吧！

## 项目现有功能
* 列表式渲染数据
* 在本地缓存中存储数据和获取数据
* 页面跳转和传参页面跳转
* swiper和scroll基础滑动事件
* 动态设置导航条
## 项目效果与具体实现
### 文件

![](https://user-gold-cdn.xitu.io/2017/12/18/160654c2f046c78b?w=203&h=312&f=png&s=12168)

### 1.首页及底部tabbar转换

![](https://user-gold-cdn.xitu.io/2017/12/17/16064b0e37a23d60?w=290&h=508&f=gif&s=378880)

传参页面跳转具体实现：

```
      <navigator url="../detailedInfo/detailedInfo?id={{item.id}}">
```
电影信息列表除了数据其他的都是一样的，所以用了for循环来重复渲染组件，后面的代码中也有许多地方使用了for循环；
具体index.js实现：
```
const app = getApp()

Page({
  data: {
    //动态数据
    movies: [],
    store: ""
  },
  
  //onLoad函数表示页面加载完成后执行
  onLoad: function(res) {
    var that = this;
    //wx.showToast是显示消息提示框，
    wx.showToast({
      title: "加载中...",//提示框中的文字内容
      icon: "loading",//提示框中的图标，只能有两个值，"success"和"loading"
      duration: 500//表示提示框在页面中显示的时间，单位是毫秒
    });
    wx.request({
      url: 'https://www.easy-mock.com/mock/5a20be8ebe1c8248fef10573/getMoviesInfo/getInfo',
      success: function(res){
        //this.setData是设置Page中data的数据,
        //这里是使用that.setData，因为函数中嵌套函数this的指向会发生改变，所以在外层函数中使this指向了that.
        that.setData({
          movies: res.data.data.movieDetails
        })
      }
    });
  }
})
```
我的数据是用[easy-mock](https://www.easy-mock.com/)写的，[电影信息](https://www.easy-mock.com/mock/5a20be8ebe1c8248fef10573/getMoviesInfo/getInfo#!method=get)是我写的一个借口，有需要可以自取哦。这个js代码中涉及到了微信小程序的生命周期函数和本地缓存，本地缓存会在后面解释，为了避免大家混淆生命周期函数的执行顺序，我把它们的执行顺序打印出来：

![](https://user-gold-cdn.xitu.io/2017/12/17/16064c8b259726db?w=607&h=167&f=png&s=18484)

### 2.电影院信息实现将数据存储在本地缓存中

![](https://user-gold-cdn.xitu.io/2017/12/17/16064d25da4412b1?w=290&h=508&f=gif&s=157697)

具体cinemas.js实现：
```
    chooseCinema:function(e){
        var index = e.currentTarget.dataset.current;
        // 将电影院名称存储在本地缓存中
        wx.setStorage({
            key: "cinema",
            data:this.data.cinemas[index].cinema
        });
        // 将电影院地址存储在本地缓存中
        wx.setStorage({
            key: "position",
            data:this.data.cinemas[index].position
        });
    }
```
代码中使用了wx.setStorage这个API来实现将数据存储在本地缓存中，需要从本地缓存中获取数据时使用wx.getStorage即可。将数据存储在相应的key中，然后根据相应的key来获取数据，在index.js中就使用了key为"cinema"的wx.getStorage来获取选中的电影院名称；在index.js中wx.getStorage必须放在onShow函数中，不能放在onLoad函数中，因为onLoad函数一个页面只会调用一次，如果再换一个电影院，那页面是不会显示我选择的电影院的，而onShow函数是每打开页面都会调用一次，所以必须放在onShow函数中！！！

这里需要注意的是，同一个微信用户，同一个storage上限为10M，所以最好不要存储照片等内存较大的内容。
### 3.电影详情页实现传参页面跳转

![](https://user-gold-cdn.xitu.io/2017/12/17/16064e6a5d81a859?w=290&h=508&f=gif&s=1226757)

页面底部的“立即购票”是用固定定位display:fixed来实现

电影信息详情页的头部背景使用了同级元素和定位来实现，css代码如下：
```
.pege__hd {
    width: 750rpx;
    height: 382rpx;
    position: relative;
    background-color: pink;
    overflow: hidden;
}
.page__hd_movie-background {
    width: 750rpx;
    height: 150rpx;
    z-index: 1;
    filter: blur(10rpx);
}
.page__hd_movie {
    position: absolute;
    top: 26rpx;
    left: 20rpx;
    width: 224rpx;
    height: 326rpx;
    z-index: 3;
}
```
具体detailed.js实现：
```
onLoad: function(params) {
    var that = this;
    wx.request({
      url:'https://www.easy-mock.com/mock/5a20be8ebe1c8248fef10573/getMoviesInfo/getInfo',
      data:{},
      success: function(res){
        var datas = res.data.data.movieDetails.filter((item)=>{
          return item.id == params.id;
        })
      }
    });
}
```
在onLoad函数中的形参params就是在index.wxml页面的`<navigator url="../detailedInfo/detailedInfo?id={{item.id}}">...</navigator>`中传递过来的id,params是一个json对象，params.id就是对应的id。

在index页面中点击电影需要跳转到相应的电影详细信息页面，在传递数据时我需要通过传递过来的id来筛选我需要的数据，这里使用了filter过滤器。
### 4.购票页面

![](https://user-gold-cdn.xitu.io/2017/12/17/16064f99fe21bd3d?w=290&h=508&f=gif&s=357582)

点击电影海报背景也随之改变，这是通过在每个电影海报上添加一个chooseMovie点击事件，然后在js代码中设置背景图片为点击的相应的海报来实现效果的。这里的背景模糊，内容不模糊也是和前面一样通过设置同级元素再用定位来实现。

page__ft中点击“今天”“明天”“后天”，swiper-item也随之滑动和滑动swiper-item，“今天”“明天”“后天”样式改变这个效果是通过给他们对应的盒子绑定同一个值activeIndex来实现的。

## 结尾
最后说下我在写这个小程序时碰到的问题和解决办法
1. 如何实现在cinemas页面中点击数据，返回index页面时显示相应数据

       使用wx.setStorage和wx.getStorage来实现在本地缓存中存取和获取数据
2. 如何实现背景模糊，内容不模糊的效果

       使用同级元素，并用relative和absolute定位，在背景盒子中使用filter:blur(5px)来实现效果。这里需要注意的是一定要设置同级元素，不能使用父子，因为在父元素中使用filter属性，子元素也会模糊。
3. 数据渲染时使用for循环，for循环会带着包含for语句的那个盒子一起循环，我在写ticket页面底部电影票场次信息样式代码的时候把position:relative写在了外面的swiper-items中，导致后面数据全在一起
4. 如何实现动态设置导航条
    
        在onLoad函数的数据请求中设置导航条的信息，然后使用wx.setNavigationBarTitle设置数据

文章到这里就结束了，欢迎一起交流学习：
* qq: 2258190228
* github: [万达电影](https://github.com/nzhingg/lesson/tree/master/wxapp_wandadianying)，欢迎fork,欢迎star


记得带上心仪的她（他）去万达看电影哦！

