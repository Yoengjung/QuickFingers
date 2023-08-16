<template>
  <Menu />
  <div class="content-container">
    <div>
      <RemainTypingCount :selectTypingIndex="selectTypingIndex" />
    </div>
    <div class="sentence-typingText-container">
      {{ typingText[selectTypingIndex] }}
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
import Menu from "../Menu.vue";
import TimerAndResult from "../TimerAndResult.vue";
import RemainTypingCount from "../RemainTypingCount.vue";
import axios from "axios";

export default {
  name: "SentencePracticePage",
  data() {
    return {
      inputText: "",
      selectTypingIndex: 0,
      typingText: [],
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
        console.log(this.inputText);
        this.selectTypingIndex++;
        this.inputText = "";
      }
    },
    restartBtnClick() {
      this.inputText = "";
      this.selectTypingIndex = 0;
    },
  },
  mounted() {
    axios.get("http://localhost:3000" + "/SentenceData").then((res) => {
      this.typingText = res.data;
    });
  },
};
</script>
<style>
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
