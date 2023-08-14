<template>
  <div class="remain-count-container">
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
<style>
.remain-count-container {
  position: relative;
  background-color: white;
  width: 200px;
  height: 40px;
  text-align: center;
  border: 1px solid black;
  border-radius: 5px;
  margin-bottom: 10px;
  left: 50%;
  transform: translateX(-50%);
  font-size: 25px;
}

.remain-count-container p {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
