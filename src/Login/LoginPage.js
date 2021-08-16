import React from 'react'
import {Redirect} from "react-router-dom";
import GoogleLogin from "react-google-login";
import axios from "axios";

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
                <Google/>
                <Google/>
                <Google/>
            </div>
        </div>
    )
}

function Google() {
    return (
        <GoogleLogin clientId="CLIENT_ID"
                     buttonText="로그인"
                     onSuccess={responseGoogle}
                     cookiePolicy={'single_host_origin'}
        />
    )
}

const responseGoogle = async (response) => {
    alert(response.accessToken);

    const oAuthHeader = {
        headers: {
            'Content-Type': 'application/json'
        }
    }
    const Server = await axios.post('SERVER_URL',
        response.accessToken,
        oAuthHeader);
    alert(Server.data.nickName);
    // 유저 등록 페이지로 이동
    return (
        window.location.replace("http://192.168.146.129:3000/login/userinfo")
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
