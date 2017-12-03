function validatePIN (pin) {
    let res =  /^[0-9]{4}([0-9]{2})?$/.test(pin);
    return res
  }