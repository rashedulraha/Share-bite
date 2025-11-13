import React from "react";
import { FaCheck, FaTimes } from "react-icons/fa";
import { toast } from "react-toastify";

const RequestCard = ({ requestData }) => {
  const handleReject = () => {
    toast.error("Rejected successfully");
  };

  const handleAccept = () => {
    toast.success("Accepted successfully");
  };

  const {
    photoURL,
    name,
    location,
    whyNeed,
    contactNo,
    status = "pending",
  } = requestData || {};

  return (
    <tr className="hover:bg-base-300/50 transition-colors">
      {/* Requester */}
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="w-10 h-10 rounded-full ring ring-primary ring-offset-2 ring-offset-base-100">
              <img
                src={
                  photoURL ||
                  `https://ui-avatars.com/api/?name=${name}&background=22d3a6&color=fff`
                }
                alt={name}
              />
            </div>
          </div>
          <p className="font-medium text-base-content">{name}</p>
        </div>
      </td>

      {/* Location */}
      <td className="text-sm text-muted">{location}</td>

      {/* Reason */}
      <td className="text-sm text-muted max-w-xs line-clamp-2">{whyNeed}</td>

      {/* Contact */}
      <td className="text-sm text-muted">{contactNo}</td>

      {/* Status */}
      <td>
        <span
          className={`badge badge-sm font-medium px-3 py-2 ${
            status === "accepted"
              ? "badge-success"
              : status === "rejected"
              ? "badge-error"
              : "badge-warning"
          }`}>
          {status}
        </span>
      </td>

      {/* Action */}
      <td>
        {status === "pending" ? (
          <div className="flex gap-2">
            <button
              onClick={handleAccept}
              className="btn btn-success btn-xs rounded-full px-4 shadow-none"
              title="Accept">
              <FaCheck className="w-4 h-4" />
            </button>
            <button
              onClick={handleReject}
              className="btn btn-error btn-xs rounded-full px-4 shadow-none"
              title="Reject">
              <FaTimes className="w-4 h-4" />
            </button>
          </div>
        ) : (
          <span className="text-xs text-muted">—</span>
        )}
      </td>
    </tr>
  );
};

export default RequestCard;
