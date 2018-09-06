/* eslint-disable */
const NotFound = resolve => require(['./views/common/404.vue'], resolve);
const About = resolve => require(['./views/about.vue'], resolve);
const MHome = resolve => require(['./views/Home.vue'], resolve);
const black = resolve => require(['./views/blackList/black.vue'], resolve);
const blackList = resolve => require(['./views/blackList/blackList.vue'], resolve);
const companyDetails = resolve => require(['./views/blackList/companyDetails.vue'], resolve);
const Feed = resolve => require(['./views/FeedView/Feed.vue'], resolve);
const FeedView = resolve => require(['./views/FeedView/FeedView.vue'], resolve);
const FeedDetails = resolve => require(['./views/FeedView/FeedDetails.vue'], resolve);
const Resource = resolve => require(['./views/Resource/Resource.vue'], resolve);
const Links = resolve => require(['./views/Resource/Links.vue'], resolve);
const LinksDetails = resolve => require(['./views/Resource/LinksDetails.vue'], resolve);

let routes = [
    {
      path: '/404',
      component: NotFound,
      name: '',
      hidden: true,
      M: true,
      projectHidden: true
    },
    {
      path: '/home',
      component: MHome,
      name: '',
      projectHidden: true,
      M: true,
      children: [
          // { path: '/m/blackList', component: blackList, iconCls:'el-icon-bell', name: '先人指路'},
          // { path: '/m/FeedView', component: FeedView, iconCls:'el-icon-message', name: '金玉良言'},
          // { path: '/m/Resource', component: Links, iconCls:'el-icon-share', name: '无私奉献'},
          // { path: '/m/About', component: About, iconCls:'el-icon-info', name: '关于我们'},
          // { path: '/robot', component: robot, iconCls:'fa fa-id-card-o', name: '消息机器人', meta: { keepAlive: false }},
          ]
    },
    {
      path: '/black',
      component: black,
      iconCls:'el-icon-bell',
      name: '先人指路',
      children:[
          { path: '/blackList', component: blackList, iconCls:'el-icon-bell', name: '指路'},
      ]
    },
    {
      path: '/companyDetails',
      component: companyDetails,
      iconCls:'el-icon-bell',
      name: '公司详情',
      M: true,
    },
    {
      path: '/FeedView',
      component: Feed,
      iconCls:'el-icon-message',
      name: '金玉良言',
            children:[
          { path: '/FeedView', component: FeedView, iconCls:'el-icon-bell', name: '良言'},
      ]
    },
    {
      path: '/FeedDetails',
      component: FeedDetails,
      iconCls:'el-icon-share',
      name: '反馈详情',
      M: true,
    },
    {
      path: '/Resource',
      component: Resource,
      iconCls:'el-icon-share',
      name: '无私奉献',
            children:[
          { path: '/Resource', component: Links, iconCls:'el-icon-bell', name: '奉献'},
      ]
    },
    {
      path: '/LinksDetails',
      component: LinksDetails,
      iconCls:'el-icon-share',
      name: '链接详情',
      M: true,
    },
    {
      path: '/About',
      component: About,
      iconCls:'el-icon-info',
      name: '关于我们',
            children:[
          { path: '/About', component: blackList, iconCls:'el-icon-bell', name: '我们'},
      ]
    },
];

export default routes;
