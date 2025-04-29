import React from "react";
import { FaUser } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaServer } from "react-icons/fa6";
import StatItem from "./StatItem";
import Divider from "./Divider";

const Stats = () => {
  return (
    <div className="hidden w-full items-center justify-center lg:flex">
      <div className="flex w-full max-w-[800px] xl:max-w-[1000px] 2xl:max-w-[1250px] justify-around rounded-2xl py-5 shadow bg-gray-50">
        <StatItem stat="90M+" title="Users" key="stat-users">
          <FaUser />
        </StatItem>
        <Divider />
        <StatItem stat="300+" title="Locations">
          <FaLocationDot />
        </StatItem>
        <Divider />
        <StatItem stat="200+" title="Servers">
          <FaServer />
        </StatItem>
      </div>
    </div>
  );
};

export default Stats;
