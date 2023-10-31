function camelize(str) {
  // ваш код...
  const array = str.split('-') 

  let transformedArray = array.map((word, index) => {
    if (index >= 1) {
      return capitalizeFirst(word)
    } else {
      return word
    }
  }) 
  let result = transformedArray.join ("")
  return result
}

function capitalizeFirst(str) {
  if (!str) return str 
  if (str.length == 1) return str.toUpperCase()
  return str[0].toUpperCase() + str.slice(1)
}



