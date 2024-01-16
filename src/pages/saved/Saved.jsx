import React from "react";
import cls from './Saved.module.scss'
import { Link } from "react-router-dom";

export const Saved = () => {
  const data = JSON.parse(localStorage.getItem('cards'))

  const handleUrl = (url, name, description, views, id, preview) => {
    let data = {
      id: id,
      name: name,
      url: url,
      views: views,
      preview: preview,
      description: description,
      saved: false,
    }

    localStorage.setItem('movie_data', JSON.stringify([data]))
  }

  return (
    <main className={cls.main}> 
      <h1 className={cls.head_title}>Избраное</h1>
      <section className={cls.main_section}>
        {
          data.map(item => (
            <Link 
              to={'/watch'} 
              key={item.id} 
              className={cls.card}
              onClick={() => handleUrl(item.url, item.name, item.description, item.views, item.id, item.preview)}
            >
              <img className={cls.card_preview} src={item.preview} alt="" />
              <h1 className={cls.card_name}> {item.name} </h1>
              <input className={cls.card_title} value={item.description} readOnly />
              <p className={cls.card_view}> {item.views} views </p>
            </Link>
          ))
        }
      </section>
    </main>
  )
}