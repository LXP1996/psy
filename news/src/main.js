import '@babel/polyfill'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './registerServiceWorker'
import axios from 'axios'
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
import './plugins/element.js'
import './plugins/iview.js'
//使用富文本编辑器
Vue.use(VueQuillEditor)

Vue.config.productionTip = false
//配置请求axios
Vue.prototype.$axios=axios
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
