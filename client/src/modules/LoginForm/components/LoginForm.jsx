import { Block, Button } from "../../../components/index"
import { Form, Input } from 'antd';
import FormItem from "antd/lib/form/FormItem";
import { Link } from "react-router-dom";


const onFinish = (values) => {
        console.log('Success:', values);
      };
    
      const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
      };
const LoginForm = () => (
                <div className="auth__content">
                        <div className="auth__top">
                                <h2>Войти в аккунт</h2>
                                <p>Пожалуйста, войдите в свой аккунт</p>
                        </div>
                        <Form
                                name="basic"
                                labelCol={{ span: 8 }}
                                wrapperCol={{ span: 16 }}
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                                onFinishFailed={onFinishFailed}
                                autoComplete="off"
                                >
                                <Form.Item
                                        label="Username"
                                        name="username"
                                        rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                <Input />
                                </Form.Item>
                                <Form.Item
                                        label="Password"
                                        name="password"
                                        rules={[{ required: true, message: 'Please input your password!' }]}
                                >
                                        <Input.Password />
                                </Form.Item>
                                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                                        <Button type="primary" htmlType="submit" size="large">
                                        Войти в аккунт
                                        </Button>
                                </Form.Item>
                                <FormItem>
                                        <Link to="/signup"> Зарегистрироваться</Link>
                                </FormItem>
                                </Form>
                </div>
)

export default LoginForm;