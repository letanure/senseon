<template>
  <label class="Field">
    <div class="Field-label" v-if="label">{{ label }}</div>
    <input
      class="Field-input"
      :value="inputValue"
      :type="type"
      @onChange="handleOnChange"
    />
  </label>
</template>

<script>
export default {
  name: "Field",

  props: {
    label: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: "text",
      validator: function(value) {
        return ["text", "password"].indexOf(value) !== -1;
      }
    },
    value: {
      type: String,
      default: ""
    }
  },

  data() {
    return {
      inputValue: this.value
    };
  },

  methods: {
    handleOnChange(e) {
      console.log(e.target.value);
      this.$emit("onChange");
    }
  }
};
</script>

<style lang="css" scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@200;400&display=swap");

.Field {
  position: relative;
  display: block;
}

.Field-label {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  color: #364f50;
  padding: 0 20px;
  font-family: "Nunito", sans-serif;
  box-sizing: border-box;
  text-transform: lowercase;
}

.Field-input {
  font-family: "Nunito", sans-serif;
  box-sizing: border-box;
  font-weight: 400;
  border: 0;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  width: 100%;
  padding: 0 20px;
  height: 50px;
  font-size: 20px;
  color: #364f50;

  background-color: #c6ced1;
  border: 2px solid #78918e;
  z-index: 3;
}
</style>
