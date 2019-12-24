<template>
  <div id="backTop">
    <el-backtop target="main" :bottom="50">
      <div class="btn">TOP</div>
    </el-backtop>
  </div>
</template>
<style lang="scss">
#backTop {
  .btn {
    height: 100%;
    width: 100%;
    background-color: #f2f5f6;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.12);
    text-align: center;
    line-height: 40px;
    color: #1989fa;
    font-size: 16px;
  }
}
</style>