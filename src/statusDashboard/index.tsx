import Header from "./Header";
import ApiCard from "./ApiCard";
import { API_LIST } from "../config/constants";

const StatusDashBoard = () => {
  return (
    <>
      <Header />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 p-4   p-24  ">
        {API_LIST.map((apiName) => (
          <ApiCard key={apiName} apiName={apiName} />
        ))}
      </div>
    </>
  );
};

export default StatusDashBoard;
