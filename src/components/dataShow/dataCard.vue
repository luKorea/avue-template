<template>
  <basic-container>
    <avue-data-card :option="option"></avue-data-card>
  </basic-container>
</template>

<script>
export default {
  name: "dataCard",
  data() {
    return {
      option: {
        span: 8,
        data: [
          {
            click: function (item) {
              alert(JSON.stringify(item));
            },
            name: '小马',
            src: '/images/card-1.jpg',
            text: '腾讯游戏,没钱玩你麻痹',
            href: 'https://avuejs.com',
            target: '_blank'
          },
          {
            click: function (item) {
              alert(JSON.stringify(item));
            },
            name: '网易掌门人',
            src: '/images/card-3.jpg',
            text: '网易游戏,玩你麻痹',
            href: 'https://avuejs.com',
            target: '_blank'
          },
          {
            click: function (item) {
              alert(JSON.stringify(item));
            },
            name: '桐谷和人',
            src: '/images/card-4.jpg',
            text: '没有我开不了的挂',
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
