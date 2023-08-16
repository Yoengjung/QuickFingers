<template>
  <Menu />
  <div class="content-container">
    <div>
      <RemainTypingCount :selectTypingIndex="selectTypingIndex" />
    </div>
    <div class="word-typingText-container">
      {{ typingText[selectTypingIndex] }}
    </div>
    <div class="word-inputText-container">
      <input type="text" v-model="inputText" @keyup.enter="completeBtn()" />
    </div>
    <div>
      <TimerAndResult :inputText="this.inputText" />
    </div>
    <button id="restartBtn" @click="restartBtnClick()">restart</button>
  </div>
</template>
<script>
import Menu from "./Menu.vue";
import TimerAndResult from "./TimerAndResult.vue";
import RemainTypingCount from "./RemainTypingCount.vue";
import axios from "axios";

export default {
  name: "WordPractice",
  data() {
    return {
      inputText: "",
      typingText: "",
      selectTypingIndex: 0,
    };
  },
  components: {
    Menu,
    TimerAndResult,
    RemainTypingCount,
  },
  methods: {
    completeBtn() {
      if (this.inputText === this.typingText[this.selectTypingIndex]) {
        this.selectTypingIndex++;
        this.inputText = "";
      }
    },
  },
  mounted() {
    axios.get("http://localhost:3000" + "/getWordData").then((res) => {
      this.typingText = res.data;
    });
  },
};
</script>
<style>
body {
  margin: 0px;
  padding: 0px;
  background-color: rgb(143, 209, 209);
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

p {
  padding: 0px;
  margin: 0px;
}

.menu {
  position: absolute;
  width: 100%;
  height: 30px;
  top: 5%;
  z-index: 2;
}

.menu__links {
  position: absolute;
  width: 600px;
  left: 50%;
  transform: translateX(-50%);
}

.word-typingText-container {
  text-align: center;
  position: relative;
  width: 800px;
  border: 2px solid #1b2420;
  border-radius: 7px;
  padding: 20px;
  background-color: white;
  left: 50%;
  transform: translateX(-50%);
  font-size: 25px;
  margin-bottom: 10px;
  z-index: 1;
}

.word-inputText-container {
  position: relative;
  width: 800px;
  height: 30px;
  border: 2px solid #1b2420;
  border-radius: 7px;
  padding: 20px;
  background-color: white;
  left: 50%;
  transform: translateX(-50%);
  font-size: 25px;
  margin-bottom: 10px;
}

.word-inputText-container input {
  position: absolute;
  width: 80%;
  height: 35px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 25px;
  padding: 3px;
  text-align: center;
}
</style>
