import React from "React"
import PureRenderMixin from "react-addons-pure-render-mixin"
import {Link, hashHistory} from "react-router";
import SearchInput from "../../components/SearchInput/index"
import "./style.less"

class HomeHeader extends React.Component {
   constructor(props, context) {
      super(props, context);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
      this.state = {
         kwd: ""
      }
   }

   render() {
      return (
          <div id="home-header" className="clear-fix">
             <div className="home-header-left float-left">
                <Link to="/city">
                   <span>{this.props.cityName}</span>
                   &nbsp;
                   <i className="icon-angle-down"></i>
                </Link>
             </div>
             <div className="home-header-right float-right">
                <Link to="/Login">
                   <i className="icon-user"></i>
                </Link>
             </div>
             <div className="home-header-middle">
                <div className="search-container">
                   <i className="icon-search"></i>
                   <SearchInput value="" enterHandle={this.enterHandle.bind(this)}/>
                </div>
             </div>
          </div>
      )
   }
   enterHandle(value) {
      console.log(123,value);
      hashHistory.push("/search/all/"+encodeURIComponent(value))
   }
}
export default HomeHeader
