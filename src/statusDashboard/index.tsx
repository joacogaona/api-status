import Header from "./Header";
import ApiCard from "./ApiCard";

const apiList = [
  "accounts",
  "assets",
  "customers",
  "datapoints",
  "devices",
  "documents",
  "forms",
  "invites",
  "media",
  "messages",
  "namespaces",
  "orders",
  "patients",
  "relationships",
  "rules",
  "templates",
  "users",
  "workflows",
];

const StatusDashBoard = () => {
  return (
    <>
      <Header />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 p-4   p-24  ">
        {apiList.map((apiName) => (
          <ApiCard key={apiName} apiName={apiName} />
        ))}
      </div>
    </>
  );
};

export default StatusDashBoard;
