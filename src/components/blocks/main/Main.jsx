import React from "react";
import cls from './Main.module.scss'
import { Link } from "react-router-dom";
import { Watch } from "../../../pages/watch/Watch";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuidv4 } from 'uuid'

export const Main = () => {
  const [data, setData] = React.useState(
    [
      {
        to: '',
        id: uuidv4(),
        name: 'Shrek 2',
        description: 'The movie about tall people',
        data: '22.22.2001',
        views: '2122000',
        preview: 'https://ichef.bbci.co.uk/images/ic/640x360/p07xpnby.jpg',
        url: 'https://webref.ru/example/video/snowman.mp4',
      },
      {
        to: '',
        id: uuidv4(),
        name: 'Shrek 1',
        description: 'The movie about tall people',
        data: '22.22.2001',
        views: '2233000',
        preview: 'https://m.media-amazon.com/images/M/MV5BMTAyODc3Njc1NjdeQTJeQWpwZ15BbWU3MDQ3MDgyNDY@._V1_.jpg',
        url: './public/video.mp4',
      },
      {
        to: '',
        id: uuidv4(),
        name: 'Shrek 3',
        description: 'The movie about tall people',
        data: '22.22.2001',
        views: '4218000',
        preview: 'https://s4.afisha.ru/mediastorage/f1/88/b3b42c7376d04040a8f1d91a88f1.jpg',
        url: 'https://webref.ru/example/video/snowman.mp4',
      },
      {
        to: '',
        id: uuidv4(),
        name: 'Avatar',
        description: 'The movie about tall people',
        data: '22.22.2001',
        views: '330300',
        preview: 'https://www.cnet.com/a/img/resize/05ddcebef02ed2db237bb6ecabc40255a94b10bb/hub/2019/01/11/b251bf04-5bf8-469a-be8d-79489551460b/avatar-2009.jpg?auto=webp&fit=crop&height=675&width=1200',
        url: './public/video.mp4',
      },
      {
        to: '',
        id: uuidv4(),
        name: 'Avatar 2',
        description: 'The movie about tall people',
        data: '22.22.2001',
        views: '2801200',
        preview: 'https://static1.srcdn.com/wordpress/wp-content/uploads/2023/02/what-avatar-2-way-of-water-does-better-first-movie.jpg',
        url: './public/video.mp4',
      },
      {
        to: '',
        id: uuidv4(),
        name: 'Yes man',
        description: 'The movie about tall people',
        data: '22.22.2001',
        views: '21238000',
        preview: 'https://images.moviesanywhere.com/movie-hero/6d5da350236942cc431fcf108588191f.jpeg?r=16x9&w=2560',
        url: './public/video.mp4',
      },
      {
        to: '',
        id: uuidv4(),
        name: 'Dump and Dumper',
        description: 'The movie about tall people',
        data: '22.22.2001',
        views: '282000',
        preview: 'https://play-lh.googleusercontent.com/proxy/a7zPdMH-DesLebiYjvjQTbQvmCsfPQrR-cHmzH65aVqR86xDDYLWdJf7cf-FPp2TUJ2ayJXEsBEiHUKGWSBGBAJfV9FYeYMmkyKCpYq1gGr7XgZC5A=s1920-w1920-h1080',
        url: './public/video.mp4',
      },
      {
        to: '',
        id: uuidv4(),
        name: 'Sonic',
        description: 'The movie about tall people The movie about tall people The movie about tall people The movie about tall people The movie about tall people',
        data: '22.22.2001',
        views: '284000',
        preview: 'https://nypost.com/wp-content/uploads/sites/2/2022/04/newspress-collage-21818042-1649375790384.png',
        url: './public/video.mp4',
      },
      {
        to: '',
        id: uuidv4(),
        name: 'The mask',
        description: 'The movie about tall people',
        data: '22.22.2001',
        views: '285000',
        preview: 'https://i.redd.it/v5bijhmtzo941.jpg',
        url: './public/video.mp4',
      },
      {
        to: '',
        id: uuidv4(),
        name: 'Greench',
        description: 'The movie about tall people',
        data: '22.22.2001',
        views: '2800120',
        preview: 'https://pics.filmaffinity.com/How_the_Grinch_Stole_Christmas-457299589-large.jpg',
        url: './public/video.mp4',
      },
    ]
  )
  const [selectedUrl, setSelectedUrl] = React.useState(null);

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

    localStorage.setItem('movie_data', JSON.stringify(data))

    setTimeout(() => {
      window.location.reload()
    }, 500)
  }

  return (
    <main className={cls.main}>
      <h1 className={cls.head_title}>Новинки 2023</h1>
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
      <h1 className={cls.head_title}>Фильмы</h1>
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
      {selectedUrl !== null && <Watch data={selectedUrl} />}
    </main>
  )
}