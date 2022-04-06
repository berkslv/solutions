// Last in First out
class Stack {
  array = [];
  top = 0;

  isEmpty(stack) {
    if (stack.top === 0) {
      return true;
    }
    return false;
  }

  insert(stack, x) {
    stack.array.push(x);
  }

  delete(stack) {
    stack.array.pop();
  }

  print(stack) {
    console.log(stack.array);
  }
}

module.exports = {
  Stack,
};
