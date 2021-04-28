<!-- TODO Sign 电子签名-->
<template>
  <basic-container>
    <avue-sign ref="sign"></avue-sign>
    <el-button type="primary" @click="handleSubmit">生成</el-button>
    <el-button type="danger" @click="$refs.sign.getStar('工资签名','广东粤宝黄金','088748')">图章</el-button>
    <el-button @click="$refs.sign.clear()">清空</el-button>
    <div  class="sign">
      <el-tag type="success" style="margin-right: 10px">生成结果</el-tag>
      <el-image
        style="width: 100px; height: 100px"
        :src="img"
        :preview-src-list="[img]">
      </el-image>
    </div>
  </basic-container>
</template>

<script>
export default {
  name: "sign",
  data() {
    return {
      img: ''
    }
  },
  methods: {
    handleSubmit() {
      this.img = this.$refs.sign.submit(80, 50);
      console.log(this.img)
    }
  }
}
</script>

<style scoped lang="scss">
.sign {
  display: flex;
  //justify-content: center;
  align-items: center;
  margin: 10px;
}
</style>
