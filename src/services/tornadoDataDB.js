import axios from "axios";

const tornadoDataClient = axios.create({ baseURL: "/api/tornadoData" });

export const getFirstTornadoEvent = async () => {
  const endpoint = "/getFirstTornadoEvent";

  try {
    const response = await tornadoDataClient.get(endpoint);
    return response.data;
  } catch (error) {
    throw new Error("/// ERROR: TornadoData DB:\n", error);
  }
};
export const getAnnualSummaries = async () => {
  const endpoint = "/summaries/annual";

  try {
    const response = await tornadoDataClient.get(endpoint);
    return response.data;
  } catch (error) {
    throw new Error("/// ERROR: TornadoData DB:\n", error);
  }
};
export const getMagnitudeSummaries = async () => {
  const endpoint = "/summaries/magnitudes";

  try {
    const response = await tornadoDataClient.get(endpoint);
    return response.data;
  } catch (error) {
    throw new Error("/// ERROR: TornadoData DB:\n", error);
  }
};
export const getStateSummaries = async () => {
  const endpoint = "/summaries/states";

  try {
    const response = await tornadoDataClient.get(endpoint);
    return response.data;
  } catch (error) {
    throw new Error("/// ERROR: TornadoData DB:\n", error);
  }
};
export const getAnnualSummaryByYear = async (year) => {
  const endpoint = `/summaries/year/${year}`;

  try {
    const response = await tornadoDataClient.get(endpoint);
    return response.data;
  } catch (error) {
    throw new Error("/// ERROR: TornadoData DB:\n", error);
  }
};
export const getMagnitudeSummaryByMagnitude = async (magnitude) => {
  const endpoint = `/summaries/magnitude/${magnitude}`;

  try {
    const response = await tornadoDataClient.get(endpoint);
    return response.data;
  } catch (error) {
    throw new Error("/// ERROR: TornadoData DB:\n", error);
  }
};
export const getStateSummaryByState = async (state) => {
  const endpoint = `/summaries/state/${state}`;

  try {
    const response = await tornadoDataClient.get(endpoint);
    return response.data;
  } catch (error) {
    throw new Error("/// ERROR: TornadoData DB:\n", error);
  }
};
