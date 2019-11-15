<template>
  <div id="header">
    <el-menu :default-active="activeIndex" mode="horizontal">
      <el-menu-item index="1">首页</el-menu-item>
      <el-submenu index="2">
        <template slot="title">生鲜水果</template>
        <el-menu-item index="2-1">水果1</el-menu-item>
        <el-menu-item index="2-2">水果2</el-menu-item>
        <el-menu-item index="2-3">水果3</el-menu-item>
      </el-submenu>
      <el-menu-item index="3">手工艺品</el-menu-item>
      <el-menu-item index="4">旅行景点</el-menu-item>
      <el-menu-item index="5">分享中心</el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  name: "El-header",
  data() {
    return {
      activeIndex: "1",
    };
  }
};
</script>
<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">
#header {
  float: left;
}
</style>