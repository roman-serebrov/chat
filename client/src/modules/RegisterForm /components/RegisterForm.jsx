import React, { useState } from 'react';
import { Form} from "antd";
import { Button, FormField, Block } from "../../../components/index"
import { CheckCircleTwoTone } from '@ant-design/icons';
import { Link } from 'react-router-dom';
const RegisterForm = (props) => {
    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
      } = props;
    const [success, setSuccess] = useState(false);
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
        <Block>
        <Form
        onSubmit={handleSubmit}
        className="login-form"
        >
        <FormField
            name="fullname"
            icon="user"
            placeholder="Ваше имя и фамилия"
            handleChange={handleChange}
            handleBlur={handleBlur}
            touched={touched}
            errors={errors}
            values={values}
        />
        <FormField
              name="email"
              icon="email"
              placeholder="E-Mail"
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
              values={values}
            />
            <FormField
              name="password"
              icon="lock"
              placeholder="Пароль"
              type="password"
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
              values={values}
            />
            <FormField
              name="password_2"
              icon="lock"
              placeholder="Повторите пароль"
              type="password"
              handleChange={handleChange}
              handleBlur={handleBlur}
              touched={touched}
              errors={errors}
              values={values}
            />
             <Form.Item>
              <Button
                onClick={handleSubmit}
                type="primary"
                size="large"
              >
                Зарегистрироваться
              </Button>
            </Form.Item>
            <Link className="auth__register-link" to="/signin">
              Войти в аккаунт
            </Link>
        </Form>
        </Block>
        }
        </div>
    );
};
export default RegisterForm;