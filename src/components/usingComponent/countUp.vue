<!-- TODO CountUp数字动画-->
<template>
  <basic-container>
    <el-tag style="margin-right: 10px" type="success">数字动画</el-tag>
    <el-tag type="info" style="margin-right: 10px"><avue-count-up :end="15033.2"></avue-count-up></el-tag>
    <el-tag type="warning"><avue-count-up :end="1233.2" :start="1000"></avue-count-up></el-tag>
  </basic-container>
</template>

<script>
/**
 * @description Variables
 * start	开始时的数字	Number	-	0
 * end	结束时的数字	Number	-	-
 * decimals	是否支持小数	Number	-	0
 * duration	动画速度	Number	-	2
 * options	CountUp.js其他配置	Object	-	-
 * callback	开始时候的回调	Function
 */
export default {
  name: "countUp"
}
</script>

<style scoped>

</style>
