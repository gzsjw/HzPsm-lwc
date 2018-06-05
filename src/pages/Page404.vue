<template>
  <div class="app flex-row align-items-center">
    <div class="container">
      <b-row class="justify-content-center">
        <b-col md="6">
          <div class="clearfix">
            <h1 class="float-left display-3 mr-4">404</h1>
            <h4 class="pt-3">哎呀! 去那儿了.</h4>
            <p class="text-muted">无法连接您访问的地址.</p>
          </div>
          <div class="clearfix">
            <router-link to="/">回到首页</router-link>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Page404'
}
</script>

<style>
</style>
