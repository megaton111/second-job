<template>
  <div class="contWrap globalmall">

    <v-subheader>해외 쇼핑몰</v-subheader>

    <v-subheader>미국</v-subheader>
    <v-simple-table>
      <template v-slot:default>
        <colgroup>
          <col style="width:130px" />
          <col style="width:auto" />
          <col style="width:100px" />
        </colgroup>
        <tbody>
          <tr
            v-for="item in usa"
            :key="item.name"
          >
            <td>{{ item.name }}</td>
            <td>{{ item.desc }}</td>
            <td><v-btn depressed :href="item.link" target="_blank" color="primary">사이트 바로가기</v-btn></td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>

    <v-subheader>중국</v-subheader>
    <v-simple-table>
      <template v-slot:default>
        <colgroup>
          <col style="width:130px" />
          <col style="width:auto" />
          <col style="width:100px" />
        </colgroup>
        <tbody>
          <tr
            v-for="item in china"
            :key="item.name"
          >
            <td>{{ item.name }}</td>
            <td>{{ item.desc }}</td>
            <td><v-btn depressed :href="item.link" target="_blank" color="primary">사이트 바로가기</v-btn></td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>

    <v-subheader>일본</v-subheader>
    <v-simple-table>
      <template v-slot:default>
        <colgroup>
          <col style="width:130px" />
          <col style="width:auto" />
          <col style="width:100px" />
        </colgroup>
        <tbody>
          <tr
            v-for="item in japan"
            :key="item.name"
          >
            <td>{{ item.name }}</td>
            <td>{{ item.desc }}</td>
            <td><v-btn depressed :href="item.link" target="_blank" color="primary">사이트 바로가기</v-btn></td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>

  </div>
</template>

<script>
  export default {
    name : 'MallGlobal' ,
    data () {
      return {
        usa : [
          {
            name : '아마존' , 
            desc : '1994년 7월 인터넷 서점으로 시작해 현재 미국 온라인 쇼핑몰 매출 1위, 미국 전체 온라인 소매 시장의 약 절반을 차지하고 있다. ' ,
            link : 'https://www.amazon.com/' , 
          } ,
          {
            name : '아이허브' , 
            desc : '세계 최대 건강식품 해외직구 플랫폼 iHerb입니다' ,
            link : 'https://kr.iherb.com/' , 
          } ,
          {
            name : '이베이' , 
            desc : '세계 최대 규모의 오픈마켓. 인터넷 경매와 고정가 방식의 쇼핑을 운영하는 미국 회사로, 여러 나라에 맞춤 웹 사이트를 구축해 놓아 미국 밖에도 여러 나라에서 많이 사용한다. ' ,
            link : 'https://www.ebay.com/' , 
          } ,
          {
            name : '' , 
            desc : '' ,
            link : '' , 
          } ,
          {
            name : '' , 
            desc : '' ,
            link : '' , 
          }
        ] , 
        china : [
          {
            name : '알리익스프레스' , 
            desc : '중국의 인터넷 기업인 알리바바 그룹의 홍콩 자회사이자 그 회사가 운영하는 B2C 전문 사이트. 중국에서 생산/제작되는 물품을 해외로 B2C 판매하는 것에 특화된 사이트다.' ,
            link : 'https://ko.aliexpress.com/' , 
          } ,
          {
            name : '타오바오' , 
            desc : '중국 기업인 알리바바 그룹이 운영하는 오픈마켓. 일본의 라쿠텐, 미국의 아마존닷컴이 있다면 중국에는 타오바오가 있다 해도 과언이 아니다.' ,
            link : 'http://www.taobao.com/' , 
          }
        ] , 
        japan : [
          {
            name : '라쿠텐' , 
            desc : '라쿠텐 주식회사는 일본 1위의 인터넷 쇼핑몰인 ‘라쿠텐 시장’을 시작으로, 사람들의 다양한 라이프 스타일을 커버하기 위한 각종 인터넷 서비스, 신용카드, 은행, 증권, 핀테크, 여행, 프로 스포츠, 전자컨텐츠 유통, 이동통신 등 다양한 사업을 벌이고 있는 일본의 IT 대기업이다.' ,
            link : 'https://www.rakuten.co.jp/' , 
          } ,
          {
            name : '일본 아마존' , 
            desc : '취급 상품은 미국 아마존과 마찬가지로 "구할 수 있는 모든 것"을 표방하고 있지만, 해외 배송이 필요한 상품의 경우 구매에 제약이 붙는다. ' ,
            link : 'https://www.amazon.co.jp/' , 
          } ,
          {
            name : '' , 
            desc : '' ,
            link : '' , 
          } ,
          {
            name : '' , 
            desc : '' ,
            link : '' , 
          }
        ] , 
        europe : [
          {
            name : '' , 
            desc : '' ,
            link : '' , 
          } ,
          {
            name : '' , 
            desc : '' ,
            link : '' , 
          }
        ] , 
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>