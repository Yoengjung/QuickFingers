import { createRouter, createWebHistory } from "vue-router";

import Home from "../components/page/HomePage.vue";
import WordPracticePage from "../components/page/WordPracticePage.vue";
import ParagraphPracticePage from "../components/page/ParagraphPracticePage.vue";
import SentencePracticePage from "../components/page/SentencePracticePage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/WordPractice",
    name: "WordPractice",
    component: WordPracticePage,
  },
  {
    path: "/ParagraphPractice",
    name: "ParagraphPractice",
    component: ParagraphPracticePage,
  },
  {
    path: "/SentencePractice",
    name: "SentencePractice",
    component: SentencePracticePage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
