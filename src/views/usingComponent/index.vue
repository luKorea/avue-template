<template>
  <div>
    <basic-container>
      <watermark-component class="margin-bt"></watermark-component>
      <import-component class="margin-bt"></import-component>
      <export-component class="margin-bt"></export-component>
      <screen-shot-component class="margin-bt"></screen-shot-component>
      <print-component class="margin-bt"></print-component>
    </basic-container>
  </div>
</template>

<script>
import watermarkComponent from '@/components/usingComponent/watermark';
import importComponent from '@/components/usingComponent/import';
import exportComponent from '@/components/usingComponent/exoprt';
import screenShotComponent from '@/components/usingComponent/screenShot';
import printComponent from '@/components/usingComponent/print';
export default {
  name: "index",
  components: {
    watermarkComponent,
    importComponent,
    exportComponent,
    screenShotComponent,
    printComponent
  }
}
</script>

<style scoped lang="scss">
.margin-bt {
  margin-bottom: 10px;
}
</style>
