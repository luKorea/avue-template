let str = '666,777,888,9999,000',
  arr = [];
/**
 *
 * @param id {String}
 * @param str {String}
 */
function removeItem(id, str) {
  arr = str.split(',');
  arr && arr.length > 0 && arr.forEach((item, index) => {
    if (item === id) {
      arr.splice(index, 1);
    }
  })
  return arr.toString();
}
removeItem('000', str);
