<template>
  <section>
    <mt-header style="height: 60px;font-size: 20px;z-index: 1000" title="添加">
      <router-link to="/FeedView" slot="left">
        <mt-button icon="back"><i style="font-style: normal">返回</i></mt-button>
      </router-link>
      <mt-button style="font-size: 15px" slot="right" @click="addForm">保存</mt-button>
    </mt-header>
    <mt-field label="名称" placeholder="请输入公司名称" v-model="add.CompanyName"></mt-field>
    <mt-field label="地址" placeholder="请输入地址" v-model="add.CompanyAddress"></mt-field>
    <mt-field label="薪资" placeholder="请输入范围" v-model="add.SalaryRange"></mt-field>
    <mt-field label="面试时间" placeholder="请选择面试时间" v-model="InterviewTime" @click.native="openPicker"></mt-field>
    <mt-datetime-picker
      ref="picker"
    type="date"
    year-format="{value} 年"
  month-format="{value} 月"
  date-format="{value} 日"
      @confirm="handleConfirm"
      :endDate="NewData"
    v-model="startData">
    </mt-datetime-picker>
    <mt-field label="岗位" placeholder="请输入岗位名称" v-model="add.InterviewPost"></mt-field>
    <mt-field label="面试次数" placeholder="请输入面试次数" v-model="add.InterviewNumb"></mt-field>
    <mt-field label="时长" placeholder="请输入面试时长" v-model="add.InterviewerLong"></mt-field>
    <mt-field label="是否外包" disabled>
      <mt-switch v-model="add.outsourcing"></mt-switch>
    </mt-field>
    <mt-field v-if="add.outsourcing" label="外包性质"  @click.native="handleClick"
              style="color:black" v-model="add.outsourcingNature">
    </mt-field>
    <mt-popup v-model="outsourcingNaturerul" position="bottom" style="width: 100%">
      <mt-picker :slots="options"  @change="areaChange">
      </mt-picker>
    </mt-popup>
    <mt-field label="福利" placeholder="请输入公司福利" type="textarea" rows="4" v-model="add.welfare"></mt-field>
    <mt-field label="公司印象" placeholder="请输入公司印象" type="textarea" rows="4" v-model="add.CompanyImage"></mt-field>
    <mt-field label="面试官印象" placeholder="请输入面试官印象" type="textarea" rows="4" v-model="add.InterviewerImpression"></mt-field>
    <mt-field label="沟通重点" placeholder="请输入沟通重点" type="textarea" rows="4" v-model="add.CommunicationKey"></mt-field>
    <mt-field label="总结/公司" placeholder="请输入总结" type="textarea" rows="4" v-model="add.InterviewSummaryToCompany"></mt-field>
    <mt-field label="总结/个人" placeholder="请输入总结" type="textarea" rows="4" v-model="add.InterviewSummaryToPerson"></mt-field>
  </section>
</template>

