const switchToggle = (toggle) => {
  // Code here!
  console.log(toggle.isOn)
  toggle.isOn = !(toggle.isOn)
  console.log(toggle.isOn)
  // Remember to return a value!
  return toggle
}
