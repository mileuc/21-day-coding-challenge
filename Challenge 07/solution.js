const storeWeatherConditions = (temperature, condition, windSpeed, windDirection) => {
  // Code here!
  convertedTemp = Math.round((temperature - 32) * 5/9)
  convertedSpeed = Math.round(windSpeed * (1609.34) * (1/3600))
  // convertedSpeed = Math.round(windSpeed / 2.237)
  // Remember to return an object!
  const output = {
    temperature: convertedTemp,
    condition: condition,
    windSpeed: convertedSpeed,
    windDirection: windDirection
  }
  console.log(output)
  return output
}
