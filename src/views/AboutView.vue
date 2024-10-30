<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import JoinSection from "@/components/JoinSection.vue";
import AuthorsSectionAbout from "./AboutSection/AuthorsSectionAbout.vue";
import HeroSectionAbout from "./AboutSection/HeroSectionAbout.vue";
import ContentSectionAbout from "./AboutSection/ContentSectionAbout.vue";
</script>

<template>
  <Navbar></Navbar>
  <HeroSectionAbout></HeroSectionAbout>
  <ContentSectionAbout></ContentSectionAbout>
  <AuthorsSectionAbout></AuthorsSectionAbout>
  <JoinSection></JoinSection>
  <Footer></Footer>
</template>
