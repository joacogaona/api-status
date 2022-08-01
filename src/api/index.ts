import axios from 'axios'

type Api = {
    success: boolean;
    message: string;
    hostname: string;
    time: number;
  };
let herokuProxy = ''
async function fetchApiStatus({apiName}:{apiName:string}): Promise<Api> {
  if( apiName === 'messages' || apiName === 'users' || apiName === 'invites'){
    herokuProxy = `https://cors-anywhere.herokuapp.com/`
  }else{
    herokuProxy =''
  }
    const res = await axios.get(
      `${herokuProxy}https://api.factoryfour.com/${apiName}/health/status`
    );
    return res.data;
  }

  export {fetchApiStatus,type Api}