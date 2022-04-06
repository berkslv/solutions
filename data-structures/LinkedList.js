class ListNode {
  constructor(element) {
    this.element = element;
    this.next = null
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  insert(element) {
    var node = new ListNode(element);

    var current;

    if (this.head == null)
      this.head = node;
    else {
      current = this.head;

      while (current.next) {
        current = current.next;
      }

      current.next = node;
    }

    this.size++;
  }



  delete(element) {
    var current = this.head;
    var prev = null;

    while (current != null) {
      if (current.element === element) {
        if (prev == null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }

        this.size--;
        return current.element;
      }

      prev = current;
      current = current.next;
    }

    return -1;
  }


  isEmpty() {
    return this.size == 0;
  }


  print() {
    var curr = this.head;
    var str = "";
    while (curr) {
      str += curr.element + " ";
      curr = curr.next;
    }
    console.log(str);
  }


}



module.exports = {
  LinkedList,
};
