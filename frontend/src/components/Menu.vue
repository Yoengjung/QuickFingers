<template>
  <div class="menu">
    <ul>
      <li>
        <span @mouseover="showSubMenu" @mouseout="hideSubMenu">타자연습</span>
        <div
          class="submenu"
          v-show="isSubMenuVisible"
          @mouseover="showSubMenu"
          @mouseout="hideSubMenu"
        >
          <router-link to="WordPractice">단어</router-link>
          <router-link to="SentencePractice">문장</router-link>
          <router-link to="ParagraphPractice">문단</router-link>
        </div>
      </li>
      <li>
        <span @mouseover="showSubMenu" @mouseout="hideSubMenu">랭킹</span>
        <div
          class="submenu"
          v-show="isSubMenuVisible"
          @mouseover="showSubMenu"
          @mouseout="hideSubMenu"
        >
          <router-link to="">단어 랭킹</router-link>
          <router-link to="">문장 랭킹</router-link>
          <router-link to="">문단 랭킹</router-link>
        </div>
      </li>
      <li>
        <span @mouseover="showSubMenu" @mouseout="hideSubMenu">분석</span>
        <div
          class="submenu"
          v-show="isSubMenuVisible"
          @mouseover="showSubMenu"
          @mouseout="hideSubMenu"
        >
          <router-link to="">평균 속도</router-link>
          <router-link to="">오타 분석</router-link>
          <router-link to="">개인 기록</router-link>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "MenuVue",
  data() {
    return {
      isSubMenuVisible: false,
    };
  },
  methods: {
    showSubMenu() {
      this.isSubMenuVisible = true;
    },
    hideSubMenu() {
      this.isSubMenuVisible = false;
    },
  },
};
</script>

<style>
li {
  list-style: none;
  position: relative;
}

ul {
  margin: 0px;
  padding: 0px;
}

a {
  text-decoration: none;
  display: block;
  color: black;
  margin: 13px 0 13px 0;
  padding: 0px;
}

.menu {
  text-align: center;
  font-size: 23px;
}

.menu ul {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu ul li div {
  position: absolute;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 350px;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background-color: #cce7ee;
}
</style>
