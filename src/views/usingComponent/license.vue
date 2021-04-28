<!--TODO 授权书License -->
<template>
  <basic-container>
    <el-button @click="handleUpload">导出PDF</el-button>
    <el-button @click="handleFile" type="success">下载图片</el-button>
    <el-button @click="handleSend" type="primary">获取文件流</el-button>
    <el-button @click="handleBase64" type="danger">获取bas64</el-button>
    <avue-license ref="license" :option="data" style="margin-top: 10px"></avue-license>
  </basic-container>
</template>

<script>
export default {
  name: "license",
  data() {
    return {
      form: {
        id: '',
        date: '',
        name: '',
        qq: ''
      }
    }
  },
  computed: {
    data() {
      return {
        img: "/img/logo.jpg",
        list: [{
          left: 310,
          top: 625,
          text: `“ ${this.form.name} ”`,
          color: '#000',
          size: 29,
          bold: true,
          style: '黑体'
        }, {
          left: 690,
          top: 1077,
          text: this.form.id,
          color: '#000',
          size: 26,
          bold: true,
          style: '黑体'
        }, {
          left: 690,
          top: 1125,
          text: this.form.date,
          color: '#000',
          bold: true,
          size: 26,
          style: '黑体'
        }, {
          left: 440,
          top: 120,
          width: 100,
          img: '/img/logo.gif'
        }]
      }
    }
  },
  methods: {
    handleSend() {
      this.$message.success('请查看控制台');
      this.$refs.license.getFile(this.form.name).then(file => {
        console.log(file);
      })


    },
    handleBase64() {
      this.$message.success('请查看控制台');
      this.$refs.license.getBase64().then(file => {
        console.log(file);
      });
    },
    handleFile() {
      this.$refs.license.getBase64(this.form.name).then(file => {
        this.downFile(file, new Date().getTime());
      })
    },
    handleUpload() {
      this.$refs.license.getPdf(this.form.name);
    }
  }
}
</script>

<style scoped>

</style>
