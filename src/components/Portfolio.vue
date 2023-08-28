<template>
  <div id="portfolio" class="max-w-1200px w-full mx-auto md:py-264px py-20 px-4 md:px-0">
    <div class="font-Roboto-Medium md:text-32px leading-10 text-2xl text-scp-black mb-8">
      Portfolio
    </div>
    <div v-for="(portfolio,index) in portfolioList" :key="index" class="flex md:flex-row flex-col items-center">
      <div
        v-for="(p, portfolioIndex) in portfolio"
        :key="portfolioIndex"
        :class="`${portfolioIndex === 1 ? 'mx-33px' : ''} ${p.visible ? 'md:invisible hidden md:block' : ''}`"
        class="flex items-center md:flex-row flex-col w-full md:justify-start max-w-378px h-188px mt-8">
        <div v-if="p.stayTuned || p.visible" class="w-full h-full bg-scp-black3 flex justify-center items-center rounded-2xl relative">
          <div class="md:h-20 h-16 flex justify-center items-center font-Roboto-Medium text-scp-purple text-base leading-none">
            Stay tuned...
          </div>
        </div>
        <PortfolioItem
          v-else
          :href="p.href"
          :default-img="p.defaultImg"
          :hover-img="p.hoverImg" />
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>
import { computed } from 'vue'
import PortfolioItem from './PortfolioItem.vue'

const portfolioList = computed(() => {
  return [
    [
      {
        href: 'https://readon.me/',
        defaultImg: 'readon_normal.png',
        hoverImg: 'readon.png'
      },
      {
        href: 'https://mindnetwork.xyz/',
        defaultImg: 'mind_network_normal.png',
        hoverImg: 'mind_network.png'
      },
      {
        href: 'https://www.4everland.org/',
        defaultImg: '4everland_normal.svg',
        hoverImg: '4everland.svg'
      }
    ],
    [
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
      }
    ],
    [
      {
        href: 'https://www.server31.io/',
        defaultImg: 's31_normal.svg',
        hoverImg: 's31.svg'
      },
      {
        href: '',
        defaultImg: '',
        hoverImg: '',
        stayTuned: true
      },
      {
        href: '',
        defaultImg: '',
        hoverImg: '',
        visible: true
      }
    ]
  ]
})
</script>

<style>
</style>
