<template>
  <div>
    <basic-container>
      <watermark-component class="margin-bt"/>
      <import-component class="margin-bt"/>
      <export-component class="margin-bt"/>
      <screen-shot-component class="margin-bt"/>
      <print-component class="margin-bt"/>
    </basic-container>
    <basic-container>
      <image-preview-component/>
    </basic-container>
    <basic-container>
      <count-up-component/>
    </basic-container>
    <basic-container>
      <n-progress-component/>
    </basic-container>
    <basic-container>
      <video-component/>
    </basic-container>
    <basic-container>
      <verify-component/>
    </basic-container>
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
import keyboardComponent  from "../../components/usingComponent/keyboard";

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
    keyboardComponent
  }
}
</script>

<style scoped lang="scss">
.margin-bt {
  margin-bottom: 10px;
}
</style>
