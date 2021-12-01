const parseMessage = (origin, message) => {
  // Code here!
  output = origin + ": " + message
  // Want to see what's going on inside your function? 
  // You can use console.log() to debug and print variables to the console below.
  console.log(output)
  // Remember to return a value!
  return output
 
}

parseMessage("Mission Control", "Hello there!")

// Alternate solution:
// const parseMessage = (origin, message) => {
//   return `${origin}: ${message}`
// }
