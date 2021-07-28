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
  </v-app>
</template>

<script>
import SideBar from './components/SideBar';

export default {
  name: 'App',

  components: {
    SideBar,
  },

  data: () => ({
    //
  }),
};
</script>
