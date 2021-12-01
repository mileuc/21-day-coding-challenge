const generateAstronautTag = (astronaut) => {
  // Code here!
  prefix = astronaut.prefix
  firstName = astronaut.firstName
  lastName = astronaut.lastName
  nickname = astronaut.nickname
  
  output = `${prefix}: ${firstName} "${nickname}" ${lastName}`
  // Remember to return a value!
  console.log(output)
  return output
}
