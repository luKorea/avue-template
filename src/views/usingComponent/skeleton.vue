<!-- TODO Skeleton 骨架屏-->
<template>
  <basic-container>
    最简单的占位效果。
    <avue-skeleton/>
    <br>
    最后一行占满的效果
    <avue-skeleton block/>
    <br>
    带头像的效果
    <avue-skeleton avatar/>
    <br>
    自定义行数的效果
    <avue-skeleton avatar :rows="5"/>
    <br>
    自定义列表的效果
    <avue-skeleton avatar :rows="4" :number="3"/>
    <br>
    动态切换效果
    <el-switch :active-value="false" :inactive-value="true" v-model="loading" active-color="#13ce66"
               inactive-color="#ff4949"/>
    <avue-skeleton :loading="loading">
      <span>加载的内容</span>
    </avue-skeleton>
  </basic-container>
</template>

<script>
/**
 * @description Variables
 * active  是否展示动画效果  Boolean  true/false  true
 * avatar  是否显示头像占位图  String  true/false  false
 * loading  是否显示骨架屏  Boolean  true/false  true
 * rows  设置段落的行数  Number  -  3
 * block  最后一行是否占满  Boolean  true/false  false
 */
export default {
  name: "skeleton",
  data() {
    return {
      loading: true,
    }
  }
}
</script>

<style scoped>

</style>
