<template>
  <div class="layout">
    <aside>
      <NuxtLink to="/">
        <Logo />
      </NuxtLink>

      <Navigation />
    </aside>

    <main>
      <div
        v-if="apiAvailable !== null && !apiAvailable"
        class="api-not-available"
      >
        The API mocking is not initialised.
      </div>
      <Nuxt />
    </main>
  </div>
</template>

<script lang="javascript">
import { mapActions, mapState } from 'vuex';
import { app } from '@/store/app';
import Logo from '@/components/Logo';
import Navigation from '@/components/Navigation';

export default {
  components: {
    Logo,
    Navigation
  },
  computed: {
    ...mapState(app.namespace, [ 'apiAvailable' ])
  },
  methods: {
    ...mapActions(app.namespace, [ app.actions.POLL_FOR_API ])
  }
}
</script>

<style lang="scss">
@use 'sass:math';
@import '~@/assets/vars.scss';

html {
  height: 100%;
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

body {
  height: 100%;
  margin: 0;
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
}

#__nuxt,
#__layout {
  height: 100%;
}

a {
  border: 0;

  img,
  svg {
    border: 0;
    stroke: transparent;
    stroke-width: 0;
  }
}

p,
h1,
h2,
h3,
h4 {
  margin-bottom: math.div($space, 2);
}

li {
  margin-bottom: $space;
}

.layout {
  display: flex;
  flex-direction: row;
  height: 100%;

  & > main {
    flex: 1 1;
    overflow: auto;

    .page {
      padding: $space;
    }

    .api-not-available {
      background-color: beige;
      color: darkred;
      padding: $space;
      text-align: center;
    }
  }

  & > aside {
    background-color: #25214a;
    color: white;
    flex: 0 0 200px;
  }
}

section {
  padding: $space;
  margin-bottom: $space;
  border: 1px solid grey;
}
</style>
