import React from 'react';
import './FormContainer.css'; 
import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';

const FormContainer = (props) => {
    return(
        <div className="Container">
            <Input
                placeholder="Email hoặc số điện thoại"/>
            <Input placeholder="Mật khẩu" />
            <Button 
                title="Đăng nhập" 
                color="#1877f2" 
                width={92}
            />
            <p>Quên mật khẩu?</p>
            <hr />
            <Button 
                title="Tạo tài khoản mới" 
                color="#42b72a" 
                width={50}
            />
        </div>
    )
}
export default FormContainer