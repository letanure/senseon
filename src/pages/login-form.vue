<template>
  <div class="page login-form">
    <section>
      <h2>Login Form</h2>

      <p>
        Implement an interactive login form that communicates with the mocked
        API login endpoint.
      </p>
      <ol>
        <li>
          Accurately, responsively and accessibly translate the design below
          into HTML and CSS. Consider using Vue components and a Vuex store
          module.
        </li>
        <li>
          Submit credentials via a POSTed JSON body with 'username' and
          'password' fields to the <em>/api/login</em> API endpoint.<br />
          Valid credentials are username: 'user1', password: 'pass1'.
        </li>
        <li>
          Display feedback from both unsuccessful and successful login attempts.
        </li>
        <li>Include any other relevant user feedback and UX details.</li>
        <li>
          Accommodate possible validation states and error conditions that the
          client-side code may encounter.
        </li>
        <li>
          Consider what the user experience would be if a request were to fail.
        </li>
        <li>
          Implement Cypress test specifications to cover the new functionality.
        </li>
      </ol>

      <img alt="Design" class="design" src="~/assets/css-reference.jpg" />
    </section>

    <section>
      <h3>Your implementation:</h3>

      <div class="implementation">
        <!-- Add your implementation here -->
      </div>
    </section>
  </div>
</template>

<script lang="javascript">
export default {
}
</script>

<style lang="scss" scoped>
@import '~@/assets/vars.scss';

table.users {
  margin-bottom: $space;
}

section {
  img {
    max-width: 100%;
  }

  overflow: hidden;
}

.implementation {
  width: 100%;
  background-color: lightgrey;
  height: 900px;
}
</style>
