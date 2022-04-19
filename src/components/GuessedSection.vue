<template>
  <div>
    <div>You've tried these letters</div>
    <div class="letters">
      <div v-for="letter in guessedLetters" :key=letter>{{letter}}</div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'GuessedSection',
    props: {
      guessedLetters: {type: Array}
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