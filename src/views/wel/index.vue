<template>
  <div>
    <data-icons/>
  </div>
</template>

<script>
import dataIcons from "../dataShow/dataIcons";
import {mapGetters} from "vuex";

export default {
  name: "wel",
  components: {
    dataIcons
  },
  data() {
    return {
      activeNames: ['1', '2', '3', '5'],
      logActiveNames: ['24']
    };
  },
  computed: {
    ...mapGetters(["userInfo"]),
  },
  created() {
  },
  methods: {
    handleChange(val) {
      console.log(val);
    }
  }
};
</script>

<style>
.el-divider--horizontal {
  margin: 12px 0 !important;
}

.el-font-size {
  font-size: 14px;
}
</style>

