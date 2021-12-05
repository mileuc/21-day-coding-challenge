
const checkAllGauges = (gaugeList) => {
  // Code here!
  for(i = 0; i < gaugeList.length; i++){
    gauge = gaugeList[i]
    if (gauge.current < gauge.min || gauge.current > gauge.max){
      return false
    }
  }
  return true
}
