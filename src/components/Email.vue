<template>
  <div>
    <input type="text" name="email" v-model="email" @change="isEmail" />
    <span class="error" v-if="!validEmail">Informe um e-mail válido</span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      validEmail: true
    };
  },
  methods: {
    isEmail(email) {
      const expression = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i;
      return expression.test(email);
    },
  },
  watch: {
    email: function (value) {
      this.validEmail = this.isEmail(value)
    }
  },
};
</script>