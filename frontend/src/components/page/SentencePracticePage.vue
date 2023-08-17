<template>
  <Menu />
  <div class="content-container">
    <RemainTypingCount :selectTypingIndex="selectTypingIndex" />
    <div class="sentence-typingText-container">
      {{ typingText[selectTypingIndex] }}
    </div>
    <div class="sentence-inputText-container">
      <input
        type="text"
        class="typingInputBox"
        v-model="inputText"
        @keyup.enter="completeBtn"
        @keyup="calcTypingLen"
        @keydown="backspaceKeydown"
      />
    </div>
    <TimerAndResult
      :propTypingIndex="this.selectTypingIndex"
      :typingStartCheck="this.typingStartCheck"
      :typingTotelLength="this.typingTotelLength"
    />
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
      typingStartCheck: false,
      typingTotelLength: 0,
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
    calcTypingLen(e) {
      if (e.key == "Backspace") {
        if (this.typingTotelLength != 0) this.typingTotelLength--;
      } else {
        this.typingTotelLength++;
      }
    },
    backspaceKeydown(e) {
      if (e.key == "Backspace") {
        if (this.typingTotelLength != 0 || this.inputText != 0)
          this.typingTotelLength--;
      }
    },
  },
  mounted() {
    axios.get(process.env.VUE_APP_BACKEND_URL + "/SentenceData").then((res) => {
      this.typingText = res.data;
    });
  },
  watch: {
    inputText() {
      if (this.inputText.length != 0 && this.typingStartCheck == false) {
        this.typingStartCheck = true;
      }
    },
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
