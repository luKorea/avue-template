<!-- TODO Print打印 -->
<template>
  <el-row>
    <el-tag type="success" style="margin-right: 10px">Print打印</el-tag>
    <el-button type="primary" @click="handlePrint1">打印局部</el-button>
    <el-button type="primary" @click="handlePrint">打印全部</el-button>
<!--    <div id="test">-->
<!--      <h2 style="color:red">我是测试字段</h2>-->
<!--    </div>-->
  </el-row>
</template>

<script>

export default {
  name: "print",
  methods: {
    handlePrint1() {
      this.$Print('#test');
    },
    handlePrint() {
      this.$Print('#app');
    }
  }
}
</script>

<style scoped>

</style>
