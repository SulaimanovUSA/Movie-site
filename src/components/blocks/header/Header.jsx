import React from "react";
import cls from './Header.module.scss'
import { Link } from "react-router-dom"
import { 
  IoSearch,
  IoBookmarkOutline,
  IoLanguage,
  IoEnterOutline ,
} from "react-icons/io5"

export const Header = () => {
  const [active, setActive] = React.useState(false)

  return (
    <header className={cls.header}>
      <h1 className={cls.logo}>
        <div className={cls.logo_image}/> SwiftFilm
      </h1>
      <div className={cls.search_box}>
        <div className={cls.input_box}>
          <input type="text" placeholder="Введите запрос..." className={cls.input} />
          <div className={cls.icon_box}>
            <IoSearch className={cls.icon} />
          </div>
        </div>
        <select className={cls.select}>
          <option value="" className={cls.option}>Фильмы</option>
          <option value="" className={cls.option}>Мультфильмы</option>
          <option value="" className={cls.option}>Сериалы</option>
          <option value="" className={cls.option}>Лучшее</option>
       </select>
      </div>
      <section className={cls.section}>
        <div className={cls.icon_box}>
          <Link to={'/saved'}><IoBookmarkOutline className={cls.icon} /></Link>
          <Link to={''}><IoLanguage className={cls.icon} /></Link>
        </div>
        <div className={cls.profil}>
           {
            active === true ? 
            <img src="" alt="" className={cls.user_image} />
            :
            <Link to={'/sign-in'} className={cls.icon}><IoEnterOutline /></Link>
           }
        </div>
      </section>
    </header>
  )
}