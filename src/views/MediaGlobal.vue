<template>
  <div>
    <v-subheader>유튜브&강의</v-subheader>

    <v-row>
      <v-col
        v-for="(item,i) in arr" :key="i"
        :cols="4"
      >
        <v-card
          class="mx-auto"
          elevation="3"
          outlined
        >
          <v-list-item three-line>
            <v-list-item-content>
              <v-list-item-title class="text-h5 mb-1">
                {{ item.title }}
              </v-list-item-title>
              <v-list-item-subtitle>
                {{ item.desc }}
              </v-list-item-subtitle>
            </v-list-item-content>

          </v-list-item>

          <v-card-actions>
            <v-btn
              outlined
              rounded
              text
              :href="item.link"
              target="_blank"
            >
              Go
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>

    
    

  </div>
</template>

<script>
  export default {
    name : 'LectureGlobal' ,
    data(){
      return {
        arr : [
          {
            title : '투트랙' , 
            desc : '네이버 카페 온꿈사를 운영하는 해외구매대행 셀러 유튜버 투트랙입니다. ' , 
            link : 'https://naver.com' ,
          } ,
          {
            title : '잘나가는 서과장' , 
            desc : '해외구매대행 셀러이며 판매 이외에 다양한 정보를 많이 습득할 수 있는 유튜버이다' , 
            link : 'https://naver.com' ,
          } ,
          {
            title : '유튜버333333' , 
            desc : '해외구매대행 셀러이며 판매 이외에 다양한 정보를 많이 습득할 수 있는 유튜버이다' , 
            link : 'https://naver.com' ,
          } ,
          {
            title : '유튜버4444' , 
            desc : '해외구매대행 셀러이며 판매 이외에 다양한 정보를 많이 습득할 수 있는 유튜버이다' , 
            link : 'https://naver.com' ,
          } ,
          {
            title : '유튜버5555555555' , 
            desc : '해외구매대행 셀러이며 판매 이외에 다양한 정보를 많이 습득할 수 있는 유튜버이다' , 
            link : 'https://naver.com' ,
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>