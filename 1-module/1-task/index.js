function factorial(n) {
  if (n===0) {
    return 1;
  } else {
    let result = 1

    for (let i = n; 0 < i; i--) {
      
      result  = result * i
    }
  
    return result
  }    

}

