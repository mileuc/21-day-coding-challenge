const chooseLunchWinner = (listOfChoices) => {
  //Code here!
  choice1 = listOfChoices[0]
  choice1Tally = 0
  choice2Tally = 0 
  listOfChoices.forEach(function(choice){
    if (choice === choice1){
      choice1Tally += 1
    }
    else {
      choice2 = choice
      choice2Tally += 1
    }
  }) 
  if (choice1Tally > choice2Tally){
    return choice1
  }
  else{
    return choice2
  }
}
