<script setup>
const props = defineProps({
  cards: {
    type: Array,
    required: true,
    default: () => ['A♠', 'K❤️', 'Q♣', 'J♦', '10♠']
  }
})

const suits = {
  '♠': { symbol: '♠', color: 'black' },
  '♣': { symbol: '❤️', color: 'red' },
  '♦': { symbol: '♦', color: 'red' },
}

const faceEmojis = {
  'K': '👑',
  'Q': '👸',
  'J': '🪖'
}

</script>

<template>
  <div class="poker-table">
    <div
      v-for="card in cards"
      :key="card"
      :class="[
        'poker-card',
        suits[card.slice(-1)]?.color,
        faceEmojis[card.slice(0, -1)] ? 'face' : '',
        card.startsWith('K') ? 'king' : '',
        card.startsWith('Q') ? 'queen' : '',
        card.startsWith('J') ? 'jack' : ''
      ]"
    >
      <div class="poker-corner">
        <div class="rank">{{ card.slice(0, -1) }}</div>
        <div class="suit">{{ suits[card.slice(-1)]?.symbol }}</div>
      </div>
      <div class="big-suit">
        <template v-if="!faceEmojis[card.slice(0, -1)]">
          {{ suits[card.slice(-1)]?.symbol }}
        </template>
      </div>
    </div>
  </div>
</template>

<style scoped>
.poker-table {
  display: flex;
  flex-wrap: nowrap;
  gap: 8px;
  margin: 16px 0;
  justify-content: center;
}

.poker-card {
  width: 64px;
  height: 90px;
  border-radius: 8px;
  background: #ffffff;
  border: 1px solid #d1d5db;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  font-family: 'Segoe UI', 'Vazirmatn', sans-serif;
  position: relative;
  display: flex;
  align-items: flex-end;
  justify-content: flex-start;
  padding: 6px;
  box-sizing: border-box;
  transition: transform 0.2s ease;
}

.poker-card:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 14px rgba(0, 0, 0, 0.2);
}

.dark .poker-card {
  background: #f1f5f9;
  border-color: #94a3b8;
}

.poker-card.red {
  color: #e11d48;
}
.poker-card.black {
  color: #1e293b;
}

.poker-corner {
  position: absolute;
  top: 6px;
  left: 6px;
  text-align: left;
  line-height: 1;
}

.poker-corner .rank {
  font-size: 1.1rem;
  font-weight: bold;
}

.poker-corner .suit {
  font-size: 0.80rem;
  display: block;
  margin-top: 1px;
}

.big-suit {
  position: absolute;
  bottom: 4px;
  right: 4px;
  font-size: 2.4rem;
  opacity: 0.9;
}

.poker-card.face .big-suit {
  font-size: 2.4rem;
  content: '';
}
.poker-card.king .big-suit::before {
  content: '👑';
}
.poker-card.queen .big-suit::before {
  content: '👸';
}
.poker-card.jack .big-suit::before {
  content: '🪖';
}
</style>
