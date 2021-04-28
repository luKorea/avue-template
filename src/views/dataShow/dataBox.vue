<template>
  <basic-container>
    <avue-data-box :option="option"></avue-data-box>
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
  name: "dataBox",
  data() {
    return {
      option: {
        span: 6,
        data: [
          {
            click: function (item) {
              alert(JSON.stringify(item));
            },
            title: '错误日志',
            count: 12332,
            icon: 'el-icon-warning',
            color: 'rgb(49, 180, 141)',
            href: 'https://avuejs.com',
            target: '_blank'
          },
          {
            click: function (item) {
              alert(JSON.stringify(item));
            },
            title: '数据展示',
            count: 33,
            icon: 'el-icon-view',
            color: 'rgb(56, 161, 242)',
            href: 'https://avuejs.com',
            target: '_blank'
          },
          {
            click: function (item) {
              alert(JSON.stringify(item));
            },
            title: '权限管理',
            count: 2223,
            icon: 'el-icon-setting',
            color: 'rgb(117, 56, 199)',
            href: 'https://avuejs.com',
            target: '_blank'
          },
          {
            click: function (item) {
              alert(JSON.stringify(item));
            },
            title: '权限管理',
            count: 2223,
            icon: 'el-icon-setting',
            color: 'rgb(117, 56, 199)',
            href: 'https://avuejs.com',
            target: '_blank'
          },
        ]
      },
    }
  }
}
</script>

<style scoped>

</style>
