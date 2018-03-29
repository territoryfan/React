import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
// import { postComment } from "../../../fetch/user/orderlist"
import "./style.less"
class Item extends React.Component {
   constructor(props, context) {
      super(props, context);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
      this.state = {
         commentState: 2 //0--未评价 1--评价中 2--已评价
      }
   }
   render() {
      const data = this.props.data
      return (
          <div className="order-item-container">
              <div className="clear-fix">
                    <div className="float-left order-item-img">
                        <img src={data.img} alt=""/>
                    </div>
                    <div className="float-right order-item-comment">
                       {
                           this.state.commentState === 0
                               //未评价
                           ? <button className="btn" onClick={this.showComment.bind(this)}>评价</button>
                           :
                           this.state.commentState === 1
                               //评价中
                               ? ""
                              // 已评价
                              : <button className="btn unseleted-btn">已评价</button>

                       }
                    </div>
                    <div className="order-item-content">
                        <span>商户：{data.title}</span>
                        <span>数量：{data.count}</span>
                        <span>价格：¥{data.price}</span>
                    </div>
              </div>
              {
                 this.state.commentState === 1
                  ?  <div className="comment-text-container">
                        <textarea className="comment-text" ref="commentText"></textarea>
                        <button className="btn" onClick={this.submitClickHandle.bind(this)}>提交</button>
                        <button className="btn unseleted-btn" onClick={this.hideComment.bind(this)}>取消</button>
                     </div>
                     : ""
              }
          </div>
      )
   }
   componentDidMount () {
       const data = this.props.data
       console.log(data)
       this.setState({
          commentState: this.props.data.commentState
       })
   }
   hideComment () {
      //评价取消
      this.setState({
         commentState: 0
      })
   }
   showComment () {
      //点击评价
      this.setState({
         commentState: 1
      })
   }
   submitClickHandle () {
      //提交评论
      const submitCommont = this.props.submitCommont
      const id = this.props.data.id
      const commentTextDOM = this.refs.commentText
      const value = commentTextDOM.value.trim()
      if(!value){
         return
      }
      //提交评价内容
      submitCommont(id,value,this.commentOk.bind(this))
   }
   commentOk () {
      //提交成功 已经评价，修改状态
      this.setState({
         commentState: 2
      })
   }
}

export default Item