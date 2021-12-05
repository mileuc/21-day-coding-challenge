const switchAllTogglesOn = (toggleList) => {
  // Code here!
  toggleList.forEach(function(toggle){
    if (toggle.isOn === false){
      toggle.isOn = !toggle.isOn
    }
  })
  return toggleList
}
