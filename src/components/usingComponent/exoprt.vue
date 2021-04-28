<!-- TODO  导出 xlsx -->
<template>
  <el-row>
    <el-tag style="margin-right: 10px" type="success">导出 xlsx</el-tag>
    <el-button type="primary" @click="handleExcel">下载 excel</el-button>
    <el-button type="success" @click="handleExcel1">下载 复杂表头excel</el-button>
  </el-row>
</template>

<script>
/**
 * @description 导出参数
 * title	标题	String	-	new Date().getTime()
 * column	数据列	Array	-	-
 * data	数据	Array
 */
export default {
  name: "export",
  data() {
    return {
      list: []
    }
  },
  methods: {
    handleExcel() {
      let opt = {
        title: '文档标题',
        column: [{
          label: '标题',
          prop: 'title'
        }],
        data: [{
          title: "测试数据1"
        }, {
          title: "测试数据2"
        }]
      }
      this.$Export.excel({
        title: opt.title,
        columns: opt.column,
        data: opt.data
      });
    },
    handleExcel1() {
      let opt = {
        title: '文档标题',
        column: [{
          label: '复杂表头',
          prop: 'header',
          children: [
            {
              label: '标题1',
              prop: 'title1'
            }, {
              label: '标题2',
              prop: 'title2'
            }
          ]
        }],
        data: [{
          title1: "测试数据1",
          title2: "测试数据2"
        }, {
          title1: "测试数据2",
          title2: "测试数据2"
        }]
      }
      this.$Export.excel({
        title: opt.title,
        columns: opt.column,
        data: opt.data
      });
    }
  }
}
</script>

<style scoped>

</style>
