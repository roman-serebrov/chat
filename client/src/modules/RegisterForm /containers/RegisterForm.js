import {withFormik} from 'formik';
import RegisterForm from '../components/RegisterForm';
import validation from '../../../utils/validation';



export default withFormik({
  enableReinitialize: true,
  mapPropsToValues : () => ({
    fullname: "",
    email: "",
    password: "",
    password_2: "",
  }),
    validate: values => {
      const errors = {};
      validation({isAuth: false, values, errors})
      return errors
    },
  
    handleSubmit: (values, { setSubmitting }) => {
        console.log('displayName')
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 1000);
    },
  
    displayName: 'RegisterForm',
    
  })(RegisterForm);

