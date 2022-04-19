<template>
  <div v-if="tries > 0">
    {{tries}} guesses left
  </div>
  <div v-else>
    You've lost
    <button @click="resetGame()">Reset game</button>
  </div>
</template>

<script>
  export default {
    name: 'TriesLeft',
    props: {
      tries: {type: Number, required: true}
    },
    data() {
      return {}
    },
    watch: {
      
    },
    computed: {
      
    },
    mounted() {},
    methods: {
      resetGame(){
        this.$emit("resetGame");
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>