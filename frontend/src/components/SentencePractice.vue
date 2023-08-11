<template>
  <div class="menu">
    <div class="menu__links">
      <Menu />
    </div>
  </div>
  <div class="content-container">
    <div class="typingText-container">
      {{ typingText }}
    </div>
    <div class="inputText-container">
      <textarea
        v-bind:disabled="isTimeUp"
        v-model="inputText"
        @input="handleInput"
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

export default {
  name: "SentencePractice",
  data() {
    return {
      inputText: "",
      selectTypeingIndex: "",
      typeingText: "",

      isTimeUp: false,
    };
  },
  components: {
    Menu,
    TimerAndResult,
  },
};
</script>
<style></style>
