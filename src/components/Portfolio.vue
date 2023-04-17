<template>
  <div id="portfolio" class="max-w-1200px w-full mx-auto md:py-264px py-20 px-4 md:px-0">
    <div class="font-Roboto-Medium md:text-32px leading-10 text-2xl text-scp-black">
      Portfolio
    </div>
    <div class="md:mt-16 mt-8 flex justify-between md:flex-row flex-col">
      <a
        target="_blank"
        href="https://readon.me/"
        class="flex-1 readon bg-scp-black3 py-54px flex justify-center items-center rounded-2xl cursor-pointer relative">
        <div class="md:h-20 md:w-120px w-24 h-16 flex justify-center items-center" />
        <img src="@/images/top_right_arrow.png" class="w-3 h-3 absolute right-7 top-7" alt="">
      </a>
      <a target="_blank" href="https://mindnetwork.xyz/" class="flex-1 mindNetwork bg-scp-black3 py-54px flex justify-center items-center rounded-2xl md:mx-33px my-6 md:my-0  cursor-pointer relative">
        <div class="md:h-20 md:w-120px w-24 h-16 flex justify-center items-center" />
        <img src="@/images/top_right_arrow.png" class="w-3 h-3 absolute right-7 top-7" alt="">
      </a>
      <div class="flex-1 bg-scp-black3 py-54px flex justify-center items-center rounded-2xl relative">
        <div class="md:h-20 h-16 flex justify-center items-center font-Roboto-Medium text-scp-purple text-base leading-none">
          Stay tuned...
        </div>
        <!-- <img src="@/images/top_right_arrow.png" class="w-3 h-3 absolute right-7 top-7" alt=""> -->
      </div>
    </div>
  </div>
</template>

<script setup lang='ts'>

</script>

<style>
.readon div {
  background-image: url('../images/readon-black.png');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}

.readon:hover div,
.readon:active div {
  background-image: url('../images/readon.png');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}

.mindNetwork div {
  background-image: url('../images/mind_network_black.png');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}

.mindNetwork:hover div,
.mindNetwork:active div {
  background-image: url('../images/mind_network.png');
  background-size: 100%;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
