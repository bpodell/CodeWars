function insertDash(num) {
    let str = num.toString();
    let arr = [str[0]]
    
    for (let i = 0; i < str.length; i++) {
      if ((str[i]%2 === 1) && (str[i+1]%2 === 1)) {
        arr.push('-', str[i + 1]);
      } else {
        arr.push(str[i + 1]);
        }
     }
     return arr.join('');
 }