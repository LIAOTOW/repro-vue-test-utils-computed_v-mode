<template>
  <input type="text" v-model="model">
</template>

<script>
  export default {
    props: {
      value: {
        type: String,
        default: '',
      },
    },
    computed: {
      model: {
        get () {
          return this.value
        },
        set (val) {
          this.$emit('input', val)
        },
      },
    },
  }
</script>
