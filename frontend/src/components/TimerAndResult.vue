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
    };
  },
  props: {
    inputText: {
      type: String,
      required: true,
    },
  },
  methods: {},
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
