import axios from 'axios'

type Api = {
    success: boolean;
    message: string;
    hostname: string;
    time: number;
  };

async function fetchApiStatus({apiName}:{apiName:string}): Promise<Api> {
    const res = await axios.get(
      `https://api.factoryfour.com/${apiName}/health/status`
    );
    return res.data;
  }

  export {fetchApiStatus,type Api}