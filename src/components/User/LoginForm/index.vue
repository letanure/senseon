<template>
  <div class="LoginForm">
    <img alt="Logo SenseOn" class="LoginForm-logo" src="~/assets/logo.jpg" />
    <div class="LoginForm-version">version 1.4</div>
    <Form v-bind="formConfig" @submit="handeSubmit" />
    <div class="LoginForm-help">
      <a>forgottern your credentials?</a>
    </div>
  </div>
</template>

<script>
import Form from "@/components/ui/Form";
import setApi from "@/api";

const loginApi = setApi("login");

const formLogin = {
  title: "My form",
  buttonText: "Submit",
  fields: [
    {
      label: "Username",
      type: "text",
      name: "username"
    },
    {
      label: "Password",
      type: "password",
      name: "password"
    }
  ]
};

export default {
  name: "LoginForm",

  components: {
    Form
  },

  data() {
    return {
      formConfig: formLogin
    };
  },

  methods: {
    async handeSubmit(data) {
      console.log("Loginfoem", data);
      const result = await loginApi.post(data).catch(err => {
        console.log("Error", err);
      });
    }
  }
};
</script>

<style lang="css" scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@200;400&display=swap");

.LoginForm {
  position: relative;
  display: block;
  font-family: "Nunito", sans-serif;
}
.LoginForm-logo {
  max-height: 50px;
  max-width: 100%;
  margin: 0 auto;
  display: block;
  mix-blend-mode: multiply;
  margin-bottom: 20px;
}
.LoginForm-version {
  margin-bottom: 20px;
  color: #4f8283;
  text-align: center;
}
.LoginForm-help {
  padding-top: 20px;
  color: #4f8283;
  text-align: center;
}
</style>
