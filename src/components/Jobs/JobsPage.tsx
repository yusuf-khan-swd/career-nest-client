"use client";

import { getBaseUrl } from "@/helpers/getBaseUrl";
import { useEffect, useState } from "react";

const JobsPage = () => {
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
      <h1 className="text-3xl font-bold text-center">Jobs page</h1>
    </div>
  );
};

export default JobsPage;
