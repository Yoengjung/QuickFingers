<template>
  <div class="menu">
    <div class="menu__links">
      <Menu />
    </div>
  </div>
  <div class="content-container">
    <div class="typingText-container">
      {{ typeingText[selectTypeingIndex] }}
    </div>
    <div class="inputText-container">
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
  },
  methods: {
    completeBtn() {
      console.log(this.inputText);
      console.log(this.typeingText[this.selectTypeingIndex]);
      console.log(this.inputText == this.typeingText[this.selectTypeingIndex]);

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
.inputText-container {
  position: relative;
  width: 80%;
  height: 50px;
}
.typingInputBox {
  position: absolute;
  width: 80%;
  height: 35px;
  padding: 3px;
  font-size: 23px;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
