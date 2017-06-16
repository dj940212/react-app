import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

import CommentItem from './Item'

import './style.less'

class CommentList extends React.Component{
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    render(){
        // 获取数据
        const data = this.props.data

        return (
             <div className="comment-list">
                  {data.map((item,index) => {
                    return <CommentItem key={index} data={item}></CommentItem>
                  })}
             </div>
        )
    }
}

export default CommentList