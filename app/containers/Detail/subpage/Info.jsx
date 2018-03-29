import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import {getInfoData} from "../../../fetch/detail/detai"
import DetialInfo  from "../../../components/DetailInfo/index"
class Info extends React.Component {
   constructor(props, context) {
      super(props, context);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
      this.state = {
         info: false
      }
   }

   render() {
      return (
          <div>
             {
                this.state.info
                    ? <DetialInfo data={this.state.info}/>
                    : ""
             }
          </div>
      )
   }

   componentDidMount() {
      const id = this.props.id
      var result = getInfoData(id)
      result.then(res => {
         return res.json()
      }).then(json => {
         // console.log(json)
         this.setState({
            info: json
         })
      })

   }
}

export default Info