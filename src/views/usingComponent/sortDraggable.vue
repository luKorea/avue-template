<!-- TODO 排序拖拽组件 -->
<template>
  <basic-container>
    <vue-draggable
      class="syllable_ul"
      element="ul"
      :list="city"
      :options="{group:'title', animation:150}"
      :no-transition-on-drag="true"
      @change="change"
      @start="start"
      @end="end"
      :move="move"
    >
      <transition-group type="transition" :name="!drag? 'syll_li' : null" :css="true">
        <template v-for="item in city">
          <el-tag class="tag" :type="color(idx)" v-for="(i , idx) in item.city" :key="idx">
            {{ i.name }}
          </el-tag>
        </template>
      </transition-group>
    </vue-draggable>
  </basic-container>
</template>

<script>
import VueDraggable from 'vuedraggable';
import city from './city.json';

export default {
  name: "sortDraggable",
  data() {
    return {
      city: city
    }
  },
  components: {
    VueDraggable
  },
  methods: {
    color(index) {
      let type = '';
      if (index % 8 === 0) {
        type = 'primary';
      } else if (index % 3 === 0) {
        type = 'warning';
      } else if (index % 5 === 0) {
        type = 'info';
      } else if (index % 7 === 0) {
        type = 'success';
      }
      return type
    },
    //evt里面有两个值，一个evt.added 和evt.removed  可以分别知道移动元素的ID和删除元素的ID
    change(evt) {
      console.log(evt, 'change...')
    },
    //start ,end ,add,update, sort, remove 得到的都差不多
    start(evt) {
      this.drag = true
      console.log(evt, 'start...')
    },
    end(evt) {
      console.log(evt, 'end....', this.city);
      this.drag = true
    },
    move(evt, originalEvent) {
      console.log(evt, 'move')
      console.log(originalEvent) //鼠标位置
    }
  }
}
</script>

<style scoped>
.tag {
  display: inline-block;
  width: 120px;
  text-align: center;
  margin: 20px;
}
</style>
