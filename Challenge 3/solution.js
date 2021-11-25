
const checkGaugeStatus = (gauge) => {
  // Code here!
  if ((gauge.current < gauge.min) || (gauge.current > gauge.max)) {
    inRange = false
  }
  else {
    inRange = true
  }
  // Remember to return a value!
  return inRange
}
