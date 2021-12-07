import LoginForm from "./index.vue";

export default {
  title: "User/LoginForm",
  component: LoginForm
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { LoginForm },
  template: '<LoginForm v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = {};
