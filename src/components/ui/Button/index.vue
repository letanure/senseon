<template>
  <button :type="type" :class="classes" @click="onClick" :style="style">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "Button",

  props: {
    label: {
      type: String,
      required: true
    },
    size: {
      type: String,
      default: "medium",
      validator: function(value) {
        return ["small", "medium", "large"].indexOf(value) !== -1;
      }
    },
    type: {
      type: String,
      default: "button",
      validator: function(value) {
        return ["button", "submit"].indexOf(value) !== -1;
      }
    }
  },

  computed: {
    classes() {
      return {
        button: true,
        "button--secondary": !this.primary,
        [`button--${this.size}`]: true
      };
    },
    style() {
      return {
        backgroundColor: this.backgroundColor
      };
    }
  },

  methods: {
    onClick() {
      this.$emit("onClick");
    }
  }
};
</script>

<style lang="css" scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@200;400&display=swap");
.button {
  font-family: "Nunito", sans-serif;
  font-weight: 200;
  border: 0;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  text-align: center;
  width: 100%;

  --borderWidth: 2px;
  --borderColor: #ffffff40;
  --borderDecorationSize: 8px;
  --g: #0000 90deg, var(--borderColor) 0;
  background: conic-gradient(
        from 90deg at top var(--borderWidth) left var(--borderWidth),
        var(--g)
      )
      0 0,
    conic-gradient(
        from 180deg at top var(--borderWidth) right var(--borderWidth),
        var(--g)
      )
      100% 0,
    conic-gradient(
        from 0deg at bottom var(--borderWidth) left var(--borderWidth),
        var(--g)
      )
      0 100%,
    conic-gradient(
        from -90deg at bottom var(--borderWidth) right var(--borderWidth),
        var(--g)
      )
      100% 100%;
  background-size: var(--borderDecorationSize) var(--borderDecorationSize);
  background-origin: border-box;
  background-repeat: no-repeat;

  background-color: #ffffff15;
  color: white;
  background-color: #ffffff15;
  border: 2px solid #ffffff20;
}
.button:hover,
.button:focus {
  background-color: #ffffff30;
}
.button--small {
  font-size: 12px;
  padding: 10px 16px;
}
.button--medium {
  padding: 13px 20px;
  font-size: 20px;
  font-weight: 200;
}
.button--large {
  font-size: 16px;
  padding: 12px 24px;
}
</style>
