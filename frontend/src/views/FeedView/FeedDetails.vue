<template>
  <section>
    <mt-header style="height: 60px;font-size: 20px;z-index: 1000" :title="this.$route.query.CompanyName">
      <router-link to="/FeedView" slot="left">
        <mt-button icon="back"><i style="font-style: normal">返回</i></mt-button>
      </router-link>
    </mt-header>
  </section>
</template>

<script>
/* eslint-disable */
    export default {
        name: "FeedDetails"
    }
</script>

<style scoped>

</style>
