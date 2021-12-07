const timeRemaining = (launchDate, missionName, fakeToday) => {
  const today = fakeToday || new Date() // Do not alter this line!
  // Code here!
  launchDate = new Date(launchDate)
  dayDiffInMilliseconds = launchDate.getTime() - today.getTime()
  console.log(dayDiffInMilliseconds)
  dayDiffInDays = dayDiffInMilliseconds * (1/1000) * (1/3600) * (1/24)
  return {
    missionName: missionName,
    daysRemaining: Math.round(dayDiffInDays)
  }
}
