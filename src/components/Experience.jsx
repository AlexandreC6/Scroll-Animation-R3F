import { OrbitControls } from "@react-three/drei";
import React from "react";
import Office from "./Office";

const Experience = () => {
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={1}/>
      <Office />
    </>
  );
};

export default Experience;
