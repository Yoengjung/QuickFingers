<template>
  <div class="menu">
    <div class="menu__links">
      <Menu />
    </div>
  </div>
  <div class="content-container">
    <div class="typingText-container">
      {{ typeingText }}
    </div>
    <div class="word-inputText-container">
      <input type="text" v-model="inputText" />
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

export default {
  name: "WordPractice",
  data() {
    return {
      inputText: "",
      selectTypeingIndex: "",
      typeingText: "",
      typingTextContent: ["able", "aboard", "abort", "about", "above"],
      isTimeUp: false,
    };
  },
  components: {
    Menu,
    TimerAndResult,
  },
  created() {
    this.selectTypeingIndex = Math.floor(
      Math.random() * this.typingTextContent.length
    );
    this.typeingText = this.typingTextContent[this.selectTypeingIndex];
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

.typingText-container {
  text-align: center;
  position: relative;
  width: 200px;
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
}
</style>
