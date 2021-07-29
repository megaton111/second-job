<template>
  <div class="sidebar">
    <nav>
      <ul>
        <li>
          <h2>해외구매대행</h2>
          <router-link to="global_intro"><v-icon small>{{ icons.mdiMenuRight }}</v-icon>소개</router-link>
          <router-link to="global_media"><v-icon small>{{ icons.mdiMenuRight }}</v-icon>유튜브&강의</router-link>
          <!-- <router-link to="global_lecture">강의</router-link> -->
          <router-link to="global_solution"><v-icon small>{{ icons.mdiMenuRight }}</v-icon>솔루션</router-link>
          <router-link to="global_delivery"><v-icon small>{{ icons.mdiMenuRight }}</v-icon>배송대행업체</router-link>
          <router-link to="global_mall"><v-icon small>{{ icons.mdiMenuRight }}</v-icon>해외쇼핑몰</router-link>
        </li>
        <li>
          <h2>위탁판매</h2>
          <a href="#;"><v-icon small>{{ icons.mdiMenuRight }}</v-icon>소개</a>
          <a href="#;"><v-icon small>{{ icons.mdiMenuRight }}</v-icon>강의</a>
        </li>
      </ul>
      <a href="#;"></a>
    </nav>
  </div>
</template>

<script>
  import { mdiMenuRight } from '@mdi/js';
  export default {
    name : 'SideBar' , 
    data(){
      return{
        icons : {
          mdiMenuRight
        }
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>