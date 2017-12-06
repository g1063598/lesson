const app = getApp()

Page({
    data: {
        cinemas: [],
        cinema: ''
    },
    chooseCinema:function(e){
        console.log(e.currentTarget.dataset.current);
        var index = e.currentTarget.dataset.current;
        console.log(this.data.cinemas[index]);
        wx.setStorage({
            key: "cinema",
            data:this.data.cinemas[index].cinema
        });
        console.log(this.data.cinema)
        wx.navigateBack({
        });
    },
    onLoad: function() {
        var that = this;
        wx.request({
            url: 'https://www.easy-mock.com/mock/5a20be8ebe1c8248fef10573/getMoviesInfo/getInfo',
            success: function(res) {
                that.setData({
                    cinemas: res.data.data.cinemas,
                });
                // console.log(res.data.data.cinemas[0].cinema)
            }
        })
    }
})