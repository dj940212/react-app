import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeHeader from '../../components/HomeHeader'
import Category from '../../components/Category'

class Home extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
        this.state={
            city:"杭州"
        }
    }
    alert(){
        alert(1);
    }
    render() {
        return (
            <div>
                <HomeHeader cityName={this.state.city}></HomeHeader>
                <Category></Category>
            </div>
        )
    }
}

export default Home
