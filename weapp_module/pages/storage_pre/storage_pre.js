Page({
  data: {
    address: '未设置地址'
  },
  gotoStorage: function() {
    wx.navigateTo({
      url: '../storage/storage'
    });
  },
  // 页面加载完成
  onLoad: function(options) {
    console.log('onLoad');
  },
  onReady: function() {
    console.log('onReady');
  },
  onShow: function() {
    var that = this;
    wx.getStorage({
      key: "address",
      success: function(res) {
        console.log(res);
        if (res.data.length > 0) {
          that.setData({
            address: res.data
          });
        }
      }
    })
  },
  onHide: function() {
    // console.log('onHide');
    
  },
  onUnload: function() {
    console.log('onUnload');
  }
})
