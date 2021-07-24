import React from 'react'
import {BrowserRouter as Router, NavLink, Switch, Route} from 'react-router-dom';
import popup from './pop.module.css'

function LoginPage({onClose}) {
    return (
        <div className={popup.dimmed_layer_wrapper}>
                <div className={popup.full_layer}>
                    <div className={popup.common_alert}> 
                        <h2>로그인</h2>
                        <div>This is Popup Body</div>
                        <div>
                            <button type="button" onClick={onClose}>close</button>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default LoginPage
