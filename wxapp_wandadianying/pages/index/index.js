const app = getApp()

Page({
  data: {
    movies: [],
    store: ""
  },
  onLoad: function() {
    var that = this;
    wx.showToast({
      title: "加载中...",
      icon: "loading",
      duration: 500
    });
    wx.request({
      url: 'https://www.easy-mock.com/mock/5a20be8ebe1c8248fef10573/getMoviesInfo/getInfo',
      // method: 'GET',
      success: function(res){
        console.log(res.data.data);
        that.setData({
          movies: res.data.data.movieDetails
        })
      }
    })
  },
})