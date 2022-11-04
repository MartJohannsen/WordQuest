<template>
  <div id="app">
    <div v-if="!gameRunning">
      <button @click="startGame('standard')">Linear</button>
      <button @click="startGame('randomized')">Randomized</button>
    </div>
    <div v-else>
      <word-section
      :currentWord="wordList.words[wordNumber]"
      :previousWord="wordList.words[wordNumber-1]"
      :guessedLetters="guessedLetters"
    />
    <!-- <guess-section v-if="!checkForWin && tries != 0"
      @enteredLetter=addLetter  
    /> -->
    <guessed-section v-if="!checkForWin"
      :guessedLetters="guessedLetters"
    />
    <!-- <next-word v-if="checkForWin"
      @nextWord=newWord
    /> -->
    <word-score
      :currentScore="amountOfGuessed"
      :amountOfWords="wordList.words.length"
      :previousTopScore="highScore"
    />
    <tries-left
      :tries="tries"
      @resetGame=resetGame
    />
    <keyboard v-if="tries > 0"
      @emittedLetter=addLetter 
      :guessedLetters="guessedLetters"
    />
  </div>
    </div>
    
</template>

<script>
import GuessedSection from './components/GuessedSection.vue'
/* import GuessSection from './components/GuessSection.vue' */
import WordSection from './components/WordSection.vue'
import WordScore from './components/WordScore.vue'
import words from '../words'
import TriesLeft from './components/TriesLeft.vue'
import Keyboard from './components/Keyboard.vue'
import {getCookie} from './helper'
import ding from '../ding.mp3'

export default {
  name: 'App',
  components: {
    WordSection,
    /* GuessSection, */
    GuessedSection,
    WordScore,
    TriesLeft,
    Keyboard
  },
  data() {
    return {
      guessedLetters: [],
      gameWon: false,
      wordList: {type: Array},
      wordNumber: {type: Number},
      amountOfGuessed: {type: Number},
      tries: {type: Number},
      highScore: {type: Number},
      gameRunning: {type: Boolean}
    }
  },
  created() {
    this.amountOfGuessed = 0;
    this.wordNumber = 0;
    this.wordList = words;
    this.gameRunning = false;
    if(getCookie("highscore")){
      this.highScore = Number.parseInt(getCookie("highscore"));  
    } else {
      this.highScore = 0;
    }
    
/*     console.log(this.highScore);
    console.log(this.wordList.words); */
    /* console.log("Thought you'd cheat by looking here eh?") */
    this.tries = this.wordList.words[this.wordNumber].length + 5;
  },
  methods: {
    addLetter(letter) {
      this.guessedLetters.push(letter);
      this.tries--;
    },
    newWord() {
      var audioFile = new Audio(ding);
      this.guessedLetters = [];
      this.wordNumber++;
      this.amountOfGuessed++;
      this.tries = this.wordList.words[this.wordNumber].length + 5;
      if(this.wordNumber > this.highScore){
        this.highScore++;
        var now = new Date();
        var time = now.getTime();
        var expireTime = time + 50000*36000; 
        now.setTime(expireTime);
        document.cookie = "highscore="+this.highScore+"; expires="+now.toUTCString()+";";
      }
      audioFile.play();
    },
    resetGame(){
      this.amountOfGuessed = 0;
      this.wordNumber = 0;
      this.wordList = words;
      this.guessedLetters = [];
      this.tries = this.wordList.words[this.wordNumber].length + 5;
    },
    startGame(mode){
      if(mode === "randomized"){
        // randomize wordlist and start
        this.shuffle(this.wordList.words);
        this.gameRunning = true;
      } else {
        console.log("Noodles with soup");
        this.gameRunning = true;
        // start with current wordlist
      }
    },
    shuffle(array) {
      console.log(array);
      array.sort(() => Math.random() - 0.5);
      console.log(array);
    }
  },
  computed: {
    checkForWin() {

      let checker = (arr, target) => target.every(v => arr.includes(v));

      console.log("Checker: " + checker(this.guessedLetters, this.wordList.words[this.wordNumber].split(""))); 
      if(checker(this.guessedLetters, this.wordList.words[this.wordNumber].split("")) == true){
        this.newWord();
      }
      return checker(this.guessedLetters, this.wordList.words[this.wordNumber].split(""));
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
