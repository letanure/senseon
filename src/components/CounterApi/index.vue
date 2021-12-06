<template>
  <div class="CounterApi">
    <button
      class="decrement"
      type="button"
      @click="handleCounterDecrement"
      :disabled="!apiAvailable"
    >
      -
    </button>

    <span class="value">{{ value }}</span>

    <button
      class="increment"
      type="button"
      @click="handleCounterIncrement"
      :disabled="!apiAvailable"
    >
      +
    </button>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
import { counter } from "@/store/counterApi";
import { app } from "@/store/app";

export default {
  name: "Counter",
  computed: {
    ...mapState(counter.namespace, ["value"]),
    ...mapState(app.namespace, ["apiAvailable"])
  },

  watch: {
    apiAvailable(newValue) {
      if (newValue) {
        this[counter.actions.LOAD]();
      }
    }
  },

  methods: {
    ...mapActions(counter.namespace, [
      counter.actions.DECREMENT,
      counter.actions.INCREMENT,
      counter.actions.LOAD
    ]),

    handleCounterDecrement() {
      this[counter.actions.DECREMENT]();
    },

    handleCounterIncrement() {
      this[counter.actions.INCREMENT]();
    }
  }
};
</script>
