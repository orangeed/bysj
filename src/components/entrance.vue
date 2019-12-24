<template>
  <div id="app">
    <el-container>
      <el-header>
        <h1 @click="toIndex">你想要的</h1>
        <Header></Header>
        <div class="right">
          <el-input placeholder="请输入内容" v-model="input" class="search">
            <el-button slot="append" icon="el-icon-search" @click="Search"></el-button>
          </el-input>
          <div class="rightLogin">
            <i v-show="!this.isLogin" class="el-icon-user-solid inline" @click="toLogin"></i>
            <div v-show="this.isLogin">
              <el-dropdown trigger="click">
                <span style="cursor: pointer;">{{this.username}}</span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>
                    <span @click="tomy">个人中心</span>
                  </el-dropdown-item>
                  <el-dropdown-item>
                    <span @click="loginOut">退出登录</span>
                  </el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </div>
          <i class="el-icon-shopping-cart-full inline car" @click="toShoppingCar"></i>
        </div>
      </el-header>
      <el-main class="enmain">
        <router-view :key="key"></router-view>
      </el-main>
      <el-footer>
        <Footer></Footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import Header from "@/components/header.vue";
import Footer from "@/components/footer.vue";
export default {
  name: "app",
  data() {
    return {
      input: "",
      clientHeight: "",
      isLogin: "",
      username: ""
    };
  },
  components: {
    Header,
    Footer
  },
  computed: {
    key() {
      return this.$route.path + localStorage.getItem("goodName");
    }
  },
  mounted() {
    console.log(this.$store);
    if (localStorage.getItem("username") !== null) {
      this.$store.commit("userStatus", localStorage.getItem("username"));
      this.username = localStorage.username;
      this.isLogin = this.$store.getters.isLogin;
    } else {
      this.username = this.$store.commit("userStatus", null);
      this.isLogin = this.$store.getters.isLogin;
    }
  },
  methods: {
    toLogin() {
      this.$router.push({
        path: "/login"
      });
    },
    toIndex() {
      this.$router.push({
        path: "/"
      });
    },
    tomy() {
      this.$router.push({
        path: "/my"
      });
    },
    Search() {
      // search 是 v-model="search" 的 search
      const search = this.search;
      if (search) {
        this.searchData = this.tableData1.filter(function(product) {
          // 每一项数据
          // console.log("product", product);
          // console.log(Object.keys(product));
          return Object.keys(product).some(function(key) {
            // 每一项数据的参数名
            // console.log(key);
            return (
              String(product[key])
                // toLowerCase() 方法用于把字符串转换为小写。
                .toLowerCase()
                // indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
                .indexOf(search) > -1
            );
          });
        });
        this.total = this.searchData.length;
      } else if (search.length == 0) {
        this.searchData = this.tableData1;
      } else {
        return this.searchData;
      }
    },
    toShoppingCar() {
      this.$router.push({
        path:"/shoppingCar"
      })
    },
    loginOut() {
      this.username = this.$store.commit("userStatus", null);
      localStorage.removeItem("username");
      this.isLogin = this.$store.getters.isLogin;
      this.$router.push({
        path: "/login"
      });
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  // text-align: center;
  color: #2c3e50;
}
//header
.el-header {
  padding: 0;
  position: fixed;
  z-index: 11111;
  background-color: #fff;
  width: 100%;
  // background-color: transparent !important;
}
h1 {
  float: left;
  height: 3rem;
  line-height: 3rem;
  text-align: center;
  cursor: pointer;
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
  .rightLogin {
    position: absolute;
    top: 0;
    left: -5rem;
    .sapn1{
      width: 10rem !important;
    }
    .car {
      float: left;
    }
  }
  .inline {
    margin-right: 2rem;
    cursor: pointer;
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
.enmain {
  padding: 0 !important;
  max-width: 1366px;
}
</style>
