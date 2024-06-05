"use client";

import { getBaseUrl } from "@/helpers/getBaseUrl";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";

const EditJobsPage = ({ id }: { id: string }) => {
  const [jobInfo, setJobInfo] = useState<null | any>({});

  const token = localStorage.getItem("token");

  useEffect(() => {
    const baseUrl = getBaseUrl();

    fetch(`${baseUrl}/jobs/${id}`)
      .then((res) => res.json())
      .then((result) => {
        if (result) {
          setJobInfo(result);
        } else {
          toast.error("Job data failed to get");
        }
      });
  }, [id, token]);

  console.log(jobInfo);

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = jobInfo?.email;
    const number = form.number.value;

    const job = { email, name, number };
    console.log(job);

    const baseUrl = getBaseUrl();

    fetch(`${baseUrl}/jobs/${id}`, {
      method: "PATCH",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-type": "application/json",
      },
      body: JSON.stringify(job),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result?.data) {
          toast.success("Job data updated success");
        } else {
          toast.error("Job data update failed");
        }
      });
  };
  return (
    <div>
      <h1>Edit Jobs Page{id}</h1>
      <div>
        <h1 className="text-5xl font-bold text-center mt-4 mb-6">Update Job</h1>
        <div className="card shadow-xl bg-base-200">
          <div className="card-body">
            <form onSubmit={handleSubmit}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    <span className="text-red-500 mr-1">*</span>Job Title
                  </span>
                </label>
                <input
                  type="text"
                  name="title"
                  placeholder="Title"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    <span className="text-red-500 mr-1">*</span>Company Name
                  </span>
                </label>
                <input
                  type="text"
                  name="company"
                  placeholder="Company Name"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    <span className="text-red-500 mr-1">*</span>Job Type
                  </span>
                </label>
                <input
                  type="text"
                  name="type"
                  placeholder="Job Type"
                  className="input input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    <span className="text-red-500 mr-1">*</span>Location
                  </span>
                </label>
                <input
                  type="text"
                  name="location"
                  placeholder="Location"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    <span className="text-red-500 mr-1">*</span>Salary
                  </span>
                </label>
                <input
                  type="number"
                  name="salary"
                  placeholder="Salary"
                  className="input input-bordered"
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Image URL</span>
                </label>
                <input
                  type="text"
                  name="image_url"
                  placeholder="Image URL"
                  className="input input-bordered"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">
                    <span className="text-red-500 mr-1">*</span>Description
                  </span>
                </label>
                <textarea
                  name="description"
                  placeholder="Description"
                  className="textarea textarea-bordered p-2"
                  rows={6}
                  required
                ></textarea>
              </div>
              <div className="mt-2 flex justify-center items-center">
                <input
                  className="btn mt-4 w-full btn-primary text-white p-4"
                  type="submit"
                  value="Update Job"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditJobsPage;
