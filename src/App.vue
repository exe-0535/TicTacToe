<!-- eslint-disable no-unused-vars -->
<script setup>
import { ref, computed } from 'vue';

const player = ref('X');
const board = ref([
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
]);

const CalculateWinner = (squares) => {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

const winner = computed(() => CalculateWinner(board.value.flat()));

</script>

<template>
  <main class="pt-8 text-center bg-slate-800 min-h-screen">

    <h1 class="mb-8 text-8xl font-bold uppercase ">Tic Tac Toe</h1>

    <h3 class="text-6xl mb-20">It's now {{ player }}'s turn</h3>

    <div class="flex flex-col items-center mb-9">
      <div v-for="(row, x) in board" :key="x" class="flex">
        <div v-for="(cell, y) in row" :key="y" @click="MakeMove(x, y)"
          :class="`border-2 border-white w-40 h-40 hover:bg-slate-700 duration-500 flex items-center justify-center text-4xl cursor-pointer`">
        </div>
      </div>
    </div>

</main>
</template>


<style>
@font-face {
  font-family: Config;
  src: local("Config"),
    url(./fonts/Config/ConfigCondensed-MediumItalic.otf) format("truetype");
}

* {
  font-family: Config;
}

h1,
h3 {
  color: lightgrey;
  text-shadow:
    -3px -3px 0 #000,
    3px -3px 0 #000,
    -3px 3px 0 #000,
    3px 3px 0 #000;
}
</style>