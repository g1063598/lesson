// vm => Vue 实例 
// mvvm 虚拟DOM对象
// 真实DOM 消耗内存 vm 将很多次的
// 修改 集中成一次真实DOM修改
function Compile(el, vm) {
    this.vm = vm;
    this.el = document.querySelector(el);
    this.fragment = null;
    this.init();
  }
  
  Compile.prototype = {
    init () {
      // 接管模块去编译, 显示不是html,
      // 只是模板, 从头开始处理模板
      this.fragment = this.nodeToFragment(this.el); 
      this.compileElement(this.fragment);
      this.el.appendChild(this.fragment);
    },
    compileElement (el) {
      var childNodes = el.childNodes;
      [].slice.call(childNodes).forEach(
        (node) => {
          var reg = /\{\{(.*)\}\}/;
          var text = node.textContent;
          // v-model v-on:click mounted
          if (this.isElementNode(node)) {
            // 去分析结点
            this.Compile(node);
          } else if (this.isTextNode(node) && reg.test(text)) {
            this.compileText(node, 
            reg.exec(text)[1]);
          }
          // 递归
          if (node.childNodes && node.childNodes.length) {
            this.compileElement(node);
          }
      })
    },
    isElementNode (node) {
      return node.nodeType == 1;
    },
    isTextNode (node) {
      return node.nodeType == 3;
    },
    Compile (node) {
      var nodeAttrs = node.attributes;
      Array.prototype.forEach.call(nodeAttrs,(attr) => {
        var attrName = attr.name;
        if(this.isDirective(attrName)) {
          var exp = attr.value;
          var dir = attrName.substring(2);
          if(this.isEventDirective(dir)) {
            this.compileEvent(node,this.vm,exp,dir);
          } else {
            this.compileModel(node,this.vm,exp,dir);
          }
        }
      })
    },
    isEventDirective (dir) {
      return dir.indexOf('on:') === 0;
    },
    isDirective (attr) {
      return attr.indexOf('v-') === 0;
    },
    compileText (node, exp) {
      var initText = this.vm[exp];
      this.updateText(node, initText);
      new Watcher(this.vm,exp,value => {
        this.updateText(node,value);
      })
    },
    compileEvent (node,vm,exp,dir) {
      var eventType = dir.split(':')[1];
      var cb = vm.methods && vm.methods[exp];
      if(eventType && cb) {
        node.addEventListener(eventType,cb.bind(vm),false);
      }
    },
    compileModel (node,vm,exp,dir) {
      var val = this.vm[exp];
      this.modelUpdater(node,val);
      new Watcher(this.vm,exp,value => {
        this.modelUpdater(node,value);
      });
      node.addEventListener('input',e => {
        var newValue = e.target.value;
        if(val === newValue) {
          return;
        }
        this.vm[exp] = newValue;
        val = newValue;
      })
    },
    modelUpdater (node,value,oldValue) {
      node.value = typeof value == 'undefined' ? '' : value;
    },
    updateText (node, value) {
      node.textContent =  typeof value === 'undefined' ? '' : value
    },
    nodeToFragment: function (el) {
      var fragment = document.createDocumentFragment();
      // 新拷贝一份，模板进行html编译, 将它
      // 替换原有el.innerHTML 
      // 文档碎片不会留下任何印记
      var child = el.firstChild;
      while(child) {
        fragment.appendChild(child);
        child = el.firstChild;
      }
      return fragment;
    }
  }
  