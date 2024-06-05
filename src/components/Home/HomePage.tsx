"use client";

import { getBaseUrl } from "@/helpers/getBaseUrl";
import { useEffect, useState } from "react";
import JobCard from "../Jobs/JobCard";
import Banner from "../ui/Banner";
import Features from "../ui/Features";
import Statics from "../ui/Statics";

const HomePage = () => {
  const [jobs, setJobs] = useState<null | any>([]);

  useEffect(() => {
    const baseUrl = getBaseUrl();

    fetch(`${baseUrl}/jobs`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  return (
    <div>
      <Banner />
      <div className="m-2 container mx-auto mt-12">
        <div>
          <h1 className="text-3xl font-bold mb-3 text-center">Recent Jobs</h1>
          <div className="grid grid-cols-1 gap-4">
            {jobs.slice(0, 2).map((job: any) => (
              <JobCard key={job?.id} job={job} />
            ))}
          </div>
        </div>
        <div>
          <Features />
          <Statics />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
