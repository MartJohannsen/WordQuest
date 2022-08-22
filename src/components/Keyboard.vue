<template>
  <div class="keyboard bottom">
    <div v-for="letter in loadedLetters.letters"  :key="letter.index"> 
      <button class="button" @click="emitLetter(letter)" :disabled="guessedLetters.includes(letter)">{{letter}} </button>
    </div>  
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
      guessedLetters: {type: Array}
    },
    computed: {
      
    },
    created(){
      this.loadedLetters = letters;
    },
    methods: {
      emitLetter(letter){
        //console.log("Emitted letter " + letter);
        this.$emit("emittedLetter",letter)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>