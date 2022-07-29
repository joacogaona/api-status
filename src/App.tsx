import { useQuery } from "@tanstack/react-query";

const apiResponse = {
  name: "ACCOUNTS",
  success: true,
  message: "Healthy :3",
  hostname: "accounts-3e01826bfeed",
  time: 1659107777445,
};

const time = new Date(apiResponse.time);

function App() {
  const { isLoading, error, data } = useQuery(["repoData"], () =>
    fetch("https://api.factoryfour.com/accounts/health/status").then((res) =>
      res.json()
    )
  );
  console.log({ isLoading, error, data });
  return (
    <div>
      <div className="border-2 border-black p-2">
        <h1>{apiResponse.name}</h1>
        <div className={apiResponse.success ? "bg-green-500" : ""}>
          <p>{apiResponse.message}</p>
        </div>
        <p>{apiResponse.hostname}</p>
        <p>{time.toISOString()}</p>
      </div>
    </div>
  );
}

export default App;
