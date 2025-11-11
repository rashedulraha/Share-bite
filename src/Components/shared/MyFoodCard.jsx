import React from "react";
import { FaClock, FaEdit, FaMapMarkerAlt, FaTrash } from "react-icons/fa";

const MyFoodCard = ({ foods }) => {
  const { image, foodName, notes, pickup_location, quantity, expiry, _id } =
    foods || {};
  return (
    <div
      key={_id}
      className="card bg-base-100  rounded-md overflow-hidden border border-neutral/20">
      <div className="relative">
        <img src={image} alt={foodName} className="w-full h-48 object-cover" />
        <div className="absolute top-3 right-3 bg-base-100 text-base-content px-3 py-1.5 rounded-full text-sm font-semibold shadow-md">
          {quantity} portions
        </div>
      </div>

      <div className="p-5 space-y-3">
        <h3 className="text-lg font-bold text-base-content line-clamp-1">
          {foodName}
        </h3>

        <p className="text-sm text-muted line-clamp-2">{notes}</p>

        <div className="flex items-center gap-3 text-xs text-muted">
          <div className="flex items-center gap-1">
            <FaMapMarkerAlt className="w-3.5 h-3.5 text-primary" />
            <span className="truncate max-w-[140px]">
              {pickup_location?.split(",")[1]?.trim() || pickup_location}
            </span>
          </div>
          <div className="flex items-center gap-1">
            <FaClock className="w-3.5 h-3.5 text-secondary" />
            <span>{expiry}</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-3 border-t border-neutral/20">
          <div className="flex items-center gap-2">
            <button className="btn btn-primary shadow-none border-none btn-sm rounded-full flex items-center gap-1">
              <FaEdit className="w-4 h-4" />
              Edit
            </button>
            <button className="btn btn-error shadow-none border-none btn-sm rounded-full flex items-center gap-1">
              <FaTrash className="w-4 h-4" />
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyFoodCard;
