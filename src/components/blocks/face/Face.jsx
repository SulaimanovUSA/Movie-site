import React from "react";
import cls from './Face.module.scss'
import { 
  IoLogoInstagram ,
  IoLogoTwitter ,
  IoLogoWhatsapp ,
  IoLogoVk ,
  IoLogoFacebook ,
  IoMailOutline ,
} from "react-icons/io5"
import { Link } from "react-router-dom";

export const Face = () => {
  return (
    <main className={cls.main}>
      <section className={cls.section}>
        <h1 className={cls.head_title}>Yes Man</h1>
        <p className={cls.data_title}>11 dec 2008 year</p>
        <p className={cls.title}>Watch online</p>
        <p className={cls.description}>Carl Allen, a bank loan officer, has become withdrawn since his divorce from Stephanie. He has an increasingly negative outlook on his life and routinely ignores his friends Peter and Rooney. On the advice of an old colleague, Nick, Carl attends a motivational seminar that encourages people to seize the opportunity to say "Yes!" At the seminar, Carl meets inspirational guru Terrence, who tells him to enter a "covenant with the universe" and say yes to anything asked of him.</p>
        <div className={cls.buttons}>
          <Link to={'/get-premium'} className={cls.button}>Купить премиум</Link>
          <Link to={'/about-us'} className={cls.button}>О нас</Link>
        </div>
        <p className={cls.socials_title}>Наши социальные сети</p>
        <div className={cls.socials}>
          <IoLogoFacebook className={cls.icon} />
          <IoLogoInstagram className={cls.icon} />
          <IoLogoVk className={cls.icon} />
          <IoLogoTwitter className={cls.icon} />
          <IoLogoWhatsapp className={cls.icon} />
          <IoMailOutline className={cls.icon} />
        </div>
      </section>
      <section className={cls.section}>
        
      </section>
      <img className={cls.image} src="https://images6.alphacoders.com/485/485299.jpg" alt="" />
    </main>
  )
}