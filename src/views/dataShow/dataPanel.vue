<template>
  <basic-container>
    <avue-data-panel :option="option"></avue-data-panel>
  </basic-container>
</template>

<script>
/**
 * @description Attributes
 * animation  是否动画  Boolean  false/true  true
 * decimals  小数点位数  Number  —  0
 * span  栅格数  String  —  8
 * data  数据  Array  —  -
 */
export default {
  name: "dataPanel",
  data() {
    return {
      option: {
        span: 8,
        data: [
          {
            click: function (item) {
              alert(JSON.stringify(item));
            },
            title: 'New Visits',
            count: '102,400',
            icon: 'el-icon-message',
            color: '#00a7d0',
          },
          {
            click: function (item) {
              alert(JSON.stringify(item));
            },
            title: 'Messages',
            count: '81,212',
            icon: 'el-icon-info',
            color: 'rgb(27, 201, 142)',
          },
          {
            click: function (item) {
              alert(JSON.stringify(item));
            },
            title: 'Purchases',
            count: '9,280',
            icon: 'el-icon-success',
            color: 'rgb(230, 71, 88)',
          }
        ]
      }
    }
  }
}
</script>

<style scoped>

</style>
