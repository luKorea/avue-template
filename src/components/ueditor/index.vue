<template>
  <basic-container>
    <el-tag type="success" style="margin-bottom: 10px">富文本编辑</el-tag>
    <avue-ueditor v-model="data" :options="options" style="margin-bottom: 10px"></avue-ueditor>
    <span style="margin-top: 10px">{{data}}</span>
  </basic-container>
</template>

<script>
import {uploadUrl} from "../../config/env";

export default {
  name: "index",
  props: {
    data: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      options: {
        //普通图片上传
        action: uploadUrl,
        customConfig: {},//wangEditor编辑的配置
        props: {
          res: "data",
          url: "url"
        },
        //七牛云oss配置
        qiniu: {
          AK: "",
          SK: "",
          scope: "test",
          url: "http://pm7cc17lu.bkt.clouddn.com/",
          deadline: 1
        },
        //阿里云oss配置
        ali: {
          region: "oss-cn-beijing",
          endpoint: "oss-cn-beijing.aliyuncs.com",
          accessKeyId: "",
          accessKeySecret: "",
          bucket: "avue"
        }
      }
    }
  },
}
</script>

<style scoped>

</style>
