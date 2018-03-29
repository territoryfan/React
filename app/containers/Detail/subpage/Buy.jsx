import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { hashHistory } from "react-router"
import {connect} from "react-redux"
import { bindActionCreators } from "redux"
import BuyAndStore from "../../../components/BuyAndStore/index";
import * as storeActionsFormFile from "../../../actions/store"

class Buy extends React.Component {
   constructor(props, context) {
      super(props, context);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
      this.state = {
         isStore: false
      }
   }

   render() {
      return (
          <div>
             <BuyAndStore
                 isStore={this.state.isStore}
                 buyHandle={this.buyHandle.bind(this)}
                 storeHandle={this.storeHandle.bind(this)}
             />
          </div>
      )
   }
   componentDidMount () {
      // console.log(123,this.props.store)
      // console.log(456,this.props.storeActions)
      this.checkStoreState()
   }
   //检验当前商户是否已经被收藏
   checkStoreState () {
      const id = this.props.id
      const store = this.props.store
      //过滤判断是否收藏
      //some函数 只要有一个满足即可
      store.some( item => {
         if(item.id === id) {
            this.setState({
               isStore: true
            })
            //跳出循环
            return true
         }
      })
   }
   //购买事件
   buyHandle() {
      //验证登录
      const loginFlag = this.loginCheck()
      if(!loginFlag) {
            return
      }
      //购买的流程

      //跳转到用户主页
      hashHistory.push("/user")
   }
   //收藏事件
   storeHandle() {
      //验证登录
      const loginFlag = this.loginCheck()
      if(!loginFlag) {
         return
      }
      const  id = this.props.id
      const storeActions = this.props.storeActions
      if(this.state.isStore) {
         //当前商户已经被收藏，点击时即要取消收藏
         storeActions.rm({id:id})
      }else {
         //当前商户尚未被收藏，点击时即要执行收藏
         storeActions.add({id:id})
      }
      //修改状态
      this.setState({
         isStore: !this.state.isStore
      })

   }
   //验证登录
   loginCheck () {
      const id = this.props.id
      const userinfo = this.props.userinfo
      if (!userinfo.username) {
         //跳到登录
         hashHistory.push("/login/"+encodeURIComponent("/detail") + id);
         return false
      }
      return true
   }
}

function mapStateToProps(state) {
   return {
      userinfo: state.userinfo,
      store: state.store
   }
}
function mapDispathchToProps(dispatch) {
   return {
      storeActions: bindActionCreators(storeActionsFormFile, dispatch)
   }
}
export default connect(
    mapStateToProps,
    mapDispathchToProps
)(Buy)
