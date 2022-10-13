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
    console.log(this.chain.join('~~'));
    return (this.chain.join('~~'))
  }
};

module.exports = {
  chainMaker
};

// '( DEF )~~( 3.14 )~~( 8.963 )~~( [object Object] )'

// console.log(chainMaker.addLink('8.963').reverseChain().reverseChain().reverseChain().reverseChain().addLink({ 0: 'first', 1: 'second', 'length': 2 }).reverseChain().addLink(3.14).addLink('DEF').reverseChain().finishChain());
