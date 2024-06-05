import { getBaseUrl } from "@/helpers/getBaseUrl";
import Link from "next/link";
import toast from "react-hot-toast";

const SingleDashboardJob = ({ job, onDelete }: { job: any; onDelete: any }) => {
  const { _id, title, location, salary, description } = job;
  const token = localStorage.getItem("token");

  const handleDelete = async () => {
    const proceedToDelete = confirm("Are sure you want to delete this Jobs ");

    if (proceedToDelete) {
      const baseUrl = getBaseUrl();

      const res = await fetch(`${baseUrl}/jobs/${_id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const data = await res.json();
      console.log(data);

      if (data) {
        toast.success("Product deleted successfully");
      } else {
        toast.error("Product deleted failed");
      }

      onDelete(_id);
    }
  };

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <h3 className="text-xl font-semibold">Brand: {location}</h3>
        <h3 className="text-xl font-semibold">Price: ${salary}</h3>
        <p>Description: {description}</p>
        <div className="card-actions justify-end">
          <Link href={`/jobs/view/${_id}`}>
            <button className="btn bg-indigo-500 text-white">
              See details
            </button>
          </Link>
          <Link href={`all-jobs/edit/${_id}`}>
            <button className="btn bg-green-600 text-white">Edit</button>
          </Link>
          <button onClick={handleDelete} className="btn bg-red-500 text-white">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleDashboardJob;
