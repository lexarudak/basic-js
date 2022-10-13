const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],
  getLength() {
    return this.chain.length
  },
  addLink(value) {  
    if (value !== undefined) {
      this.value = value
    } else {
      this.value = ''
    }
    this.chain.push(`( ${this.value} )`)
    console.log(this.chain);
    return this
  },
  removeLink(position) {
    if (position > 0 && position <= this.chain.length - 1 ) {
      this.chain.splice(position - 1, 1)
      console.log(this.chain);
      return this
    } else {
      this.chain = []
      throw new Error('You can\'t remove incorrect link!')
    }
  },
  reverseChain() {
    this.chain = this.chain.reverse()

    console.log(this.chain);
    return this
  },
  finishChain() {
    const res = this.chain.join('~~')
    this.chain = []
    return res
  }
};

module.exports = {
  chainMaker
};

