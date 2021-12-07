import Form from "./index.vue";

export default {
  title: "UI/Form",
  component: Form,
  argTypes: {
    label: { control: "text" }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Form },
  template: '<Form v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = {
  title: "My form",
  buttonText: "Submit",
  fields: [
    {
      label: "First name",
      type: "text",
      name: "firstName",
      value: "John"
    },
    {
      label: "Password",
      type: "password",
      name: "password"
    }
  ]
};
