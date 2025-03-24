import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    // fetch("/api/tornadoData/getFirstTornadoEvent")
    //   .then((res) => res.json())
    //   .then((data) => setData(data));
    // fetch(`/api/tornadoData/summaries/magnitude/${5}`)
    //   .then((res) => res.json())
    //   .then((data) => setData(data));
    // fetch(`/api/tornadoData/summaries/state/PA`)
    //   .then((res) => res.json())
    //   .then((data) => setData(data));
    // fetch(`/api/tornadoData/summaries/year/${2011}`)
    //   .then((res) => res.json())
    //   .then((data) => setData(data));
    fetch("/api/tornadoData/summaries/annual")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) => console.log(`Error: ${error}`));
    // fetch(`/api/tornadoData/summaries/magnitudes`)
    //   .then((res) => res.json())
    //   .then((data) => setData(data));
    // fetch(`/api/tornadoData/summaries/states`)
    //   .then((res) => res.json())
    //   .then((data) => setData(data));
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        {/* <p>{JSON.stringify(data, null, 4)}</p> */}
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
