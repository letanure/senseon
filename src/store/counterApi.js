import setApi from "../api";

const counterApi = setApi("counter");

export const counter = {
  namespace: "counterApi",
  actions: {
    DECREMENT: "DECREMENT",
    INCREMENT: "INCREMENT",
    LOAD: "LOAD"
  },
  mutations: {
    CHANGE_COUNTER: "CHANGE_COUNTER"
  }
};

export const state = () => ({
  value: 0
});

export const actions = {
  async [counter.actions.DECREMENT]({ commit }) {
    const { value } = await counterApi.decrement();
    commit(counter.mutations.CHANGE_COUNTER, value);
  },

  async [counter.actions.INCREMENT]({ commit }) {
    const { value } = await counterApi.increment();
    commit(counter.mutations.CHANGE_COUNTER, value);
  },

  async [counter.actions.LOAD]({ commit }) {
    const { value } = await counterApi.get();
    commit(counter.mutations.CHANGE_COUNTER, value);
  }
};

export const mutations = {
  [counter.mutations.CHANGE_COUNTER](state, delta) {
    state.value = delta;
  }
};
