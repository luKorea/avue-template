<template>
  <div>
    <map-component :map-data="mapData"/>
    <ueditor-component :data="data"/>
    <basic-container>
      <el-tag type="danger">基础功能</el-tag>
      <watermark-component class="margin-bt"/>
      <import-component class="margin-bt"/>
      <export-component class="margin-bt"/>
      <screen-shot-component class="margin-bt"/>
      <print-component class="margin-bt"/>
    </basic-container>
    <image-preview-component/>
    <count-up-component/>
    <n-progress-component/>
    <video-component/>
    <verify-component/>
    <keyboard-component/>
  </div>
</template>

<script>
import watermarkComponent from '@/components/usingComponent/watermark';
import importComponent from '@/components/usingComponent/import';
import exportComponent from '@/components/usingComponent/exoprt';
import screenShotComponent from '@/components/usingComponent/screenShot';
import printComponent from '@/components/usingComponent/print';
import imagePreviewComponent from '@/components/usingComponent/imagePreview';
import countUpComponent from "../../components/usingComponent/countUp";
import nProgressComponent from "../../components/usingComponent/nProgress";
import videoComponent from "../../components/usingComponent/video";
import verifyComponent from "../../components/usingComponent/verify";
import keyboardComponent from "../../components/usingComponent/keyboard";
import mapComponent from "../../components/map";
import ueditorComponent from '../../components/ueditor';

export default {
  name: "index",
  components: {
    watermarkComponent,
    importComponent,
    exportComponent,
    screenShotComponent,
    printComponent,
    imagePreviewComponent,
    countUpComponent,
    nProgressComponent,
    videoComponent,
    verifyComponent,
    keyboardComponent,
    mapComponent,
    ueditorComponent
  },
  data() {
    return {
      mapData: {},
      data: '<p>欢迎使用Avue Ueditor</p>'
    }
  }
}
</script>

<style scoped lang="scss">
.margin-bt {
  margin-bottom: 10px;
}
</style>
