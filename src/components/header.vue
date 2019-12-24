<template>
  <div id="header">
    <el-menu :default-active="activeIndex" mode="horizontal">
      <el-menu-item index="1" @click="toIndex">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">生鲜水果</template>
        <el-menu-item index="2-1">
          <span @click="toGoods" class="childitem">苹果</span>
        </el-menu-item>
        <el-menu-item index="2-2">
          <span class="childitem" @click="toGoods">梨子</span>
        </el-menu-item>
        <el-menu-item index="2-3">
          <span @click="toGoods" class="childitem">香蕉</span>
        </el-menu-item>
      </el-submenu>
      <el-menu-item index="3">
        <span @click="toGoods">手工艺品</span>
      </el-menu-item>
      <el-menu-item index="4">
        <span @click="toGoods">旅行景点</span>
      </el-menu-item>
      <el-menu-item index="5">分享中心</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "El-header",
  data() {
    return {
      activeIndex: "1"
      // goodsStr: ""
    };
  },
  methods: {
    toIndex() {
      this.$router.push({
        path: "/"
      });
    },
    toGoods(e) {
      const text = e.target.innerText;
      localStorage.setItem("goodsName",text)
      this.$store.state.goodsStr = text;
      console.log(this.$store.state.goodsStr);
      this.$router.push({
        path: "goods" + this.$store.state.goodsStr
      });
      // this.$forceUpdate();
    }
  }
};
</script>
<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">
#header {
  float: left;
  // position: fixed;
  // z-index: 11111;
}
.childitem {
  display: block;
  width: 9rem !important;
  cursor: pointer;
}
</style>