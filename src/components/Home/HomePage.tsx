"use client"

import { getBaseUrl } from "@/helpers/getBaseUrl";
import { useEffect, useState } from "react";
import JobCard from "../Jobs/JobCard";
import Banner from "../ui/Banner";

const HomePage = () => {
  const [jobs, setJobs] = useState<null | any>([]);

  useEffect(() => {
    const baseUrl = getBaseUrl();

    fetch(`${baseUrl}/jobs`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  console.log(jobs);

  return (
    <div>
      <Banner />
      <div className="grid grid-cols-1 gap-4">
        {jobs.slice(0, 2).map((job: any) => (
          <JobCard key={job?.id} job={job} />
        ))}
      </div>
      <h1 className="text-3xl font-bold text-center">Home page</h1>
    </div>
  );
};

export default HomePage;
