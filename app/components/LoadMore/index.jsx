import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import "./style.less"
class LoadMore extends React.Component {
   constructor(props, context) {
      super(props, context);
      this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
   }

   render() {
      return (
          <div className="load-more" ref="wrapper">
             {
                this.props.isLoadingMore
                    ? <span>加载中...</span>
                    : <span onClick={this.loadMoreHandle.bind(this)}>加载更多</span>
             }
             {
                this.props.loadMoreFn
             }
          </div>
      )
   }

   loadMoreHandle() {
      //执行传递过来的loadMoreData函数
      this.props.loadMoreFn()
   }

   componentDidMount() {
      let timeoutId
      const loadMoreFn = this.props.loadMoreFn
      const wrapper = this.refs.wrapper

      function callback() {
         console.log("console2：" + "456")
         //获取top值 距离页面顶部的距离
         const top = wrapper.getBoundingClientRect().top
         const windowHeight = window.screen.height
         if (top && top < windowHeight) {
            //当wrapper 已经被滚动到暴露在页面的可视范围之内时候触发
            loadMoreFn()
         }
      }

      window.addEventListener("scroll", function () {
         if (this.props.isLoadingMore) {
            //正在加载 不做处理
            return;
         }
         console.log("console1：" + "123")
         //做节流 性能优化(对比两个console的值)
         if (timeoutId) {
            clearTimeout(timeoutId)
         }
         timeoutId = setTimeout(callback, 50)
      }.bind(this), false)
   }
}

export default LoadMore