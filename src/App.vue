<template>
  <Board />
</template>

<script>
import Board from './components/Board.vue'

export default {
  name: 'App',
  components: {
    Board
  }
}
</script>

<style>
@font-face {
  font-family: Config;
  src: local("Config"),
    url(./fonts/Config/ConfigCondensed-MediumItalic.otf) format("truetype");
}
</style>