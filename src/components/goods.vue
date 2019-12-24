<template>
  <div id="goods">
    <el-container>
      <el-aside>
        <el-collapse v-model="activeNames" v-on:click.native="handleClick">
          <el-collapse-item title="价格" name="1">
            <el-radio-group v-model="radio1" size="mini">
              <el-radio label="1" border :data-index="1">0~49一箱</el-radio>
              <el-radio label="2" border :data-index="2">49~99一箱</el-radio>
            </el-radio-group>
          </el-collapse-item>
          <el-collapse-item title="邮费" name="2">
            <el-radio-group v-model="radio2" size="mini">
              <el-radio label="1" border :data-index="3">包邮</el-radio>
              <el-radio label="2" border :data-index="4">不包邮</el-radio>
            </el-radio-group>
          </el-collapse-item>
          <el-collapse-item title="快递方式" name="3">
            <el-radio-group v-model="radio3" size="mini">
              <el-radio label="1" border :data-index="5">邮政</el-radio>
              <el-radio label="2" border :data-index="6">顺丰</el-radio>
              <el-radio label="3" border :data-index="7">四通一达</el-radio>
            </el-radio-group>
          </el-collapse-item>
        </el-collapse>
      </el-aside>
      <el-main class="main">
        <div id="tag">
          <el-tag
            :key="tag"
            v-for="tag in dynamicTags"
            closable
            :disable-transitions="false"
            @close="handleClose(tag)"
          >{{tag}}</el-tag>
          <el-input
            class="input-new-tag"
            v-if="inputVisible"
            v-model="inputValue"
            ref="saveTagInput"
            size="small"
            @keyup.enter.native="handleInputConfirm"
            @blur="handleInputConfirm"
          ></el-input>
        </div>
        <div id="choose">
          <el-button>综合</el-button>
          <el-button>销量</el-button>
          <el-popover placement="bottom-start" width="50" trigger="hover">
            <ul class="sort">
              <li>价格从高到低</li>
              <li>价格从低到高</li>
            </ul>
            <el-button slot="reference">价格</el-button>
          </el-popover>
        </div>
        <div class="smallImg">
          <el-card v-for="(item,index) in goodsData" :key="index" class="smallImgItem">
            <router-link :to="{name:'detail',params:{id:item.id}}">
              <img :src="url+item.bigimg" class="smallSize" alt="图片加载失败" />
              <!-- <img src="../images/apple.jpg" class="smallSize" alt="图片加载失败" /> -->
              <div class="text">
                <h3 class="title">{{item.title}}</h3>
                <p>{{item.description}}</p>
                <h3 class="money">￥{{item.price}}元</h3>
                <el-button type="primary" class="btn">查看详情</el-button>
              </div>
              <!-- <V-detail v-for="goodsItem in goodsData" :key="goodsItem.id" :id="goodsItem.id"></V-detail> -->
            </router-link>
          </el-card>
        </div>
      </el-main>
    </el-container>
  </div>
