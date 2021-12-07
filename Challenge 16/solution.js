
const getAverageSpeed = (firstPosition, secondPosition) => {
  // code here!
  distance = secondPosition.altitude - firstPosition.altitude
  time = secondPosition.time - firstPosition.time
  averageSpeed = parseFloat((distance/time).toFixed(1))
  console.log(averageSpeed)
  return averageSpeed
}
