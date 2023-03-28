<template>
  <div class="font-Roboto-Regular relative">
    <NavBar />
    <Home />
    <Features :scroll-top="scrollTop" />
    <Portfolio />
    <Footer />
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import Portfolio from './components/Portfolio.vue'
import Features from './components/Features.vue'
import Footer from './components/Footer.vue'
import Home from '@/components/Home.vue'
import NavBar from '@/components/Navbar.vue'
const scrollTop = ref(0)

onMounted(() => {
  window.addEventListener('scroll', () => {
    scrollTop.value = document.documentElement.scrollTop
  })
})
</script>
