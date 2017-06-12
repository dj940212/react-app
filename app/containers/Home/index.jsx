import React from 'react'
import PureRenderMixin from 'react-addons-pure-render-mixin'
import HomeHeader from '../../components/HomeHeader'

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
            </div>
        )
    }
}

export default Home
