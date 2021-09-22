<template>
  <div class="page counter">
    <section>
      <h2>Counter</h2>

      <p>This example counter uses Vuex for state management. The logic and state are client-side only.</p>

      <div class="example counter">
        <Counter />
      </div>

      <h4>Add your modified implementation here:</h4>

      <div class="implementation">
        <!-- Add your implementation here -->
      </div>

    </section>

    <h4>Tasks</h4>
    <ol>
      <li>Define a new Vuex store module (You may want reference the existing component implementation in /src/store/counter.js).</li>
      <li><p>API requests can be made with Axios in Vuex <em>actions</em> defined in your new store module.<br />
        The API mocking has the following endpoints:</p>
        <ul>
          <li>GET <em>/api/counter</em> for the current value,</li>
          <li>GET <em>/api/counter/increment</em> to increment and return the updated value and</li>
          <li>GET <em>/api/counter/decrement</em> to decrement and return the updated value.</li>
          <li>GET <em>/api/counter/reset</em> to reset the counter to 0.</li>
        </ul>
      </li>
      <li>Commit data from the API responses to your Vuex state and read it in the component with <em>mapState</em>.</li>
      <li>The initial value will need to be fetched when the component is mounted.</li>
      <li>Consider what the user experience would be if a request were to fail.</li>
      <li>Implement Cypress test specifications to cover the new functionality.</li>
    </ol>
  </div>
</template>

<script lang="javascript">
  import Counter from '@/components/Counter'

  export default {
    components: {
      Counter
    }
  }
</script>

<style lang="scss" scoped>
  @import '~@/assets/vars.scss';

  h4 {
    margin-top: $space;
  }

  .implementation {
    background-color: lightgray;
    min-height: 30px;
  }
</style>
