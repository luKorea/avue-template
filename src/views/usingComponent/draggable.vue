<!-- TODO Draggable 拖拽-->
<template>
  <basic-container>
    <div style="position:relative;height:400px;" @mousedown="handleMouseDown">
      <div class="avue-grid"></div>
      <avue-draggable :width="obj1.width" :height="obj1.height" :left="obj1.left" :top="obj1.top" id="draggable1"
                      ref="draggable1" @focus="handleFocus" @blur="handleBlur">
        <div style="width:200px;height:200px;background:green">
        </div>
      </avue-draggable>
    </div>
  </basic-container>
</template>

<script>
/**
 * @description Variables
 * disabled  是否禁止拖动  —  false
 * width  元素的宽度  —  —
 * height  元素的高度  —  —
 * top  元素的x位置  —  0
 * left  元素的y位置  —  0
 * z-index  图层的序号  -  1
 */
/**
 * @description Events
 * focus  聚焦时的回调  -
 * blur  失去焦点的回调
 */
/**
 * @description Methods
 * setActive  改变选中不选中的状态
 */
export default {
  name: "draggable",
  data() {
    return {
      obj1: {
        width: 200,
        height: 200,
        left: 300,
        top: 200
      }
    }
  },
  methods: {
    handleMouseDown() {
      //调用内部方法取消选中，false取消，true激活
      this.$refs.draggable1.setActive(false);
    },
    //获取焦点
    handleFocus({index, left, top, width, height}) {
      console.log(index, left, top, width, height)
    },
    //失去焦点
    handleBlur({index, left, top, width, height}) {
      console.log(index, left, top, width, height)
    },
  }
}
</script>

<style scoped>

</style>