</template>
<script>
// import Detail from '@/components/goodsDetail.vue'
export default {
  name: "goods",
  data() {
    return {
      radio1: "1",
      radio2: "1",
      radio3: "2",
      activeNames: ["1"],
      dynamicTags: [],
      inputVisible: false,
      inputValue: "",
      goodsName: "",
      goodsData: "",
      url: "http://localhost/"
    };
  },
  // components:{
  //   "V-detail":Detail
  // },
  mounted() {
    if (this.$store.state.havegoods == false) {
      this.$axios({
        url: "/php/indexSearch.php",
        method: "get",
        params: { goodsStr: localStorage.getItem("goodsName") }
      }).then(res => {
        console.log(res);
        this.goodsName = localStorage.getItem("goodsName");
        localStorage.setItem(this.goodsName, JSON.stringify(res.data.data));
        this.goodsData = JSON.parse(localStorage.getItem(this.goodsName));
      });
      this.$store.commit("goodsStatus", true);
    } else {
      this.goodsData = JSON.parse(
        localStorage.getItem(localStorage.getItem("goodsName"))
      );
      console.log(this.goodsData);
    }
  },
  methods: {
    handleClick(e) {
      if (e.target.nodeName.toLowerCase() === "span") {
        const text = e.target.innerText;
        console.log(text);
        this.dynamicTags.push(text);
        this.dynamicTags = Array.from(new Set(this.dynamicTags));
      }
    },
    handleClose(tag) {
      this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
    },

    // showInput() {
    //   this.inputVisible = true;
    //   this.$nextTick(() => {
    //     this.$refs.saveTagInput.$refs.input.focus();
    //   });
    // },

    handleInputConfirm() {
      let inputValue = this.inputValue;
      if (inputValue) {
        this.dynamicTags.push(inputValue);
      }
      this.inputVisible = false;
      this.inputValue = "";
    }
    // toDetail() {
    //   this.$router.push({
    //     path: "/detail:id"
    //   });
    // }
  }

  // watch: {
  //   $route() {
  //     this.$router.go(0);
  //   }
  // }
};
</script>
<style lang="scss">
#goods {
  margin-top: 5rem;
  .el-aside {
    width: 12rem !important;
    // margin-top: 2rem;
  }
}

.el-collapse {
  position: fixed;
  width: 10rem;
  margin-left: 2rem;
  .el-radio {
    margin-left: 0rem !important;
    margin-top: 0.5rem;
  }
}
.main {
  margin-left: 1rem;
  min-height: 30rem;
  // margin-top: 0rem;
  #tag {
    margin-left: 1rem;
    .el-tag + .el-tag {
      margin-left: 10px;
    }
    .button-new-tag {
      margin-left: 10px;
      height: 32px;
      line-height: 30px;
      padding-top: 0;
      padding-bottom: 0;
    }
    .input-new-tag {
      width: 90px;
      margin-left: 10px;
      vertical-align: bottom;
    }
  }
  #choose {
    height: 2rem;
    width: 51.5rem;
    border-radius: 0.2rem;
    margin-left: 1rem;
    margin-top: 0.5rem;
    background-color: #f5f5f5;
    border: 1px solid #dfdede;
    // .chooseItem {
    //   display: inline-block;
    //   height: 2rem;
    //   width: 3rem;
    //   line-height: 2rem;
    //   font-size: 14px;
    //   text-align: center;
    //   box-sizing: border-box;
    //   cursor: pointer;
    //   &:hover {
    //     background-color: #ffffff;
    //     // border: 1px solid #dfdede;
    //   }
    //   &:focus{
    //     background-color: #fff;
    //   }
    // }
    .el-button {
      background-color: #f5f5f5;
      border: none;
    }
    .el-button:focus,
    .el-button:hover {
      background-color: #ffffff !important;
      border: none;
    }
    .el-button + .el-button {
      margin: 0px;
    }
  }
  .smallImg {
    margin-top: 0.5rem;
    text-align: left;
    margin-left: 0rem;
    .smallImgItem {
      font-size: 16px;
      width: 12rem;
      height: 16rem;
      float: left;
      margin-left: 1rem;
      margin-bottom: 1rem;
      a {
        text-decoration: none;
        color: #333333;
      }
      .smallSize {
        width: 7rem;
        width: 7rem;
        position: relative;
        top: 50%;
        left: 50%;
        transform: translate(-50%);
      }
      .text {
        padding: 1rem;
        .title {
          height: 2rem;
        }
        p {
          height: 2rem;
          line-height: 2rem;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
        }
        .money {
          height: 3rem;
          line-height: 3rem;
          color: red;
          float: left;
        }
        .btn {
          float: right;
          margin-top: 0.5rem;
        }
      }
    }
  }
}
.sort {
  list-style: none;
  li {
    height: 1.5rem;
    line-height: 1.5rem;
    &:hover {
      color: #409eff;
      text-decoration: underline;
      cursor: pointer;
    }
  }
}
</style>