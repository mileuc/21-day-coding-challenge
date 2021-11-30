
const listAstronautJobs = (roster) => {
  // Code here!
  jobs = []
  roster.forEach(function(astronaut){
    jobs.push(astronaut.job)
  })
  console.log(jobs)
  return jobs
}
