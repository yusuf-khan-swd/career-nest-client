"use client";
import { useEffect, useState } from "react";
import SingleDashboardJob from "./SingleDashboardJob";

const DashboardAllJobsPage = () => {
  const [jobs, setJobs] = useState<null | any>([]);

  useEffect(() => {
    fetch("http://localhost:5000/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);

  const handleDeleteProduct = (id: string) => {
    setJobs(jobs.filter((product: any) => product._id !== id));
  };

  return (
    <div>
      <h1 className="text-5xl font-bold text-center">All Jobs</h1>
      <div className="my-16 flex justify-center flex-wrap gap-4">
        {jobs.map((shoe: any) => (
          <SingleDashboardJob
            key={shoe?.id}
            job={shoe}
            onDelete={handleDeleteProduct}
          />
        ))}
      </div>
    </div>
  );
};

export default DashboardAllJobsPage;
