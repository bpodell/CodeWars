function isNice(arr){
    let flag = true;
     arr.forEach(function(i) {
        if ((arr.includes(i + 1))||(arr.includes(i - 1))) {
        console.log(i)
      } else {
        flag = false}
        })
      return flag
    }