<template>
  <div class="jumbotron jumbotron-six" ref="container">
    <center>
      <transition
        name="slide"
        enter-active-class="slideInUp"
      >
        <h1 v-if="show">只需30秒，即可拥有一张个人名片。</h1>
      </transition>
      <transition
        name="slide"
        enter-active-class="slideInUp"
      >
        <h3 v-if="show">  用手机拍摄自己名片，“名片100”就能自动帮你把信息「填好」。</h3>
      </transition>
      <transition
        name="slide"
        enter-active-class="slideInUp"
      >
        <video class="videostyle animation" id="jumbotron2_h3"
         preload="auto" loop="" autoplay="" poster="../assets/mpj.png" src="https://img-1255379270.cosbj.myqcloud.com/video/%E6%8B%8D%E7%85%A7%E8%AF%86%E5%88%AB1.5.mp4"></video>
      </transition>
    </center>  
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { setTimeout } from 'timers'
import { isInCenterViewport } from '@/utils/index.ts'

@Component({})
export default class HomeSix extends Vue {
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
.jumbotron-six {
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
