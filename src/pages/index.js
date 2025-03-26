import Image from "next/image";
import { useEffect, useState } from "react";
import {
  AlbersStateMap,
  AlbersUsaStateMap,
  AlbersCountyMap,
} from "@/components/D3Maps";

import {
  getFirstTornadoEvent,
  getAnnualSummaries,
  getMagnitudeSummaries,
  getStateSummaries,
  getAnnualSummaryByYear,
  getMagnitudeSummaryByMagnitude,
  getStateSummaryByState,
} from "@/services/tornadoDataDB";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      // const data = await getFirstTornadoEvent();
      // const data = await getAnnualSummaries();
      // const data = await getMagnitudeSummaries();
      // const data = await getStateSummaries();
      // const data = await getAnnualSummaryByYear(2021);
      const data = await getMagnitudeSummaryByMagnitude(3);
      // const data = await getStateSummaryByState("HI");
      if (data) setData(data);
    }
    fetchData();
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <AlbersCountyMap />
        <AlbersStateMap />
        <AlbersUsaStateMap />
        <div>
          {data &&
            data.map((obj, index) => {
              return (
                <div key={index}>
                  {Object.entries(obj).map(([key, value], index) => {
                    return <p key={`${key}-${index}`}>{`${key}: ${value}`}</p>;
                  })}
                  <hr />
                </div>
              );
            })}
        </div>
      </main>
    </div>
  );
}
