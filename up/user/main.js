import App from './App'
//分享引用
let mpShare = require('@/uni_modules/uview-ui/libs/mixin/mpShare.js');
Vue.mixin(mpShare)
// #ifndef VUE3
import Vue from 'vue'
//uview
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)
//uView

Vue.config.productionTip = false
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif


// #ifdef VUE3
import {
  createSSRApp
} from 'vue'
export function createApp() {
  const app = createSSRApp(App)
  return {
    app
  }
}
// #endif