<script setup>
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import HeroSection from "./HomeSection/HeroSection.vue";
import FeaturedPostSection from "./HomeSection/FeaturedPostSection.vue";
import AboutMissionSection from "./HomeSection/AboutMissionSection.vue";
import CategorySection from "./HomeSection/CategorySection.vue";
import StartedSection from "./HomeSection/StartedSection.vue";
import AuthorsSection from "./HomeSection/AuthorsSection.vue";
import SponsorSection from "./HomeSection/SponsorSection.vue";
import TestimonialsSection from "./HomeSection/TestimonialsSection.vue";
import JoinSection from "@/components/JoinSection.vue";
</script>

<template>
  <Navbar></Navbar>
  <HeroSection></HeroSection>
  <FeaturedPostSection></FeaturedPostSection>
  <AboutMissionSection></AboutMissionSection>
  <CategorySection></CategorySection>
  <StartedSection></StartedSection>
  <AuthorsSection></AuthorsSection>
  <SponsorSection></SponsorSection>
  <TestimonialsSection></TestimonialsSection>
  <JoinSection></JoinSection>
  <Footer></Footer>
</template>
