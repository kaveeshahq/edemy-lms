import React from "react";
import { assets } from "../../assets/assets.js";
import { Link } from "react-router-dom";
import { useClerk, UserButton, useUser } from "@clerk/clerk-react";

const Navbar = () => {
  const isCourseListPage = location.pathname.includes("/course-list");

  const { openSignIn } = useClerk();
  const { user } = useUser();

  return (
    <div
      className={`flex items-center justify-between px-4 sm:px-10 md:px-14 lg:px-36 border-b border-gray-400 py-4 ${
        isCourseListPage ? "bg-white" : "bg-cyan-100/70"
      } `}
    >
      <img
        src={assets.logo}
        alt="Logo"
        className="w-28 lg:w-32 cursor-pointer "
      />
      <div className="hidden md:flex items-center gap-5 text-gray-500 ">
        <div className="flex items-center gap-5">
          {user && (
            <>
              <button>Become Educator</button>
              <Link to="/my-enrollments">My Enrollments</Link>
            </>
          )}
        </div>
        {user ? (
          <UserButton />
        ) : (
          <button
            onClick={() => openSignIn()}
            className="bg-blue-600 text-white px-5 py-2 rounded-full cursor-pointer "
          >
            Create Account
          </button>
        )}
      </div>
      {/* For mobile screns */}
      <div className="md:hidden flex items-center gap-2 sm:gap-5 text-gray-500">
        <div className="flex items-center gap-1 sm:gap-2 max-sm:text-xs">
          {user && (
            <>
              <button>Become Educator</button>
              <Link to="/my-enrollments">My Enrollments</Link>
            </>
          )}
        </div>
        <button className="cursor-pointer" onClick={()=> openSignIn()}>
          {user ? <UserButton /> : <img src={assets.user_icon} alt="" />}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
