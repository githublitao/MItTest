<template>
  <section>
    <mt-header style="height: 60px;font-size: 20px;z-index: 1000" title="金玉良言">
      <router-link to="/home" slot="left">
        <mt-button icon="back"><i style="font-style: normal">返回</i></mt-button>
      </router-link>
      <mt-button slot="right">添加</mt-button>
    </mt-header>
    <router-view></router-view>
  </section>
</template>

<script>
/* eslint-disable */
export default {
  name: 'blackList',
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
  }
}
</script>

<style scoped>

</style>
