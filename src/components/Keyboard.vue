<template>
  <div>
    <button v-for="letter in loadedLetters.letters" :key="letter.index" @click="emitLetter(letter)"> {{letter}} </button>
  </div>  
</template>

<script>
  import letters from "../../letters";
  export default {
    name: 'Keyboard',
    data() {
      return {
        loadedLetters: {type: Array}
      }
    },
    props: {
      
    },
    computed: {
      
    },
    created(){
      this.loadedLetters = letters;
    },
    methods: {
      emitLetter(letter){
        console.log("Emitted letter " + letter);
        this.$emit("emittedLetter",letter)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>