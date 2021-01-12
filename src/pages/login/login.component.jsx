// login papge
import React, { useState } from 'react';
import './login.style.scss';

import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../redux/user/user.actions';

import Logo from '../../components/logo/logo.component';
import CustomInput from '../../components/custom-input/custom-input.component';
import CustomButton from '../../components/custom-button/custom-button.component';
import ContinueWith from '../../components/continue-with/continue-with.component';

const Login = ({ user, login }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errUsername, setErrUsername] = useState(false);
    const [errPass, setErrPass] = useState(false);
    const [clickUsername, setClickUsername] = useState(false);
    const [clickPass, setClickPass] = useState(false);
    const [errorLogin, setErrorLogin] = useState(false);
    const [errorMsg, setErrorMsg] = useState('');

    // if user send him to somewhere else;

    const redirectAndResetAfterLogin = () => {
        setUsername('');
        setPassword('');
        setClickPass(false);
        setClickUsername(false);
        setErrorLogin(false);
        setErrorMsg('');
        console.log('successful login');
    }

    const handleLogin = (e) => {
        if (!errUsername && !errPass && clickUsername && clickPass) {
            login({ username, password }, redirectAndResetAfterLogin, { setErrorLogin, setErrorMsg })
            // console.log('logging in')
        } else {
            if (!username.length) setErrUsername(true);
            if (!password.length) setErrPass(true);
            console.log('no empty')
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

    return (
        <div className="login">
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
                        <CustomButton
                            click={handleLogin}
                            text='Log In!'
                            backgroundColor='red'
                            width='220px'
                            marginTop='15px'
                        />
                    </form>
                </div>
                <div className="errorRequest" style={{ display: errorLogin ? '' : 'none' }}>{errorMsg}</div>
                <div className="or">
                    Or
                </div>
                <ContinueWith />
                <div className="line"></div>
                <Link to='/signup' >Don't have account? Sing Up!</Link>
            </div>

        </div>
    );
};

const mapStateToProps = ({ user }) => ({
    user,
})

const mapDispatchToProps = dispatch => ({
    login: (data, cb, error) => dispatch(login(data, cb, error))
})

export default connect(mapStateToProps, mapDispatchToProps)(Login);