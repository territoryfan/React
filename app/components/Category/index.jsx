import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { Link } from "react-router"
import ReactSwipe from 'react-swipe';
import "./style.less"
class Category extends React.Component {
   constructor(props, context) {
      super(props, context);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
      this.state ={
         //存index
         index: 0
      }
   }

   render() {
      var opt = {
            auto: 2000,
            callback: index => {
               // console.log(index)
               this.setState({index: index})
            }
      }
      return (
          <div id="home-category">
             <ReactSwipe className="carousel" swipeOptions={opt}>
                <div className="carousel-item">
                   <ul>
                      <li className="float-left jingdian"><Link to="/search/gouwu">日本菜</Link></li>
                      <li className="float-left ktv"><Link to="/search/ktv">ktv</Link></li>
                      <li className="float-left gouwu"><Link to="/search/gouwu">ktv</Link></li>
                      <li className="float-left shenghuofuwu"><Link to="/search/shenghuofuwu">ktv</Link></li>
                      <li className="float-left jianshenyundong"><Link to="/search/jianshenyundong">ktv</Link></li>
                      <li className="float-left meifa"><Link to="/search/meifa">ktv</Link></li>
                      <li className="float-left qinzi"><Link to="/search/qinzi">ktv</Link></li>
                      <li className="float-left xiaochikuaican"><Link to="/search/xiaochikuaican">ktv</Link></li>
                      <li className="float-left zizhucan"><Link to="/search/zizhucan">ktv</Link></li>
                      <li className="float-left jiuba"><Link to="/search/jiuba">ktv</Link></li>
                   </ul>
                </div>
                <div className="carousel-item">
                   <ul>
                      <li className="float-left meishi"><Link to="/search/meishi">四个景点</Link></li>
                      <li className="float-left jiudian"><Link to="/search/jiudian">ktv</Link></li>
                      <li className="float-left xuixianyule"><Link to="/search/xuixianyule">ktv</Link></li>
                      <li className="float-left waimai"><Link to="/search/waimai">ktv</Link></li>
                      <li className="float-left huoguo"><Link to="/search/huoguo">ktv</Link></li>
                      <li className="float-left liren"><Link to="/search/liren">ktv</Link></li>
                      <li className="float-left dujiachuxing"><Link to="/search/dujiachuxing">ktv</Link></li>
                      <li className="float-left zhoubianyou"><Link to="/search/zhoubianyou">ktv</Link></li>
                      <li className="float-left ribencai"><Link to="/search/ribencai">ktv</Link></li>
                      <li className="float-left SPA"><Link to="/search/SPA">ktv</Link></li>
                   </ul>
                </div>
                <div className="carousel-item">
                   <ul>
                      <li className="float-left jiehun"><Link to="/search/jiehun">四个景点</Link></li>
                      <li className="float-left xuexipeixun"><Link to="/search/xuexipeixun">ktv</Link></li>
                      <li className="float-left xican"><Link to="/search/xican">ktv</Link></li>
                      <li className="float-left huochejipiao"><Link to="/search/huochejipiao">ktv</Link></li>
                      <li className="float-left shaokao"><Link to="/search/shaokao">ktv</Link></li>
                      <li className="float-left jiazhuang"><Link to="/search/jiazhuang">ktv</Link></li>
                      <li className="float-left chongwu"><Link to="/search/chongwu">ktv</Link></li>
                      <li className="float-left quanbufenlei"><Link to="/search/quanbufenlei">ktv</Link></li>
                      <li className="float-left xuexipeixun"><Link to="/search/xuexipeixun">ktv</Link></li>
                      <li className="float-left xuexipeixun"><Link to="/search/xuexipeixun">ktv</Link></li>
                   </ul>
                </div>
             </ReactSwipe>
             <div className="index-container">
                <ul>
                   <li className={this.state.index===0 ? "selected": ""}></li>
                   <li className={this.state.index===1 ? "selected": ""}></li>
                   <li className={this.state.index===2 ? "selected": ""}></li>
                </ul>
             </div>
          </div>
      )
   }
}

export default Category