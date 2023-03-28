<template>
  <div
    class="`
      fixed transform flex items-center sm:justify-center
      bottom-8 right-1/2 translate-x-1/2 flex-row
      sm:w-auto w-full justify-start px-4 sm:px-0
      sm:right-14 sm:bottom-1/2 sm:translate-y-1/2 sm:flex-col
    `"
    :style="`opacity:${hideProcessBar ? '0' : '0.65'}`"
  >
    <div
      v-for="n in nums"
      :key="n"
      class="`
        dot-wrapper sm:w-10 sm:h-10 w-5 h-5 rounded-full flex items-center justify-center relative cursor-pointer
        flex-row mr-6 last:mr-0
        sm:flex-col sm:mb-6 sm:mr-0 last:mb-0
      `"
      @click="$emit('touchIndex', n - 1)"
    >
      <div
        style="background:rgba(255, 255, 255, 0.45);"
        class="dot-circle sm:w-10 sm:h-10 w-5 h-5 rounded-full absolute top-0 left-0 z-10 transform transition-transform duration-300"
        :class="activeN === n ? 'opacity-100 scale-100' : 'opacity-0 scale-0'"
      />
      <div
        v-if="n !== 4"
        class="`
          absolute transform z-20
          left-5 top-1/2 -translate-y-1/2 h-0.5 w-6
          sm:top-7 sm:left-1/2 sm:translate-y-0 sm:-translate-x-1/2 sm:w-0.5 sm:h-12
        `"
        style="background: rgba(255, 255, 255, 0.45);"
      >
        <div
          class="h-full sm:w-full"
          :style="`background:#FFFFFF;${windowWidth < 640 ? 'width:' : 'height:'}${lineHeights[n - 1]};`"
        />
      </div>
      <div
        class="dot sm:w-2.5 sm:h-2.5 w-1.5 h-1.5 rounded-full relative z-30 transition-colors duration-300"
        :style="`${activeN > n - 1 ? 'background:#FFFFFF;' : 'background: rgba(255, 255, 255, 0.45);'}`"
      />
    </div>
  </div>

  <div
    class="
    w-12 h-12 fixed transform flex items-center justify-center bottom-10 right-1/2 translate-x-1/2 flex-row cursor-pointer
    hidden sm:block
  "
    :style="`opacity:${hideProcessBar ? '0' : '1'}`"
    @click="$emit('toPortfolio')"
  >
    <img src="@/images/arrow-down.svg" class="w-12 h-12 opacity-50 hover:opacity-100 block animate-bounce-slow">
  </div>
</template>

<script setup lang="ts">
import { computed, ref, onMounted, defineProps, defineEmits } from 'vue'

const props = defineProps<{
  distancePercents: number[]
}>()

interface EmitInterface {
  (e: 'touchIndex', num: number): void
  (e: 'toPortfolio'): void
}

defineEmits<EmitInterface>()

const windowWidth = ref(0)

const nums = 4
const activeN = computed(() => {
  let n = 1
  props.distancePercents.forEach((v, index) => {
    // 不要到2，确保点击后，点亮圆圈
    if (v >= 0.68) {
      n = index + 2
    }
  })
  return n
})

const lineHeights = computed(() => {
  return props.distancePercents.map((v) => {
    return (v / 1) * 100 + '%'
  })
})

const hideProcessBar = computed(() => {
  return (props.distancePercents.every((v) => {
    return v === 0
  }) || props.distancePercents.every((v, index) => {
    if (index < props.distancePercents.length - 1) {
      return v === 2
    // 最后一个特性，滚动到一半，隐藏这个bar
    } else {
      return v >= 1
    }
  }))
})

onMounted(() => {
  window.addEventListener('resize', () => {
    windowWidth.value = document.documentElement.offsetWidth
  })
})

</script>
