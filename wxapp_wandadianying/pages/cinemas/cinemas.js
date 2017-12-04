const app = getApp()

Page({
    data: {
        cinemas: []
    },
    onLoad: function() {
        var that = this;
        wx.request({
            url: 'https://www.easy-mock.com/mock/5a20be8ebe1c8248fef10573/getMoviesInfo/getInfo',
            success: function(res) {
                that.setData({
                    cinemas: res.data.data.cinemas
                })
            }
        })
    }
})