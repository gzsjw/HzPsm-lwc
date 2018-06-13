import config from '../config'
import axios from 'axios'

export default {
  login (loginData, succeed, fail) {
    // 登录用户，授权节点
    const url = config.ApiUrlList.SYSTEM_LOGIN
    loginData.busiCenterCode = config.busiCenterCode
    loginData.isSingleLogin = false
    axios({ method: 'post', url: url, data: loginData })
      .then(response => {
        const loginresponse = response.data
        /* Checking if error object was returned from the server */
        if (loginresponse.loginResult !== 0) {
          fail({message: loginresponse.loginMessage})
          return
        }

        succeed(loginresponse)
      })
      .catch(error => {
        fail(error)
      })
  }
}
