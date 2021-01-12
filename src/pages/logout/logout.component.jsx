// log out page
import React from 'react';
import './logout.style.scss';

import { connect } from 'react-redux';
import { logout } from '../../redux/user/user.actions';

import Header from '../../components/header/header.component';
import CustomButton from '../../components/custom-button/custom-button.component';

const Logout = ({ logout }) => {

    const handleLogout = () => {
        logout();
    }

    return (
        <div className="logout">
            <Header />
            <CustomButton
                click={handleLogout}
                text='Logout'
            />
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
})

export default connect(null, mapDispatchToProps)(Logout);