<template>
  <div id="home">
    <el-container ref="homePage">
      <el-aside>
        <vue-scroll :ops="ops">
          <el-menu
            :default-active="$router.path"
            class="el-menu-vertical-demo meun"
            background-color="#304156"
            text-color="#fff"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse"
            router
          >
            <el-menu-item index="/home" class="home-item">
              <i class="el-icon-s-home"></i>
              <span slot="title">首页</span>
            </el-menu-item>
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-s-goods"></i>
                <span>商品管理</span>
              </template>
              <el-menu-item index="releaseproduction">发布商品</el-menu-item>
              <el-menu-item index="allGoods">全部商品</el-menu-item>
              <el-menu-item index="addedGoods">已上架商品</el-menu-item>
              <el-menu-item index="noAddGoods">未上架商品</el-menu-item>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-s-order"></i>
                <span>订单管理</span>
              </template>
              <el-menu-item index="allOrder">全部订单</el-menu-item>
              <el-menu-item index="notShipped">未发货</el-menu-item>
              <el-menu-item index="shipped">已发货</el-menu-item>
              <el-menu-item index="pendingReceipt">待签收</el-menu-item>
              <el-menu-item index="comment">待评价</el-menu-item>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-message-solid"></i>
                <span>活动管理</span>
              </template>
              <el-menu-item index="postActivity">发布活动</el-menu-item>
              <el-menu-item index="allActivity">全部活动</el-menu-item>
              <el-menu-item index="publishedActivity">进行中活动</el-menu-item>
              <el-menu-item index="draftActivity">未进行活动</el-menu-item>
              <el-menu-item index="pastActivity">已过期活动</el-menu-item>
            </el-submenu>
          </el-menu>
        </vue-scroll>
      </el-aside>
      <el-main class="main">
        <div id="navbar">
          <div style="padding: 0 15px;line-height:3.1rem;float:left" @click="toggleClick">
            <svg
              class="hamburger"
              viewBox="0 0 1024 1024"
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
            >
              <path
                d="M408 442h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8zm-8 204c0 4.4 3.6 8 8 8h480c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8H408c-4.4 0-8 3.6-8 8v56zm504-486H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zm0 632H120c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-56c0-4.4-3.6-8-8-8zM142.4 642.1L298.7 519a8.84 8.84 0 0 0 0-13.9L142.4 381.9c-5.8-4.6-14.4-.5-14.4 6.9v246.3a8.9 8.9 0 0 0 14.4 7z"
              />
            </svg>
          </div>
          <Breadcrumb class="breadcrumb"></Breadcrumb>
          <div class="rightname">
            <el-dropdown trigger="click">
              <img src="../images/头像.gif" class="head" />
              <span class="name">{{sjname}}</span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <span @click="loginOut">退出登录</span>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
        <vue-scroll :ops="ops">
          <BackTop></BackTop>
          <router-view style="padding-top: 5rem;"></router-view>
        </vue-scroll>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import Breadcrumb from "@/universalComponents/breadcrumb.vue";
import BackTop from "@/universalComponents/backTop.vue";
// import Scrollbar from "@/universalComponents/scrollbar.vue";
export default {
  name: "home",
  data() {
    return {
      ops: {
        vuescroll: {},
        scrollPanel: {},
        rail: {},
        bar: {}
      },
      sjname: "",
      isCollapse: false,
      clientHeight: ""
    };
  },
  components: {
    Breadcrumb,
    BackTop
    // Scrollbar
  },
  mounted() {
    this.sjname = localStorage.getItem("sjname");
    // 获取浏览器可视区域高度
    this.clientHeight = `${document.documentElement.clientHeight}`;
    //document.body.clientWidth;
    //console.log(self.clientHeight);
    window.onresize = function temp() {
      this.clientHeight = `${document.documentElement.clientHeight}`;
    };
  },
  watch: {
    // 如果 `clientHeight` 发生改变，这个函数就会运行
    clientHeight: function() {
      this.changeFixed(this.clientHeight);
    }
  },
  methods: {
    changeFixed(clientHeight) {
      //动态修改样式
      // console.log(clientHeight);
      // console.log(this.$refs.homePage.$el.style.height);
      this.$refs.homePage.$el.style.height = clientHeight + "px";
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    toggleClick() {
      console.log(111);
      console.log("===", this.isCollapse);
      if (this.isCollapse === true) {
        this.isCollapse = false;
        console.log("===>>>", this.isCollapse);
      } else {
        this.isCollapse = true;
        console.log(">>>>>", this.isCollapse);
      }
    },
    loginOut() {
      localStorage.removeItem("sjname");
      this.$router.push({
        path: "/admin"
      });
    }
  }
};
</script>
<style lang="scss">
#home {
  max-width: 1366px;
  margin: 0 auto;
}
.el-aside {
  width: auto !important;

  .el-submenu__title {
    width: 10rem;
  }
}
.main {
  width: 100%;
  padding: 0;
  margin: 0;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  #navbar {
    position: fixed;
    width: 100%;
    max-width: 1166px;
    height: 56px;
    box-shadow: 0.2rem 0.1rem 0.5rem #c2c2c2;
    background-color: #fff !important;
    z-index: 99999;
    .breadcrumb {
      float: left;
    }
    .rightname {
      float: right;
      font-size: 16px;
      margin-right: 1rem;
      height: 56px;
      cursor: pointer;
      transform: translateY(15%);
      .head {
        height: 40px;
        width: 40px;
        border-radius: 10px;
        position: relative;
      }
      .name {
        position: relative;
        top: -1em;
      }
    }
  }
}
.meun {
  transition: all 0.3s;
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  .el-menu-item {
    background-color: #1f2d3d !important;
    &:hover {
      background-color: #001528 !important;
    }
  }
  .home-item {
    background-color: #304156 !important;
  }
  .el-menu-item.is-active {
    background-color: #001528 !important;
    color: #2876e4;
  }
}
</style>