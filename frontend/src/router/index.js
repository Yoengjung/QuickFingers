import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/page/HomePage.vue";
import WordPractice from "../components/WordPractice.vue";
import ParagraphPractice from "../components/ParagraphPractice.vue";
import SentencePractice from "../components/SentencePractice.vue";

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
  {
    path: "/SentencePractice",
    name: "SentencePractice",
    component: SentencePractice,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
