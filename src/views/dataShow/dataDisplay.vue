<template>
  <basic-container>
    <avue-data-display :option="option"></avue-data-display>
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
  name: "dataDisplay",
  data() {
    return {
      option: {
        span: 6,
        data: [
          {
            click: function (item) {
              alert(JSON.stringify(item));
            },
            count: 100,
            title: '日活跃数',
            href: 'https://avuejs.com',
            target: '_blank'
          },
          {
            click: function (item) {
              alert(JSON.stringify(item));
            },
            count: '3,000',
            title: '月活跃数',
            href: 'https://avuejs.com',
            target: '_blank'
          },
          {
            click: function (item) {
              alert(JSON.stringify(item));
            },
            count: '20,000',
            title: '年活跃数',
            href: 'https://avuejs.com',
            target: '_blank'
          },
          {
            click: function (item) {
              alert(JSON.stringify(item));
            },
            count: '40,000',
            title: '周活跃数',
            href: 'https://avuejs.com',
            target: '_blank'
          }
        ]
      },
    }
  }
}
</script>

<style scoped>

</style>
