const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const newArr = []
  names.forEach(value => {
    if (!(newArr.includes(value))) {
      newArr.push(value)
    } else {
      let num = 1
      function tryV(val) {
        if (!(newArr.includes(value + `(${num})`))){
          newArr.push(value + `(${num})`)
        } else {
          num ++
          tryV(val)
        }
      }
      tryV(value)
    }
  })
  return newArr
}

module.exports = {
  renameFiles
};

// console.log(renameFiles(['doc', 'doc', 'image', 'doc(1)', 'doc']));
