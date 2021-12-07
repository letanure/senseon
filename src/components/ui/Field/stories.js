import Field from "./index.vue";

export default {
  title: "UI/Field",
  component: Field,
  argTypes: {
    label: { control: "text" }
  }
};

const Template = (args, { argTypes }) => ({
  props: Object.keys(argTypes),
  components: { Field },
  template: '<Field v-bind="$props" />'
});

export const Default = Template.bind({});
Default.args = {
  label: "Username",
  value: "",
  name: "user"
};
