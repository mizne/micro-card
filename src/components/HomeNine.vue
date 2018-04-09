<template>
  <div class="jumbotron-nine">
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
        <img v-if="show" src="../assets/qrcode.jpg" alt="">
      </transition>
    </center>  
  </div>
</template>
<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { setTimeout } from 'timers'

@Component({})
export default class HomeNine extends Vue {
  private show = false

  public created() {
    setTimeout(() => {
      this.show = true
    }, 0)
  }
}
</script>
<style lang="scss">
.jumbotron-nine {
  background-color: #000;
  color: #fff;
  height: 100%;
  margin-top: 200px;
  margin-bottom: 20px;

  h1 {
    margin-top: 100px;
    font-size: 340%;
  }
  img {
    width: 25%;
  }
  p {
    font-size: 100%;
    color: #aaa;
    font-weight: 100;
  }
}
</style>
