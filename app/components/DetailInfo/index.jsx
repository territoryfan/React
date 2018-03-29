import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Star from "../Star/index"
import "./style.less"
class DetialInfo extends React.Component {
   constructor(props, context) {
      super(props, context);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
   }
   render() {
      const data = this.props.data
      console.log(data)
      return (
          <div id="detail-info-container">
              <div className="info-container clear-fix">
                  <div className="info-img-container float-left">
                      <img src={data.img}/>
                  </div>
                  <div className="info-content">
                      <h1>{data.title}</h1>
                      <div className="star-container">
                          <Star star={data.star}/>
                          <span className="price">￥{data.price}</span>
                      </div>
                      <p className="sub-title">{data.subTitle}</p>
                  </div>
              </div>
              <p dangerouslySetInnerHTML={{__html: data.desc}} className="info-desc"></p>
          </div>
      )
   }
}

export default DetialInfo