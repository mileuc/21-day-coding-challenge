
const organizeData = (receivedData) => {
  // Code here!
  dataTypes = []
  output = {}
  receivedData.forEach(function(dataObject){
    dataType = dataObject.type
    if (dataTypes.includes(dataType) === false){
      // if type hasn't been read yet, add it and create a new array 
      dataTypes.push(dataType)
      output[`${dataType}`] = []
      output[`${dataType}`].push(dataObject.data)
    }
    else {
      output[`${dataType}`].push(dataObject.data)
    }
  })
  console.log(output)
  return output
}
