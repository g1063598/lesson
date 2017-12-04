// pages/detailedInfo/detailedInfo.js
const app = getApp()
Page({
  data: {
    item: [],
    stills: []
  },
  onLoad: function(params) {
    // console.log(params);
    var that = this;
    wx.request({
      url:'https://www.easy-mock.com/mock/5a20be8ebe1c8248fef10573/getMoviesInfo/getInfo',
      data:{},
      success: function(res){
        console.log(res.data.data.movieDetails);
        var datas = res.data.data.movieDetails.filter((item)=>{
          return item.id == params.id;
        })
        // console.log(datas[0].stills[]);
        that.setData({
          item:datas[0],
          stills:datas[0].stills
        });
      }
    })
  }
})