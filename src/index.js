module.exports = function reverse (n) {
  let rev = n.toString().split('').reverse();

  for (let i =0; i <rev.length; i++){
    if(rev[i] == '-'){
        rev.splice(i, 1);
    }
  }
  return rev.join('');
}
