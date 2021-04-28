<!-- TODO search 搜索-->
<template>
  <basic-container>
    <avue-search :option="option" v-model="form" @change="handleChange">
      <template slot="zdy" slot-scope="scope">
        <el-tag>自定义</el-tag>
      </template>
    </avue-search>
  </basic-container>
</template>

<script>
export default {
  name: "search",
  data() {
    return {
      form: {
        zt: ["370000", "620000", "610000", "110000", "410000"],
        checkbox: 0,
        jtgj: [0, 1, 2, 3, 4]
      },
      option: {
        column: [{
          label: '自定义',
          prop: 'zdy',
          slot: true
        }, {
          label: '地区',
          prop: 'zt',
          dicUrl: 'https://cli.avuejs.com/api/area/getProvince',
          props: {
            label: 'name',
            value: 'code'
          }
        }, {
          label: '多选',
          prop: 'checkbox',
          multiple: false,
          dicData: [{
            label: '单层',
            value: 0
          }, {
            label: '多层',
            value: 1
          }]
        }, {
          label: '交通工具',
          prop: 'jtgj',
          dicData: [{
            label: '飞机',
            value: 0
          }, {
            label: '动车',
            value: 1
          }, {
            label: '驾车',
            value: 2
          }, {
            label: '其他',
            value: 3
          }]
        }]
      }
    }
  },
  methods: {
    handleChange(form) {
      this.$message.success(JSON.stringify(form))
    }
  }
}
</script>

<style scoped>

</style>
