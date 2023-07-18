import React from "react";
import Statistics from "../Dashboard/Overview";
import { Card, Col, Grid, Title } from "@tremor/react";
import { InformationCircleIcon } from "@heroicons/react/outline";

const StatisticsPage = () => {
  return (
    <div className="flex justify-center w-screen overflow-x-hidden p-10">
      <div className="w-screen">
        <div className="flex items-center">
          <Title className="mr-2">Statistiques</Title>{" "}
        </div>
        <Statistics />
      </div>
    </div>
  );
};

export default StatisticsPage;
