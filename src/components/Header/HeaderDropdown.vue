<template>
      <b-nav-item-dropdown class="px-2">
        <template slot="button-content">
          <img :src="userAvatar" class="img-avatar d-md-down-none">
          <span>用户：{{userName}}</span>
        </template>
        <b-dropdown-header tag="div" class="text-center"><strong>设置</strong></b-dropdown-header>
        <b-dropdown-item><i class="fa fa-user"></i> 简介</b-dropdown-item>
        <b-dropdown-item><i class="fa fa-wrench"></i> 设置</b-dropdown-item>
        <b-dropdown-divider></b-dropdown-divider>
        <b-dropdown-item><i class="fa fa-shield"></i> 锁定</b-dropdown-item>
        <b-dropdown-item @click.prevent="logout"><i class="fa fa-lock"></i> 退出</b-dropdown-item>
      </b-nav-item-dropdown>
</template>

<script>
import { mapState } from 'vuex'
import utils from '@/utils'

export default {
  name: 'header-dropdown',
  computed: {
    ...mapState([
      'user'
    ]),
    userAvatar () {
      if (utils.isNullOrUndefined(this.user) || utils.isNullOrUndefined(this.user.avatar)) {
        return '/static/img/user.svg'
      } else {
        return this.user.avatar
      }
    },
    userName () {
      if (utils.isNullOrUndefined(this.user) || utils.isNullOrUndefined(this.user.userName)) {
        return '匿名'
      } else {
        return this.user.userName
      }
    }
  },
  data: () => {
    return {
    }
  },
  methods: {
    logout () {
      utils.logout(this.$store, this.$router)
    }
  }
}
</script>
