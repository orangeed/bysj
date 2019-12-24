<template>
  <div id="goodsDetail">
    <div v-for="item in goods" :key="item.id">
      <div class="top">
        <img :src="url+item.topimg" alt="图片加载失败" />
      </div>
      <div style=" max-width: 50rem;margin: 0 auto;height:100%">
        <div class="middle">
          <div class="left">
            <el-carousel class="swiper" height="20rem" :autoplay="false">
              <el-carousel-item
                v-for="(itemimg,index) in smallimg"
                :key="index"
                style="height:20rem"
              >
                <img :src="url+itemimg" alt="图片加载失败" class="smallimg" />
              </el-carousel-item>
            </el-carousel>
          </div>
          <div class="right">
            <h3 class="title">{{item.title}}</h3>
            <h6 class="description">{{item.description}}</h6>
            <h5 class="price">
              <span>价格：</span>
              ￥{{item.price}}元
            </h5>
            <h5 class="number">
              <span>库存：</span>
              {{item.number}}件
            </h5>
            <div>
              <span>规格：</span>
              {{item.specification}}
            </div>
            <span>购买数量：</span>
            <el-input-number v-model="num" :min="1" label="购买数量" size="small"></el-input-number>
            <div class="btn">
              <router-link :to="{name:'order',params:{id:item.id}}"><el-button class="buy">立即购买</el-button></router-link>
              <el-button icon="el-icon-shopping-cart-full" class="addcar">加入购物车</el-button>
            </div>
          </div>
        </div>
        <div class="last">
          <div class="leftlast">
            <div class="title">产品推荐</div>
            <div>暂无推荐</div>
          </div>
          <div class="rightlast">
            <el-tabs v-model="activeName" type="card">
              <el-tab-pane label="商品详情" name="first">
                <div v-for="(itemimg,index) in smallimg" :key="index">
                  <img :src="url+itemimg" alt="图片加载失败" />
                </div>
              </el-tab-pane>
              <el-tab-pane label="用户评价" name="second">暂无评价</el-tab-pane>
            </el-tabs>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "goodsDetail",
  data() {
    return {
      goods: [],
      smallimg: [],
      num: "",
      activeName:"first",
      url: "http://localhost/"
    };
  },
  created() {
    console.log(this.$route.params.id);
    this.$axios({
      url: "/php/goodsItem.php",
      method: "get",
      params: { id: this.$route.params.id }
    }).then(res => {
      console.log(res);
      this.goods = res.data.data;
      this.smallimg = res.data.data[0].smallimg.split(",");
      console.log(this.smallimg);
      console.log(this.goods);
    });
  }
};
</script>
<style lang="scss">
#goodsDetail {
  padding-top: 3rem;
  font-size: 16px;
  .top {
    img {
      width: 100%;
    }
  }
  .middle {
    .left {
      float: left;
      .swiper {
        width: 20rem;
        height: 20rem;
        .smallimg {
          width: 20rem !important;
          height: 20rem !important;
          min-width: 0rem;
          min-height: 0rem;
        }
      }
    }
    .right {
      float: left;
      padding-left: 4rem;
      .title {
        font-size: 25px;
      }
      .description {
        line-height: 16px;
      }
      .price {
        font-size: 20px;
        color: #d61f1f;
        span {
          font-size: 14px;
          color: #333;
        }
      }
      .number {
        font-size: 20px;
        color: #d61f1f;
        span {
          font-size: 14px;
          color: #333;
        }
      }
      .btn {
        .el-button {
          width: 9rem;
        }
        .buy {
          background-color: #ffeded;
          border: 1px solid #ff0036;
          color: #ff0036;
        }
        .addcar {
          background-color: #ff0036;
          color: #fff;
        }
      }
      .el-input__inner {
        width: 6.5rem !important;
      }
    }
  }
  .last {
    clear: both;
    padding-top: 2rem;
    .el-tabs--card > .el-tabs__header .el-tabs__item.is-active {
      border-bottom: 3px solid #ff0036;
      color: #ff0036;
      // border-bottom-color: #ffffff;
    }
    .leftlast {
      float: left;
      min-height: 15rem;
      height: 100%;
      width: 10rem;
      border: 1px solid #d3d0d0;
      font-size: 14px;

      .title {
        height: 2rem;
        line-height: 2rem;
        padding-left: 5px;
        background-color: #d3d0d0;
      }
    }
    .rightlast {
      float: left;
      padding-left: 1rem;
    }
  }
}
</style>