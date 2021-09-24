<template>
  <div>
    <h2>我是用户</h2>
    <h2>{{$route.params.id}}</h2>
    <h2>{{userId}}</h2>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    userId(){
      // params是parameters的缩写，参数的意思
      //此处id就是app.vue数据data里面的id
      return this.$route.params.id
    }
  }
}
</script>

<style scoped>

</style>