//app.js
var wilddog = require('wilddog-weapp-all');
App({
  onLaunch: function () {
    var config = {
      syncURL: 'https://wd7196844481znziob.wilddogio.com',
      authDomain: 'wd7196844481znziob.wilddog.com'
    }
    wilddog.initializeApp(config);
    wilddog.auth().signInWeapp(function(err,user){
      console.log(user);
    })
    // 数据库 ip:db
    this.ref = wilddog.sync().ref('todo')
  },
  addItem: function(text) {
    this.ref.push(text);
  },
  getTodoRef: function() {
    return this.ref;
  },
  globalData: {
    userInfo: null
  }
})