<template>
  <section>
    <mt-header style="height: 60px;font-size: 20px;z-index: 1000" :title="this.$route.query.CompanyName">
      <router-link to="/FeedView" slot="left">
        <mt-button icon="back"><i style="font-style: normal">返回</i></mt-button>
      </router-link>
    </mt-header>
    <mt-cell title="名称:" :value="this.$route.query.CompanyName"></mt-cell>
    <mt-cell title="地址:" :value="this.$route.query.CompanyAddress"></mt-cell>
    <mt-cell title="薪资范围:" :value="this.$route.query.SalaryRange"></mt-cell>
    <mt-cell title="面试时间:" :value="this.$route.query.InterviewTime"></mt-cell>
    <mt-cell title="面试岗位:" :value="this.$route.query.InterviewPost"></mt-cell>
    <mt-cell title="面试次数:" :value="this.$route.query.InterviewNumb"></mt-cell>
    <mt-cell title="时长:" :value="this.$route.query.InterviewerLong"></mt-cell>
    <mt-cell title="是否外包:" :value="!this.$route.query.outsourcing? '是':'否'"></mt-cell>
    <mt-cell v-if="!this.$route.query.outsourcing" title="外包性质:" :value="this.$route.query.outsourcingNature"></mt-cell>
    <mt-cell title="笔试题:">
      <mt-button v-if="this.$route.query.WriteQuestion" type="primary" @click="download">下载</mt-button>
      <span v-if="!this.$route.query.WriteQuestion">无</span>
    </mt-cell>
    <div class="card">
      <div style="margin: 10px">
        <div style="font-weight: bold;">公司福利:</div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{this.$route.query.welfare?this.$route.query.welfare:"空"}}
      </div>
    </div>
    <div class="card">
      <div style="margin: 10px">
        <div style="font-weight: bold;">公司印象:</div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{this.$route.query.CompanyImage?this.$route.query.CompanyImage:"空"}}
      </div>
    </div>
    <div class="card">
      <div style="margin: 10px">
        <div style="font-weight: bold;">面试官印象:</div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{this.$route.query.InterviewerImpression?this.$route.query.InterviewerImpression:"空"}}
      </div>
    </div>
    <div class="card">
      <div style="margin: 10px">
        <div style="font-weight: bold;">沟通重点:</div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{this.$route.query.CommunicationKey?this.$route.query.CommunicationKey:"空"}}
      </div>
    </div>
    <div class="card">
      <div style="margin: 10px">
        <div style="font-weight: bold;">总结/公司:</div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{this.$route.query.InterviewSummaryToCompany?this.$route.query.InterviewSummaryToCompany:"空"}}
      </div>
    </div>
    <div class="card">
      <div style="margin: 10px">
        <div style="font-weight: bold;">总结/个人:</div>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{{this.$route.query.InterviewSummaryToPerson?this.$route.query.InterviewSummaryToPerson:"空"}}
      </div>
    </div>
  </section>
</template>

<script>
/* eslint-disable */
import { test } from '../../api/api';
    export default {
        name: "FeedDetails",
      methods: {
          download(){
            window.location.href = test+"/api/company/download?url="+this.$route.query.WriteQuestion
          }
      }
    }

</script>

<style scoped>
  .card{
    border:  1px solid #606266;
        border-radius: 5px;
        /*box-shadow: 5px 5px 5px #606266;*/
    margin: 10px;
  }
</style>
