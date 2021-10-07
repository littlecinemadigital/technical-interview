import React, { useEffect, useState } from "react";

/**
 * Option 3:
 * Using hooks, fetches data from fetchUrl
 * When the component re-renders, it should not re-fetch the data.
 */
const fetchUrl = "http://httpbin.org/anything";

async function fetchData(url: string = fetchUrl): Promise<unknown> {
  const headers = {
    "Content-Type": "application/json",
    Accept: "application/json",
  };

  return new Promise((res, rej) => {
    fetch(`${url}`, {
      headers,
      method: "POST",
    })
      .then((data) => res(data.json()))
      .catch((err) => rej(err));
  });
}

const Component = (): JSX.Element => {
  const [data, setData] = useState();
  const noDataCopy = "Oh nooes it looks like nothing was found here";

  // fetch the data once
  useEffect(() => {
    fetchData()
      .then((data) => setData(data))
      .catch(() => setData(null));
  }, []);

  return (
    // of course, we would know what data to expect, and if we didn't,
    // we could write a function to determine the data types and how to manage it,
    // however I'm imagining that's out of scope? So for brevity, I'll
    // output data as is
    <div>{data ? JSON.stringify(data, null, 2) : noDataCopy}</div>
  );
};
