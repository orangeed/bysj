<template>
  <div id="index">
    <div id="swiper">
      <el-carousel trigger="click" class="swiper">
        <el-carousel-item v-for="(item,index) in img" :key="index">
          <img :src="item" alt />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="smallImg">
        <el-card v-for="(item,index) in smallImg" :key="index" class="smallImgItem">
            <img :src="item" alt="">
        </el-card>
    </div>
    <div class="bigImg">
      <img src="../images/3.jpg" class="image" />
      <el-card></el-card>
    </div>
  </div>
</template>
<script>
export default {
  name: "index",
  data() {
    return {
      img: [
        require("../images/1.jpg"),
        require("../images/2.jpg"),
        require("../images/1.jpg"),
        require("../images/2.jpg")
      ],
      smallImg:[
          require("../images/4.jpg"),
          require("../images/5.jpg"),
          require("../images/6.jpg"),
      ]
    };
  }
};
</script>
<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">
.swiper {
  width: 100%;
  height: 25rem;
  .el-carousel__container {
    height: 25rem;
  }
  img {
    height: 768px;
    width: 1366px;
  }
}
.smallImg{
    margin-top: 2rem;
    .el-card__body{
        padding: 0;
    }
    .smallImgItem{
        width: 20rem;
        height: 30rem;
        float: left;
        margin-left: 1.8rem;
    }
}
.bigImg{
    margin-top: 2rem;
}
</style>