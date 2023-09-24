export const getLocalstorageData = () => {
  const storedJobApplication = localStorage.getItem("job-application");
  if (storedJobApplication) {
    return JSON.parse(storedJobApplication);
  }
  return [];
};
export const saveJobApplication = (id) => {
  const saveJobApplications = getLocalstorageData();
  const exists = saveJobApplications.find((jobId) => jobId === id);

  if (exists) {
    return "Already Applied job"; // Return a message if the job ID exists
  } else {
    saveJobApplications.push(id);
    localStorage.setItem(
      "job-application",
      JSON.stringify(saveJobApplications)
    );
    return undefined; // Return undefined if the job ID is added
  }
};
