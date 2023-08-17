<template>
  <div class="result-container">
    <p class="item">CountDown : {{ timeCount }}</p>
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
      timeCount: 0,
      mistakeNum: 0,
      wpm: 0,
      cpm: 0,
      intervalTime: null,
      typingMaxLenth: 30,
    };
  },
  props: {
    propTypingIndex: {
      type: Number,
      required: true,
    },
    typingStartCheck: {
      type: Boolean,
    },
    typingTotelLength: {
      type: Number,
    },
  },
  methods: {
    countUp() {
      this.timeCount++;
      this.calculateCPM();
    },
    countStop() {
      clearInterval(this.intervalTime);
    },
    calculateCPM() {
      const timeInMinutes = this.timeCount / 60;
      this.cpm = Math.floor(Math.floor(this.typingTotelLength) / timeInMinutes);
    },
  },
  mounted() {},
  watch: {
    typingStartCheck: function () {
      if (this.typingStartCheck) {
        this.intervalTime = setInterval(this.countUp, 1000);
      }
    },
    propTypingIndex: function () {
      if (this.propTypingIndex == this.typingMaxLenth) {
        clearInterval(this.intervalTime);
      }
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
