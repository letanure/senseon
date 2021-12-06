const apiRoot = "/api/counter";

const apiMap = {
  get: {
    method: "get",
    url: `${apiRoot}`
  },
  increment: {
    method: "get",
    url: `${apiRoot}/increment`
  },
  decrement: {
    method: "get",
    url: `${apiRoot}/decrement`
  },
  reset: {
    method: "get",
    url: `${apiRoot}/reset`
  }
};

export default apiMap;
