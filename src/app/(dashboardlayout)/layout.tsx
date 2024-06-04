import Image from "next/image";
import Link from "next/link";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const websiteName = "CareerNest";

  const dashboardItems = (
    <>
      <li>
        <Link href="/dashboard">Dashboard</Link>
      </li>
      <li>
        <Link href="/add-jobs">Add Jobs</Link>
      </li>
      <li>
        <Link href="/all-jobs">All Jobs</Link>
      </li>
    </>
  );

  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-base-100 border-b-2">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-1 px-2 mx-2">
            <a className="btn btn-ghost text-xl" href="/">
              {websiteName}
            </a>
          </div>
          <div className="flex-none hidden lg:block">
            <ul className="menu menu-horizontal">
              {/* Navbar menu content here */}
              {dashboardItems}
            </ul>
          </div>
          <div className="dropdown dropdown-end">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar"
            >
              <div className="w-10 rounded-full">
                <Image
                  src={"/placeholder.jpg"}
                  alt="avatar image"
                  width={40}
                  height={40}
                />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <button className="btn btn-error btn-sm">Logout</button>
              </li>
            </ul>
          </div>
        </div>
        {/* Page content here */}
        <div className="m-2">{children}</div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          {dashboardItems}
        </ul>
      </div>
    </div>
  );
};

export default DashboardLayout;
