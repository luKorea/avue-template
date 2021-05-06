<template>
  <el-form :model="form" ref="form" label-width="80px">
    <!--      <el-form-item label="租户编号">-->
    <!--        <el-input v-model="form.tenantId" placeholder="请输入租户编号"></el-input>-->
    <!--      </el-form-item>-->
    <el-form-item label="用户姓名">
      <el-input v-model="form.name" placeholder="请输入用户姓名"></el-input>
    </el-form-item>
    <el-form-item label="账号名称">
      <el-input v-model="form.account" placeholder="请输入账号名称"></el-input>
    </el-form-item>
    <el-form-item label="账号密码">
      <el-input v-model="form.password" placeholder="请输入账号密码"></el-input>
    </el-form-item>
    <el-form-item label="确认密码">
      <el-input v-model="form.password2" placeholder="请输入确认密码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-button type="primary"
                 size="small"
                 @click.native.prevent="handleRegister"
                 class="login-submit">{{$t('login.submit')}}
      </el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import {mapGetters} from "vuex";
import {validatenull} from "@/util/validate";
import {registerGuest} from "@/api/user";

export default {
  name: "register",
  data() {
    return {
      form: {
        tenantId: '',
        name: '',
        account: '',
        password: '',
        password2: '',
      },
      loading: false,
      accountBox: false,
    };
  },
  computed: {
    ...mapGetters(["userInfo"]),
  },
  created() {

  },
  mounted() {
    console.log(this.userInfo)
    // 若未登录则弹出框进行绑定
    if (validatenull(this.userInfo.userId) || this.userInfo.userId < 0) {
      this.form.name = this.userInfo.account;
      this.form.account = this.userInfo.account;
      this.accountBox = true;
    }
  },
  methods: {
    handleRegister() {
      // if (this.form.tenantId === '') {
      //   this.$message.warning("请先输入租户编号");
      //   return;
      // }
      if (this.form.account === '') {
        this.$message.warning("请先输入账号名称");
        return;
      }
      if (this.form.password === '' || this.form.password2 === '') {
        this.$message.warning("请先输入密码");
        return;
      }
      if (this.form.password !== this.form.password2) {
        this.$message.warning("两次密码输入不一致");
        return;
      }
      this.loading = true;
      registerGuest(this.form, this.userInfo.oauthId).then(res => {
        this.loading = false;
        const data = res.data;
        if (data.success) {
          this.accountBox = false;
          this.$alert("注册申请已提交,请耐心等待管理员通过!", '注册提示').then(() => {
            this.$store.dispatch("LogOut").then(() => {
              this.$router.push({path: "/login"});
            });
          })
        } else {
          this.$message.error(data.msg || '提交失败');
        }
      }, error => {
        window.console.log(error);
        this.loading = false;
      });
    },
  },
};
</script>
