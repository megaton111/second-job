<template>
  <div class="contWrap">
    <v-subheader>솔루션</v-subheader>

    <v-list-item v-for="item in solutions" :key="item.name">
      <v-list-item-content>
        <v-list-item-title>{{ item.name }}</v-list-item-title>
        <v-list-item-subtitle>{{ item.desc }}</v-list-item-subtitle>
        <v-list-item-subtitle>가격 : {{ item.price }}</v-list-item-subtitle>
        <v-row style="margin:0">
          <v-btn depressed target="_blank" :href="item.link">사이트 바로가기</v-btn>
        </v-row>
      </v-list-item-content>
    </v-list-item>
  </div>

</template>

<script>
  export default {
    name : 'SolutionGlobal' ,
    data () {
      return {
        solutions : [
          {
            name: '투플렉스 - 구매대행 셀러를 위한 통합 솔루션' ,
            desc : '해외 구매대행 종합 솔루션. 해외마켓 상품 소싱 자동화, 국내 마켓 업로드 자동화, 상품 관리 종합 솔루션, 구매대행 반자동, 구매대행 대량등록' ,
            price : '' ,
            link : 'https://www.twoflex.net/'
          },
          {
            name: '에이헬퍼' ,
            desc : '' ,
            price : '' ,
            link : ''
          },
          {
            name: '셀러픽' ,
            desc : '' ,
            price : '' ,
            link : ''
          },
          {
            name: '위닝셀러' ,
            desc : '' ,
            price : '' ,
            link : ''
          },
          {
            name: '' ,
            desc : '' ,
            price : '' ,
            link : ''
          },
          {
            name: '' ,
            desc : '' ,
            price : '' ,
            link : ''
          },
          {
            name: '' ,
            desc : '' ,
            price : '' ,
            link : ''
          },
          {
            name: '' ,
            desc : '' ,
            price : '' ,
            link : ''
          }
        ],
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>