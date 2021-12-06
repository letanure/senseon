import axios from "axios";
import counter from "./counter";
const apis = {
  counter
};

export default apiKey => {
  const apiConfig = apis[apiKey];
  return Object.keys(apiConfig).reduce((api, apiMethod) => {
    const config = apiConfig[apiMethod];
    return {
      ...api,
      [apiMethod]: async params => {
        const res = await axios[config.method](config.url, params);
        return res.status === 200 ? res.data : null;
      }
    };
  }, {});
};
