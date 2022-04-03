import {withFormik} from 'formik';
import validation from '../../../utils/validation';
import LoginForm from '../components/LoginForm';



export default withFormik({
  enableReinitialize: true,
  mapPropsToValues : () => ({
    email: "",
    password: ""
  }),
    validate: values => {
      const errors = {};
      validation({isAuth: true, values, errors})
      return errors
    },
  
    handleSubmit: (values, { setSubmitting }) => {
        console.log('displayName')
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 1000);
    },
  
    displayName: 'LoginForm',
    
  })(LoginForm);

