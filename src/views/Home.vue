<template>
  <div class="home">
    <HomeFirst />
    <HomeSecond />
    <HomeThird />
    <HomeForth />
    <HomeFifth />
    <HomeSix />
    <HomeSeven />
    <HomeEight />
    <HomeNine />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import HomeFirst from '@/components/HomeFirst.vue' // @ is an alias to /src
import HomeSecond from '@/components/HomeSecond.vue' // @ is an alias to /src
import HomeThird from '@/components/HomeThird.vue' // @ is an alias to /src
import HomeForth from '@/components/HomeForth.vue' // @ is an alias to /src
import HomeFifth from '@/components/HomeFifth.vue' // @ is an alias to /src
import HomeSix from '@/components/HomeSix.vue' // @ is an alias to /src
import HomeSeven from '@/components/HomeSeven.vue' // @ is an alias to /src
import HomeEight from '@/components/HomeEight.vue' // @ is an alias to /src
import HomeNine from '@/components/HomeNine.vue' // @ is an alias to /src

@Component({
  components: {
    HomeFirst,
    HomeSecond,
    HomeThird,
    HomeForth,
    HomeFifth,
    HomeSix,
    HomeSeven,
    HomeEight,
    HomeNine
  }
})
export default class Home extends Vue {}
</script>
<style lang="scss">
.home {
  background-color: #000;
}
</style>

