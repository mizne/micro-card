<template>
  <div class="jumbotron jumbotron-fifth" ref="container">
    <div class="header">
      <transition
        name="slide"
        enter-active-class="slideInUp"
      >
        <h1 v-if="show">在微信群中，</h1>
      </transition>
      <transition
        name="slide"
        enter-active-class="slideInUp"
      >
        <h1 v-if="show">感受前所未有的换名片体验。</h1>
      </transition>
    </div> 

    <div class="content">
      <div class="video">
        <video class="videostyle animation"
         preload="auto" loop="" autoplay="" poster="../assets/mpj.png" src="https://img-1255379270.cosbj.myqcloud.com/video/%E5%BE%AE%E4%BF%A1%E7%BE%A4%E6%8F%9B%E5%90%8D%E7%89%871.5.mp4  "></video>
      </div>
      <div class="desc">
        <h3 v-if="show">“名片100”利用前沿技术，自动整合各个微信群中所有名片信息。你可以在微信群中，高效地查找、保存所需的人脉。有了“名片100”，在微信群中换名片，才如此与众不同。</h3>
      </div>
     
    </div>
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { setTimeout } from 'timers'
import { isInCenterViewport } from '@/utils/index.ts'

@Component({})
export default class HomeFifth extends Vue {
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
.jumbotron-fifth {
  margin-bottom: 20px;
  padding-top: 48px;
  padding-bottom: 48px;
  height: 785px;

  .header,
  .content {
    text-align: center;
  }

  .content {
    margin-top: 50px;
    display: flex;
    justify-content: center;

    .video {
      flex: 1;
    }
    .desc {
      flex: 1;
      padding-top: 50px;
      h3 {
        line-height: 50px;
        margin: 0 10%;
        max-width: 400px;
        color: #ccc;
      }
    }
  }

  h1 {
    color: #fff;
    font-size: 270%;
    margin-bottom: 10px;
  }

  video {
    width: 100%;
    height: 648px;
    object-fit: contain;
  }
}
</style>
