import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGoogle} from '@fortawesome/free-brands-svg-icons';

import popup from './pop.module.css'

function LoginHeader({title}) {
    return (
        <h2 className={popup.login_header}>{title}</h2>
    )
}

function SocialLogin() {
    return (
        <div className={popup.login_content}>
            <label>로그인을 해주세요!!</label>
            <div className={popup.login_list}>
                <GoogleLogin />
                <GoogleLogin />
                <GoogleLogin />
            </div>
        </div>
    )
}

function GoogleLogin() {
    return (
        <button className={popup.login_btn} >
            <a href="http://192.168.146.128:8080/authorize/google">
                <FontAwesomeIcon icon={faGoogle} className={popup.login_icon} />
            </a>
        </button>
    )
}

function LoginPage({onClose}) {
    return (
        <div className={popup.back_layer} onClick={onClose}>
            <div className={popup.fore_layer} >
                <div className={popup.common_alert} onClick={(event) => event.stopPropagation()}>
                    <LoginHeader title="로그인" />
                    <SocialLogin />
                </div>
            </div>
        </div>
    )
}

export default LoginPage
