<template>
  <base-input v-model="text"/>
</template>

<script>
  import BaseInput from './BaseInput'

  export default {
    components: {
      BaseInput,
    },

    props: {
      foo: String,
    },

    computed: {
      text: {
        get () {
          return this.foo
        },
        set (val) {
          console.log(val)
        },
      },
    },
  }

  // work in another option
  // export default {
  //   components: {
  //     BaseInput,
  //   },

  //   props: {
  //     foo: String,
  //   },

  //   data () {
  //     return {
  //       text: '',
  //     }
  //   },
  
  //   watch: {
  //     foo (newVal) {
  //       this.text = newVal
  //     },
  //     text (newVal) {
  //       console.log(newVal)
  //     }
  //   },
  // }
</script>
