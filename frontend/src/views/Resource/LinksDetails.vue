<template>
  <section>
    <mt-header style="height: 60px;font-size: 20px;z-index: 1000" :title="this.$route.query.remarks">
      <router-link to="/Resource" slot="left">
        <mt-button icon="back"><i style="font-style: normal">返回</i></mt-button>
      </router-link>
    </mt-header>
    <mt-cell title="名称:" :value="this.$route.query.remarks"></mt-cell>
    <mt-cell title="密码:" :value="this.$route.query.password"></mt-cell>
    <mt-cell title="地址:"></mt-cell>
    <div style="margin: 10px">
      {{this.$route.query.links}}
    </div>
  </section>
</template>

<script>
/* eslint-disable */
export default {
    name: "LinksDetails"
}
</script>

<style scoped>

</style>
