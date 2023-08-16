<template>
  <Menu />
  <div class="content-container">
    <div class="paragraph-typingText-container">
      {{ typingText }}
    </div>
    <div class="paragraph-inputText-container">
      <textarea v-model="inputText" @input="handleInput" />
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
import axios from "axios";

export default {
  name: "ParagraphPractice",
  components: {
    Menu,
    TimerAndResult,
  },
  data() {
    return {
      inputText: "",
      typingText: "",
      isTimeUp: false,
    };
  },
  created() {
    axios
      .get(process.env.VUE_APP_BACKEND_URL + "/ParagraphData")
      .then((res) => {
        this.typingText = res.data;
      });
  },
  methods: {
    restartBtnClick() {
      window.location.reload();
    },
  },
};
</script>

<style>
p {
  padding: 0px;
  margin: 0px;
}

.content-container {
  position: absolute;
  width: 1000px;
  height: 800px;
  top: 15%;
  left: 50%;
  transform: translateX(-50%);
}

.paragraph-typingText-container {
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

textarea {
  width: 800px;
  height: 300px;
  font-size: 25px;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  resize: none;
}

.paragraph-inputText-container {
  position: relative;
  width: 800px;
  height: 300px;
  border: 2px solid #1b2420;
  border-radius: 7px;
  padding: 20px;
  background-color: white;
  left: 50%;
  transform: translateX(-50%);
  font-size: 25px;
  margin-bottom: 10px;
}

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

.item {
  flex: 1;
}

#restartBtn {
  position: relative;
  background-color: azure;
  left: 50%;
  transform: translateX(-50%);
  width: 100px;
  height: 50px;
  font-size: 25px;
  border-radius: 7px;
  cursor: pointer;
}
</style>
