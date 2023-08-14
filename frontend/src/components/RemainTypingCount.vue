<template>
  <div class="remain__count">
    <p>{{ selectTypeingIndex }} / 30</p>
  </div>
</template>
<script>
export default {
  name: "RemainTypingCount",
  props: {
    selectTypeingIndex: {
      type: Number,
      required: true,
    },
  },
};
</script>
<style></style>
