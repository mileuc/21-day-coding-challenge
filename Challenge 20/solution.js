
const confirmReentryPlans = (speed, missionData, checks) => {
  // Code here!
  // Check speed, then check amount of entries per type
  if ((speed < checks.minSpeed) || (speed > checks.maxSpeed)){
    return false
  }
  else if (missionData.astro.length != checks.dataEntries.astro){
    return false
  }
  else if (missionData.bio.length != checks.dataEntries.bio){
    return false
  }
  else if (missionData.physics.length != checks.dataEntries.physics){
    return false
  }
  else {
    return true
  }
}
