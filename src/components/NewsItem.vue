<template>
    <div class="news-item">
      <div class="logo">
        <img :src="news.logo" alt="">
      </div>
      <div class="content">
        <h3 class="title">{{news.title}}</h3>
        <div class="sign">{{news.sign}}</div>
        <div class="desc">{{news.desc}}</div>
      </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class NewsItem extends Vue {
  @Prop() private news: any
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.news-item {
  &:not(:first-child) {
    margin-top: 10px;
  }
  max-width: 100%;
  height: 185px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  &:not(:last-child) {
    border-bottom: 1px solid #ccc;
  }

  @media (max-width: 768px) {
    .logo {
      display: none;
    }
  }

  .logo {
    padding: 0 10px;
    width: 200px;
    img {
      width: 100%;
      max-width: 100%;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    align-items: baseline;
    max-width: 100%;

    .title {
      color: #119fdd;
      font-weight: 300;
      font-size: 24px;
      margin-bottom: 10px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 100%;
      cursor: pointer;
      &:hover {
        text-decoration: underline;
      }
    }
    .sign {
      font-size: 14px;
      font-weight: 300;
      color: #ccc;
      margin-bottom: 10px;
    }
    .desc {
      font-size: 14px;
      text-align: left;
      line-height: 25px;
      position: relative;
      line-height: 1.4em;
      /* 3 times the line-height to show 3 lines */
      height: 4.2em;
      overflow: hidden;
      max-width: 100%;

      &:after {
        content: '...';
        font-weight: bold;
        position: absolute;
        bottom: 0;
        right: 0;
        padding: 0 20px 1px 45px;
        background: url(http://newimg88.b0.upaiyun.com/newimg88/2014/09/ellipsis_bg.png)
          repeat-y;
      }
    }
  }
}
</style>
