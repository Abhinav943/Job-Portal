const datalist = document.getElementById("job-suggestions");
const searchBtn = document.querySelector("#search-submit");
const jobInput = document.getElementById("jobInput");
const jobName = document.querySelector("#job-name");
const salary = document.querySelector("#salary-1");
const cardlocation = document.querySelector("#location-1");
const skills = document.querySelector("#skills-1");
const experience = document.querySelector("#experience-1");
const apply = document.querySelector(".apply-here")

jobListings.forEach((job) => {
  const option = document.createElement("option");
  option.value = job.jobTitle;
  datalist.appendChild(option);
});

let selectedJob = null;
jobInput.addEventListener("input", () => {
  const selectedJobTitle = jobInput.value;
  const jobFound = jobListings.find((job) => job.jobTitle === selectedJobTitle);

  if (jobFound) {
    selectedJob = jobFound;
  } else {
    selectedJob = null;
  }
});

searchBtn.addEventListener("click", () => {
  if (selectedJob) {
    jobName.textContent = selectedJob.jobTitle;
    salary.textContent = selectedJob.salary;
    cardlocation.textContent = selectedJob.location;
    skills.textContent = selectedJob.skillsRequired.join(", ");
    experience.textContent = selectedJob.experienceRequired;
  } else {
    jobName.textContent = "No matching job found.";
    salary.textContent = "";
    cardlocation.textContent = "";
    skills.textContent = "";
    experience.textContent = "";
  }
});