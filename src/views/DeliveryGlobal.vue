<template>
  <div class="contWrap">

    <v-subheader>배송대행업체</v-subheader>

    <div class="bxFilter">
      <p>국가 선택 : </p>
      <v-select
        v-model="selected" 
        :items="nations"
        label="국가선택"
        solo
      ></v-select>
    </div>


    <v-list-item v-for="item in deliversFliter" :key="item.name">
      <v-list-item-content>
        <v-list-item-title>{{ item.name }}</v-list-item-title>
        <v-list-item-subtitle>{{ item.desc }}</v-list-item-subtitle>
        <v-list-item-subtitle>국가 : {{ item.nation.join(', ') }}</v-list-item-subtitle>
        <v-row style="margin:0">
          <v-btn depressed target="_blank" :href="item.link">사이트 바로가기</v-btn>
        </v-row>
      </v-list-item-content>
    </v-list-item>
    
  </div>
</template>

<script>
  export default {
    name : 'DeliveryGlobal' ,
    data(){
      return {
        nations : [ '미국', '독일', '영국', '중국', '일본', '스페인', '프랑스', '네덜란드', '홍콩' ] ,
        selected : '' ,
        delivers: [
          {
            name: '직구닷컴',
            desc : '직구닷컴은 2011년에 캘리포니아 실리콘밸리 산호세에 설립된 미국 정식 법인 사업체 입니다. 미국 현지에 캘리포니아, 오레곤 두곳의 물류센터와 독일 프랑크프르트의 물류센터를 제공 하며 자체 창고를 운영하고 있습니다.',
            nation : [ '미국', '독일' ] ,
            link : 'https://zicgoo.com/'
          },
          {
            name : '몰테일',
            desc : '몰테일은 미국,독일,영국,중국,일본의 직영 물류센터를 통해 나만의 무료 해외 주소를 제공하고 있습니다. 해외 주소를 기반으로 해외 쇼핑몰에서 저렴한 상품 구매, 해외 전용 서비스 가입을 위해 마음껏 사용할 수 있습니다.',
            nation : [ '미국', '독일', '영국', '스페인', '일본', '중국' ] ,
            link : 'https://post.malltail.com/' 
          },
          {
            name: '이하넥스',
            desc : '한진이 만든 해외 배송대행 서비스 - 해외/국내 온라인 쇼핑몰에서 주문하신 상품을 이하넥스 물류센터에서 받아 대한항공 직항 편으로 보다 빠르고 안전하게 댁까지 배송해 드립니다.' ,
            nation : [ '미국', '독일', '영국', '일본', '중국', '홍콩' ] ,
            link : 'https://www.ehanex.com/platform/OB_Main.jsp'
          },
          {
            name: '아이포터',
            desc : '아이포터는 해외 구매 물품에 대한 위치 정보, 국제배송, 통관까지 ONE STOP 통합 물류 서비스를 제공하고 있습니다. 아이포터는 회원님의 신뢰를 바탕으로 항상 한발 앞선 서비스를 제공해 드릴 것을 약속합니다.' ,
            nation : [ '미국', '독일', '스페인', '중국', '일본' ] ,
            link : 'https://www.iporter.com/'
          },
          {
            name: '포스트베이',
            desc : '포스트베이의 설립 이념은 국내 소비자들이 더 이상 해외 사이트에서의 온라인 쇼핑이 어려워서, 배송비가 많이 들어서, 배송이 오래 걸려서 불편하지 않도록 완벽한 써포팅을 하는 것입니다.' ,
            nation : [ '미국', '독일', '일본', '중국', '영국' ] ,
            link : 'https://www.postbay.com/index.jsp?null'
          },
          {
            name: '뉴욕걸즈',
            desc : '믿을 수 있는, 걱정 없는 해외쇼핑의 영원한 멘토 배송대행과 구매대행까지 늘 발전하는 자세로 기업고객은 물론 개인고객들과 함께 합니다. 안전하고 신속한 배송을 철학으로 언제나 믿을 수 있는 배송대행전문 뉴욕걸즈! 작은 이익보다는 고객의 신뢰를 최우선으로 생각하는 고객믿음을 기반으로 출발부터 지금까지 안심하고 이용할 수 있는 대한항공 국적기와 우체국 택배만을 이용하고 있는 업체입니다. 앞으로도 고객의 신뢰와 행복을 추구하는 변치 않는 마음으로 함께 하겠습니다.' ,
            nation : [ '미국', '일본', '독일', '중국', '영국' ] ,
            link : 'https://www.nygirlz.co.kr/web/main.php?'
          },
          {
            name: '오마이집',
            desc : '170,000 Sq.ft !! 배송 대행지 업계 최대규모! 입고 후 출고센터로 재이동해야하는 타 배송대행업체와 달리 오마이집 DE센터에서는 당일 입/출고가 가능하며 이동에 따른 추가비용이 없습니다. 물론~ 시간도 절약됩니다! 오마이집만의 자체 IT시스템 및 인프라로 가능한 가장 저렴하고, 가장 빠른 배송대행 서비스를 제공할 것을 약속드립니다.' ,
            nation : [ '미국', '독일', '중국' ] ,
            link : 'https://www.ohmyzip.com/'
          },
          {
            name: '지니집',
            desc : 'GENIEZIP은 구매대행 및 배송대행 서비스를 제공해 드리는 글로벌 토털 쇼핑몰입니다. 일상생활 속에서 글로벌 쇼핑을 마음껏 즐기며 행복을 누리게 되는 것. 이를 가장 앞서서 이끄는 토털 쇼핑몰이 되는 것이 바로 GENIEZIP의 꿈입니다.' ,
            nation : [ '미국', '영국', '독일', '프랑스', '스페인', '네덜란드', '일본', '중국', '홍콩' ] ,
            link : 'https://www.geniezip.com/main.do'
          },
          {
            name: '프리차이나',
            desc : '프리차이나는 최고의 구매대행 팀과 최고의 통관 전문팀이 모여 합작한 회사로써, 다소 복잡할 수 있는 중국 무역에서 회원 여러분들이 중국의 상품을 자유롭게 구매하실 수 있게 해드리고자 설립한 전문 회사입니다.' ,
            nation : [ '중국' ] ,
            link : 'https://freechina.co.kr/'
          },
          {
            name: '타배',
            desc : '중국에서 오는 모든 상품 구매대행, 중국 배대지, 중국 구매대행, 타오바오 구매대행, 중국직구 타오바오 구매대행, 평택 당일통관으로 빠른배송' ,
            nation : [ '중국' ] ,
            link : 'https://www.tabae.co.kr/'
          },
          {
            name: '바른직구',
            desc : '소통이 빠른 배대지, 타오바오 알리바바 전문 대행, 한국인 책임 관리 운영, 빠른통관, 무역전문, 실시간 카톡 상담중' ,
            nation : [ '중국', '일본' ] ,
            link : 'https://bareunjg.co.kr/'
          },
          {
            name: '킹직구',
            desc : '중국에서 오는 모든 상품 구매대행, 중국 배대지, 중국 구매대행, 타오바오 구매대행, 중국직구 타오바오 구매대행, 평택 당일통관으로 빠른배송' ,
            nation : [ '중국' ] ,
            link : 'www.kingjg.com'
          },
          {
            name: '',
            desc : '' ,
            nation : [  ] ,
            link : ''
          }
        ],
        deliversFliter : [] ,
      }
    } , 
    methods : {
      updateTable( val ){
        console.log( 'updateTable in', val ) ; 
        this.deliversFliter = this.delivers.filter(( item ) => item.nation.includes( val ) ) ; 
      }
    } ,
    created (){
      this.deliversFliter = this.delivers ; 
    } ,
    watch : {
      selected : function( val ){
        this.updateTable( val ) ; 
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>