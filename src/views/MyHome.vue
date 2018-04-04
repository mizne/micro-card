<template>
<div class="wrapper">
<div class="my-home">
    <div class="container">
      <div class="img-wrapper">
        <img src="https://microvcard.com/ewm?id=ih36sg7027uv5bn6rg6phi1eqm" alt="">
      </div>

      <div class="desc">
        微信扫一扫，并在手机上确认登录。
      </div>
      <div class="steps">
        <div class="step-1">
          <img src="../assets/ewm_wechat.png" alt="">
        </div>
        <div class="step-2">
          <img src="../assets/ewm_design.png" alt="">
        </div>
        <div class="step-3">
          <img src="../assets/ewm_muban.png" alt="">
        </div>
        <div class="step-4">
          <img src="../assets/ewm_complete.png" alt="">
        </div>
        <div class="step-5">
          <img src="../assets/ewm_save.png" alt="">
        </div>
        <div class="step-6">
          <img src="../assets/ewm_microvcard.png" alt="">
        </div>
      </div>
    </div>

    <footer>
      版权所有：南京腾宣威软件科技有限公司
    </footer>
  </div>
</div>
  
</template>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: lightgray;
  min-height: 100vh;
}
.my-home {
  margin-top: 90px;
  max-width: 1200px;

  .container {
    background-color: white;
    padding: 3% 5%;

    .img-wrapper {
      height: 430px;
      img {
        max-width: 100%;
      }
    }

    .desc {
      margin: 30px 0;
      font-size: 20px;
      color: gray;
      font-family: '微软雅黑';
    }

    .steps {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 10px 30px;

      img {
        width: 100%;
        max-width: 100%;
      }
    }
  }

  footer {
    text-align: center;
    color: #aaa;
    margin: 20px 10% 10px;
  }
}
</style>

