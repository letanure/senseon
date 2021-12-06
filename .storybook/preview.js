import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: "senseon",
    values: [
      {
        name: "senseon",
        value: "#174140"
      },
      {
        name: "light",
        value: "#fafafa"
      }
    ]
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  }
};
