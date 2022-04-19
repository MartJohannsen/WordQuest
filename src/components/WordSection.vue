<template>
  <div>
    <div class="letters"  style="font-size:128px">
      <div v-for="letter in wordArray" :key="letter.index">
        <div v-if="guessedLetters.includes(letter.letter)">{{letter.letter}}</div>
        <div v-else> - </div>
      </div>
    </div>
  </div>  
</template>

<script>
  export default {
    name: 'WordSection',
    data() {
      return {}
    },
    props: {
      currentWord: {type: String},
      guessedLetters: {type: Array}
    },
    computed: {
      wordArray() {
        let array = [];
        let i = 0;
        this.currentWord.split("").forEach(letter => {
          array.push({letter: letter, index: i});
          i = i + 1;
        });
        /* console.log(array); */
        return array;
      },
      wordLength() {
        return this.currentWord.length;
      }
    },
    mounted() {},
    methods: {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>