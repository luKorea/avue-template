<!-- TODO Card 卡片-->
<template>
  <basic-container>
    <avue-card :option="option" :data="data" @row-click="tip" @row-add="tip">
      <template slot="menu" slot-scope="scope">
        <span @click.stop="tip(scope.row,scope.index)">操作1</span>
        <span @click.stop="tip(scope.row,scope.index)">操作2</span>
      </template>
    </avue-card>
  </basic-container>
</template>

<script>
/**
 * @description 参数
 * option	组件配置属性，详情见下面Option属性	Object	—	—
 * data	显示的数据	Array	—	—
 */

/**
 * @description Option Attributes
 * addBtn	添加按钮	Boolean	true/false
 * truespan	表单栅列	Number	-	8
 * gutter	项之间的间	Number	-	20
*/
/**
 * @description Props Attributes
 * title	列表的主标题	String	—	title
 * img	列表的头像	String	—	img
 * info	列表的副标题	String	—	info
 */
/**
 * @description Events
 * row-add	新增数据后点击确定触发该事件	-
 * row-click	当某一行被点击时会触发该事件	row,index
 */
/**
 * @description Scoped Slot
 * name	说明
 * menu	操作栏目自定义参数为{row,index}
 */
export default {
  name: "card",
  data() {
    return {
      option: {
        // addBtn:false,
        props: {
          img: 'img',
          title: 'title',
          info: 'text',
        }
      },
      data: [{
        title: 'Alipay',
        text: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的,在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的',
        img: 'https://gw.alipayobjects.com/zos/rmsportal/WdGqmHpayyMjiEhcKoVE.png'
      }, {
        title: 'Angular',
        text: '在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的,在中台产品的研发过程中，会出现不同的设计规范和实现方式，但其中往往存在很多类似的页面和组件，这些类似的',
        img: 'https://gw.alipayobjects.com/zos/rmsportal/zOsKZmFRdUtvpqCImOVY.png'
      }]
    }
  },
  methods: {
    tip(row, index) {
      this.$message.success('查看控制台')
      console.log(row, index)
    }
  }
}
</script>

<style scoped>

</style>
