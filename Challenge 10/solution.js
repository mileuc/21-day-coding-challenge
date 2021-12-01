const averageWindSpeed = (weatherEntries) => {
  // Code here!
  totalWindSpeed = 0
  weatherEntries.forEach(function(entry){
    totalWindSpeed += entry.windSpeed
  })
  avgWindSpeed = totalWindSpeed / (weatherEntries.length)
  return Math.round(avgWindSpeed)
}
