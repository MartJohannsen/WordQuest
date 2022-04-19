<template>
  <div>
    <button @click="emitNext()"> Next Word </button>
  </div>  
</template>

<script>
  export default {
    name: 'NextWord',
    data() {
      return {}
    },
    props: {
      currentWord: {type: String},
      guessedLetters: {type: Array}
    },
    computed: {
      wordArray() {
        return this.currentWord.split("");
      },
      wordLength() {
        return this.currentWord.length;
      }
    },
    mounted() {},
    methods: {
      emitNext() {
        this.$emit("nextWord");
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>