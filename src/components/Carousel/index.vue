<template>
  <div class="floorBanner">
    <div class="swiper-container" ref="cur">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="carousel in list" :key="carousel.id">
          <img :src="carousel.imgUrl" />
        </div>
      </div>
      <!-- 如果需要分页器 -->
      <div class="swiper-pagination"></div>

      <!-- 如果需要导航按钮 -->
      <div class="swiper-button-prev"></div>
      <div class="swiper-button-next"></div>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
export default {
  name: "Carousel",
  props:['list'],
  // 不需要用watch，因为该组件没有发请求，数据是从父组件那里来的
  // 但是为了把轮播图放到全局组件中，要保证用到轮播图的每个组件的逻辑结构都一样
  watch: {
    list: {
      // immediate：立即监听一次，否则数据没变的话watch是不会监听的
      immediate: true,
      handler() {
        // v-for不一定渲染完了
        this.$nextTick(() => {
          var mySwiper = new Swiper(this.$refs.cur, {
            loop: true,
            // 分页器：底部小圆点
            pagination: {
              el: ".swiper-pagination",
              clickable: true,
            },
            // 如果需要前进后退按钮
            navigation: {
              prevEl: "swiper-button-prev",
              nextEl: "swiper-button-next",
            },
          });
        });
      },
    },
  },
};
</script>

<style>
</style>