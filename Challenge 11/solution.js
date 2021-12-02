const bookFreePlatform = (platformList, missionDate) => {
  // Code here!
  for(i = 0; i < platformList.length; i++){
    if (platformList[i].bookDate === undefined) {
      platformList[i].bookDate = missionDate
      console.log(platformList)
      return platformList
    }
  }
}
// note: no way to exit loop with forEach
