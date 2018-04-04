<template>
  <div class="jumbotron jumbotron-eight" ref="container">
    <center>
      <transition
        name="slide"
        enter-active-class="slideInUp"
      >
        <h1 v-if="show">微信中触手可及的人脉宝库。</h1>
      </transition>
      <transition
        name="slide"
        enter-active-class="slideInUp"
      >
        <h3 v-if="show"> 名片存入“名片夹”，人脉不再遗失。名片信息的查找、复制等操作高效便捷，令你的商务沟通事半功倍。</h3>
      </transition>
      <transition
        name="slide"
        enter-active-class="slideInUp"
      >
        <video class="videostyle animation" id="jumbotron2_h3"
         preload="auto" loop="" autoplay="" poster="../assets/mpj.png" src="https://img-1255379270.cosbj.myqcloud.com/video/%E5%90%8D%E7%89%87%E5%A4%BE1.5.mp4"></video>
      </transition>
    </center>  
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { setTimeout } from 'timers'
import { isInCenterViewport } from '@/utils/index.ts'

@Component({})
export default class HomeEight extends Vue {
  private show = false
  public scrollHandler() {
    if (isInCenterViewport(this.$refs.container as Element)) {
      this.show = true
      window.removeEventListener('scroll', this.scrollHandler)
    }
  }

  public mounted() {
    window.addEventListener('scroll', this.scrollHandler)
    this.scrollHandler()
  }

  public destroyed() {
    window.removeEventListener('scroll', this.scrollHandler)
  }
}
</script>
<style lang="scss">
.jumbotron-eight {
  margin-bottom: 20px;
  padding-top: 48px;
  padding-bottom: 48px;
  background-color: #111111;

  h1 {
    margin-top: 2%;
    margin-bottom: 10px;
    font-size: 340%;
    color: #fff;
  }
  h3 {
    font-size: 100%;
    margin: 15px 0 40px;
    color: rgb(170, 170, 170);
    font-weight: 100;
  }
  video {
    height: 648px;
    object-fit: contain;
  }
}
</style>
