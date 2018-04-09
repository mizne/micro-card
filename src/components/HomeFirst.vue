<template>
  <div class="jumbotron-first">
    <center>
      <transition
        name="slide"
        enter-active-class="slideInUp"
      >
        <h1 v-if="show">“名片100”，重新定义名片。</h1>
      </transition>
      <transition
        name="slide"
        enter-active-class="slideInUp"
      >
        <img v-if="show" src="../assets/qrcode.png" alt="">
      </transition>
      <transition
        name="slide"
        enter-active-class="slideInUp"
      >
        <p v-if="show">使用微信“扫一扫”，免费使用微信小程序“名片100”。</p>
      </transition>
    </center>  
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { setTimeout } from 'timers'

@Component({})
export default class HomeFirst extends Vue {
  private show = false

  public created() {
    setTimeout(() => {
      this.show = true
    }, 0)
  }
}
</script>
<style lang="scss">
.jumbotron-first {
  background-color: #000;
  color: #fff;
  height: 100%;
  padding-top: 100px;
  margin-bottom: 20px;

  h1 {
    margin-top: 100px;
    font-size: 340%;
  }
  img {
    width: 320px;
  }
  p {
    font-size: 100%;
    color: #aaa;
    font-weight: 100;
  }
}
</style>
