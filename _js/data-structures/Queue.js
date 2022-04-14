// First in First out
class Queue {
  array = [];
  tail = 0;
  head = 0;

  isEmpty(queue) {
    if (queue.tail === queue.head) {
      return true;
    }
    return false;
  }

  insert(queue, x) {
    queue.array[queue.tail] = x;

    if (queue.tail == queue.array.length) {
      queue.tail = 1;
    } else {
      queue.tail = queue.tail + 1;
    }

  }

  delete(queue) {
    let x = queue.array[queue.head];

    if (queue.head == queue.array.length) {
      queue.head = 1;
    } else {
      queue.head = queue.head + 1;
    }

    queue.array.shift()
  }

  print(queue) {
    console.log(queue.array);
  }
}

module.exports = {
  Queue,
};
