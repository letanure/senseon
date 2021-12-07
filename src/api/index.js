import axios from "axios";
import counter from "./counter";
import login from "./login";
const apis = {
  counter,
  login
};

export default apiKey => {
  const apiConfig = apis[apiKey];
  return Object.keys(apiConfig).reduce((api, apiMethod) => {
    const config = apiConfig[apiMethod];
    return {
      ...api,
      [apiMethod]: async params => {
        const res = await axios[config.method](config.url, params);
        console.log(res);
        return res.status === 200 ? res.data : false;
      }
    };
  }, {});
};
