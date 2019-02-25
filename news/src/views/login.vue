<template>
  <div class="login container-fluid">
    <div class="row mt-5">
      <div class="col-8 offset-2">
        <form @submit.prevent="login">
          <input
            type="text"
            v-model="username"
            required
            placeholder="输入用户名"
            class="form-control mt-5"
          >
          <input
            type="text"
            v-model="password"
            required
            placeholder="输入密码"
            class="form-control mt-5"
          >
          <input type="submit" class="btn btn-dark form-control mt-5" value="登录">
        </form>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: "",
      password: "",
      parrent: {
        username: /^[a-zA-Z||\d]*@qq.com$/, //用户必须是QQ邮箱的正则
        password: /^[a-zA-Z]+[a-zA-Z||\d]{5,11}$/ //密码必须是英文开头且大于6小于12
      },
      api: "" ,//登录接口
    };
  },
  methods: {
    // a(){
    //  this.viewHeight=document.documentElement.clientWidth
    // },
    login() {
      console.log();
      //登录正则验证
      if (!this.parrent.username.test(this.username)) {
        return false;
      }

      if (!this.parrent.password.test(this.password)) {
        return false;
      }

      this.$axios
        .post("", {})
        .then(res => {})
        .catch(err => {});
    }
  }
};
</script>
