//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    current: null,
    todos: []
  },
  bindKeyInput: function(e) {
    this.data.current = e.detail.value
  },
  addItem: function() {
    if(this.data.current != null) {
      // 将所有的后台业务交给app.js
      app.addItem(this.data.current);
    }
  },
  deleteItem: function(e) {
    var key = e.target.dataset.key;
    // 根据key查找
    this.ref.child(key).remove();
  },
  onLoad: function () {
    // todos select * from
    this.ref = app.getTodoRef();
    this.ref.on('child_added',function(snapshot,prkey){
      var key = snapshot.key();
      var text = snapshot.val();
      // JSON结构
      var newItem = {key:key,text:text};
      this.data.todos.push(newItem);
      this.setData({
        todos: this.data.todos
      })
    },this);
    this.ref.on('child_removed', function(snapshot, ) {
      var key = snapshot.key();
      var index = this.data.todos.findIndex((item, index) => {
          if (item.key == key) {
              return true;
          }
          return false;
      });
      if (index >= 0) {
          this.data.todos.splice(index, 1);
          this.setData({
              todos: this.data.todos,
          })
      }
  }, this);
  },
})
