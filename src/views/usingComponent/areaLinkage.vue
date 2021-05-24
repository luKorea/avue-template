<template>
  <basic-container>
    <div style="min-height: 400px">
      <area-select v-model="selected" :data="cityData" :level="3" style="display: flex;line-height: 18px;"/>
      <el-tag type="success" style="margin: 10px">{{ selected }}</el-tag>
    </div>
  </basic-container>
</template>

<script>
import cityData from './city';
export default {
  name: "areaLinkage",
  data() {
    return {
      selected: [],
      cityData: cityData
    }
  }
}
</script>

<style scoped>

</style>
