<template>
  <div id="app">
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>

import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  mounted(){
    // 组件挂载完毕时，可以向服务器请求数据(获取三级目录列表数据)
    this.$store.dispatch("categoryList");
  }
}
</script>

<style>
</style>
