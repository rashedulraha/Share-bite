import React from "react";
import { FaEdit, FaSignOutAlt } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { MdDelete } from "react-icons/md";
import Container from "../Components/Responsive/Container";

const ProfilePage = () => {
  const name = "Rahim Ahmed";
  const photoURL =
    "https://ui-avatars.com/api/?name=Rahim+Ahmed&background=22d3a6&color=fff&bold=true";
  const memberSince = "January 2025";
  const currentTime = "November 10, 2025 02:28 PM +06";
  const country = "BD";

  return (
    <section className="py-10 bg-base-100 ">
      <Container>
        <div className="max-w-3xl mx-auto">
          {/* Header Card */}
          <div className="p-6 rounded-md border border-neutral/20">
            <div className="flex flex-col items-center text-center">
              <div className="avatar mb-5">
                <div className="w-28 h-28 rounded-full ring ring-white ring-offset-base-100 ring-offset-4">
                  <img src={photoURL} alt={name} className="object-cover" />
                </div>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold">{name}</h1>
              <p className="text-base-200">Member since {memberSince}</p>
            </div>
          </div>

          {/* User Info */}
          <div className="bg-base-200 rounded-2xl p-5 mt-6 border border-neutral/20 text-center text-sm">
            <p className="text-base-content">
              <strong>Current time:</strong> {currentTime}
            </p>
            <p className="text-base-content">
              <strong>Country:</strong> {country}
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            {/* Edit Profile */}
            <button className="btn btn-primary flex-1 rounded-full shadow-md hover:shadow-lg flex items-center justify-center gap-2">
              <FaEdit className="w-4 h-4" />
              Edit Profile
            </button>

            {/* Logout */}
            <button className="btn btn-error flex-1 rounded-full shadow-md hover:shadow-lg flex items-center justify-center gap-2">
              <FaSignOutAlt className="w-4 h-4" />
              Logout
            </button>

            {/* Delete Account */}
            <button className="btn btn-error flex-1 rounded-full shadow-md hover:shadow-lg flex items-center justify-center gap-2">
              <MdDelete className="w-4 h-4" />
              Delete Account
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default ProfilePage;
