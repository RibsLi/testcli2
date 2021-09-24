<template>
  <div id="app">
    <!-- <router-link to="/home" tag="button" active-class="active" replace>首页</router-link>
    <router-link to="/about" tag="button" active-class="active" replace>关于</router-link> -->

    <!-- <button @click="homeClick">首页</button>
    <button @click="aboutClick">关于</button> -->

    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <!-- 绑定动态id/动态路由 -->
    <router-link :to="'/user/'+id">用户</router-link>
    <!-- keep_alive切换组件时不会频繁的创建和销毁组件，可以提高性能 -->
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  data(){
    return {
      id: 'zhangsan'
    }
  },
  methods: {
    homeClick(){
      //不能直接使用history.pushState()，这样会直接跳过路由
      // history.pushState('/home')
      this.$router.push('/home')
      // this.$router.replace('/home')
    },
    aboutClick(){
      this.$router.push('/about')
      // this.$router.replace('/about')
    }
  }
}
</script>

<style>
.router-link-active {
  color: red;
}
.active {
  color: red;
}
</style>
