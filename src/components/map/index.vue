<template>
  <basic-container>
    <el-tag type="success" style="margin-bottom: 10px">地图组件</el-tag>
    <avue-map v-model="mapData"></avue-map>
  </basic-container>
</template>

<script>
export default {
  name: "index",
  props: {
    mapData: {
      type: Object,
      default: () => {
      }
    }
  }
}
</script>

<style scoped>

</style>
