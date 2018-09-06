<template>
  <section>
    <mt-header style="height: 60px;font-size: 20px;z-index: 1000" :title="this.$route.query.CompanyName">
      <router-link to="/blackList" slot="left">
        <mt-button icon="back"><i style="font-style: normal">返回</i></mt-button>
      </router-link>
    </mt-header>
    <mt-cell title="名称:" :value="this.$route.query.CompanyName"></mt-cell>
    <mt-cell title="地址:" :value="this.$route.query.CompanyAddress"></mt-cell>
    <mt-cell title="时间:" :value="this.$route.query.createTime"></mt-cell>
    <mt-cell title="内容:"></mt-cell>
    <div style="margin: 10px">
      {{this.$route.query.ComplainData}}
    </div>
  </section>
</template>

<script>
/* eslint-disable */
export default {
  name: 'companyDetails',
  mounted() {
    console.log(this.$route.query)
        }
}
</script>

<style scoped>

</style>
