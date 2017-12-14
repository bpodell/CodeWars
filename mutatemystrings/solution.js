function mutateMyStrings(stringOne, stringTwo){
    let arrOne = stringOne.split('')
    let arrTwo = stringTwo.split('')
    let string = arrOne.join('')+'\n'
    for (let i = 0; i < arrOne.length; i++) {
      if (arrOne[i] !== arrTwo[i]) {
        arrOne[i] = arrTwo[i]
        string += arrOne.join('')+'\n'
        }
    }
    return string
  }