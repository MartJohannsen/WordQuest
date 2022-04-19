<template>
  <div>
    <input v-on:keyup.enter="onEnter()" :maxlength="1" v-model="letter"/>
    <button @click="emitLetter()"> Enter </button>
  </div>
</template>

<script>
  export default {
    name: 'GuessSection',
    data() {
      return {
        letter: ""
      }
    },
    computed: {},
    mounted() {},
    methods: {
      emitLetter() {
        this.$emit("enteredLetter", this.letter.toLowerCase());
        /* console.log(this.letter); */
        this.clearInputLetter();
      },
      onEnter() {
        /* console.log("Enter has been hit"); */
        this.emitLetter();
      },
      clearInputLetter() {
        this.letter = "";
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>