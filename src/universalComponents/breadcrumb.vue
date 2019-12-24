<template>
  <div id="breadcrumb">
    <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item
        v-for="(item) in levelList"
        :key="item.path"
        :to="item.path"
      >{{item.meta.name}}</el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name:"breadcrumb",
  data() {
    return {
      levelList: null
    };
  },
  watch: {
    $route() {
      this.getBreadcrumb();
    }
  },
  created() {
    this.getBreadcrumb();
  },
  methods: {
    getBreadcrumb() {
      // only show routes with meta.title
      let matched = this.$route.matched.filter(
        item => item.meta && item.meta.name
      );
      matched = [{ path: "/home", meta: { name: "首页" } }].concat(matched);

      this.levelList = matched.filter(
        item => item.meta && item.meta.name && item.meta.breadcrumb !== false
      );
    }
  }
};
</script>

<style lang="scss" >
.app-breadcrumb.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;

  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
