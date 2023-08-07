import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/Home.vue";
import WordPractice from "../components/WordPractice.vue";
import ParagraphPractice from "../components/ParagraphPractice.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/WordPractice",
    name: "WordPractice",
    component: WordPractice,
  },
  {
    path: "/ParagraphPractice",
    name: "ParagraphPractice",
    component: ParagraphPractice,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
