<template>
  <section>
    <mt-header style="height: 60px;font-size: 20px;z-index: 1000" title="无私奉献">
      <router-link to="/home" slot="left">
        <mt-button icon="back" @click.native="closeIndicator"><i style="font-style: normal">返回</i></mt-button>
      </router-link>
      <router-link to="/addLinks" slot="right" style="font-size: 15px">
        <mt-button @click.native="closeIndicator">添加</mt-button>
      </router-link>
    </mt-header>
    <router-view></router-view>
  </section>
</template>

<script>
/* eslint-disable */
import { Indicator } from 'mint-ui';
export default {
  name: 'blackList',
  data () {
    return {
    }
  },
  methods: {
        closeIndicator(){
      Indicator.close()
    }
  },
  mounted () {
  }
}
</script>

<style scoped>

</style>
