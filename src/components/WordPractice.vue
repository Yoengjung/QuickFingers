<template>
  <div class="menu">
    <div class="menu__links">
      <Menu />
    </div>
  </div>
</template>
<script>
import Menu from "./Menu.vue";

export default {
  name: "WordPractice",
  data() {
    return {};
  },
  components: {
    Menu,
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
</style>
