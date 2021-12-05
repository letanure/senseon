// import axios from 'axios'

// const API_BASE_URL = '/api/counter/';

// An object that names all possible store actions and mutations.
// This can be referenced in components
export const counter = {
  namespace: 'counter',
  actions: {
    DECREMENT: 'DECREMENT',
    INCREMENT: 'INCREMENT',
  },
  mutations: {
    CHANGE_COUNTER: 'CHANGE_COUNTER',
  },
}

// This defines the initial state
export const state = () => ({
  value: 0,
})

// Implementation of the store actions. Action can perform asynchronous tasks.
export const actions = {
  // This action makes a commit directly to the store without any asynchronous calls.
  [counter.actions.DECREMENT]({ commit }) {
    commit(counter.mutations.CHANGE_COUNTER, -1)
  },
  // This action commits a mutation in an asynchronous callback of a 10ms timeout.
  [counter.actions.INCREMENT]({ commit }) {
    setTimeout(() => commit(counter.mutations.CHANGE_COUNTER, +1), 10)
  },
}

// Implementation of the state mutations
export const mutations = {
  [counter.mutations.CHANGE_COUNTER](state, delta) {
    state.value += delta
  },
}
