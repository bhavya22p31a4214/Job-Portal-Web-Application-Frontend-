const jobs = [
    { title: "Frontend Developer", company: "Google", location: "Bangalore" },
    { title: "UI Developer", company: "Amazon", location: "Hyderabad" },
    { title: "Backend Developer", company: "Infosys", location: "Pune" },
    { title: "Full Stack Developer", company: "IBM", location: "Hyderabad" },
    { title: "Machine learning Developer", company: "Flipkart", location: "Bangalore" },
    { title: "Marketing", company: "Cognizent", location: "Chennai" },
    { title: "2D Animator-Intern", company: "capgemini", location: "Panjab" },
    { title: "Software Engineering Role", company: "Wipro", location: "Delhi" },
    { title: "Associate Engineer Software", company: "Infosys", location: "Pune" },
    { title: "Software Engineer III, AI/ML, Google Cloud ", company: "Google", location: "Bangalore" },

];

const jobsDiv = document.getElementById("jobs");

if (jobsDiv) {
  jobs.forEach(job => {
    const div = document.createElement("div");
    div.className = "job-card";
    div.innerHTML = `
      <h4>${job.title}</h4>
      <p>${job.company}</p>
      <p>${job.location}</p>
      <button onclick="applyJob(${job.id})">Apply Now</button>
    `;
    jobsDiv.appendChild(div);
  });
}

function applyJob(id) {
  localStorage.setItem("selectedJob", id);
  window.open("job.html", "_blank");
}

const jobDetailsDiv = document.getElementById("jobDetails");
if (jobDetailsDiv) {
  const jobId = localStorage.getItem("selectedJob");
  const job = jobs.find(j => j.id == jobId);

  jobDetailsDiv.innerHTML = `
    <h2>${job.title}</h2>
    <p><b>${job.company}</b></p>
    <p>${job.location}</p>
    <p>${job.description}</p>
  `;
}

function submitApplication() {
  alert("Applied Successfully!");
}

function scrollToApplied() {
  document.getElementById("appliedTitle").scrollIntoView();
}