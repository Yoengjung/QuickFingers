<template>
  <div class="menu">
    <div class="menu__links">
      <Menu />
    </div>
  </div>
  <div class="content-container">
    <div>
      <RemainTypingCount :selectTypeingIndex="selectTypeingIndex" />
    </div>
    <div class="sentence-typingText-container">
      {{ typeingText[selectTypeingIndex] }}
    </div>
    <div class="sentence-inputText-container">
      <input
        type="text"
        class="typingInputBox"
        v-model="inputText"
        @keyup.enter="completeBtn()"
      />
    </div>
    <div>
      <TimerAndResult :inputText="inputText" />
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
  name: "SentencePractice",
  data() {
    return {
      inputText: "",
      selectTypeingIndex: 0,
      typeingText: [],
      isTimeUp: false,
    };
  },
  components: {
    Menu,
    TimerAndResult,
    RemainTypingCount,
  },
  methods: {
    completeBtn() {
      if (this.inputText === this.typeingText[this.selectTypeingIndex]) {
        console.log(this.inputText);
        this.selectTypeingIndex++;
        this.inputText = "";
      }
      if (this.selectTypeingIndex == this.typeingText.length) {
        this.isTimeUp = true;
      }
    },
    restartBtnClick() {
      this.inputText = "";
      this.selectTypeingIndex = 0;
      this.isTimeUp = false;
    },
  },
  mounted() {
    axios.get("http://localhost:3000" + "/getSentenceData").then((res) => {
      this.typeingText = res.data;
    });
  },
};
</script>
<style>
body {
  box-sizing: border-box;
}

.sentence-typingText-container {
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

.sentence-inputText-container {
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

.typingInputBox {
  position: absolute;
  width: 80%;
  height: 35px;
  padding: 3px;
  font-size: 25px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
