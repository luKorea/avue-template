<!--TODO Comment 评论 -->
<template>
  <basic-container>
    <avue-comment :option="option" :data="data">
      <i class="el-icon-delete" @click="$message('自定义菜单')"></i>
    </avue-comment>
    <avue-comment :option="option" :data="data" reverse>
      <i class="el-icon-delete" @click="$message('自定义菜单')"></i>
    </avue-comment>
    <avue-comment :option="option" :data="data">
      <i class="el-icon-delete" @click="$message('自定义菜单')"></i>
    </avue-comment>
    <avue-comment :option="option" :data="data" reverse>
      <i class="el-icon-delete" @click="$message('自定义菜单')"></i>
    </avue-comment>
  </basic-container>
</template>

<script>
/**
 * @description 参数
 * reverse	是否反转	Boolean	true / false	false
 */
export default {
  name: "comment",
  data() {
    return {
      data: {
        avatar: 'http://s.amazeui.org/media/i/demos/bw-2014-06-19.jpg?imageView/1/w/96/h/96',
        author: '某人',
        body: `<p>那，那是一封写给南部母亲的信。我茫然站在骑楼下，我又看到永远的樱子走到街心。其实雨下得并不大，却是一生一世中最大的一场雨。而那封信是这样写的，年轻的樱子知不知道呢？</p>
            <blockquote>妈：我打算在下个月和樱子结婚。</blockquote>`
      },
      option: {
        props: {
          avatar: 'avatar',
          author: 'author',
          body: 'body'
        }
      }
    }
  }
}
</script>

<style scoped>

</style>
