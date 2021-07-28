<template>
  <div class="sidebar">
    <nav>
      <ul>
        <li>
          <h2>타이틀 제목 1</h2>
          <router-link to="global_intro">소개</router-link>
          <router-link to="global_lecture">강의</router-link>

          <a href="#;">관련 정보</a>
          <a href="#;"></a>
        </li>
        <li>
          <h2>타이틀 제목 2</h2>
          <a href="#;">소개</a>
          <a href="#;">강의</a>
          <a href="#;"></a>
          <a href="#;"></a>
        </li>
      </ul>
      <a href="#;"></a>
    </nav>
  </div>
</template>

<script>
  export default {
    name : 'SideBar' , 
  }
</script>

<style lang="scss" scoped>

</style>