### دست استریت (Straight)

::: raw
<div class="poker-hand">
  <img src="/poker/queen-h.png" width="60">
  <img src="/poker/5-s.png" width="60">
  <img src="/poker/6-h.png" width="60">
  <img src="/poker/7-c.png" width="60">
  <img src="/poker/8-d.png" width="60">
  <img src="/poker/king-d.png" width="60">
</div>
:::

پنج کارت پشت سر هم، با خال‌های متفاوت. به این دست می‌گن استریت (Straight).



::: raw
<div class="poker-hand">
  <img src="/poker/ace-s.png">
  <img src="/poker/5-c.png" class="highlight">
  <img src="/poker/6-h.png">
  <img src="/poker/7-s.png">
  <img src="/poker/8-d.png">
  <img src="/poker/10-d.png" class="highlight">
</div>
:::




# آموزش پوکر تگزاس هولدم

## Straight (پشت سر هم)

پنج کارت **پشت سر هم** از هر خالی، مثل:

<div style="display: flex; gap: 4px; margin: 10px 0;">
  <PokerCard rank="5" suit="hearts" />
  <PokerCard rank="6" suit="clubs" />
  <PokerCard rank="7" suit="diamonds" />
  <PokerCard rank="8" suit="spades" />
  <PokerCard rank="9" suit="hearts" />
</div>

## Full House

<div style="display: flex; gap: 4px; margin: 10px 0;">
  <PokerCard rank="K" suit="hearts" />
  <PokerCard rank="K" suit="clubs" />
  <PokerCard rank="K" suit="diamonds" />
  <PokerCard rank="A" suit="spades" />
  <PokerCard rank="A" suit="hearts" />
</div>

<PokerHand :cards="['K♦', '2♠', '6♣', 'K♥', 'Q♣', 'J♦', '8♠']" />


<PokerCard :cards="['K♦', '2♠', '6♣', 'K♥', 'Q♣', 'J♦', '8♠']" />




<style>
.playing-cards {
  font-family: Arial, sans-serif;
}

.card {
  display: inline-block;
  width: 70px;
  height: 94px;
  border: 1px solid #000;
  border-radius: 8px;
  background: white;
  position: relative;
  margin: 2px;
  vertical-align: top;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}

.card.hearts .suit,
.card.diamonds .suit {
  color: red;
}

.card.clubs .suit,
.card.spades .suit {
  color: black;
}

.card .rank,
.card .suit {
  position: absolute;
  font-weight: bold;
  font-size: 10px;
}

.card .rank.top { top: 2px; left: 4px; }
.card .suit.top { top: 12px; left: 4px; }
.card .rank.bottom { bottom: 2px; right: 4px; transform: rotate(180deg); }
.card .suit.bottom { bottom: 12px; right: 4px; transform: rotate(180deg); }

.card .suit.center {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 20px;
}
</style>

<!-- استفاده -->
<div class="playing-cards">
  <div class="card hearts">
    <span class="rank top">A</span>
    <span class="suit top">♥</span>
    <span class="suit center">♥</span>
    <span class="rank bottom">A</span>
    <span class="suit bottom">♥</span>
  </div>
</div>
