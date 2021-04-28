<!-- TODO  导入 xlsx -->
<template>
  <el-row>
    <el-tag style="margin-right: 10px" type="success">导入 xlsx</el-tag>
    <el-button type="primary" @click="handleGet">下载模版</el-button>
    <el-upload :show-file-list="false" action="action" :on-change="handleChange" style="display: inline-block; margin-left: 10px">
      <el-button type="primary">导入 excel</el-button>
    </el-upload>
  </el-row>
</template>

<script>
export default {
  name: "import",
  data() {
    return {
      list: []
    }
  },
  methods: {
    handleGet() {
      window.open('/cdn/demo.xlsx')
    },
    handleChange(file) {
      this.$Export.xlsx(file.raw)
        .then(data => {
          this.list = data.results;
          console.log(this.list);
        })
    }
  }
}
</script>

<style scoped>

</style>
