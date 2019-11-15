<template>
  <div id="app">
    <el-container>
      <el-header>
        <h1>你想要的</h1>
        <Header></Header>
        <div class="right">
          <el-input placeholder="请输入内容" v-model="input" class="search">
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
          <div>
            <i class="el-icon-user-solid inline"></i>
            <i class="el-icon-shopping-cart-full inline"></i>
          </div>
        </div>
      </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from "./components/header.vue";
import Footer from "./components/footer.vue";
export default {
  name: "app",
  data() {
    return {
      input: ""
    };
  },
  components: {
    Header,
    Footer
  }
};
</script>

<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
//header
.el-header {
  padding: 0;
}
h1 {
  float: left;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
}
.el-input__inner {
  width: 8rem !important;
}
.right {
  height: 3rem;
  line-height: 3rem;
  float: right;
  position: relative;
  .search {
    width: 100%;
    position: absolute;
    right: 10rem;
    top: 50%;
    transform: translate(0, -50%);
  }
  .inline {
    margin-right: 2rem;
  }
}
.el-footer {
  padding: 0 !important;
}
.el-menu {
  border: none !important;
}
.el-menu--horizontal > .el-menu-item.is-active {
  border: none !important;
}
.el-menu--horizontal > .el-menu-item {
  border: none !important;
}
//main
.el-main{
  padding: 0 !important;
}
</style>
