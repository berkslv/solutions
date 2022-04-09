// Last in First out
class Stack {
  constructor() {
    this.array = [];
    this.topIndex = -1;
  }

  /**
   * @param {number} val
   * @return {void}
   */
  push(val) {
    this.array.push(val);
    this.topIndex++;
  }

  /**
   * @return {void}
   */
  pop() {
    this.array.pop();
    if (this.topIndex > -1) {
      this.topIndex--;
    }
  }

  /**
   * @return {number}
   */
  top() {
    console.log(this.topIndex);
    return this.array[this.topIndex];
  }

  /**
   * @return {number}
   */
  getMin() {

    let lowest = this.array[0];

    for (let i = 0; i < this.array.length; i++) {
      const element = this.array[i];

      if (lowest > element) {
        lowest = element;
      }
    }

    return lowest;
  }

  /**
   * @return {void}
   */
  print() {
    console.log(this.array);
  }
}

module.exports = {
  Stack,
};
