import { Button, FormField } from "../../../components/index"
import { Form } from 'antd';
import { Link } from "react-router-dom";


// const onFinish = (values) => {
//         console.log('Success:', values);
//       };
    
//       const onFinishFailed = (errorInfo) => {
//         console.log('Failed:', errorInfo);
//       };
const LoginForm = (props) => {
        const {
            values,
            touched,
            errors,
            handleChange,
            handleBlur,
            handleSubmit,
          } = props;
              return (
                <div className="auth__content">
                <div className="auth__top">
                        <h2>Войти в аккунт</h2>
                        <p>Пожалуйста, войдите в свой аккунт</p>
                </div>
                <Form   
                        onSubmit={handleSubmit}
                        className="login-form"
                >
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
                        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button type="primary" htmlType="submit" size="large">
                                Войти в аккунт
                                </Button>
                        </Form.Item>
                        <Link className="auth__register--link" to="/signup">Зарегистрироваться</Link>
                </Form>
        </div>
        )
}

export default LoginForm;

/*
<Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                <Button type="primary" htmlType="submit" size="large">
                                Войти в аккунт
                                </Button>
                        </Form.Item>
*/