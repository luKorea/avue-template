<!-- TODO Clipboard -->
<template>
  <basic-container>
    <div style="margin-bottom:10px">
      <el-button @click="copy">直接复制</el-button>
      <el-button @click="textarea=''">清 空</el-button>
    </div>
    <el-input placeholder="内容" v-model="text">
      <template slot="append">
        <el-button @click="copyText" color="primary">复制</el-button>
      </template>
    </el-input>
    <div style="margin-top:10px">
      <el-input type="textarea" v-model="textarea" cols="40" rows="3"></el-input>
    </div>
  </basic-container>
</template>

<script>
export default {
  name: "clipboard",
  data() {
    return {
      text: '',
      textarea: ''
    }
  },
  methods: {
    copyText() {
      this.$Clipboard({
        text: this.text
      }).then(() => {
        this.$message.success('复制成功')
      }).catch(() => {
        this.$message.error('复制失败')
      });
    },
    copy() {
      this.$Clipboard({
        text: '测试==复制至剪切板的文本==测试'
      }).then(() => {
        this.$message.success('复制成功')
      }).catch(() => {
        this.$message.error('复制失败')
      });
    }
  }
}
</script>

<style scoped>

</style>
