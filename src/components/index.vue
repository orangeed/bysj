<template>
  <div id="index">
    <div id="swiper">
      <el-carousel trigger="click" class="swiper">
        <el-carousel-item v-for="(item,index) in swiperData" :key="index">
          <img :src="item.img" alt />
          <div class="text">
            <h2 style="color:#fff">{{item.title}}</h2>
            <p>{{item.description}}</p>
            <h3 style="color:red">￥{{item.price}}元</h3>
          </div>
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="bigImg">
      <el-card shadow="never">
        <div v-for="(item,index) in bigDate" :key="index">
          <img :src="item.img" class="image" />
          <div class="text">
            <h2 style="color:#fff">{{item.title}}</h2>
            <p>{{item.description}}</p>
            <h3 style="color:red">￥{{item.price}}元</h3>
          </div>
        </div>
      </el-card>
    </div>
    <div class="smallImg">
      <el-card v-for="(item,index) in smallImg" :key="index" class="smallImgItem">
        <img :src="item.img" class="smallSize" />
        <div class="text">
          <h3 class="title">{{item.title}}</h3>
          <p>{{item.description}}</p>
          <h3 class="money">￥{{item.price}}元</h3>
          <el-button type="primary" class="btn">查看详情</el-button>
        </div>
      </el-card>
    </div>
  </div>
</template>
<script>
export default {
  name: "index",
  data() {
    return {
      swiperData: [
        {
          img: require("../images/1.jpg"),
          title: "商品1",
          description:
            "详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述",
          price: "99"
        },
        {
          img: require("../images/2.jpg"),
          title: "商品2",
          description:
            "详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述",
          price: "199"
        },
        {
          img: require("../images/5.jpg"),
          title: "商品3",
          description:
            "详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述",
          price: "299"
        },
      ],
      smallImg: [
        {
          img: require("../images/4.jpg"),
          title: "商品1",
          description:
            "详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述",
          price: "99"
        },
        {
          img: require("../images/5.jpg"),
          title: "商品3",
          description:
            "详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述",
          price: "99"
        },
        {
          img: require("../images/6.jpg"),
          title: "商品2",
          description:
            "详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述",
          price: "99"
        }
      ],
      bigDate: [
        {
          img: require("../images/3.jpg"),
          title: "标题1",
          description:
            "详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述详细描述",
          price: "99"
        }
      ]
    };
  },
  mounted() {
    console.log(this.$store.state.currentUser)
  },
};
</script>
<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">
#index {
  margin-top: 3rem;
  text-align: center;
}
.el-card__body {
  padding: 0;
}
.swiper {
  width: 100%;
  height: 25rem;
  .el-carousel__container {
    height: 25rem;
  }
  img {
    min-height: 768px;
    min-width: 1366px;
  }
  .text{
    text-align: left;
    box-sizing: border-box;
    height: 10rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-20%, -100%);
    h2 {
      height: 3rem;
      line-height: 3rem;
    }
    p {
      height: 6rem;
      line-height: 2rem;
      color: #ffffff;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }
  }
}
.bigImg {
  margin-top: 2rem;
  font-size: 16px;
  position: relative;
  margin-left: 0.2rem;
  .el-card {
    border-style: none;
  }
  .image {
    width: 1280px;
    height: 600px;
  }
  .text {
    text-align: left;
    box-sizing: border-box;
    height: 10rem;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-20%, -100%);
    h2 {
      height: 3rem;
      line-height: 3rem;
    }
    p {
      height: 6rem;
      line-height: 2rem;
      color: #ffffff;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }
  }
}
.smallImg {
  // margin-top: 2rem;
  text-align: left;
  // margin-left: -1.8rem;
  margin: 2rem auto;
  .smallImgItem {
    font-size: 16px;
    width: 20rem;
    height: 24rem;
    float: left;
    margin-left: 1.9rem;
    .smallSize {
      width: 20rem;
    }
    .text {
      padding: 1rem;
      .title{
        height: 2rem;
      }
      p {
        height: 6rem;
        line-height: 2rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
      }
      .money{
        height: 3rem;
        line-height: 3rem;
        color: red;
        float: left;
      }
      .btn{
        float: right;
        margin-top: 0.5rem;
      }
    }
  }
}

</style>