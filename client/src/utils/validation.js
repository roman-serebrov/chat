export default ({isAuth, values, errors}) => {
    console.log(values)
    const rules = {
        email: value => {
            if (!value) {
                errors.email = 'Введите E-Mail';
            }else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(value)
            ) {
                errors.email = 'Неверный формат!';
            }
        },
        password: value => {
             if(!value) {
                errors.password = 'Введите пароль!'
            } else if (!isAuth && 
                !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)
            ) {
                errors.password = "слишком легкий пароль"
            }
        },
        password_2: value => {
            if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,})/.test(value)) {
                errors.password_2 = "некорректоно введен пароль"
            }
            if(value !== values.password) {
                errors.password_2 = "Пароли не совпадают!"
            }
            
        },
        fullname: value => {
            if(!/^[a-zA-Z][a-zA-Z0-9-]+$/.test(value)) {
                errors.fullname = "Не коректно задано имя";
            }
        }
    }
    for(const key in values) {
        console.log(key)
        if(rules[key]) {
            rules[key](values[key]);
        }
    }
}

