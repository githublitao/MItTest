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
    <div style="border:  1px solid #606266;
        border-radius: 5px;
    margin: 10px;">
      <div style="margin: 10px">
        <div style="font-weight: bold;">内容:</div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{this.$route.query.ComplainData?this.$route.query.ComplainData:"空"}}
      </div>
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
