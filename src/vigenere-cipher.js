const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor (type) {
    this.type = type
  }
  encrypt(message, key) {
    if (arguments.length !== 2 || (typeof message !== 'string') || (typeof key !== 'string')) {
      throw new Error('Incorrect arguments!')
    }
    const alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
    const allLet = alph.length
    const messageArr = message.split('')
    const answer = []
    const codeName = []
    const codeName2 = []
   
    
    let i = 0
    let u = 0
    while (i < message.length) {
      u = (key.length + i) % key.length
      codeName.push(key[u = (key.length + i) % key.length].toUpperCase())
      i++
    }
    let g = 0
     messageArr.forEach((value, index,) => {
      if (alph.includes(value.toUpperCase())) {
        codeName2.push(codeName[g].toUpperCase())
        g++
      } else {
        codeName2.push(value)
      }
    })
    g = 0
    messageArr.forEach((value, index) => {
      if (alph.includes(value.toUpperCase()))
      {
        const lag = alph.indexOf(codeName2[index])
        const base = alph.indexOf(messageArr[index].toUpperCase())
        answer.push(alph[(allLet + (base + lag)) % allLet])
      } else {
        answer.push(value)
      }
      
    });
    if (this.type !== false) {
      return answer.join('')
    } else {
      return answer.reverse().join('')
    }
    
  }
  decrypt(message, key) {
    if (arguments.length !== 2 || (typeof message !== 'string') || (typeof key !== 'string')) {
      throw new Error('Incorrect arguments!')
    }
    const alph = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
    const allLet = alph.length
    const messageArr = message.split('')
    const answer = []
    const codeName = []
    const codeName2 = []
   
    
    let i = 0
    let u = 0
    while (i < message.length) {
      u = (key.length + i) % key.length
      codeName.push(key[u = (key.length + i) % key.length].toUpperCase())
      i++
    }
    let g = 0
     messageArr.forEach((value, index,) => {
      if (alph.includes(value.toUpperCase())) {
        codeName2.push(codeName[g].toUpperCase())
        g++
      } else {
        codeName2.push(value)
      }
    })
    g = 0
    messageArr.forEach((value, index) => {
      if (alph.includes(value.toUpperCase()))
      {
        const lag = alph.indexOf(codeName2[index])
        const base = alph.indexOf(messageArr[index].toUpperCase())
        answer.push(alph[(allLet + (base - lag)) % allLet])
      } else {
        answer.push(value)
      }
      
    });
    if (this.type !== false) {
      return answer.join('')
    } else {
      return answer.reverse().join('')
    }
    
  }
}

module.exports = {
  VigenereCipheringMachine
};


// const directMachine = new VigenereCipheringMachine()
// console.log(directMachine.encrypt('attack at dawn!', 'alphonse'));
// console.log(directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse'));
// // 'AEIHQX SX DLLU!'
