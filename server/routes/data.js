var express = require('express');
var router = express.Router();
var fs = require('fs');

// 首页 —— 广告（超值特惠）
var homeAdData = require('../public/home/ad.js')
router.get('/api/homead', function (req,res) {
   console.log('首页 —— 广告（超值特惠）')
   res.send(homeAdData);
});
// 首页 —— 推荐列表（猜你喜欢）
var homeListData = require('../public/home/list.js')
router.get('/api/homelist/:city/:page', function (req,res) {
   console.log('首页 —— 推荐列表（猜你喜欢）')
   const params = req.params
   const paramsCity = params.city
   const paramsPage = params.page

   console.log('当前城市：' + paramsCity)
   console.log('当前页数：' + paramsPage)
   res.send(homeListData);
});
// 搜索结果页 - 搜索结果 - 三个参数
var searchListData = require('../public/search/list.js')
router.get('/api/search/:page/:city/:category/:keyword', function (req,res) {
   console.log('搜索结果页 - 搜索结果')

   // 参数
   const params = req.params
   const paramsPage = params.page
   const paramsCity = params.city
   const paramsCategory = params.category
   const paramsKeyword = params.keyword

   console.log('当前页数：' + paramsPage)
   console.log('当前城市：' + paramsCity)
   console.log('当前类别：' + paramsCategory)
   console.log('关键字：' + paramsKeyword)

   res.send(searchListData);
})
// 搜索结果页 - 搜索结果 - 两个参数
router.get('/api/search/:page/:city/:category', function *(next) {
   console.log('搜索结果页 - 搜索结果')

   // 参数
   const params = req.params
   const paramsPage = params.page
   const paramsCity = params.city
   const paramsCategory = params.category

   console.log('当前页数：' + paramsPage)
   console.log('当前城市：' + paramsCity)
   console.log('当前类别：' + paramsCategory)

   res.send(searchListData);
})

// 详情页 - 商户信息
const detailInfo = require('../public/detail/info.js')
router.get('/api/detail/info/:id', function (req,res) {
   console.log('详情页 - 商户信息')

   const params = req.params
   const id = params.id

   console.log('商户id: ' + id)
   res.send(detailInfo);
})
// 详情页 - 用户评论
const detailComment = require('../public/detail/comment.js')
router.get('/api/detail/comment/:page/:id', function (req,res) {
   console.log('详情页 - 用户点评')

   const params = req.params
   const page = params.page
   const id = params.id

   console.log('商户id: ' + id)
   console.log('当前页数: ' + page)
   res.send(detailComment);
})
// 订单列表
const orderList = require('../public/orderlist/orderList.js')
router.get('/api/orderlist/:username', function (req,res) {
   console.log('订单列表')

   const params = req.params
   const username = params.username
   console.log('用户名：' + username)

   res.send(orderList);
})

// 提交评论
router.post('/api/submitComment', function (req,res) {
   console.log('提交评论')

   // 获取参数

   res.send = {
      errno: 0,
      msg: 'ok'
   }
})
module.exports = router;
