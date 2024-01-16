import React from "react";
import cls from '../sign_ up/SignUp.module.scss'
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

export const SignIn = () => {
  const [passwordVisible, setPasswordVisible] = React.useState(false)

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
  }

  return (
    <main className={cls.main}>
      <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
        <h1 className={cls.head_title}>Вход в аккаунт</h1>
        
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
          formState.errors.password && <p className={cls.error}> {formState.errors.password.message} </p>
        }
        <div className={cls.input_box}>
          <IoLockClosedOutline className={cls.icon} />
          <input 
            className={cls.input} 
            type={passwordVisible === false ? 'password' : 'text'} 
            placeholder="Password" 
            {...register('password', Form.Options.password)}
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

        <button className={cls.button} type="submit">Войти</button>
        <p className={cls.title}>Ain't registered yet? <Link to={'/sign-up'} className={cls.link}>Sign up</Link></p>
      </form>
    </main>
  )
}