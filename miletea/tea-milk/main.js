import App from './App'
//分享引用小程序
import share from '@/tools/shareplus.js'
Vue.mixin(share)
// #ifndef VUE3
import Vue from 'vue'
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
//uview
import uView from '@/uni_modules/uview-ui'
Vue.use(uView)
//uView
