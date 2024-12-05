import React, { useState } from "react";
import Header from "./Components/Header";
import SearchBar from "./Components/SearchBar";
import JobCards from "./Components/JobCards";
import { mockJobs } from "./Data/Jobs";

const App = () => {
  const [filters, setFilters] = useState({ keyword: "", location: "" });
  const [isSavedJobsOnly, setIsSavedJobsOnly] = useState(false);
  const filteredJobs = mockJobs
    .filter(
      (job) =>
        job.title.toLowerCase().includes(filters.keyword.toLowerCase()) &&
        job.location.toLowerCase().includes(filters.location.toLowerCase()) &&
        (!isSavedJobsOnly || job.isSaved)
    )
    .map((job) => ({
      id: job.id, 
      title: job.title,
      company: job.company,
      location: job.location,
      description: job.description,
    }));

  return (
    <>
      <Header toggleSavedJobs={() => setIsSavedJobsOnly(!isSavedJobsOnly)} isSavedJobsOnly={isSavedJobsOnly} />
      <SearchBar filters={filters} setFilters={setFilters} />

   
      {filteredJobs.length > 0 ? (
        filteredJobs.map((job) => (
          <JobCards
            key={job.id}
            title={job.title}
            company={job.company}
            location={job.location}
            description={job.description} 
          />
        ))
      ) : (
        <p>No jobs found</p>
      )}


    </>
  );
};

export default App;
