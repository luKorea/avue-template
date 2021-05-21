<!-- TODO 图片放大镜组件 -->
<template>
  <basic-container>
    <vue-photo-zoom-pro url="/img/logo.png" class="img" out-zoomer/>
  </basic-container>
</template>

<script>
export default {
  name: "imageZoom"
}
</script>

<style scoped>
.img {
  width: 500px;
  height: 500px;
}
</style>
