import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import PrivacyPolicy from "@/views/PrivacyPolicyView.vue";
import BlogView from "@/views/BlogView.vue";
import ContactView from "@/views/ContactView.vue";
import AuthorView from "@/views/AuthorView.vue";
import CategoryView from "@/views/CategoryView.vue";
import PostView from "@/views/PostView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/blog",
      name: "blog",
      component: BlogView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/blogpost",
      name: "blogpost",
      component: PostView,
    },
    {
      path: "/author",
      name: "author",
      component: AuthorView,
    },
    {
      path: "/category",
      name: "category",
      component: CategoryView,
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/privacy",
      name: "privacy",
      component: PrivacyPolicy,
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    // Jika ada savedPosition (ketika menggunakan tombol back/forward browser)
    if (savedPosition) {
      return savedPosition;
    }
    // Scroll ke atas pada setiap navigasi
    return { top: 0 };
  },
});

export default router;
