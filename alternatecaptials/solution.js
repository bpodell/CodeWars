function capitalize(s){
    var evens = s.toLowerCase().split("");
    for (var i = 0; i < evens.length; i += 2) {
      evens[i] = evens[i].toUpperCase();
    }
    var odds = s.toLowerCase().split("");
    for (var i = 1; i < evens.length; i += 2) {
      odds[i] = odds[i].toUpperCase();
    }
    let evenstring = evens.join("");
      console.log(evens)
    let oddstring = odds.join("");
    return [evenstring , oddstring]
  };