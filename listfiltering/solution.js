function filter_list(l) {
    // Return a new array with the strings filtered out
    
    const result = l.filter(x => typeof(x) === 'number')
    return result
  }