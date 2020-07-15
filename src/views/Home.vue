<template>
  <div class="home">
    <span>Home template</span>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
<style lang="scss" scoped>
.home{
  background: #f4f7f8;
  width: 100%;
  height: 100%;
}
</style>
