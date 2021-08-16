import request from "./request.module.css";
import React from "react";

function UserRequest() {
    return (
        <div className={request.back_layer} onClick={() => window.location.replace("http://localhost:3000/")} >
            <div className={request.fore_layer} >
                <div className={request.common_alert} >
                    <form action="">
                        <input type="text" className={request.nickName} placeholder="아이디"/>
                        <input type="password" placeholder="비밀번호"/>
                        <input type="text" className={request.description} placeholder="자기소개"/>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserRequest