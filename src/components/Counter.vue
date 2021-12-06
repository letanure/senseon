<template>
  <div class="Counter">
    <button class="decrement" type="button" @click="handleCounterDecrement">
      -
    </button>

    <span class="value">{{ value }}</span>

    <button class="increment" type="button" @click="handleCounterIncrement">
      +
    </button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
import { counter } from '@/store/counter'

export default {
  name: 'Counter',
  computed: {
    // Map the state from the counter store module so that it can be used by the component.
    // https://vuex.vuejs.org/guide/state.html#the-mapstate-helper
    ...mapState(counter.namespace, ['value'])
  },
  mounted() {
    // This lifecycle hook will be called before the component is first rendered.
    // https://v3.vuejs.org/api/options-lifecycle-hooks.html#mounted
  },
  methods: {
    // Map the actions as members of the component scope.
    // https://vuex.vuejs.org/api/#mapactions
    ...mapActions(counter.namespace, [
      counter.actions.DECREMENT,
      counter.actions.INCREMENT
    ]),
    handleCounterDecrement() {
      // Call the store action that was mapped in the methods block.
      this[counter.actions.DECREMENT]()
    },
    handleCounterIncrement() {
      this[counter.actions.INCREMENT]()
    }
  }
}
</script>
