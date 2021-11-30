
const listAstronautJobs = (roster) => {
  // Code here!
  jobs = []
  roster.forEach(function(astronaut){
    jobs.push(astronaut.job)
  })
  console.log(jobs)
  return jobs
}

// alternate solution
const listAstronautJobs = (roster) => {
  return roster.map(astronaut => astronaut.job) //creates a new array populated with the results of calling a provided function on every element in the calling array. 
}
