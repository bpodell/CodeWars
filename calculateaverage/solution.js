function find_average(array) {
    // your code here
    
    let sumArray = array.reduce((acc, current) => acc + current)
    return sumArray / array.length;
  }