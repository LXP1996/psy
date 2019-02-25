<template>
  <div class="register container-fluid">
    <div class="row">
      <div class="col-8 offset-2">
        <form @submit.prevent="register">
          <input type="text" required v-model="username" class="form-control mt-5" placeholder="输入QQ邮箱">
          <span class="alert alert-white form-control d-flex align-items-center">{{usernametip}}</span>
          <input
            type="password"
            v-model="password" required
            class="form-control mt-5"
            placeholder="密码必须是英文开头且大于6小于12"
          >
          <span class="alert alert-white form-control d-flex align-items-center">{{passwordtip}}</span>
          <input type="password" required v-model="repassword" class="form-control mt-5" placeholder="再次输入密码">
          <span class="alert alert-white form-control d-flex align-items-center">{{repasswordtip}}</span>
          <input type="submit" class="form-control mt-5 btn btn-info" value="注册">
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
      repassword: "",
      usernametip: "",
      passwordtip: "",
      repasswordtip: "",
      parrent: {
        //正则
        username: /^[a-zA-Z||\d]*@qq.com$/, //用户必须是QQ邮箱的正则
        password: /^[a-zA-Z]+[a-zA-Z||\d]{5,11}$/ //密码必须是英文开头且大于6小于12
      }
    };
  },
  methods: {
    register() {
      //用户名正则验证
      if (!this.parrent.username.test(this.username)) {
        this.usernametip = "用户名格式错误";
        return false;
      }else{
           this.usernametip = "";
      }
      //密码正则验证
      if (!this.parrent.password.test(this.password)) {
        this.passwordtip = "密码不符合规范";
         return false;
      }else{
          this.passwordtip = "";
      }
      //两次输入的密码比较
      if (!(this.password == this.repassword)) {
        this.repasswordtip = "两次密码不一致";
         return false;
      }else{
           this.repasswordtip = "";
      }


    }
  },
};
</script>
<style scoped>
input:focus{
  outline: none;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.4);
  border-radius: 5px;
}
</style>

