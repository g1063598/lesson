Page({
  data: {
    address: ""
  },
  bindAddressInput: function(e) {
    this.setData({
      address: e.detail.value
    });
  },
  bindSaveAddress: function () {
    // address? mvvm 不找dom元素
    // setStorage 存起来 10Mb 存
    // 最近看的十篇文章 离线 用户信息，配置
    wx.setStorage({
      key: "address",
      data: this.data.address,
      success: function() {
        wx.showToast({
          title: '地址保存成功',
          icon: 'success',
          duration: 2000
        })
      }
    })
  },
  bindClearAddress: function () {
    wx.clearStorage();
    this.setData({
      data: ''
    })
  },
  onLoad: function() {
    var that = this;
    wx.getStorage({
      key: 'address',
      success: function(res) {
        that.setData({
          'address': res.data.address
        })
      }
    })
  }
})
