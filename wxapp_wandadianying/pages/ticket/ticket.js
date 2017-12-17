Page({
  data: {
    screening: [],
    today: [],
    tomorrow: [],
    movies: [],
    activeIndex: 0,
    chooseMovieIndex: 1
  },
  chooseMovie: function(e) {
    var index = e.target.dataset.index;
    console.log(index);
  },
  changeTab: function(e) {
    var index = e.target.dataset.index;
    this.setData({
      activeIndex: index
    })
  },
  swiperTab: function(e) {
    var type = e.detail.current;
    console.log(e);
    this.setData({
      activeIndex:type
    })
  },
  get_screenings:function(type){
    var that = this;
    wx.request({
      url: 'https://www.easy-mock.com/mock/5a20be8ebe1c8248fef10573/getMoviesInfo/getInfo#!method=get',
      success: function(res){
        var day = res.data.data.movieDetails[1].screenings[0].day;
        console.log(day);
        that.setData({
          movies: res.data.data.movieDetails
        });
        if(day==1){
          that.setData({
            today: res.data.data.movieDetails[1].screenings
          })
        } else if(day==2){
          that.setData({
            tomorrow: res.data.data.movieDetails[1].screenings
          })
        }
      }
    })
  },
  onLoad: function() {
    this.get_screenings("");
  }
})