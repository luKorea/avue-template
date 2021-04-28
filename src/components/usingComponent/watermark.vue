<!-- TODO  全局水印 -->
<template>
  <basic-container>
    <el-row :gutter="12">
      <el-tag title="Watermark 全局水印"/>
      <el-button @click="submitWatermark" type="primary">全局水印</el-button>
      <el-button @click="delWatermark" type="danger">删除水印</el-button>
    </el-row>
  </basic-container>
</template>

<script>
/**
 * @description 参数说明
 * text	水印的文字	 String	-	avue商用通用无敌大水印
 * font	水印字体和大小	 String	-	30px 黑体
 * textStyle	水印文本对齐方式	String	-	rgba(100,100,100,0.15)
 * degree	水印文本旋转角度	String	-	-20
 */
export default {
  name: "watermark",
  data() {
    return {
      watermarkObj: '',
      createWatermark: false
    }
  },
  methods: {
    submitWatermark() {
      if (this.createWatermark) {
        this.$message.success('已经创建水印了')
        return
      }
      this.createWatermark = true;
      this.$message.success('添加水印成功')
      this.watermarkObj = this.watermark({text: 'avue全局水印演示'})
    },
    delWatermark() {
      this.watermarkObj.remove();
      this.createWatermark = false;
    },
  }
}
</script>

<style scoped>

</style>
