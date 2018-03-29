import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import Header from "../../components/Header/index";
import Info from "./subpage/Info"
import Commont from "./subpage/Commont"
import Buy from "./subpage/Buy"

class Detail extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render() {
        //获取商户ID
        const  id =this.props.params.id
        return (
            <div>
                <Header title="商户详情"/>
                <Info id={id}/>
                <Buy id={id}/>
                <Commont id={id}/>
            </div>
        )
    }
}
export default Detail;
