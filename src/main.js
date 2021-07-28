import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import router from './router' 
import Meta from 'vue-meta'


import "@/assets/scss/_index.scss" ; // global scss

Vue.config.productionTip = false
Vue.use(Meta)

new Vue({
  router ,
  vuetify ,
  render: h => h(App)
}).$mount('#app')
