<template>
  <form class="Form" @submit.prevent="handeSubmit">
    <div
      v-for="{ type, label, name, value } in fields"
      :key="name"
      class="Form-field"
    >
      <Field
        :type="type"
        :label="label"
        :name="name"
        :value="value"
        @onChange="fieldValue => handleOnChange(name, fieldValue)"
      />
    </div>
    <div class="Form-actions">
      <Button type="submit" label="Submit" />
    </div>
  </form>
</template>

<script>
import Field from "@/components/ui/Field";
import Button from "@/components/ui/Button";

export default {
  name: "Form",

  components: {
    Button,
    Field
  },

  props: {
    title: {
      type: String,
      required: false
    },
    fields: {
      type: Array,
      required: true
    },
    buttonText: {
      type: String,
      required: true
    }
  },

  data() {
    return {
      formValue: {},
      formMeta: {
        isValid: false,
        touched: false
      }
    };
  },

  methods: {
    handleOnChange(fieldName, FieldValue) {
      const newFormValue = { ...this.formValue, [fieldName]: FieldValue.value };
      this.formValue = newFormValue;

      const newValues = {
        ...this.formMeta.fields,
        [fieldName]: FieldValue
      };
      this.formMeta = {
        changed: Object.values(newValues).some(item => item.changed),
        touched: Object.values(newValues).some(item => item.touched),
        valid: !Object.values(newValues).some(item => !item.valid),
        fields: newValues
      };
    },
    handeSubmit(e) {
      e.preventDefault();
      if (this.formMeta.valid) {
        this.$emit("submit", this.formValue, this.formMeta);
      }
    }
  }
};
</script>

<style lang="css" scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@200;400&display=swap");

.Form {
  position: relative;
  display: block;
}
.Form-actions {
  padding-top: 50px;
}
</style>
