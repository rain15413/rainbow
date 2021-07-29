<template>
  <div class="login">
    <div>
      <div>登录页</div>
      <div>
        账号：<input type="text" v-model="user">
      </div>
      <div>
        密码：<input type="password" v-model="pwd">
      </div>
      <button @click="toLogin">登 录</button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      user: '',
      pwd: '',
      userName: 'admin',
      password: 123456
    }
  },
  methods: {
    toLogin() {
      if (this.user == this.userName && this.pwd == this.password) {
        this.$message({
          type: 'success',
          message: '登录成功'
        })
        sessionStorage.setItem('rainbow', true)
        this.$router.push('/home')
      }
    }
  }
}
</script>
<style>

</style>
