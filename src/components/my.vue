<template>
  <div id="my">
    <div class="headbg">
      <div class="avatar">
        <el-avatar :size="70" :src="head" style="cursor: pointer;"></el-avatar>
        <p>{{this.userInfo}} <i class="el-icon-edit" style="cursor: pointer;"></i></p>
      </div>
    </div>
    <el-container>
      <el-aside>
        <el-tabs v-model="activeName" @tab-click="handleClick" class="tab">
          <el-tab-pane label="待发货" name="first">
            <div class="order" v-for="(item,index) in firstOrder.slice(0,4)" :key="index">
              <el-image style="height:50px;width:50px" :src="img" class="goodsImg"></el-image>
              <p class="title">{{item.title}}</p>
              <span class="price">价格：{{item.price}}</span>
              <p class="phone">联系方式：{{item.phone}}</p>
              <p class="address">配送地址：{{item.address}}</p>
            </div>
          </el-tab-pane>
          <el-tab-pane label="已发货" name="second">
            <div class="order" v-for="(item,index) in secondOrder.slice(0,4)" :key="index">
              <el-avatar shape="square" :size="50" :fit="fit" :src="img" class="goodsImg"></el-avatar>
              <p class="title">{{item.title}}</p>
              <span class="price">价格：{{item.price}}</span>
              <p class="phone">联系方式：{{item.phone}}</p>
              <p class="address">配送地址：{{item.address}}</p>
            </div>
          </el-tab-pane>
          <el-tab-pane label="待签收" name="third">
            <div class="order" v-for="(item,index) in thirdOrder.slice(0,4)" :key="index">
              <el-avatar shape="square" :size="50" :fit="fit" :src="img" class="goodsImg"></el-avatar>
              <p class="title">{{item.title}}</p>
              <span class="price">价格：{{item.price}}</span>
              <p class="phone">联系方式：{{item.phone}}</p>
              <p class="address">配送地址：{{item.address}}</p>
            </div>
          </el-tab-pane>
          <el-tab-pane label="待评价" name="fourth">
            <div class="order" v-for="(item,index) in fourthOrder.slice(0,4)" :key="index">
              <el-avatar shape="square" :size="50" :fit="fit" :src="img" class="goodsImg"></el-avatar>
              <p class="title">{{item.title}}</p>
              <span class="price">价格：{{item.price}}</span>
              <p class="phone">联系方式：{{item.phone}}</p>
              <p class="address">配送地址：{{item.address}}</p>
            </div>
          </el-tab-pane>
          <div class="more">
            <el-link type="primary">
              查看更多
              <i class="el-icon-arrow-right"></i>
            </el-link>
          </div>
        </el-tabs>
        <el-card class="myShare">
          <div slot="header">
            <span>我的分享</span>
          </div>
          <div v-for="(item,index) in shareData.slice(0,4)" :key="index" class="article" lazy>
            <p class="title">{{item.title}}</p>
            <span class="author">作者：{{item.author}}</span>
            <span class="time">{{item.createtime}}</span>
          </div>
          <div class="more">
            <el-link type="primary">
              查看更多
              <i class="el-icon-arrow-right"></i>
            </el-link>
          </div>
        </el-card>
      </el-aside>
      <el-main class="allmain">
        <el-tabs class="main">
          <el-tab-pane label="我的订单">
            <div class="orderMain">
              <el-tabs tab-position="right">
                <el-tab-pane label="待发货">
                  <el-card
                    class="box-card card"
                    shadow="never"
                    v-for="(item,index) in firstOrder"
                    :key="index"
                  >
                    <el-image
                      style="height:100px;width:100px;;float:left;margin-right:1rem;"
                      :src="img"
                      class="rightImg"
                    ></el-image>
                    <div class="font">
                      <p class="title">{{item.title}}</p>
                      <p class="price">价格：{{item.price}}</p>
                      <p class="createtime">创建时间：{{item.createtime}}</p>
                      <p class="phone">联系方式：{{item.phone}}</p>
                      <p class="address">配送地址：{{item.address}}</p>
                    </div>
                  </el-card>
                </el-tab-pane>
                <el-tab-pane label="已发货">
                  <el-card
                    class="box-card card"
                    shadow="never"
                    v-for="(item,index) in secondOrder"
                    :key="index"
                  >
                    <el-image
                      style="height:100px;width:100px;;float:left;margin-right:1rem;"
                      :src="img"
                      class="rightImg"
                    ></el-image>
                    <div class="font">
                      <p class="title">{{item.title}}</p>
                      <p class="price">价格：{{item.price}}</p>
                      <p class="createtime">创建时间：{{item.createtime}}</p>
                      <p class="phone">联系方式：{{item.phone}}</p>
                      <p class="address">配送地址：{{item.address}}</p>
                    </div>
                  </el-card>
                </el-tab-pane>
                <el-tab-pane label="待签收">
                  <el-card
                    class="box-card card"
                    shadow="never"
                    v-for="(item,index) in thirdOrder"
                    :key="index"
                  >
                    <el-image
                      style="height:100px;width:100px;;float:left;margin-right:1rem;"
                      :src="img"
                      class="rightImg"
                    ></el-image>
                    <div class="font">
                      <p class="title">{{item.title}}</p>
                      <p class="price">价格：{{item.price}}</p>
                      <p class="createtime">创建时间：{{item.createtime}}</p>
                      <p class="phone">联系方式：{{item.phone}}</p>
                      <p class="address">配送地址：{{item.address}}</p>
                    </div>
                  </el-card>
                </el-tab-pane>
                <el-tab-pane label="待评价">
                  <el-card
                    class="box-card card"
                    shadow="never"
                    v-for="(item,index) in fourthOrder"
                    :key="index"
                  >
                    <el-image
                      style="height:100px;width:100px;;float:left;margin-right:1rem;"
                      :src="img"
                      class="rightImg"
                    ></el-image>
                    <div class="font">
                      <p class="title">{{item.title}}</p>
                      <p class="price">价格：{{item.price}}</p>
                      <p class="createtime">创建时间：{{item.createtime}}</p>
                      <p class="phone">联系方式：{{item.phone}}</p>
                      <p class="address">配送地址：{{item.address}}</p>
                    </div>
                  </el-card>
                </el-tab-pane>
              </el-tabs>
            </div>
          </el-tab-pane>
          <el-tab-pane label="我的分享">
            <el-timeline>
              <el-timeline-item
                v-for="(item,index) in shareData"
                timestamp="2019/12/02"
                :key="index"
                placement="top"
                lazy
              >
                <el-card class="sharecard">
                  <h4>{{item.title}}</h4>
                  <p>{{item.content}}</p>
                  <span>{{item.author}}于{{item.createtime}}发表</span>
                </el-card>
              </el-timeline-item>
            </el-timeline>
          </el-tab-pane>
        </el-tabs>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "my",
  data() {
    return {
      // tabPosition:"left",
      head: [require("../images/3.jpg")],
      //测试商品图片
      img: [require("../images/6.jpg")],
      activeName: "first",
      userInfo:"",
      shareData: [],
      firstOrder: [],
      secondOrder: [],
      thirdOrder: [],
      fourthOrder: []
    };
  },
  mounted() {
    this.userInfo = localStorage.getItem("username")
    this.$axios({
      method: "get",
      url: "/php/articleSearch.php"
    }).then(res => {
      // console.log(res)
      this.shareData = res.data.data;
      console.log(this.shareData);
    });
    this.$axios({
      method: "get",
      url: "/php/orderSearch.php"
    }).then(res => {
      const data = res.data.data;
      for (let i = 0; i < data.length; i++) {
        const dataItem = data[i];
        const state = dataItem.state;
        if (state == "待发货") {
          this.firstOrder.push(data[i]);
          // console.log(this.firstOrder);
        } else if (state == "已发货") {
          this.secondOrder.push(data[i]);
          // console.log(this.secondOrder)
        } else if (state == "待签收") {
          this.thirdOrder.push(data[i]);
        } else {
          this.fourthOrder.push(data[i]);
        }
      }
    });
  }
};
</script>
<style lang="scss">
#my {
  // margin-top: 3rem;
  max-width: 47rem;
  text-align: center;
  margin: 3rem auto;
  font-size: 14px;
  .headbg {
    width: 47rem;
    height: 15rem;
    background-color: #eb903c;
    position: relative;
    .avatar {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
  .el-aside {
    // position: fixed;
    text-align: left;
    .el-tabs__header {
      margin: 0 0 5px;
    }
    .el-tabs__item {
      padding: 0 9px;
    }
    .order {
      padding-left: 9px;
      height: 5rem;
      border-bottom: 1px solid #f0eded;
      cursor: pointer;
      .goodsImg {
        margin-top: 5px;
        float: left;
      }
      .title {
        // float: left;
        height: 1.7rem;
        // width: 180px;
        position: relative;
        left: 10px;
        top: 5px;
        &:hover {
          color: #d64540;
          text-decoration: underline;
        }
        // *zoom: 1;
      }
      // .title:after{
      //   content: "";
      //   display: block;
      //   height: 0;
      //   clear:both;
      //   visibility: hidden;
      // }
      .price {
        font-size: 12px;
        height: 1rem;
        line-height: 1rem;
        color: #ff0000;
        position: relative;
        left: 10px;
      }
      .phone {
        font-size: 12px;
        height: 1rem;
        line-height: 1rem;
        margin-top: 5px;
      }
      .address {
        @extend .phone;
        margin-top: 0px;
      }
    }
    .myShare {
      margin-top: 1rem;
      .el-card__header {
        padding: 10px 9px;
      }
      .article {
        padding-left: 9px;
        border-bottom: 1px solid #f0eded;
        cursor: pointer;
        .title {
          height: 2rem;
          line-height: 2rem;
          &:hover {
            color: #d64540;
            text-decoration: underline;
          }
        }
        .author {
          font-size: 12px;
          height: 1rem;
          line-height: 1rem;
          color: #c4c3c3;
        }
        .time {
          @extend .author;
          float: right;
          margin-right: 0.5rem;
        }
      }
    }
  }
  .allmain {
    margin-left: 1rem;   
    text-align: left;
    box-sizing: border-box;
    .el-tabs__nav {
      transform: translateX(250px) !important;
    }
    .orderMain {
      .el-tabs__nav {
        transform: translateX(0px) !important;
      }
      .title {
        font-size: 16px;
        height: 2rem;
        line-height: 2rem;
        &:hover {
          color: #d64540;
          text-decoration: underline;
        }
      }
      .price {
        color: #ff0000;
        height: 1.5rem;
        width: 7.8rem;
        line-height: 1.5rem;
        float: left;
        margin-right: 2rem;
      }
      .createtime {
        height: 1.5rem;
        line-height: 1.5rem;
        color: #c4c3c3;
      }
      .phone {
        @extend .price;
        color: #858585;
        // margin-right: 2rem;
      }
      .address {
        @extend .createtime;
        color: #858585;
      }
      .card {
        margin-top: 1rem;
        cursor: pointer;
      }
    }
    .sharecard {
      height: 10rem;
      padding-left: 1rem;
      cursor: pointer;
      h4 {
        margin-top: 1rem;
        height: 3rem;
        line-height: 3rem;
        &:hover {
          color: #d64540;
          text-decoration: underline;
        }
      }
      p {
        height: 3rem;
      }
      span {
        height: 2rem;
        line-height: 2rem;
        color: #c4c3c3;
      }
    }
  }
}
.more {
  text-align: center;
}
</style>