<template>
  <basic-container>
    <div class="image-container">
      <ImgCutter @cutDown="cutDown" :is-modal="false"
                 @onPrintImg="printImg"
                 WatermarkText="果汁"
      />
      <el-image :src="imageUrl" class="image" fit="contain" :preview-src-list="[imageUrl]"></el-image>
    </div>
  </basic-container>
</template>
<script>
import ImgCutter from "vue-img-cutter";

export default {
  components: {
    ImgCutter,
  },
  data() {
    return {
      imageUrl: ''
    }
  },
  methods: {
    cutDown(e) {
      console.log(e);
    },
    printImg(e) {
      this.imageUrl = e.dataURL;
    }
  }
};
</script>

<style scoped lang="scss">
.image-container {
  display: flex;
  width: 100%;

  .image {
    border: 1px solid #f6f6f6;
    margin-left: 100px;
    width: 30%;
    height: 400px;
  }
}
</style>
