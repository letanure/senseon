<template>
  <nav class="Navigation">
    <NuxtLink to='/' class="introduction">
      Introduction
    </NuxtLink>

    <NuxtLink to='counter' class="counter">
      1. Counter
    </NuxtLink>

    <NuxtLink to='login-form' class="login-form">
      2. Login form
    </NuxtLink>
  </nav>
</template>

<script type="application/javascript">
  import { mapState } from 'vuex';
  import { app } from '@/store/app';

  export default {
    computed: {
      ...mapState(app.namespace, [ 'apiAvailable', 'apiMocked' ])
    }
  }
</script>

<style lang="scss" scoped>
  @use 'sass:math';
  @import '~@/assets/vars.scss';

  .Navigation {
    > a {
      color: white;
      display: block;
      margin-bottom: math.div($space, 2);
      padding: $space;
      text-decoration: none;

      &.nuxt-link-exact-active {
        background-color: #2cb4ae;
        color: #25214a;
      }
    }
  }
</style>
