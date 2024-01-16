import React from "react";
import cls from './Foooter.module.scss'
import { 
  IoHomeOutline ,
  IoSettingsOutline ,
  IoPersonOutline ,
  IoArrowRedoOutline ,
  IoSaveOutline ,
  IoDiamondOutline ,
  IoFlameOutline ,
} from "react-icons/io5"

export const Footer = () => {
  return (
    <footer className={cls.footer}>
      <section className={cls.icons}>
        <IoHomeOutline className={cls.icon} />
        <IoFlameOutline className={cls.icon} />
        <IoSaveOutline className={cls.icon} />
        <IoSettingsOutline className={cls.icon} />
        <IoDiamondOutline className={cls.icon} />
        <IoArrowRedoOutline className={cls.icon} />
      </section>
    </footer>
  )
}