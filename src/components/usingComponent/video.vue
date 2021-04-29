<!--TODO Video 摄像头-->
<template>
  <basic-container>
    <el-row>
      <el-tag style="margin-right: 10px" type="success">摄像头</el-tag>
      <el-button @click="startRecord" v-if="!flag" type="primary">开始录制</el-button>
      <el-button type="danger" @click="stopRecord" v-else>停止录制</el-button>
    </el-row>
    <avue-video background="https://avuejs.com/images/face.png" @data-change="dataChange" ref="video"></avue-video>
  </basic-container>
</template>

<script>
export default {
  name: "video",
  data(){
    return {
      flag:false
    }
  },
  methods: {
    startRecord() {
      this.flag=true;
      this.$message.success('开始录制')
      this.$refs.video.startRecord();
    },
    stopRecord() {
      this.flag=false;
      this.$message.success('请看控制台视频文件的base64')
      this.$refs.video.stopRecord();
    },
    dataChange(data) {
      console.log(data);
    }
  }
}
</script>

<style scoped>

</style>
