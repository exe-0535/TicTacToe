<!-- eslint-disable no-unused-vars -->
<script setup>
import { ref, computed } from 'vue';

const player = ref('X');
const board = ref([
  ['', '', ''],
  ['', '', ''],
  ['', '', '']
]);

let moves = 0;

const CalculateWinner = (board) => {
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
    const [a, b, c] = lines[i]
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a]
    }
  }
  return null
}

const winner = computed(() => CalculateWinner(board.value.flat()));

const MakeMove = (x, y) => {
  if (winner.value) return;

  if (board.value[x][y] !== '') return;

  moves++;
  board.value[x][y] = player.value;

  player.value = player.value === 'X' ? 'O' : 'X';
}

const ResetGame = () => {
  board.value = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
  ];

  moves = 0;

  player.value = 'X';
}

</script>

<template>
  <main class="pt-8 text-center bg-slate-900 min-h-screen">

    <h1 class="mb-8 text-8xl uppercase text-slate-300">Tic Tac Toe</h1>

    <h3 class="text-4xl mb-20 text-slate-300">It's now {{ player }}'s turn</h3>

    <div class="flex flex-col items-center mb-9">
      <div v-for="(row, x) in board" :key="x" class="flex">
        <div v-for="(cell, y) in row" :key="y" @click="MakeMove(x, y)"
          :class="`border-2 border-slate-200 w-40 h-40 shadow-md bg-slate-800 bg-opacity-70 hover:bg-slate-700 duration-500 flex items-center justify-center text-6xl text-slate-100 cursor-pointer`">
          {{ cell === 'X' ? 'X' : cell === 'O' ? 'O' : '' }}
        </div>
      </div>
    </div>
    <div class="text-center">
      <h2 v-if="winner" class="text-6xl font-bold mb-8 text-slate-300">Player '{{ winner }}' wins!</h2>
      <h2 v-if="moves == 9 && !winner" class="text-6xl font-bold mb-8 text-slate-300">TIE!</h2>
      <button @click="ResetGame"
        class="px-4 py-2 bg-slate-300 rounded uppercase font-bold hover:bg-slate-700 duration-300">Reset</button>
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
</style>