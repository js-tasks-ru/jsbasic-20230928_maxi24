function sumSalary(salaries) {
  // ваш код...
  
  let sum = 0

  for (let key in salaries) {
    const value = salaries[key]
    if (typeof value === 'number' && (value !== Infinity) && (value !== -Infinity) && (!Number.isNaN(value))) {

      sum += value
    }
  }
  
  return sum
}
