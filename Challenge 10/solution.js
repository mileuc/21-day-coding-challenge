const averageWindSpeed = (weatherEntries) => {
  // Code here!
  totalWindSpeed = 0
  weatherEntries.forEach(function(entry){
    totalWindSpeed += entry.windSpeed
  })
  avgWindSpeed = totalWindSpeed / (weatherEntries.length)
  return Math.round(avgWindSpeed)
}

// alternate solution
const averageWindSpeed = (weatherEntries) => {
  // Code here!
  const reducer = (cumulativeWindSpeed, entry) => cumulativeWindSpeed + entry.windSpeed
  totalWindSpeed = weatherEntries.reduce(reducer, 0) // 0 is used as the initial value for cumulative wind speed instead of the default first element of the array
  // iteration therefore starts at the index 0 of the array instead of index 1
  console.log(Math.round(totalWindSpeed/weatherEntries.length))
  return Math.round(totalWindSpeed/weatherEntries.length)
}
// executes a user-supplied “reducer” callback function on each element of the array, in order, passing in the return value from the calculation on the preceding element. 
// The final result of running the reducer across all elements of the array is a single value. 
