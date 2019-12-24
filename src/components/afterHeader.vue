<template>
  <div id="superHeader">
    <el-container>
      <el-header>
        <h1 @click="toIndex">你想要的</h1>
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
        <div class="right">
          <el-dropdown trigger="click">
            <span style="cursor: pointer;">{{this.username}}</span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>
                <span @click="loginOut">退出登录</span>
              </el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
      </el-header>
    </el-container>
  </div>
</template>
<script>
export default {
  name: "superHeader",
  data() {
    return {};
  }
};
</script>
<style lang="scss" scope="this api replaced by slot-scope in 2.5.0+">
</style>