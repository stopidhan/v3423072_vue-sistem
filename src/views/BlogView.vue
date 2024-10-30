<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import JoinSection from "@/components/JoinSection.vue";
import CategorySectionBlog from "./BlogSection/CategorySectionBlog.vue";
import HeroSectionBlog from "./BlogSection/HeroSectionBlog.vue";
import AllPostSection from "./BlogSection/AllPostSection.vue";
</script>

<template>
  <Navbar></Navbar>
  <HeroSectionBlog></HeroSectionBlog>
  <AllPostSection></AllPostSection>
  <CategorySectionBlog></CategorySectionBlog>
  <JoinSection></JoinSection>
  <Footer></Footer>
</template>
