<template>
  <basic-container>
    <avue-data-operatext :option="option"></avue-data-operatext>
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
  name: "dataOperatext",
  data(){
    return {
      option: {
        span: 8,
        data: [
          {
            click: function (item) {
              alert(JSON.stringify(item));
            },
            title: 'smallwei',
            subtitle: 'avue部门-前端研发工程师',
            img: 'https://avatar.gitee.com/uploads/61/632261_smallweigit.jpg!avatar100?1518660401',
            color: '#00a7d0',
            list: [{
              label: '点赞',
              value: '3,200'
            }, {
              label: '关注',
              value: '13,000'
            }, {
              label: '项目',
              value: '13,000'
            }]
          },
          {
            click: function (item) {
              alert(JSON.stringify(item));
            },
            title: 'smallwei',
            subtitle: 'avue部门-前端研发工程师',
            img: 'https://avatar.gitee.com/uploads/61/632261_smallweigit.jpg!avatar100?1518660401',
            color: '#f39c12',
            list: [{
              label: '点赞',
              value: '3,200'
            }, {
              label: '关注',
              value: '13,000'
            }, {
              label: '项目',
              value: '13,000'
            }]
          },
          {
            click: function (item) {
              alert(JSON.stringify(item));
            },
            title: 'smallwei',
            subtitle: 'avue部门-前端研发工程师',
            img: 'https://avatar.gitee.com/uploads/61/632261_smallweigit.jpg!avatar100?1518660401',
            colorImg: 'http://img.sccnn.com/bimg/337/15595.jpg',
            list: [{
              label: '点赞',
              value: '3,200'
            }, {
              label: '关注',
              value: '13,000'
            }, {
              label: '项目',
              value: '13,000'
            }]
          },
        ]
      },
    }
  }
}
</script>

<style scoped>

</style>
