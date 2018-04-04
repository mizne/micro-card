<template>
<div class="wrapper">
  <div class="about">
    <div class="container">
      <div class="about-microcard">
        <div class="header">关于“递名片”</div>
        <div class="content">
          <p>“递名片”是一款为用户提供电子名片制作、名片收发，以及名片信息管理等功能的微信小程序。</p>
          <p>您只需30秒的时间，即可制作自己的电子名片；</p>
          <p>不论是面对面，还是在微信聊天中，我们的产品都为您提供了一种更加高效、快捷的换名片方式；</p>
          <p>存储的名片信息可以便捷地导入手机通讯录。</p>
          <p>我们锲而不舍地探索如何在各种场景中提升用户收发名片的体验和效率。</p>
          <p>您的每一次使用、每一条反馈，都是我们进步的动力。</p>
          <p>我们坚信在不远的未来，一定可以实现：“递名片”，发天下！</p>
          <p class="email">媒体报道：taylor@microvcard.com</p>
          <p class="email">商务合作：unicorn@microvcard.com</p>
        </div>
      </div>

      <div class="qiyedingzhi">
        <div class="header">企业定制</div>
        <div class="content">
          <p>“递名片”免费为企业用户提供模板定制与管理服务。</p>
          <p>如您需要，可通过“用户反馈”联系我们，我们将在第一时间回复您。</p>
        </div>
      </div>

      <div class="yonghufankui">
        <div class="header">用户反馈</div>
        <div class="content">
          <p>请帮助我们更好地为您提供服务。若您在使用“递名片”时，有任何反馈意见或建议，请使用以下格式发给我们。</p>
          <p>您也可以扫码添加客服为微信好友，或者直接在小程序中点击“联系客服”联系我们。</p>
        </div>
      </div>

      <div class="input-container">
        <div class="input-wrapper">
          <div class="contact-mode">
            <label for="contact-mode">联系方式</label>
            <input class="form-control" type="text" id="contact-mode" placeholder="您可以留下邮箱、微信号等联系方式，以便我们跟进您的反馈">
          </div>
          <div class="area">
            <label for="content">反馈意见</label>
            <textarea class="form-control" rows="8" id="content" placeholder="欢迎您留下宝贵的意见或建议"></textarea>
          </div>
          <button>提交</button>
        </div>

        <div class="qrcode">
          <img src="../assets/kefu.jpg" alt="">
          <p>微信扫一扫，添加客服好友</p>
        </div>
      </div>
    </div>
    <footer>
      版权所有：南京腾宣威软件科技有限公司
    </footer>
  </div>
</div>
</template>
<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator'

@Component({
  components: {}
})
export default class About extends Vue {}
</script>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: lightgray;
  min-height: 100vh;
}
.about {
  margin-top: 140px;

  .container {
    background-color: white;
    padding: 1% 5%;
    text-align: left;
    .header {
      text-align: center;
      font-size: 25px;
      font-weight: 700;
      padding: 20px;
    }
    p {
      font-size: 1.1rem;
      line-height: 2.3rem;
      color: gray;
    }

    .about-microcard {
      .email {
        &:not(:last-child) {
          margin-top: 60px;
        }
        &:last-child {
          margin-top: -20px;
        }
        font-size: 0.8rem;
      }
      border-bottom: 1px solid #ccc;
    }

    .qiyedingzhi {
      border-bottom: 1px solid #ccc;
    }

    @media (max-width: 768px) {
      .input-container {
        flex-direction: column;
        .input-wrapper {
          width: 100%;
          display: flex;
          flex-direction: column;
          justify-content: center;
          .contact-mode,
          .area {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }

    .input-container {
      display: flex;
      align-items: center;
      margin-top: 20px;
      .input-wrapper {
        flex: 3;
        label {
          font-weight: 700;
          display: block;
          margin-bottom: 8px;
        }
        .form-control {
          display: block;
          width: 80%;
          padding: 6px 12px;
          font-size: 14px;
          line-height: 1.42857143;
          color: #555;
          background-color: #fff;
          background-image: none;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
          transition: border-color ease-in-out 0.15s,
            box-shadow ease-in-out 0.15s;
          &:focus {
            border-color: #66afe9;
            outline: 0;
            box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075),
              0 0 8px rgba(102, 175, 233, 0.6);
          }
        }

        input {
          height: 34px;
        }

        .area {
          margin-top: 20px;
        }

        button {
          margin-top: 20px;
          color: #fff;
          background-color: #337ab7;
          border-color: #2e6da4;
          display: inline-block;
          padding: 6px 12px;
          margin-bottom: 0;
          font-size: 14px;
          font-weight: 400;
          line-height: 1.42857143;
          text-align: center;
          white-space: nowrap;
          vertical-align: middle;
          touch-action: manipulation;
          cursor: pointer;
          user-select: none;
          background-image: none;
          border: 1px solid transparent;
          border-radius: 4px;
        }
      }

      .qrcode {
        flex: 2;
        text-align: center;
        img {
          width: 164px;
        }
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

