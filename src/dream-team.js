const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  function SortArray(x, y){
    return x.localeCompare(y);
  }

  if (!Array.isArray(members)) {
    return false
  }

  let result = ''
  let arr = members.filter((el) => { return typeof el === 'string' })
  
  arr = arr.map(el => {
    return el.replace(/\s+/g, '')
  })

  arr.sort(SortArray).forEach(el => {
    result += el[0]
  })

  return result.toUpperCase()
}

module.exports = {
  createDreamTeam
};
