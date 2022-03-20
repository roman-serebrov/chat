import React, { useState } from 'react';
import { Form, Icon, Input} from "antd";
import { Block, Button } from "../../../components/index"
import { Link } from "react-router-dom";
import { CheckCircleTwoTone } from '@ant-design/icons';

const RegisterForm = () => {
    const [form] = Form.useForm();
    const [success, setSuccess] = useState(false);

    const onFinish = (values) => {
        console.log('Received values of form: ', values);
        setSuccess(!success);
    };

// const [autoCompleteResult, setAutoCompleteResult] = useState>([]);

    
    return (
        <div className="register__content">
            <div className="register__top">
                <h2>Регистрация</h2>
            </div>
        {success ? <div className="success__reg">
            <div className="success__icon">
             <CheckCircleTwoTone style={{ fontSize: '36px', color: '#08c' }}/>   
            </div>
            <div>
                Подтвердите аккаунт
            </div>
            <div className="success__text">
                На Вашу почту отправленно письмо с сылкой на подтверждение регистрации.
            </div>
            </div> : 
        <Form
        form={form}
        name="register"
        onFinish={onFinish}
        initialValues={{
            residence: ['zhejiang', 'hangzhou', 'xihu'],
            prefix: '86',
        }}
        scrollToFirstError
        >
        <Form.Item>
            <Input placeholder="Email"/>
        </Form.Item>

        <Form.Item        >
            <Input.Password placeholder="password"/>
        </Form.Item>

        <Form.Item>
            <Input.Password placeholder="confirm password"/>
        </Form.Item>

        <Form.Item        >
            <Input placeholder="nickname"/>
        </Form.Item>
        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit" size="large">
                Зарегестировать аккунт
            </Button>
        </Form.Item>
        <Form.Item>
                <Link to="register">Войти</Link>
        </Form.Item>
        </Form>
        }
        </div>
    );
};
export default RegisterForm;