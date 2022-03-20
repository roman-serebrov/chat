import {Routes, Route} from "react-router-dom"
import './Auth.scss'

import { LoginForm, RegisterForm} from "../../modules/index";

const Auth = () => {
        return (
        <section className="auth">
                <Routes>
                        <Route  path="signin" element={<LoginForm />} />
                        <Route  path="signup" element={<RegisterForm />} />
                 </Routes>
        </section>


        )

}
export default Auth;