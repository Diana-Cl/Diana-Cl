<template>
  <div class="poker-card" :class="[suitClass, rankClass]">
    <div class="rank top-left">{{ displayRank }}</div>
    <div class="suit top-left">{{ suitSymbol }}</div>
    <div class="suit center">{{ suitSymbol }}</div>
    <div class="rank bottom-right">{{ displayRank }}</div>
    <div class="suit bottom-right">{{ suitSymbol }}</div>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  rank: {
    type: String,
    required: true,
    validator: value => ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'].includes(value)
  },
  suit: {
    type: String,
    required: true,
    validator: value => ['hearts', 'diamonds', 'clubs', 'spades'].includes(value)
  }
})

const suitSymbols = {
  hearts: '♥',
  diamonds: '♦',
  clubs: '♣',
  spades: '♠'
}

const suitSymbol = computed(() => suitSymbols[props.suit])
const displayRank = computed(() => props.rank)
const suitClass = computed(() => `suit-${props.suit}`)
const rankClass = computed(() => `rank-${props.rank.toLowerCase()}`)
</script>

<style scoped>
.poker-card {
  width: 60px;
  height: 84px;
  background: white;
  border: 1px solid #000;
  border-radius: 8px;
  position: relative;
  display: inline-block;
  margin: 2px;
  font-family: Arial, sans-serif;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.suit-hearts, .suit-diamonds {
  color: red;
}

.suit-clubs, .suit-spades {
  color: black;
}

.rank, .suit {
  position: absolute;
  font-weight: bold;
}

.top-left {
  top: 2px;
  left: 4px;
  font-size: 10px;
}

.center {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
}

.bottom-right {
  bottom: 2px;
  right: 4px;
  font-size: 10px;
  transform: rotate(180deg);
}
</style>
