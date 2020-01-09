// 链表类

function LinkedList() {
  let Node = function(element) {
    this.element = element;
    this.next = null;
  }

  let length = 0;
  let head = null;

  // 往链表后添加元素
  this.append = function(element) {
    let node = new Node(element);
    let current;

    if (head === null) {
      head = node;
    } else {
      current = head;

      // 循环列表，知道找到最后一项
      while(current.next) {
        current = current.next;
      }

      current.next = node;
    }

    length++;
  }

  // 往链表某个地方插入元素
  this.insert = function(element) {

  }

  // 从列表特定地方移除元素
  this.removeAt = function(element) {

  }

  // 从列表中移除一项
  this.remove = function(element) {

  }

  // 返回元素在列表的索引
  this.indexOf = function(element) {

  }

  // 判断是否为空
  this.isEmpty = function() {

  }

  // 返回个数
  this.size = function() {
    return length;
  }

  // 获取头部
  this.getHead = function() {

  }

  // 输出元素的值
  this.toString = function() {

  }

  // 打印元素
  this.print = function() {

  }
}