<template>
  <section>
    <mt-header style="height: 60px;font-size: 20px;z-index: 1000" :title="this.$route.query.remarks">
      <router-link to="/Resource" slot="left">
        <mt-button icon="back"><i style="font-style: normal">返回</i></mt-button>
      </router-link>
    </mt-header>
    <mt-cell title="名称:" :value="this.$route.query.remarks"></mt-cell>
    <mt-cell title="密码:" :value="this.$route.query.password"></mt-cell>
    <div style="border:  1px solid #606266;
        border-radius: 5px;
    margin: 10px;" @click="openUrl">
      <div style="margin: 10px">
        <div style="font-weight: bold;">地址:</div>
        {{this.$route.query.links?this.$route.query.links:"空"}}
      </div>
    </div>
  </section>
</template>

<script>
/* eslint-disable */
export default {
    name: "LinksDetails",
  methods:{
      openUrl(){
        if (this.$route.query.links) {
          window.open(this.$route.query.links)
        }
      }
  }
}
</script>

<style scoped>

</style>
