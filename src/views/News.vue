<template>
<div class="wrapper">
  <div class="news">
    <div class="container">
      <div class="header">媒体报道</div>
      <div class="content">
        <NewsItem v-for="news in newses" :news="news" />
      </div>
    </div>
    <footer>
      版权所有：南京腾宣威软件科技有限公司
    </footer>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'
import NewsItem from '@/components/NewsItem.vue'

@Component({
  components: {
    NewsItem
  }
})
export default class News extends Vue {
  public newses = [
    {
      title: '“名片100”，让商务沟通事半功倍',
      logo: require('../assets/7.png'),
      sign: '微名天下',
      desc:
        '一直以来，如何高效地收发名片、整理名片信息，都困扰着有大量社交需求的商务人士。“名片100”通过微信小程序，免费为广大商务人士提供了提供电子名片制作、名片收发，以及名片信息管理等功能。名片收发：提升各种场景中的名片收发效率。在“发名片”页面，点击“发送本张名片”即可发送到微信好友或群聊…'
    },
    {
      title: '他用微信小程序嗖嗖发名片 30秒创建2秒收发 5万用户人均每周发7张',
      logo: require('../assets/5.jpeg'),
      sign: '铅笔道',
      desc:
        '宋晓钧抽屉里放满了各种各样的名片，足足有600张之多。坐在办公桌前的他一手拿着名片，一手拿着手机，把名片上的姓名、电话一一存到手机里。“太麻烦了，要是名片能直接保存在手机里就好了。”宋晓钧在心里琢磨这个想法挺久了，直到去年年底，他创立了“名片100”，才将计划落地。“名片100”是一个可为用户提供电子名片制作及收发服务的微信小程序...'
    }
  ]
}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightgray;
  min-height: 100vh;
}
.news {
  max-width: 100%;
  margin-top: 140px;

  .container {
    background-color: white;
    padding: 0 2%;

    .header {
      font-size: 25px;
      font-weight: 700;
      padding: 20px;
    }
  }

  footer {
    text-align: center;
    color: #aaa;
    margin: 20px 10% 10px;
  }
}
</style>

