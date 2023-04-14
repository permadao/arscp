<template>
  <div :class="isNavbarBg ? 'bg-white' : 'bg-black bg-opacity-15'" class="w-full z-20 flex items-center justify-between md:h-100px h-16 md:px-16 px-4  fixed top-0 left-0">
    <a href="#" target="_blank">
      <img
        v-if="isNavbarBg"
        src="@/images/ar_scp_logo.png"
        class="md:w-40 h-12"
        alt="logo">
      <img
        v-else
        src="@/images/ar_scp_logo_white.png"
        class="md:w-40 h-12"
        alt="logo">
    </a>
    <div class=" text-base leading-none font-Roboto-Medium md:block hidden" :class="isNavbarBg ? 'text-scp-black' : 'text-white'">
      <div class="hover:text-scp-purple inline-block cursor-pointer" @click="toAboutUs('home')">
        About Us
      </div>
      <div class="mx-20 hover:text-scp-purple inline-block cursor-pointer" @click="toDomPage('portfolio')">
        Portfolio
      </div>
      <div class="hover:text-scp-purple inline-block cursor-pointer" @click="toDomPage('footer')">
        Contact Us
      </div>
    </div>
    <div class="md:hidden block navbarList">
      <div :class="isNavberItemVisible ? 'border-opacity-100' : ''" class="border w-8 h-8 flex items-center justify-center cursor-pointer border-scp-black border-opacity-45 rounded-md hover:border-opacity-100 active:border-opacity-100" @click="isNavberItemVisible = !isNavberItemVisible">
        <img src="@/images/menu.svg" class="w-6 h-6" alt="menu">
      </div>
      <transition name="fade">
        <div v-if="isNavberItemVisible">
          <Mask @click="isNavberItemVisible = false" />
          <div class="fixed w-full top-16 left-0 p-4 z-10">
            <div class="bg-scp-white rounded-xl text-scp-purple w-full h-max flex flex-col items-center justify-center p-4">
              <div class="navberItem" @click="toAboutUs('home')">
                About Us
              </div>
              <div class="my-2 navberItem" @click="toDomPage('portfolio')">
                Portfolio
              </div>
              <div class="navberItem" @click="toDomPage('footer')">
                Contact Us
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { checkParentsHas } from '@/libs'
import { ref, onMounted, nextTick, computed } from 'vue'
import Mask from './Mask.vue'
const isNavberItemVisible = ref(false)
const isNavbarItemList = checkParentsHas('navbarList')
const toDomPage = (id:string) => {
  scrollTo(0, document.body.scrollHeight)
  isNavberItemVisible.value = false
}
const toAboutUs = (id:string) => {
  const bannerHeight = document.getElementById(id)?.clientHeight ?? 0
  console.log(bannerHeight)
  scrollTo(0, bannerHeight)
  nextTick(() => {
    setTimeout(() => {
      scrollBy(0, 5)
    }, 50)
  })

  isNavberItemVisible.value = false
}
const featureBoxTop = ref(document.getElementById('featureBox')?.getBoundingClientRect().top ?? 0)
const portfolioTop = ref(document.getElementById('portfolio')?.getBoundingClientRect().top ?? 0)
const isNavbarBg = computed(() => {
  return featureBoxTop.value > 0 || portfolioTop.value <= 0
})
onMounted(() => {
  document.addEventListener('click', (e) => {
    if (!isNavbarItemList(e.target as HTMLElement)) {
      isNavberItemVisible.value = false
    }
  })
  window.addEventListener('scroll', () => {
    featureBoxTop.value = document.getElementById('featureBox')?.getBoundingClientRect().top ?? 0
    portfolioTop.value = document.getElementById('portfolio')?.getBoundingClientRect().top ?? 0
    console.log(portfolioTop.value)
  })
})
</script>

<style>
.navberItem {
  border: 1px solid transparent;
  text-align: center;
  width: 100%;
  padding-top: 16px;
  padding-bottom: 16px;
  cursor: pointer;
}

.navberItem:hover,
.navberItem:active {
  border: 1px solid #404865;
  border-radius: 8px;
}
</style>
