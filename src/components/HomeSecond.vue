<template>
  <div class="jumbotron jumbotron-second" ref="container">
    <center>
      <transition
        name="slide"
        enter-active-class="slideInUp"
      >
        <p v-if="show">“名片100”--商务人士必备的电子名片制作、收发，人脉信息管理工具。</p>
      </transition>
      <transition
        name="slide"
        enter-active-class="slideInUp"
      >
        <p v-if="show">在这里，你可以通过微信“扫一扫”、微信聊天便捷地分享你的名片。</p>
      </transition>
      <transition
        name="slide"
        enter-active-class="slideInUp"
      >
        <p v-if="show">在这里，你只需30秒即可制作一张电子名片。</p>
      </transition>
      <transition
        name="slide"
        enter-active-class="slideInUp"
      >
        <p v-if="show">在这里，你的人脉资源不再丢失。</p>
      </transition>
      <transition
        name="slide"
        enter-active-class="slideInUp"
      >
        <p v-if="show">“名片100”，为商务沟通提供了无限可能。</p>
      </transition>
    </center>  
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { setTimeout } from 'timers'
import { isInCenterViewport } from '@/utils/index.ts'

@Component({})
export default class HomeSecond extends Vue {
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
.jumbotron-second {
  background-color: #111111;
  margin-bottom: 20px;
  padding-top: 48px;
  padding-bottom: 48px;
  p {
    &:not(:first-child) {
      margin-top: 4%;
    }
    margin-bottom: 15px;
    font-size: 190%;
    color: #fff;
  }
}
</style>
