import { useEffect, useRef } from "react";
import * as d3 from "d3";
import { geoAlbers, geoAlbersUsa, geoPath } from "d3";
import * as topojsonClient from "topojson-client";
import albersTopoJson from "@/json/topojson-albers-map.json";

const albersProjection = geoAlbers();
const albersUsaProjection = geoAlbersUsa();
const albersGeoPath = geoPath(albersProjection);
const albersUsaGeoPath = geoPath(albersUsaProjection);

export const AlbersCountyMap = ({ children }) => {
  const counties = topojsonClient.feature(albersTopoJson, "counties");

  return (
    <div className="w-full h-full">
      <svg viewBox="0 -60 975 610" xmlns="http://www.w3.org/2000/svg">
        <path d={albersGeoPath(counties)} stroke="white" fill="grey" />

        {children}
      </svg>
    </div>
  );
};

export const AlbersStateMap = ({ children }) => {
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

export const AlbersUsaStateMap = ({ children }) => {
  const states = topojsonClient.feature(albersTopoJson, "states");

  return (
    <div className="w-full h-full">
      <svg viewBox="0 -60 975 610" xmlns="http://www.w3.org/2000/svg">
        <path d={albersUsaGeoPath(states)} stroke="white" fill="grey" />

        {children}
      </svg>
    </div>
  );
};

export const AlbersUsaStateMapCanvas = ({ children }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    const width = 975;
    const height = 610;

    // Set up projection
    const projection = d3.geoAlbersUsa();
    // .scale(1300)
    // .translate([width / 2, height / 2]);

    const path = d3.geoPath().projection(projection).context(context);

    const states = topojsonClient.feature(albersTopoJson, "states");

    context.clearRect(0, 0, width, height);

    // Draw states
    context.fillStyle = "grey";
    context.strokeStyle = "white";
    context.lineWidth = 1;

    states.features.forEach((feature) => {
      context.beginPath();
      path(feature);
      context.fill();
      context.stroke();
    });
  }, []);

  return (
    <div className="w-full h-full">
      <canvas
        ref={canvasRef}
        width={975}
        height={610}
        style={{ width: "100%", height: "100%" }}
      />
      {children}
    </div>
  );
};
