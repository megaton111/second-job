<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <h1><router-link to="/">SecondJob</router-link></h1>

    </v-app-bar>

    <v-main>
      <SideBar />
      <div class="content">
        <router-view></router-view>
      </div>
    </v-main>
  
    <v-footer padless>
      <v-col
        class="text-center"
        cols="12"
      >
        {{ new Date().getFullYear() }} — <strong>SecondJob</strong>
      </v-col>
    </v-footer>
    
  </v-app>
</template>

<script>
import SideBar from './components/SideBar';

export default {
  name: 'App',

  components: {
    SideBar,
  },
  data(){
    return {

    }
  } ,

  metaInfo: {
    title: '회사원이 부업으로 돈 벌 수 있는 방법을 소개합니다.',
    titleTemplate: '%s | SecondJob',
    htmlAttrs: {
      // lang: window.getApp.$i18n.locale 
      // i18n 사용하지 않는 경우 직접 입력
    },
    meta: [
      { charset: 'utf-8'},
      { name: 'description', content: '해외구매대행,위탁판매,쿠팡파트너스 퇴근 후 직장인이 부업으로 돈 벌수 있는 방법을 소개합니다.', vmid: 'description'},
      { name: 'keywords', content: "해외구매대행,위탁판매,쿠팡파트너스,직장인부업,회사원부업,퇴근후부업"},
      { name: 'author', content: "SecondJob"},
      {
        property: 'og:title',
        content: '회사원이 부업으로 돈 벌 수 있는 방법을 소개합니다.',
        template: chunk => `${chunk} | SecondJob`,
        vmid: 'og:title'
      },
      // mobile
      { name: 'viewport', content: 'width=device-width, initial-scale=1'}
    ]
  }



};
</script>
