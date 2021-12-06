<template>
  <img
    svg-inline
    alt="SenseOn"
    class="Logo"
    src="@/assets/senseon-logo-inline.svg"
  />
</template>

<style lang="scss" scoped>
@import '~@/assets/vars.scss';

.Logo {
  left: -3px;
  margin: $space;
  max-width: 100%;
  position: relative;

  .text {
    fill: white;
    opacity: 1;
  }
}
</style>
