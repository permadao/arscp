<template>
  <div id="about_us" class="relative">
    <div v-if="featureOffsetTop > 0" class="feature-bg absolute">
      <div class="sm:mt-302px mt-32 px-4 md:px-0  text-white sm:text-32px text-2xl leading-8 font-Roboto-Medium max-w-1200px mx-auto">
        <div class="about_us w-max">
          About us
        </div>
      </div>
    </div>
    <div v-else class="feature-bg sticky">
      <div class="sm:mt-302px mt-32 px-4 md:px-0 text-white sm:text-32px text-2xl leading-8 font-Roboto-Medium max-w-1200px mx-auto">
        <div class="about_us w-max">
          About us
        </div>
      </div>
    </div>
    <div ref="featureBoxDom" class="max-w-1200px w-full mx-auto px-4 md:px-0">
      <div
        v-for="(n, index) in 4"
        :key="n"
        :ref="getFeatureWrapperRefs"
        class="feature-wrapper">
        <div
          :ref="getFeatureDetailRefs"
          class="flex flex-row items-center justify-center h-full"
          :class="`${stickyIndex >= index ? 'sticky top-0' : ''}`"
          :style="`
        --distance-percent: ${distancePercents[index]};
        `"
        >
          <div class="w-full xl:w-1200px h-full ">
            <div :class="stickyIndex === 0 ? 'mt-0' : 'mt-8'" class="feature-problem font-Roboto-Regular sm:text-xl text-sm leading-7  text-white text-opacity-0.85 flex items-center md:mt-20 justify-center h-full">
              {{ featureDesc[index] }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <ProcessBar
    v-if="stickyIndex !== 3"
    :distance-percents="distancePercents"
    @touchIndex="touchIndex"
    @toPortfolio="toPortfolio" />
</template>

<script setup lang="ts">
import { ref, onMounted, Ref, defineProps } from 'vue'
import ProcessBar from './ProcessBar.vue'

const props = defineProps<{
  scrollTop: number
}>()
const featureDesc:any = {
  0: 'The world is rapidly moving towards a decentralized and open web, where information flows freely and is stored permanently. Arweave is leading the way in this transformation with its innovative Storage-based Consensus Paradigm (SCP) that enables on-chain, scalable storage with guaranteed persistence.',
  1: 'The potential of Arweave goes far beyond just storage, however. By decoupling storage and computation, Arweave unlocks a new era of open applications via a productive and persistent storage-based consensus paradigm at its base layer, leading to a truly decentralized and open web where users have complete control over their data and can access it anywhere, anytime.',
  2: 'As a Layer0 network with permanent storage, Arweave offers a unique opportunity for applications to be built on a trustful and censorship-resistant platform. SCP is the optimal solution for DApps in the Web3 era, providing high performance with uncapped TPS while ensuring data traceability and monopoly-free. By leveraging SCP, DApps can achieve high performance and scalability while ensuring security, traceability, and transparency.',
  3: 'Applying SCP will unlock new possibilities for decentralized and democratic storage and hosting solutions not subject to censorship or monopoly. Arweave SCP Ventures are committed to identifying and investing in innovative projects that harness SCP consensus to build the next generation of DApps, from social to finance, bringing transparency, security, and scalability to the Web3 era. And this is just the beginning.'
}
const getElementTop = (element: any) => {
  let actualTop = element.offsetTop
  let current = element.offsetParent

  while (current !== null) {
    actualTop += current.offsetTop
    current = current.offsetParent
  }

  return actualTop
}
const featureBoxDom: Ref<Element | null> = ref(null)
const stickyIndex = ref(0)
const featureRefs: Ref<Element[]> = ref([])
const featureDetailRefs: Ref<Element[]> = ref([])

const distancePercents = ref([0, 0, 0, 0])

const getFeatureWrapperRefs = (el: any) => {
  featureRefs.value.push(el)
}

const getFeatureDetailRefs = (el: any) => {
  featureDetailRefs.value.push(el)
}

const touchIndex = (index: number) => {
  if (featureRefs.value[index]) {
    featureRefs.value[index].scrollIntoView({ behavior: 'smooth' })
  }
}

const toPortfolio = () => {
  document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })
}

const featureOffsetTop = ref(0)
const offsetTops = ref<any[]>([])
onMounted(() => {
  featureOffsetTop.value = featureBoxDom.value?.getBoundingClientRect().top ?? 0
  const setOffsetTops = () => {
    // const length = featureRefs.value.length
    return featureRefs.value.map((el) => {
      // 64 是 header 高度
      return getElementTop(el)
    })
  }
  offsetTops.value = setOffsetTops()
  const itemOffsetHeight = featureDetailRefs.value[0]?.clientHeight
  window.addEventListener('resize', () => {
    offsetTops.value = setOffsetTops()
  })
  window.addEventListener('scroll', () => {
    offsetTops.value = setOffsetTops()
    offsetTops.value.forEach((offsetTop, index) => {
      if ((props.scrollTop) >= offsetTop) {
        stickyIndex.value = index
        const dis = (props.scrollTop - offsetTop) / itemOffsetHeight

        if (stickyIndex.value === offsetTops.value.length - 1) {
          distancePercents.value[index] = dis * 0.01
        } else {
          distancePercents.value[index] = dis >= 0.69 ? 1 : dis
        }
      } else {
        distancePercents.value[index] = 0
      }
    })
    featureOffsetTop.value = featureBoxDom.value?.getBoundingClientRect().top ?? 0
  })
})
</script>

<style scoped lang="scss">
.feature-wrapper {
  height: 100vh;
  z-index: 50;
}

.feature-problem {
  transform: matrix(1, 0, 0, 1, 0, calc((var(--distance-percent) * 4)));
  /* 25% 就隐藏 */
  opacity: calc(1 - 2 * var(--distance-percent));
}

.feature-bg {
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-image: url('../images/screen_about_banner.png');
  background-size: 1728px 100vh;
  background-position: center;
  background-repeat: no-repeat;
  overflow: hidden;
}

.about_us {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0) 9.46%, rgba(0, 0, 0, 0.2925) 33.86%, rgba(0, 0, 0, 0.5785) 59.26%, rgba(0, 0, 0, 0.3705) 77.49%, rgba(0, 0, 0, 0) 93.24%);
  mix-blend-mode: normal;
  backdrop-filter: blur(0.5px);
}

@media (max-width:500px) {
  .feature-bg {
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-image: url('../images/small_about_banner.png');
    background-size: 100% 100vh;
    background-position: center;
    background-repeat: no-repeat;
    overflow: hidden;
  }

  .about_us {
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 9.46%, rgba(0, 0, 0, 0.2925) 33.86%, rgba(0, 0, 0, 0.5785) 59.26%, rgba(0, 0, 0, 0.3705) 77.49%, rgba(0, 0, 0, 0) 93.24%);
    mix-blend-mode: normal;
    backdrop-filter: blur(0px);
  }
}
</style>
