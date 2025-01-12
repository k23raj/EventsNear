import React from 'react'
import {startRemoveUser} from '../../actions/user'
import {connect} from 'react-redux'
import _ from 'lodash'

function Logout(props) {
  {  /* if(!_.isEmpty(props.user)){
        localStorage.removeItem('userAuth')
        props.dispatch(removeUser())
    }    */}
    props.dispatch(startRemoveUser())

     console.log('logout')   
    return (
        <div>
            <p> You have been logged out</p>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(Logout)