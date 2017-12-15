function capitalize(s,arr){
    let sArr = s.split('')
    for (let i = 0; i < sArr.length; i++) {
      if (arr.includes(i)) sArr[i] = sArr[i].toUpperCase()
      }
    return sArr.join('');
  };