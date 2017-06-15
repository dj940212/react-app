import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'

class Search extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
    }
    alert(){
        alert(1)
    }
    render() {
        return (
            <div>
                <h1>Search</h1>
            </div>
        )
    }
    componentDidMount(){
        const params = this.props.params
        console.log('category params:'+params.category)
        console.log('key param:'+ params.keyword)
    }
}

// 使用 require.ensure 异步加载，还不支持 ES6 的 export 
// export default Search
module.exports = Search