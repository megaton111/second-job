import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home'
import IntroGlobal from './views/IntroGlobal'
import MediaGlobal from './views/MediaGlobal'
import SolutionGlobal from './views/SolutionGlobal'
import DeliveryGlobal from './views/DeliveryGlobal'
import MallGlobal from './views/MallGlobal'

Vue.use(VueRouter) ;

const router = new VueRouter({
  mode : 'history' , 
  routes : [
    { path : '/' , component : Home } ,
    { path : '/global_intro' , component : IntroGlobal } ,
    { path : '/global_media' , component : MediaGlobal } ,
    { path : '/global_solution' , component : SolutionGlobal } ,
    { path : '/global_delivery' , component : DeliveryGlobal } ,
    { path : '/global_mall' , component : MallGlobal } ,
  ]
}) ;

export default router ;