<script>
/* eslint-disable */
import { Toast, MessageBox, Indicator } from 'mint-ui';
import { addFeed } from '../../api/api';
export default {
  data () {
    return {
      NewData: new Date(),
      startData: new Date(),
      InterviewTime: '',
      add: {
        CompanyName: '',
        CompanyAddress: '',
        SalaryRange: '',
        InterviewTime: '',
        InterviewPost: '',
        InterviewNumb: '',
        CompanyImage: '',
        InterviewerImpression: '',
        InterviewerLong: '',
        outsourcing: false,
        outsourcingNature: '项目外包',
        WriteQuestion: '',
        CommunicationKey: '',
        InterviewSummaryToCompany: '',
        InterviewSummaryToPerson: '',
        welfare: '',
      },
      outsourcingNaturerul: false,
      options:
        [
          {
            flex: 10,
            values: ['项目外包', '人力外包'],
            className: 'slot1',
            textAlign: 'center',
            defaultIndex:  0,
          }
        ]
    }
  },
  methods: {
    // 选择时间确定后回调函数
    handleConfirm (data) {
      var date = moment(data).format('YYYY.MM.DD');
      this.add.InterviewTime = moment(data).format("YYYY-MM-DD HH:mm:ss");
      this.InterviewTime = date
    },
    // 打开时间选择器
    openPicker () {
      this.$refs.picker.open();
      document.activeElement.blur();
    },
    // 选择项目类型
    areaChange(picker, values){
      this.add.outsourcingNature = values[0]
    },
    // 弹出项目选择弹出
    handleClick(){
      this.outsourcingNaturerul=true;
      document.activeElement.blur();
    },
    // 检查名称参数
    checkName(){
      if (this.add.CompanyName.length === 0){
        Toast({
          message: '名称不能为空',
          position: 'bottom',
          duration: 4000
        });
        return false
      } else if ( this.add.CompanyName.length > 128) {
        Toast({
          message: '名称只能输入1-128个字符',
          position: 'bottom',
          duration: 4000
        });
        return false
      } else {
        return true
      }
    },
    // 检查地址参数
    checkAddress(){
      if ( this.add.CompanyAddress.length === 0){
        Toast({
          message: '地址不能为空',
          position: 'bottom',
          duration: 4000
        });
        return false
      } else if ( this.add.CompanyAddress.length > 128) {
        Toast({
          message: '地址只能输入1-128个字符',
          position: 'bottom',
          duration: 4000
        });
        return false
      } else {
        return true
      }
    },
    // 校验面试时间
    checkInterviewerTime(){
      if ( this.add.InterviewTime.length === 0){
        Toast({
          message: '请选择面试时间',
          position: 'bottom',
          duration: 4000
        });
        return false
      } else{
        return true
      }
    },
    // 校验面试次数
    checkInterviwerNumb(){
      if ( this.add.InterviewNumb.length === 0){
        Toast({
          message: '请输入面试时长',
          position: 'bottom',
          duration: 4000
        });
        return false
      } else if ( this.add.InterviewNumb.length > 50) {
        Toast({
          message: '面试时长只能输入1-50个字符',
          position: 'bottom',
          duration: 4000
        });
        return false
      } else {
        return true
      }
    },
    // 校验面试岗位
    checkInterviewerPost(){
      if (this.add.InterviewPost.length === 0 ){
        Toast({
          message: '请输入面试岗位',
          position: 'bottom',
          duration: 4000
        });
        return false
      } else if (this.add.InterviewPost.length > 50) {
        Toast({
          message: '岗位只能输入1-50个字符',
          position: 'bottom',
          duration: 4000
        });
        return false
      } else{
        return true
      }
    },
    // 校验面试时长
    checkInterviewerLong(){
      if (this.add.InterviewerLong.length === 0) {
        Toast({
          message: '请输入面试时长',
          position: 'bottom',
          duration: 4000
        });
        return false
      } else if (this.add.InterviewerLong.length >50 ){
        Toast({
          message: '面试时长在 1 到 50 个字符',
          position: 'bottom',
          duration: 4000
        });
        return false
      } else {
        return true
      }
    },
    addForm() {
      if ( this.checkName() && this.checkAddress() && this.checkInterviewerLong() && this.checkInterviewerPost()
        && this.checkInterviewerTime() && this.checkInterviwerNumb() )
      {
        console.log(this.add);
        MessageBox.confirm('确定添加?').then(action => {
          Indicator.open();
          try {
            let self = this;
            let params = JSON.stringify(self.add);
            addFeed(params).then(_data => {
              let {msg, code, data} = _data;
              if (code === '999999') {
                Toast({
                  message: '添加反馈成功',
                  position: 'bottom',
                  duration: 4000
                });
                Indicator.close();
                self.$router.push({path: '/FeedView'});
              } else {
                Indicator.close();
                Toast({
                  message: msg,
                  position: 'bottom',
                  duration: 4000
                });
              }
            })
          } catch (e) {
            Indicator.close();
            Toast({
              message: e,
              position: 'bottom',
              duration: 4000
            });
          }
        });
      }
    }
  },
}
</script>

<style scoped>

</style>
