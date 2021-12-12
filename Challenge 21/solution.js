// Add parseMessage here if you want!

const parseMissionSummary = (exchanges, missionData) => {
  // Code here!
  output = {
    transcript: []
  }
  
  exchanges.forEach(function(exchange){
    output.transcript.push(`${exchange.origin}: ${exchange.message}`)
  })
  output[`missionData`] = missionData
  
  console.log(output)
  return output
}
