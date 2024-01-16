import React from "react";
import cls from './SignUp.module.scss'
import { 
  IoPersonOutline ,
  IoAtCircleOutline ,
  IoEyeOutline,
  IoEyeOffOutline ,
  IoLockClosedOutline ,
} from "react-icons/io5"
import { useForm } from 'react-hook-form'
import { Link } from "react-router-dom";
import { Form } from "../../../helpers/form";

export const SignUp = () => {
  const [passwordVisible, setPasswordVisible] = React.useState(false)
  const [errors, setErrors] = React.useState({
    password_error: '',
  })

  const {
    reset,
    register,
    handleSubmit,
    formState,
  } = useForm()

  const onSubmit = (data) => {
    const body = {
      login: data.login,
      email: data.email,
      password: data.password1,
    }

    if (data.password1 === data.password2) {

    } else {
      setErrors({errors, password_error: 'Пароли не совпaдают!'})
    }
  }

  return (
    <main className={cls.main}>
      <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={cls.head_title}>Регистрация</h1>
        
        {
          formState.errors.login && <p className={cls.error}> {formState.errors.login.message} </p>
        }
        <div className={cls.input_box}>
          <IoPersonOutline className={cls.icon} />
          <input 
            className={cls.input} 
            type="text" 
            placeholder='Login' 
            {...register('login', Form.Options.login)}
          />
        </div>

        {
          formState.errors.email && <p className={cls.error}> {formState.errors.email.message} </p>
        }
        <div className={cls.input_box}>
          <IoAtCircleOutline className={cls.icon} />
          <input 
            className={cls.input} 
            type="email" 
            placeholder="Email" 
            {...register('email', Form.Options.email)}
          />
        </div>

        {
          errors.password_error !== '' ? <p className={cls.error}> {errors.password_error} </p> : ''
        }
        {
          formState.errors.password1 && <p className={cls.error}> {formState.errors.password1.message} </p>
        }
        <div className={cls.input_box}>
          <IoLockClosedOutline className={cls.icon} />
          <input 
            className={cls.input} 
            type={passwordVisible === false ? 'password' : 'text'} 
            placeholder="Password" 
            {...register('password1', Form.Options.password)}
          />
          <section className={cls.password_visible}>
            {
              passwordVisible === false ? 
              <IoEyeOffOutline className={cls.password_eye} onClick={() => setPasswordVisible(true)} />
              :
              <IoEyeOutline className={cls.password_eye} onClick={() => setPasswordVisible(false)} />
            }
          </section>
        </div>
        
        {
          formState.errors.password2 && <p className={cls.error}> {formState.errors.password2.message} </p>
        }
        <div className={cls.input_box}>
          <IoLockClosedOutline className={cls.icon} />
          <input 
            className={cls.input} 
            type={passwordVisible === false ? 'password' : 'text'} 
            placeholder="Confirm password" 
            {...register('password2', Form.Options.password)}
          />
        </div>

        <button className={cls.button} type="submit">Войти</button>
        <p className={cls.title}>Already have an account? <Link to={'/sign-in'} className={cls.link}>Sign in</Link></p>
      </form>
    </main>
  )
}