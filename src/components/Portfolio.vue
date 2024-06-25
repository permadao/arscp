<template>
  <div id="portfolio" class="max-w-1200px w-full mx-auto md:py-264px py-20 px-4 md:px-0">
    <div class="font-Roboto-Medium md:text-32px leading-10 text-2xl text-scp-black mb-8">
      Portfolio
    </div>
    <div class="grid-Portfolio items-center">
      <div
        v-for="(p,index) in portfolioListTest"
        :key="index"
        class="h-188px">
        <div v-if="!p.href" class="w-full h-full bg-scp-black3 flex justify-center items-center rounded-2xl relative">
          <div class="md:h-20 h-16 flex justify-center items-center font-Roboto-Medium text-scp-purple text-base leading-none">
            Stay tuned...
          </div>
        </div>
        <PortfolioItem
          v-else
          :href="p.href"
          :default-img="p.defaultImg"
          :class-name="p.className ? p.className : ''"
          :hover-img="p.hoverImg" />
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { computed } from 'vue'
import PortfolioItem from './PortfolioItem.vue'

const portfolioListTest = computed(() => {
  return [
    {
      href: 'https://carv.io/',
      defaultImg: 'carv.svg',
      hoverImg: 'carv_hoverd.svg',
      className: 'w-60'
    },
    {
      href: 'https://mindnetwork.xyz/',
      defaultImg: 'mind_network_normal.png',
      hoverImg: 'mind_network.png',
      className: 'w-120px'
    },
    {
      href: 'https://padolabs.org/',
      defaultImg: 'pado.svg',
      hoverImg: 'pado_hoverd.svg'
    },
    {
      href: 'https://www.revox.ai/',
      defaultImg: 'revox.svg',
      hoverImg: 'revox_hoverd.svg',
      className: 'w-120px'
    },
    {
      href: 'https://www.4everland.org/',
      defaultImg: '4everland_normal.svg',
      hoverImg: '4everland.svg'
    },
    {
      href: 'https://permaweb.news/',
      defaultImg: 'permaweb_news_normal.svg',
      hoverImg: 'permaweb_news.svg'
    },
    {
      href: 'https://www.starpower.world/#/',
      defaultImg: 'starpoweer_nomal.svg',
      hoverImg: 'starpoweer.svg'
    },
    {
      href: 'https://www.legal-dao.org/',
      defaultImg: 'legal_now_normal.svg',
      hoverImg: 'legal_now.svg'
    },
    {
      href: 'https://www.server31.io/',
      defaultImg: 's31_normal.svg',
      hoverImg: 's31.svg'
    },
    {
      href: '',
      defaultImg: '',
      hoverImg: ''
    }
  ]
})
// const portfolioList = computed(() => {
//   return [
//     [
//       {
//         href: 'https://readon.me/',
//         defaultImg: 'readon_normal.png',
//         hoverImg: 'readon.png',
//         className: 'md:h-20 md:w-120px w-24 h-16 '
//       },
//       {
//         href: 'https://mindnetwork.xyz/',
//         defaultImg: 'mind_network_normal.png',
//         hoverImg: 'mind_network.png',
//         className: 'md:h-20 md:w-120px w-24 h-16 '
//       },
//       {
//         href: 'https://www.4everland.org/',
//         defaultImg: '4everland_normal.svg',
//         hoverImg: '4everland.svg'
//       }
//     ],
//     [
//       {
//         href: 'https://permaweb.news/',
//         defaultImg: 'permaweb_news_normal.svg',
//         hoverImg: 'permaweb_news.svg'
//       },
//       {
//         href: 'https://www.starpower.world/#/',
//         defaultImg: 'starpoweer_nomal.svg',
//         hoverImg: 'starpoweer.svg'
//       },
//       {
//         href: 'https://www.legal-dao.org/',
//         defaultImg: 'legal_now_normal.svg',
//         hoverImg: 'legal_now.svg'
//       }
//     ],
//     [
//       {
//         href: 'https://www.server31.io/',
//         defaultImg: 's31_normal.svg',
//         hoverImg: 's31.svg'
//       },
//       {
//         href: 'https://www.server31.io/',
//         defaultImg: 'CARV.svg',
//         hoverImg: 'CARV.svg'
//       },
//       {
//         href: '',
//         defaultImg: '',
//         hoverImg: '',
//         stayTuned: true,
//         visible: false
//       }
//     ]
//   ]
// })
</script>

<style lang="scss">

.grid-Portfolio{
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
}
@media (min-width:640px) {
  .grid-Portfolio{
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }
}
@media (min-width:987px) {
  .grid-Portfolio{
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 32px;
  }
}
</style>
