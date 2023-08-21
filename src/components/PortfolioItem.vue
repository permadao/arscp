<template>
  <a
    target="_blank"
    :href="href"
    class="flex-1 w-full item bg-scp-black3 h-full flex justify-center items-center rounded-2xl cursor-pointer relative"
    @mouseover="isHover = true"
    @mouseleave="isHover = false">
    <div
      class="md:h-20 md:w-120px w-24 h-16 flex justify-center items-center">
      <img v-show="isHover" :src="require(`@/images/portfolio/${hoverImg}`)" alt="hoverSrc">
      <img v-show="!isHover" :src="require(`@/images/portfolio/${defaultImg}`)" alt="">
    </div>
    <img src="@/images/top_right_arrow.png" class="w-3 h-3 absolute right-7 top-7" alt="">
  </a>
</template>

<script setup lang='ts'>
import { defineProps, ref } from 'vue'

interface Props {
  href: string
  defaultImg: string
  hoverImg: string
}

defineProps<Props>()
const isHover = ref(false)
</script>

<style scoped></style>
