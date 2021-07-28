import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from './views/Home'
import IntroGlobal from './views/IntroGlobal'
import LectureGlobal from './views/LectureGlobal'

Vue.use(VueRouter) ;

const router = new VueRouter({
  mode : 'history' , 
  routes : [
    { path : '/' , component : Home } ,
    { path : '/global_intro' , component : IntroGlobal } ,
    { path : '/global_lecture' , component : LectureGlobal } ,
  ]
}) ;

export default router ;