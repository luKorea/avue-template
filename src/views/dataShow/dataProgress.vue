<template>
  <basic-container>
    <avue-data-progress :option="option"></avue-data-progress>
  </basic-container>
</template>

<script>
/**
 * @description Attributes
 * animation	是否动画	Boolean	false/true	true
 * decimals	小数点位数	Number	—	0
 * span	栅格数	String	—	8
 * data	数据	Array	—	-
 */
export default {
  name: "dataProgress",
  data(){
    return {
      option: {
        span:6,
        data: [
          {
            click: function (item) {
              alert(JSON.stringify(item));
            },
            title: '转化率（日同比 28%）',
            color: 'rgb(178, 159, 255)',
            count: 32,
            href:'https://avuejs.com',
            target:'_blank'
          },
          {
            click: function (item) {
              alert(JSON.stringify(item));
            },
            title: '签到率（日同比 11%）',
            color:'rgb(230, 71, 88)',
            count: 32,
            href:'https://avuejs.com',
            target:'_blank'
          },
          {
            click: function (item) {
              alert(JSON.stringify(item));
            },
            title: 'CPU使用率',
            color:'rgb(27, 201, 142)',
            count: 56,
            href:'https://avuejs.com',
            target:'_blank'
          },
          {
            click: function (item) {
              alert(JSON.stringify(item));
            },
            title: '使用人数',
            color:'red',
            count: 56,
            href:'https://avuejs.com',
            target:'_blank'
          }
        ]
      },
    }
  }
}
</script>

<style scoped>

</style>
