<template>
  <div class="jumbotron jumbotron-third" ref="container">
    <center>
      <transition
        name="slide"
        enter-active-class="slideInUp"
      >
        <h1 v-if="show">一触，即发。</h1>
      </transition>
      <transition
        name="slide"
        enter-active-class="slideInUp"
      >
        <h3 v-if="show">点击“发送这张名片”按钮，即可分享到微信聊天。</h3>
      </transition>
      <transition
        name="slide"
        enter-active-class="slideInUp"
      >
        <video class="videostyle animation" id="jumbotron2_h3"
         preload="auto" loop="" autoplay="" poster="../assets/mpj.png" src="https://img-1255379270.cosbj.myqcloud.com/video/%E4%B8%80%E8%A7%B8%E5%8D%B3%E7%99%BC1.5.mp4"></video>
      </transition>
    </center>  
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { setTimeout } from 'timers'
import { isInCenterViewport } from '@/utils/index.ts'

@Component({})
export default class HomeThird extends Vue {
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
.jumbotron-third {
  margin-bottom: 20px;
  padding-top: 48px;
  padding-bottom: 48px;
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
    object-fit: contain;
  }
}
</style>
