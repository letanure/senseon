import axios from 'axios'

const API_BASE_URL = '/api';
const API_POLL_INTERVAL_MS = 10000;

let apiPollToken = null;

export const app = {
  namespace: 'app',
  actions: {
    POLL_FOR_API: 'POLL_FOR_API'
  },
  mutations: {
    SET_API_AVAILABLE: 'SET_API_AVAILABLE',
    SET_API_MOCKED: 'SET_API_MOCKED'
  }
};

export const state = () => ({
  apiAvailable: null,
  apiMocked: null
});

export const actions = {
  [app.actions.POLL_FOR_API]({ commit, state }) {
    if (apiPollToken) clearTimeout(apiPollToken);

    const poll = () => axios.get(`${API_BASE_URL}`)
      .then(response => {
        if (!state.apiAvailable) {
          commit(app.mutations.SET_API_AVAILABLE, response.data.success);
          if (response.data.mocked) commit(app.mutations.SET_API_MOCKED, true);
        }
      })
      .catch(() => state.apiAvailable && commit(app.mutations.SET_API_AVAILABLE, false))
      .finally(() => apiPollToken = setTimeout(poll, API_POLL_INTERVAL_MS));

    poll();
  }
};

export const mutations = {
  [app.mutations.SET_API_AVAILABLE](state, payload) {
    state.apiAvailable = payload;
  },
  [app.mutations.SET_API_MOCKED](state, payload) {
    state.apiMocked = payload;
  }
}
