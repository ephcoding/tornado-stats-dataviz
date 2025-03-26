import { geoAlbers, geoPath } from "d3";
import * as topojsonClient from "topojson-client";
import albersTopoJson from "@/json/topojson-albers-map.json";

const albersProjection = geoAlbers();
const albersGeoPath = geoPath(albersProjection);

export const D3UsMap = ({ children }) => {
  const states = topojsonClient.feature(albersTopoJson, "states");

  return (
    <div className="w-full h-full">
      <svg viewBox="0 -60 975 610" xmlns="http://www.w3.org/2000/svg">
        <path d={albersGeoPath(states)} stroke="white" fill="grey" />

        {children}
      </svg>
    </div>
  );
};
