import React from "react";
import {
  FaHeart,
  FaLeaf,
  FaUsers,
  FaClock,
  FaHandsHelping,
} from "react-icons/fa";
import Container from "../Responsive/Container";

const OurMission = () => {
  const stats = [
    { number: "5,000+", label: "Meals Shared", color: "text-primary" },
    { number: "1,200+", label: "Active Users", color: "text-secondary" },
    { number: "50+", label: "Communities", color: "text-accent" },
  ];

  const features = [
    {
      icon: <FaHeart className="w-8 h-8" />,
      title: "Community First",
      desc: "Building stronger connections through the simple act of sharing food.",
      color: "text-primary",
    },
    {
      icon: <FaLeaf className="w-8 h-8" />,
      title: "Sustainability",
      desc: "Reducing food waste and environmental impact, one meal at a time.",
      color: "text-primary",
    },
    {
      icon: <FaUsers className="w-8 h-8" />,
      title: "Accessibility",
      desc: "Making nutritious food accessible to everyone in our community.",
      color: "text-secondary",
    },
    {
      icon: <FaClock className="w-8 h-8" />,
      title: "Real-Time",
      desc: "Instant notifications ensure food reaches those who need it quickly.",
      color: "text-accent",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-base-200">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left: Mission Text */}
          <div className="space-y-6" data-aos="fade-right">
            <h2 className="text-3xl md:text-4xl font-bold text-base-content">
              Our Mission
            </h2>
            <p className="text-muted leading-relaxed">
              ShareBite was built to tackle two critical issues:{" "}
              <strong>food waste</strong> and <strong>food insecurity</strong>.
              Every day, tons of perfectly good food goes to waste while many in
              our community go hungry.
            </p>
            <p className="text-muted leading-relaxed">
              We believe that <strong>technology can bridge this gap</strong>.
              By connecting those with surplus food to those who need it, we
              create a more <span className="text-primary">sustainable</span>{" "}
              and <span className="text-secondary">compassionate</span>{" "}
              community.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center"
                  data-aos="zoom-in"
                  data-aos-delay={index * 100}>
                  <div className={`text-3xl font-bold ${stat.color}`}>
                    {stat.number}
                  </div>
                  <p className="text-xs text-muted mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Feature Cards */}
          <div
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            data-aos="fade-left">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-base-100 rounded-2xl p-6 shadow-lg border border-neutral/20 hover:shadow-xl transition-all duration-300 group">
                <div
                  className={`mb-4 ${feature.color} group-hover:scale-110 transition-transform inline-block`}>
                  {feature.icon}
                </div>
                <h3 className="text-lg font-semibold text-base-content mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default OurMission;
