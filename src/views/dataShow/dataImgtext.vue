<template>
  <basic-container>
    <avue-data-imgtext :option="option"></avue-data-imgtext>
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
  name: "dataImgtext",
  data() {
    return {
      option: {
        span: 8,
        data: [
          {
            click: function (item) {
              alert(JSON.stringify(item));
            },
            title: '网易掌门人',
            imgsrc: '/images/card2.jpg',
            headimg: [
              {
                src: '/images/card1.jpg',
                name: '张三'
              },
              {
                src: '/images/card2.jpg',
                name: '李四'
              },
              {
                src: '/images/card3.jpg',
                name: '王五'
              },
            ],
            content: '网易游戏,玩你麻痹.网易游戏,玩你麻痹.网易游戏,玩你麻痹.网易游戏,玩你麻痹.',
            href: 'https://avuejs.com',
            target: '_blank',
            time: '刚刚'
          },
          {
            click: function (item) {
              alert(JSON.stringify(item));
            },
            title: '小马',
            imgsrc: '/images/card1.jpg',
            headimg: [
              {
                src: '/images/card1.jpg',
                name: '张三'
              },
              {
                src: '/images/card2.jpg',
                name: '李四'
              },
              {
                src: '/images/card3.jpg',
                name: '王五'
              },
            ],
            content: '腾讯游戏,没钱玩你麻痹.腾讯游戏,没钱玩你麻痹.腾讯游戏,没钱玩你麻痹.',
            href: 'https://avuejs.com',
            target: '_blank',
            time: '几秒前'
          },
          {
            click: function (item) {
              alert(JSON.stringify(item));
            },
            title: '桐人',
            imgsrc: '/images/card3.jpg',
            headimg: [
              {
                src: '/images/card1.jpg',
                name: '张三'
              },
              {
                src: '/images/card2.jpg',
                name: '李四'
              },
              {
                src: '/images/card3.jpg',
                name: '王五'
              },
            ],
            content: '没有开不了的挂,没有收不了的后宫.没有开不了的挂,没有收不了的后宫.没有开不了的挂,没有收不了的后宫.',
            href: 'https://avuejs.com',
            target: '_blank',
            time: '一小时前'
          },
        ]
      },
    }
  }
}
</script>

<style scoped>

</style>
