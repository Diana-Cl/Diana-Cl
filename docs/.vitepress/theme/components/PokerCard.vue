<template>
  <div class="poker-card" :class="colorClass" :data-rank="rank">
    <div class="poker-corner">
      <div class="rank">{{ rank }}</div>
      <div class="suit">{{ suit }}</div>
    </div>
    <div class="big-suit" v-if="!isFaceCard">{{ suit }}</div>
    <div class="big-suit face" v-else>
      <span v-if="rank === 'K'">👑</span>
      <span v-else-if="rank === 'Q'">👸</span>
      <span v-else-if="rank === 'J'">🪖</span>
    </div>
  </div>
</template>

<script setup>
defineProps(['rank', 'suit'])

const redSuits = ['♥', '♦']
const isFaceCard = ['J', 'Q', 'K'].includes(rank)
const colorClass = redSuits.includes(suit) ? 'red' : 'black'
</script>

<style scoped>
.poker-table {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
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
  background: #f8fafc;
  border: 1px solid #94a3b8;
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
  font-size: 0.95rem;
  font-weight: bold;
}

.poker-corner .suit {
  font-size: 0.55rem;
  display: block;
  margin-top: 1px;
}


.big-suit {
  position: absolute;
  bottom: 4px;
  right: 4px;
  font-size: 2rem;
  opacity: 0.9;
}

.poker-card:not(.face) .big-suit {
  font-size: 2rem;
  position: absolute;
  bottom: 4px;
  right: 4px;
  opacity: 0.9;
}

.poker-card.face .big-suit {
  font-size: 2.2rem;
  position: absolute;
  bottom: 4px;
  right: 4px;
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

.big-svg {
  position: absolute;
  bottom: 4px;
  right: 4px;
  width: 28px;
  height: 28px;
  opacity: 0.95;
}

.poker-card.info {
  background: #ffffff;
  color: #0f172a;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  text-align: center;
  font-family: var(--vp-font-family-base);
  font-size: 0.75rem;
  font-weight: bold;
  padding: 6px;
  box-sizing: border-box;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.dark .poker-card.info {
  background: #f8fafc;
  color: #1e293b;
  border: 1px solid #94a3b8;
}

.poker-card.info .corner-suit {
  position: absolute;
  font-size: 0.75rem;
  opacity: 0.8;
}

.poker-card.info .top-left { top: 3px; left: 3px; }
.poker-card.info .top-right { top: 3px; right: 3px; }
.poker-card.info .bottom-left { bottom: 3px; left: 3px; }
.poker-card.info .bottom-right { bottom: 3px; right: 3px; }

.poker-card.info .info-text {
  padding: 0 6px;
}

.poker-row {
  display: flex;
  flex-direction: row;
  justify-content: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  flex-wrap: wrap;
}

.poker-label {
  font-family: var(--vp-font-family-base);
  font-size: 0.95rem;
  font-weight: 500;
  text-align: center;
  margin: 0.25rem auto 0.25rem;
  color: var(--vp-c-text-1);
}
</style>
