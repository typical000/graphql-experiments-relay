/**
 * Check if object is empty
 * @param {Object} obj
 * @return {Object}
 */
export const isEmpty = (obj = {}) => {
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) return false
  }
  return true
}

export default {
  isEmpty
}
