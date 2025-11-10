import React from "react";
import Container from "../Responsive/Container";
import useAxios from "../../Hooks/useAxios";

const Skeleton = ({ url }) => {
  const { foodCardData } = useAxios(url);

  return (
    <Container>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 py-10 ">
        {foodCardData?.map((skeleton) => (
          <div className="flex w-full flex-col gap-4" key={skeleton}>
            <div className="skeleton h-48 bg-base-300 w-full "></div>
            <div className="skeleton h-6 w-48"></div>
            <div className="skeleton h-5 w-full"></div>
            <div className="skeleton h-5 w-full"></div>
            <div className="flex gap-5">
              <div className="skeleton h-8 flex-3"></div>{" "}
              <div className="skeleton h-8 flex-1 "></div>
            </div>
          </div>
        ))}
      </div>
    </Container>
  );
};

export default Skeleton;
