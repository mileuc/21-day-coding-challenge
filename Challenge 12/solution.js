// Add your parseMessage function here if you want!
const parseMessage = (message) => {
  new_string = `${message.origin}: ${message.message}`
  return new_string
}

const parseTranscripts = (messages) => {
  // Code here!
  parsed_messages = []
  messages.forEach(function(message){
    parsed_message = parseMessage(message)
    parsed_messages.push(parsed_message)
  })
  console.log(parsed_messages)
  return parsed_messages
}

//alternate solution
const parseTranscripts = (messages) => {
  // Code here!
  parsed_messages = []
  messages.forEach(function(message){
    new_string = `${message.origin}: ${message.message}`
    parsed_messages.push(new_string)
  })
  console.log(parsed_messages)
  return parsed_messages
}

//alternate solution
const parseTranscripts = (messages) => {
  return messages.map(message => `${message.origin}: ${message.message}`)
}
