<!-- TODO NProgress 进度条-->
<template>
  <basic-container>
    <el-tag style="margin-right: 10px" type="success">进度条</el-tag>
    <el-button type="primary" @click="$NProgress.start()">开始</el-button>
    <el-button type="danger" @click="$NProgress.done()">停止</el-button>
    <el-button type="warning" @click="$NProgress.remove()">删除</el-button>
  </basic-container>
</template>

<script>
export default {
  name: "nProgress"
}
</script>

<style scoped>

</style>
