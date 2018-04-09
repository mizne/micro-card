<template>
    <div id="navbar">
      <div class="logo">
        <!-- <img src="../assets/home-logo.png"> -->
      </div>
      <div class="router-container">
        <div class="navbar-collapse">
          <i class="iconfont icon-menu" @click="showMenu = !showMenu"></i>
          <ul class="navbar nav" v-if="showMenu" @click="showMenu = !showMenu">
            <li><router-link to="/">名片100</router-link></li>
            <li><router-link to="/my-home">我的主页</router-link></li>
            <li><router-link to="/news">新闻动态</router-link></li>
            <li><router-link to="/about">关于我们</router-link></li>
          </ul>
        </div>

        <div class="navbar-expand">
          <ul class="navbar nav">
            <li><router-link to="/">名片100</router-link></li>
            <li><router-link to="/my-home">我的主页</router-link></li>
            <li><router-link to="/news">新闻动态</router-link></li>
            <li><router-link to="/about">关于我们</router-link></li>
          </ul>
        </div>
      </div>
    </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({})
export default class NavBar extends Vue {
  private showMenu = false
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#navbar {
  position: fixed;
  top: 0;
  z-index: 100;
  width: 100%;
  box-sizing: border-box;
  padding: 0 15px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #222;
  border-color: #080808;

  .logo {
    width: 140px;
    img {
      max-width: 100%;
    }
  }

  .router-container {
    .navbar-collapse {
      position: relative;
      i {
        color: #ccc;
        font-size: 1.7rem;
        cursor: pointer;
      }
      ul {
        position: absolute;
        display: flex;
        flex-direction: column;
        top: 25px;
        left: -70px;
        text-align: left;
        background-color: #222;
        li {
          padding: 10px 15px;
          a {
            color: #ccc;
            text-decoration: none;
          }
        }
      }
    }

    .navbar-expand {
      ul {
        li {
          display: inline;
          a {
            color: #ccc;
            text-decoration: none;
            padding: 10px 15px;
            transition: background-color 0.3s;
            &.router-link-exact-active {
              color: #fff;
              background-color: #080808;
            }
          }
        }
      }
    }

    @media (min-width: 768px) {
      .navbar-collapse {
        display: none;
      }
    }

    @media (max-width: 768px) {
      .navbar-expand {
        display: none;
      }
    }
  }
}
</style>
