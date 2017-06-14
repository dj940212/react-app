import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeHeader from '../../components/HomeHeader'
import Category from '../../components/Category'
import Ad from './subpage/Ad'
import List from './subpage/List'

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            cityName:"杭州"
        }
    }
    render() {
        return (
            <div>
                <HomeHeader cityName={this.state.cityName}></HomeHeader>
                <Category></Category>
                <div style={{height: '15px'}}>{/* 分割线 */}</div>
                <Ad></Ad>
                <List cityName={this.state.cityName}></List>
            </div>
        )
    }
}

export default Home
