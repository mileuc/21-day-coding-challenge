const switchSpecificToggle = (toggleList, specificToggle) => {
  // Code here!
  toggleList.forEach(function(toggle){
    if (toggle.name === specificToggle){
      toggle.isOn = !toggle.isOn
    }
  })
  
  return toggleList
}
