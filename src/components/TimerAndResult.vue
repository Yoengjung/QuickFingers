<template>
  <div class="result-container">
    <p class="item" v-if="startTimer > 0">카운트 다운: {{ timeCount }}</p>
    <p class="item" v-else>타이머 종료</p>
    <p class="item">mistake : {{ mistakeNum }}</p>
    <p class="item">WPM : {{ wpm }}</p>
    <p class="item">CPM : {{ cpm }}</p>
  </div>
</template>
<script>
export default {
  name: "TimerAndResult",
  data() {
    return {
      interval: null,
      timeCount: 60,
      mistakeNum: 0,
      wpm: 0,
      cpm: 0,
    };
  },
  props: {
    inputText: {
      type: String,
      required: true,
    },
  },
  methods: {
    startTimer() {
      setInterval(() => {
        if (this.timeCount > 0) {
          this.timeCount--;
        }
      }, 1000);
    },
    mistakeCount() {
      this.mistakeNum = 0;
      for (let i = 0; i < this.inputText.length; i++) {
        if (this.inputText[i] != this.typingText[i]) {
          this.mistakeNum++;
        }
      }
    },
    handleInput() {
      if (this.interval) {
        this.mistakeCount();
        this.wpmCala();
        this.cpmCala();
        return;
      }

      this.interval = setInterval(() => {
        if (this.timeCount > 0) {
          this.timeCount--;
        } else {
          clearInterval(this.interval);
        }
      }, 1000);

      if (this.timeCount <= 0) {
        this.isTimeUp = true;
      }
    },
    wpmCala() {
      this.wpm = Math.round(
        ((this.inputText.length - this.mistakeNum) / 5 / (60 - this.timer)) * 60
      );
    },
    cpmCala() {
      this.cpm = this.inputText.length - this.mistakeNum;
    },
  },
};
</script>
<style>
.result-container {
  position: relative;
  display: flex;
  width: 800px;
  height: 30px;
  border: 2px solid #1b2420;
  background-color: aliceblue;
  left: 50%;
  transform: translateX(-50%);
  padding: 20px;
  font-size: 20px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  margin-bottom: 20px;
}
</style>
