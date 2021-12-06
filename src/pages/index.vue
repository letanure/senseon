<template>
  <div class="page introduction">
    <section>
      <h2>Welcome to the SenseOn Front-End Tech Test</h2>

      <p>
        Please modify this git repository to complete the tasks as described in
        each section found in the left navigation.
      </p>

      <p>
        Include commit messages as you go to demonstrate your working progress.
      </p>

      <p>
        Add Cypress tests to cover your implementation. Tests are defined in
        <em>/cypress/integration</em>.
      </p>

      <br />

      <p>
        The mock API is required to be running and is currently
        <span
          v-if="apiAvailable !== null"
          class="api-status"
          :class="{ apiAvailable }"
          >{{ apiAvailable ? 'REACHABLE' : 'NOT REACHABLE' }}</span
        >.
      </p>

      <p>
        (The API mocking is initialised in
        <em>/ui/src/plugins/api-mocking.js</em>.)
      </p>
    </section>

    <section>
      <p>Feel free to reference documentation:</p>

      <ul>
        <li>
          <a href="https://nuxtjs.org" target="_blank">NuxtJS</a> - A framework
          that includes Vue, Vuex, Axios and implements conventions such as
          directory based routing.
        </li>

        <li>
          <a href="https://vuejs.org/" target="_blank">Vue.js</a> - A framework
          for building component based user interfaces.
        </li>

        <li>
          <a href="https://vuex.vuejs.org/" target="_blank">Vuex</a> - A state
          management pattern and library.
        </li>

        <li>
          <a href="https://github.com/axios/axios" target="_blank">Axios</a> - A
          promise based HTTP client for fetching data.
        </li>

        <li>
          <a href="https://mswjs.io/" target="_blank">Mock Service Worker</a> -
          A service worker, request interception based API mocking.
        </li>
      </ul>
    </section>
  </div>
</template>

<script lang="javascript">
import { mapState } from 'vuex';
import { app } from '@/store/app';

export default {
  computed: {
    ...mapState(app.namespace, ['apiAvailable'])
  }
}
</script>

<style lang="scss" scoped>
.api-status {
  color: darkred;

  &.apiAvailable {
    color: darkgreen;
  }
}
</style>
