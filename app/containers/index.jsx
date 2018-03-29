import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { bindActionCreators } from "redux"
import { connect } from "react-redux"
import LocalStore from "../util/localStore.js"
import { CITYNAME } from "../config/localStoreKey.js"

import * as userInfoActionsFromOtherFile from "../actions/userinfo.js"
/* * as 把userinfo.js里的全部引入过来*/


class App extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state = {
            initDone: false
        }   
    }
    render() {
        return (
            <div>
               {
                    this.state.initDone
                    ? this.props.children
                    : <div>加载中...</div>
                }
            </div>
        )
    }
    componentDidMount () {
        //从localstorage里获取城市
        let cityName = LocalStore.getItem(CITYNAME)
        if (cityName == null) {
            cityName = "北京"
        }
        // console.log(cityName)
        //将城市信息存储到Redux中
        this.props.userInfoActions.update({
          cityName: cityName
        })
        this.setState({
            initDone: true
        })
    }
}

function mapStateToProps(state) {
   return {
   }
}

function mapDispatchToProps(dispatch) {
   return {
      userInfoActions: bindActionCreators(userInfoActionsFromOtherFile, dispatch),
   }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
