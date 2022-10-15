const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
  //     throw new NotImplementedError('Not implemented');
  // // remove line with error and write your code here
    if (Array.isArray(arr)){
      let finalCount = 1
      let count = 1
      

      function fe (element) {
        const isArr = element.filter(val => Array.isArray(val))
        console.log('is arr:', isArr);
        
        if (isArr.length > 0) {
          count ++
          console.log('count', count);
          
        element.forEach((value) => {  
          if (Array.isArray(value)){
            console.log('VALUE:', value);
            
            fe(value)
          }
        })
      } else {
        console.log('to final count', count, finalCount);
        
        if (count > finalCount) {
          finalCount = count
          count = 2
          console.log('to final count', count, finalCount);
          console.log('---------------------------------');
        } else {
          count = 2
          console.log('to final count', count, finalCount);
          console.log('---------------------------------');
        }
        
      }
      }
      fe(arr)
      
      console.log('end', finalCount);
      
      return finalCount
    } else {
      return 0
    }
    
  }
}

// const depthCalc = new DepthCalculator()
// depthCalc.calculateDepth([1, [8, [[]]], [[[[[[[[[[[[[[[[[[[[[[[[[[[[[[]]]]]]], []]]], []]]]]]]]], []]]], []]]]]]]]]], 2, 3, [8, [[[[[[[[[[[[[[]]]]]]]]]]]]]]], [8, [[[[[[[[[[[[[[[[[[[[[[[]]]]]]]]]]]]]]]]]]]]]]]], 4, 5, ['6575', ['adas', ['dfg', [0]]]]])


module.exports = {
  DepthCalculator
};


