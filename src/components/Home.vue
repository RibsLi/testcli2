<template>
  <div>
    <h2>我是首页</h2>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">信息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data(){
    return {
      path: '/home/news'
    }
  },
  //生命周期函数created()组件被创建时执行,mounted()模板被挂载时执行,updated()界面改变时执行
  created(){
    //切换组件时改变title
    // document.title = '首页'
  },
  //destroyed()组件被销毁时执行
  destroyed(){},
  mounted(){},
  updated(){},
  //活跃的和不活跃，和keep-alive对应，如果没有keep-alive则无效
  activated(){
    this.$router.push(this.path)
  },
  deactivated(){},
  
  beforeRouteLeave(to, from, next){
    this.path = this.$route.path;
    next()
  }
}
</script>

<style scoped>

</style>