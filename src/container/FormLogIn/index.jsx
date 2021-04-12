import React, { useRef } from 'react';
import './style.css'; 
import InputComponent from '../../components/InputComponent/Index';
import ButtonComponent from '../../components/ButtonComponent/Index';

const FormLogIn = (props) => {
    const emailRef = useRef("");
    const passwordRef = useRef("");

    const handleOnChangeEmail = (event) => {
        emailRef.current = event.target.value;
        console.log("email");
    }

    const handleOnChangePassword = (event) => {
        passwordRef.current = event.target.value;
        console.log("pass");
    }

    const handleLogIn = () => {
        let message;
        if(!emailRef.current && !passwordRef.current){
            message = "Vui lòng nhập Email và Password";
        } else if(!emailRef.current) {
            message = "Email không hợp lệ";
        } else if(!passwordRef.current) {
            message = "Password không hợp lệ";
        } else {
            message = "Đăng Nhập Thành Công";
        }
        alert(message);
    }

    return(
        <div className="Container">
            <InputComponent
                handleOnChange={handleOnChangeEmail}
                placeholder="Email hoặc số điện thoại"
            />
            <InputComponent 
                type="password"
                handleOnChange={handleOnChangePassword}
                placeholder="Mật khẩu" 
            />
            <ButtonComponent 
                title="Đăng nhập" 
                color="#1877f2" 
                width="92%"
                onClick={handleLogIn}
            />
            <p className="p-container">Quên mật khẩu?</p>
            <hr className="hr-line-login"/>
            <ButtonComponent 
                title="Tạo tài khoản mới" 
                color="#42b72a" 
                width="50%"
            />
        </div>
    )
}
export default FormLogIn