import { useQuery } from "@tanstack/react-query";
import { getReasonPhrase } from "http-status-codes";
import { AxiosError } from "axios";
import { REFETCH_API_STATUS_INTERVAL_MILISECONDS } from "../config/constants";
import Loader from "../components/Loader";
import { fetchApiStatus, Api } from "../api/index";

const ApiCard = ({ apiName }: { apiName: string }) => {
  const { data, error, isError, isLoading } = useQuery<Api, AxiosError>(
    [apiName],
    () => fetchApiStatus({ apiName }),
    {
      refetchInterval: REFETCH_API_STATUS_INTERVAL_MILISECONDS,
      retry: false,
      refetchOnWindowFocus: false,
    }
  );

  let cardContent;
  if (isError) {
    cardContent = (
      <div className="flex flex-col items-center text-center">
        <h1 className="text-2xl ">{apiName.toUpperCase()}</h1>
        <div className={"bg-red-500 w-11/12 text-white "}>
          <p>Error</p>
        </div>
        <p className="text-red-500 text-xl">OUTAGE</p>
        <p className="text-red-500">
          {error?.response?.status
            ? `${error.response.status} ${getReasonPhrase(
                error.response.status
              )}`
            : `${error.message}`}
        </p>
      </div>
    );
  } else {
    const time = new Date(data?.time ?? "").toLocaleTimeString();
    cardContent = (
      <div className=" flex flex-col items-center text-center">
        <h1 className="text-2xl">{apiName.toUpperCase()}</h1>
        <div className={"bg-green-600 w-11/12 text-white"}>
          <p>Healthy</p>
        </div>
        <p>{data?.hostname}</p>
        <p>{time}</p>
      </div>
    );
  }
  return (
    <div className=" p-2 h-48  bg-white shadow-xl rounded flex justify-center">
      {!isLoading ? cardContent : <Loader />}
    </div>
  );
};

export default ApiCard;
