//sign up page
import React, { useState } from 'react';
import './signup.style.scss';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { signup } from '../../redux/user/user.actions';

import Logo from '../../components/logo/logo.component';
import CustomInput from '../../components/custom-input/custom-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import ContinueWith from '../../components/continue-with/continue-with.component';


const Signup = ({ signup }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');
    const [errUsername, setErrUsername] = useState(false);
    const [errPass, setErrPass] = useState(false);
    const [errPassConfirm, setErrPassConfirm] = useState(false);
    const [errPassConfirmMsg, setErrPassConfirmMsg] = useState('');
    const [clickUsername, setClickUsername] = useState(false);
    const [clickPass, setClickPass] = useState(false);
    const [errorSignup, setErrorSignup] = useState(false);
    const [errorMsgSignup, setErrorMsgSignup] = useState('');

    // if user send him to somewhere else;

    const redirectAndResetAfterSignup = () => {
        setUsername('');
        setPassword('');
        setConfirmPass('');
        setClickPass(false);
        setClickUsername(false);
        setErrorSignup(false);
        setErrorMsgSignup('');
        console.log('account created');
    }

    const handleSignup = (e) => {
        if (!errUsername && !errPass && clickUsername && clickPass) {
            if (password !== confirmPass) {
                setErrPassConfirm(true);
                setErrPassConfirmMsg('passwords do not match');
            } else {
                signup({ username, password }, redirectAndResetAfterSignup, { setErrorSignup, setErrorMsgSignup })
            }
            // console.log('logging in')
        } else {
            if (!username.length) setErrUsername(true);
            if (!password.length) setErrPass(true);
            if (!confirmPass.length) {
                setErrPassConfirm(true);
                setErrPassConfirmMsg('password can\'t be empty');
            }
        }
    }

    const onChangeUsername = (e) => {
        setUsername(e.target.value);
        e.target.value.trim().length ? setErrUsername(false) : setErrUsername(true);
        if (!clickUsername) { setClickUsername(true); }
    }

    const onChangePassword = (e) => {
        setPassword(e.target.value);
        e.target.value.length ? setErrPass(false) : setErrPass(true);
        if (!clickPass) { setClickPass(true); }
    }

    const onChangeConfirmPassword = (e) => {
        setConfirmPass(e.target.value);

        if (e.target.value.length) {
            if (e.target.value !== password) {
                setErrPassConfirm(true);
                setErrPassConfirmMsg('passwords do not match');
            } else {
                setErrPassConfirm(false);
            }

        } else {
            setErrPassConfirm(true);
            setErrPassConfirmMsg('password can\'t be empty');
        }
        if (!clickPass) { setClickPass(true); }
    }

    return (
        <div className="signup">
            <header>
                <Logo />
            </header>
            <div className="content">
                <div className="title">Login to Shadow</div>
                <div className="form">
                    <form action="">
                        <CustomInput
                            onChange={onChangeUsername}
                            value={username}
                            placeholder='username'
                            width='200px'
                            errMsg="username can't be empty"
                            error={errUsername}
                        />
                        <CustomInput
                            onChange={onChangePassword}
                            value={password}
                            placeholder='password'
                            width='200px'
                            type='password'
                            errMsg="password can't be empty"
                            error={errPass}
                        />
                        <CustomInput
                            onChange={onChangeConfirmPassword}
                            value={confirmPass}
                            placeholder='confirm password'
                            width='200px'
                            type='password'
                            errMsg={errPassConfirmMsg}
                            error={errPassConfirm}
                        />
                        <CustomButton
                            click={handleSignup}
                            text='Log In!'
                            backgroundColor='red'
                            width='220px'
                            marginTop='15px'
                        />
                    </form>
                </div>
                <div className="errorRequest" style={{ display: errorSignup ? '' : 'none' }}>{errorMsgSignup}</div>
                <div className="or">
                    Or
                </div>
                <ContinueWith />
                <div className="line"></div>
                <Link to='/login' >Don't have account? Sing Up!</Link>
            </div>
        </div>
    );
};

const mapStateToProps = ({ user }) => ({
    user,
})

const mapDispatchToProps = dispatch => ({
    signup: (data, cb, error) => dispatch(signup(data, cb, error)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Signup);