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
  name: "HomePage",
  components: {
    Menu,
  },
  data() {
    return {};
  },
};
</script>
<style></style>
