// pages/detailedInfo/detailedInfo.js
const app = getApp()
Page({
  data: {
    
  },
  onLoad: function(params) {
    console.log(params);
    wx.request({
      url:'https://www.easy-mock.com/mock/5a20be8ebe1c8248fef10573/getMoviesInfo/getInfo?id='+params,
      data:{},
      success: function(res){
        console.log(res.data);
      }
    })
  }
})