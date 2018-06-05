<template>
  <footer class="app-footer">
    <span>Copyright &copy; {{currentyear}} <a href="javascript:;">{{devOrgName}}</a>.</span>
    <span class="ml-auto">{{systemName}}</span>
  </footer>
</template>

<script>
import config from '../config'
import utils from '../utils'

export default {
  name: 'c-footer',
  data () {
    return {
      devOrgName: config.devOrgName,
      systemName: config.systemName,
      currentyear: utils.currentyear()
    }
  }
}
</script>
