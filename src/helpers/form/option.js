import { emailReg, passwordReg, onlyNumbers } from "./regex"

export const required = 'Это поле не может быть пустым!'

export const email = {
    required,
    pattern: {
        value: emailReg,
        message: 'Email не валиден!',
    }
}

export const login = {
    required,
    pattern: {
        value: passwordReg,
        message: 'Только латинские буквы и цифры!',
    },
    minLength: {
        value: 4,
        message: 'Логин должень быть больше 4 букв и цифр!',
    }
}

export const password = {
    required,
    pattern: {
        value: true,
    },
    minLength: {
        value: 4,
        message: 'Пароль должно быть больше 4 цифр!',
    }
}


export const allInputs = {
    required,
    pattern: {
        message: 'Только латинские буквы!',
        value: passwordReg,
    }
}

