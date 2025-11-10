import React, { useState, useEffect } from "react";
import { FaUtensils, FaHeart, FaLeaf, FaClock, FaGlobe } from "react-icons/fa";

const UserInfoCarouselCard = () => {
  const [index, setIndex] = useState(0);

  const features = [
    {
      icon: <FaUtensils className="text-primary text-xl" />,
      title: "Donate in 2 Minutes",
      desc: "List food, set pickup, help someone.",
      bg: "bg-primary/10",
    },
    {
      icon: <FaHeart className="text-secondary text-xl" />,
      title: "Pickup in Real-Time",
      desc: "Get notified, collect, reduce waste.",
      bg: "bg-secondary/10",
    },
    {
      icon: <FaLeaf className="text-accent text-xl" />,
      title: "Zero Waste Goal",
      desc: "Every meal saved helps the planet.",
      bg: "bg-accent/10",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % features.length);
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const item = features[index];

  return (
    <div className="relative max-w-sm mx-auto" data-aos="fade-up">
      <div className=" rounded-2xl p-5 shadow-lg border border-neutral/20">
        <div className={`flex items-center gap-3 p-4 rounded-xl ${item.bg}`}>
          <div className="p-3 bg-white/50 rounded-full shadow">{item.icon}</div>
          <div>
            <h3 className="font-semibold text-base">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.desc}</p>
          </div>
        </div>

        <div className="mt-4 space-y-2 text-sm">
          <div className="flex items-center gap-2">
            <FaClock className="text-primary" />
            <span>
              <b>Current time:</b> November 10, 2025 – 02:43 PM
            </span>
          </div>
          <div className="flex items-center gap-2">
            <FaGlobe className="text-secondary" />
            <span>
              <b>Country:</b> Bangladesh
            </span>
          </div>
        </div>

        <div className="flex justify-center mt-3 gap-2">
          {features.map((_, i) => (
            <div
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === index ? "w-6 bg-primary" : "w-2 bg-gray-400"
              }`}></div>
          ))}
        </div>
      </div>

      <div className="absolute -top-4 -right-4 bg-white border p-3 rounded-xl shadow">
        <div className="text-xl font-bold text-primary">98%</div>
        <p className="text-xs text-gray-500">Success Rate</p>
      </div>
    </div>
  );
};

export default UserInfoCarouselCard;
