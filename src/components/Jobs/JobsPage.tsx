"use client";

import { getBaseUrl } from "@/helpers/getBaseUrl";
import { useEffect, useState } from "react";
import JobCard from "./JobCard";

const JobsPage = () => {
  const [jobs, setJobs] = useState<null | any>([]);

  useEffect(() => {
    const baseUrl = getBaseUrl();

    fetch(`${baseUrl}/jobs`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  const handleSearch = (value: any) => {
    console.log(value);
  };

  return (
    <div className="m-2 container mx-auto">
      <h1 className="text-3xl font-bold text-center mb-2">All Jobs</h1>
      <div className="form-control">
        <label className="label">
          <span className="label-text">Search</span>
        </label>
        <input
          type="text"
          placeholder="Search"
          className="input input-bordered"
          onChange={(e: any) => handleSearch(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 gap-4">
        {jobs.map((job: any) => (
          <JobCard key={job?.id} job={job} />
        ))}
      </div>
    </div>
  );
};

export default JobsPage;
