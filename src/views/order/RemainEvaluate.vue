<template lang="html">
  <!-- 评价页 -->
  <section class="full-fixed evaluate">
    <lc-header title="退货" @callBack="back"></lc-header>
    <div class="center _effect">
      <div class="top">
        <div class="img-wrap">
          <img class="top-img" :src="orderData.img" alt="">
        </div>
        <div class="grade">
          <p class="grade-text">评分</p>
          <div class="star">
            <span class="star-light"></span>
          </div>
        </div>
      </div>
      <div class="main">
        <textarea class="textarea" rows="6" cols="6" placeholder="请输入商品评价内容"></textarea>
      </div>
      <div class="upload">
        <p class="title">上传图片</p>
        <ul class="list-group">
          <li class="flex-center list">
            <i class="icon-jia1"><svg class="icon" aria-hidden="true"><use xlink:href="#icon-jia1"></use></svg></i>
          </li>
        </ul>
      </div>
    </div>
    <div class="waves-effect waves-light btn _effect" @click="_submit">提交</div>
    <transition name="transX">
      <router-view></router-view>
    </transition>
  </section>
</template>

<script>
  import LcHeader from '@/components/Header'

  export default {
    data() {
      return {
        tradeItemId: '',
        orderData: {},
      }
    },
    created() {
      this.tradeItemId = this.$route.query.tradeItemId;
      this.getOrderData();    // 获取订单数据
    },
    methods: {
      // 获取订单数据
      getOrderData() {
        let order = this.localStorage.get('order') || [];
        let tradeItemId = this.tradeItemId;

        for (let i = 0, leng = order.length; i < leng; i++) {
          if (order[i].tradeItemId === tradeItemId) {
            this.orderData = order[i];
            return;
          }
        };
      },
      _submit() {
        this.$router.replace({
          path: `/mycenter/orderbox/succeed/evaluate/stateevaluate`
        })
      },
      // 返回
      back() {
        this.$router.back();
      },
    },
    components: {
      LcHeader
    }
  }
</script>

<style scoped lang="scss">
  @import "../../common/sass/variable";
  @import "../../common/sass/mixin";

  .evaluate {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    background-color: $color-background-e;
    .center {
      overflow: auto;
      flex: 1;
      padding-bottom: .53rem /* 20/37.5 */;
    }
    .btn {
      width: 100%;
      height: 1.33rem /* 50/37.5 */;
      line-height: 1.33rem /* 50/37.5 */;
      font-size: .43rem /* 16/37.5 */;
      color: #fff;
      background-color: $color-theme;
      text-align: center;
    }
    .top {
      display: flex;
      padding: .43rem /* 16/37.5 */;
      background-color: #fff;
      .img-wrap {
        width: 1.87rem /* 70/37.5 */;
        max-height: 2.13rem /* 80/37.5 */;
        overflow: hidden;
        .top-img {
          vertical-align: top;
          width: 100%;
        }
      }
      .grade {
        flex: 1;
        padding-left: .43rem /* 16/37.5 */;
        .grade-text {
          font-size: .43rem /* 16/37.5 */;
          color: $color-text-9;
        }
        .star {
          position: relative;
          margin-top: .53rem /* 20/37.5 */;
          width: 3.76rem /* 141/37.5 */;
          height: .67rem /* 25/37.5 */;
          background: url("../../common/img/star.png") no-repeat;
          background-size: 3.76rem /* 141/37.5 */;
          .star-light {
            position: absolute;
            top: 0;
            left: 0;
            width: 80%;   // 控制宽度，操作评分
            height: 100%;
            background: url("../../common/img/star.png") no-repeat;
            background-size: 3.76rem /* 141/37.5 */;
            background-position: 0 -.67rem /* -25/37.5 */;
          }
        }
      }
    }
    .main {
      margin-top: .27rem /* 10/37.5 */;
      // background-color: #fff;
      .textarea {
        box-sizing: border-box;
        padding: .27rem /* 10/37.5 */;
        border: none;
        width: 100%;
        height: 3.2rem /* 120/37.5 */;
        font-size: .43rem /* 16/37.5 */;
        line-height: 1.4;
        color: $color-text;
        outline: none;
        resize: none;
      }
    }
    .upload {
      margin-top: .27rem /* 10/37.5 */;
      padding-top: .43rem /* 16/37.5 */;
      padding-left: .43rem /* 16/37.5 */;
      background-color: #fff;
      .title {
        padding-bottom: .43rem /* 16/37.5 */;
        font-size: .37rem /* 14/37.5 */;
        color: $color-text;
      }
      .list-group {
        display: flex;
        // justify-content: space-between;
        flex-wrap: wrap;
        .list {
          margin-right: .43rem /* 16/37.5 */;
          margin-bottom: .43rem /* 16/37.5 */;
          width: 1.92rem /* 72/37.5 */;
          height: 1.92rem /* 72/37.5 */;
          border: 1px solid rgba(203, 203, 203, .6);
          .icon-jia1 {
            font-size: .64rem /* 24/37.5 */;
            color: rgba(203, 203, 203, 1);
          }
        }
      }
    }
  }
</style>
