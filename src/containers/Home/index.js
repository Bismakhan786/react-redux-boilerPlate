import React from 'react';
import { Form } from 'react-bootstrap';
import './style.css';
import {connect} from 'react-redux';
import {set_data} from '../../store/action'

class Home extends React.Component{
    render(){
        console.log("props==>",this.props.users);
        let user = {name: 'ZAID', email: 'zaid@gmail.com'}
        return(
            <div>
                <h1>Home</h1>
                <button onClick={()=> this.props.set_data(user)}>SET DATA</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    users: state.users
})

const mapDispatchToProps = (dispatch) => ({
    set_data: (data) => dispatch(set_data(data))
})

export default connect(mapStateToProps, mapDispatchToProps)(Home);
