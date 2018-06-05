<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="8">
          <b-card-group>
            <b-card no-body class="p-4">
              <b-card-body>
                <form @submit.prevent="checkCreds()">
                  <h1>登录</h1>
                  <p class="text-muted">输入账号密码</p>
                  <b-input-group class="mb-3">
                    <b-input-group-prepend><b-input-group-text><i class="icon-user"></i></b-input-group-text></b-input-group-prepend>
                    <input class="form-control" id="userCode" placeholder="用户" type="text" v-model="userCode" autofocus />
                  </b-input-group>
                  <b-input-group class="mb-4">
                    <b-input-group-prepend><b-input-group-text><i class="icon-lock"></i></b-input-group-text></b-input-group-prepend>
                    <input class="form-control" id="userPWD" placeholder="密码" type="password" v-model="userPWD" />
                  </b-input-group>
                  <b-row>
                    <b-col cols="4">
                      <b-button type="submit" variant="primary" class="px-4">登录</b-button>
                    </b-col>
                    <b-col cols="8">
                      <span class="text-left text-danger">{{loginMessage}}</span>
                    </b-col>
                  </b-row>
                </form>
              </b-card-body>
            </b-card>
            <b-card no-body bg-variant="primary" class="py-4 d-md-down-none">
              <b-card-body class="d-flex align-items-center justify-content-center">
                <div class="text-center">
                  <h1 class="text-white p-2">翰智软件</h1>
                  <h1 class="text-white p-2">进度计划</h1>
                </div>
              </b-card-body>
            </b-card>
          </b-card-group>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
import api from '../api'

export default {
  name: 'Login',
  data () {
    return {
      userCode: '',
      userPWD: '',
      loginMessage: ''
    }
  },
  methods: {
    loginSucceed (loginresponse) {
      this.$store.commit('SET_USER', loginresponse.user)
      this.$store.commit('SET_AUTHORIZEDFUNCNODES', loginresponse.funccodes)
      this.$store.commit('SET_ISAUTHORITY', true)

      if (window.localStorage) {
        window.localStorage.setItem('userCode', loginresponse.user.userCode)
      }

      this.$router.push('/')
    },

    loginFail (error) {
      this.loginMessage = error.message
      console.log(error)
    },

    checkCreds () {
      const {userCode, userPWD} = this

      this.resetResponse()

      /* Making API call to authenticate a user */
      api.login({userCode, userPWD}, this.loginSucceed, this.loginFail)
    },

    resetResponse () {
      this.loginMessage = ''
    }
  },
  mounted () {
  }
}
</script>

<style>
</style>
