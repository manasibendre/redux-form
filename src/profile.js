import React from 'react';
import { connect } from 'react-redux';


function Profile(props) {
    return (
        <div>
            <h1>Profile Data</h1>
            {props.formdata.firstName}
            {props.formdata.LastName}
            {props.formdata.LN}

        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        formdata: state.form.login.values,

    }
}
export default connect(mapStateToProps)(Profile);