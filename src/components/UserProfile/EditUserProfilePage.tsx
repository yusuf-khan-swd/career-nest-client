"use client";

const EditUserProfilePage = ({ id }: { id: string }) => {
  const userInfo: any = {};

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = userInfo?.email;
    const number = form.number.value;

    const user = { email, name, number };
    console.log(user);

    fetch(`http://localhost:5000/user/profile/${userInfo?._id}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div>
      <h1 className="text-3xl font-semibold text-center mb-4">
        Update Profile Information
      </h1>
      <div className="hero bg-base-200 p-8">
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form className="card-body" onSubmit={handleSubmit}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Name"
                className="input input-bordered"
                defaultValue={userInfo?.name}
                name="name"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                value={userInfo?.email}
                name="email"
                required
                disabled
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Mobile Number</span>
              </label>
              <input
                type="text"
                placeholder="Mobile"
                className="input input-bordered"
                defaultValue={userInfo?.number}
                name="number"
              />
            </div>
            <div className="form-control mt-6">
              <button type="submit" className="btn btn-accent text-white">
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditUserProfilePage;
