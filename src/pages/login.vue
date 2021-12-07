<template>
  <section class="page page-login">
    <LoginForm class="LoginForm" />
  </section>
</template>

<script lang="javascript">
import LoginForm from '@/components/User/LoginForm'

export default {
  components: {
    LoginForm,
  }
}
</script>

<style lang="scss" scoped>
@import "~@/assets/vars.scss";

.page-login {
  background: rgb(31, 90, 91);
  background: radial-gradient(
    circle at 34% 34%,
    rgba(31, 90, 91, 1) 0%,
    rgba(20, 59, 58, 1) 60%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}
.page-login .LoginForm {
  width: 300px;
}
</style>
