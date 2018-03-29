import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { getCommentData } from "../../../fetch/detail/detai"
import CommentList from "../../../components/CommentList/index"
import LoadMore from "../../../components/LoadMore/index"

import "./style.less"
class Commont extends React.Component {
   constructor(props, context) {
      super(props, context);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
      this.state = {
         data: [],
         hasMore: false,
         isLoadingMore: false,
         page:0
      }
   }
   render() {
      return (
          <div className="detail-comment-subpage">
             <h2>用户评论</h2>
             {
                this.state.data.length
                 ? <CommentList data={this.state.data}/>
                    : <div>加载中...</div>
             }
             {
                this.state.hasMore
                 ? <LoadMore isLoadingMore={this.state.isLoadingMore} loadMoreFn={this.loadMoreData.bind(this)}/>
                    : ""
             }
          </div>
      )
   }
   componentDidMount() {
      this.loadFirstPageData()
   }
   //获取首页数据
   loadFirstPageData() {
      const id = this.props.id
      const result = getCommentData(0, id)
      this.resultHandle(result)
   }
   //加载更多数据
   loadMoreData () {
      //记录状态
      this.setState({
         isLoadingMore: true
      })
      const id = this.props.id
      const page = this.props.page
      const result = getCommentData(page, id)
      this.resultHandle(result)
      //增加page
      this.setState({
         isLoadingMore: false
      })
   }
   //处理数据
   resultHandle(result) {
      result.then(res => {
         return res.json()
      }).then(json => {
         console.log(json)
         const page = this.state.page
         this.setState({
            page: page +1
         })
         const  hasMore = json.hasMore
         const data = json.data

         this.setState({
            hasMore: hasMore,
            data: this.state.data.concat(data)
         })
      }).catch(ex => {
         if (__DEV__) {
            console.error('详情页获取用户评论数据出错, ', ex.message)
         }
      })
   }
}

export default Commont