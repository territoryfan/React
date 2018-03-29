import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import { hashHistory } from "react-router"
import { connect } from "react-redux"
import Header from "../../components/Header/index";
import UserInfo from "../../components/UserInfo/index";
import OrderList from './subpage/OrderList'

class User extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        const userinfo = this.props.userinfo
        return (
            <div>
                <Header title="用户主页" backRouter="/"/>
                <UserInfo username={userinfo.username} city={userinfo.cityName}/>
                <OrderList username={userinfo.username}/>
            </div>
        )
    }
    componentDidMount() {
        //如果未登录,跳转到登录界面
        if(!this.props.userinfo.username) {
           hashHistory.push("/login")
        }
    }
}
function mapStateToProps(state) {
   return {
      userinfo: state.userinfo
   }
}

function mapDispatchToProps(dispatch) {
   return {}
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(User);
