<!-- TODO ImagePreview -->
<template>
  <basic-container>
    <el-tag style="margin-right: 10px" type="success">图片预览</el-tag>
    <el-button @click="openPreview(0)" style="margin-bottom:20px;">打开图片预览</el-button>
    <img width="200px" style="margin-right:20px" v-for="(d, index) of datas" :src="d.thumbUrl"
         @click="openPreview(index)" alt=""/>
  </basic-container>
</template>

<script>
export default {
  name: "imagePreview",
  data() {
    return {
      datas: [
        {
          thumbUrl: `https://img.alicdn.com/tfs/TB1uevcCrj1gK0jSZFuXXcrHpXa-1880-640.jpg`,
          url: `https://img.alicdn.com/tfs/TB1uevcCrj1gK0jSZFuXXcrHpXa-1880-640.jpg`
        },
        {
          thumbUrl: `https://img.alicdn.com/tfs/TB1v28TC8v0gK0jSZKbXXbK2FXa-1880-640.jpg`,
          url: `https://img.alicdn.com/tfs/TB1v28TC8v0gK0jSZKbXXbK2FXa-1880-640.jpg`
        },
      ]
    }
  },
  methods: {
    openPreview(index = 0) {
      this.$ImagePreview(this.datas, index);
    }
  }
}
</script>

<style scoped>

</style>
