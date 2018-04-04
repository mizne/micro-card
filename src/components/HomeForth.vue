<template>
  <div class="jumbotron jumbotron-forth" ref="container">
    <center>
      <transition
        name="slide"
        enter-active-class="slideInUp"
      >
        <h1 v-if="show">一扫，即存。</h1>
      </transition>
      <transition
        name="slide"
        enter-active-class="slideInUp"
      >
        <h3 v-if="show">出示名片二维码，对方用微信“扫一扫”即可保存至名片夹。</h3>
      </transition>
      <transition
        name="slide"
        enter-active-class="slideInUp"
      >
        <video class="videostyle animation" id="jumbotron2_h3"
         preload="auto" loop="" autoplay="" poster="../assets/mpj.png" src="https://img-1255379270.cosbj.myqcloud.com/video/%E5%AE%8C%E6%95%B4%E7%89%88480p.mov"></video>
      </transition>
    </center>  
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { setTimeout } from 'timers'
import { isInCenterViewport } from '@/utils/index.ts'

@Component({})
export default class HomeForth extends Vue {
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
.jumbotron-forth {
  margin-bottom: 20px;
  padding-top: 48px;
  padding-bottom: 48px;
  h1 {
    position: relative;
    top: 350px;
    color: #fff;
    z-index: 90;
    font-size: 340%;
  }
  h3 {
    position: relative;
    top: 380px;
    color: #aaa;
    z-index: 90;
    font-size: 170%;
    font-weight: 100;
  }
  video {
    width: 100%;
    object-fit: contain;
  }
}
</style>
