import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 集中管理组件(vuex)
import store from './store'
// 引入全局组件
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'
// 引入MockServer.js
import '@/mock/mockServe'
// 引入swiper样式
import "swiper/css/swiper.css"
// import '@/api/request'
// 统一引入接口
import * as API from '@/api'
// 引入element-ui组件
import {Button,MessageBox} from 'element-ui'
// 引入图片懒加载插件
import VueLazyload from 'vue-lazyload'
// 引入默认图片（服务器发起请求，刷新页面后的默认图片(search页面的图片展示)）
import atm from '@/assets/1.jpg';

Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)
// element-ui：注册全局组件
Vue.component(Button.name, Button)
// element-ui：注册组件的另一种写法，挂在原型上
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.config.productionTip = false
// 图片懒加载
Vue.use(VueLazyload, {
  // 懒加载默认的图片
  loading: atm,
})

new Vue({
  render: h => h(App),
  // 全局事件总线$bus配置
  beforeCreate(){
    Vue.prototype.$bus = this;
    Vue.prototype.$API = API
  },
  router,
  store
}).$mount('#app')
