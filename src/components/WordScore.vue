<template>
  <div>
    You're at {{currentScore}} out of {{amountOfWords}} <br> Previous best score: {{previousTopScore}}
  </div>
</template>

<script>
  export default {
    name: 'WordScore',
    props: {
      amountOfWords: {type: Number},
      currentScore: {type: Number},
      previousTopScore: {type: Number}
    },
    data() {
      return {}
    },
    computed: {
      
    },
    mounted() {},
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>