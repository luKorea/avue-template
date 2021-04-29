<!--TODO Verify 验证码-->
<template>
  <basic-container>
    <el-tag style="margin-right: 10px" type="success">验证码</el-tag>
    <el-button @click="$refs.verify.randomn()" type="primary">随机验证码</el-button>
    <br><br>
    <span style="font-size: 24px;line-height: 24px;color: #333;">请使用普通话朗读下方验证码</span>
    <br><br>
    <avue-verify v-model="data" :len="len" ref="verify"></avue-verify>
    <br><br>
    <avue-video background="https://avuejs.com/images/face.png" @data-change="dataChange" ref="video"></avue-video>
  </basic-container>
</template>

<script>
export default {
  name: "video",
  data() {
    return {
      data: null,
      len: 6,
    }
  },
  methods: {
    dataChange(data) {
      console.log(data);
    }
  }
}
</script>

<style scoped>

</style>
