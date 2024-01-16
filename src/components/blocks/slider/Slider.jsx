import React from "react";
import cls from './Slider.module.scss'
import { Carousel } from '@trendyol-js/react-carousel'
import { Link } from "react-router-dom";

export const Slider = ({ customers }) => {
	const [data, setData] = React.useState(
    [
      {
        to: '',
        id: 1,
        name: 'Shrek 2',
        description: 'The movie about tall people',
        data: '22.22.2001',
        views: '2122000',
        preview: 'https://ichef.bbci.co.uk/images/ic/640x360/p07xpnby.jpg',
        url: 'https://webref.ru/example/video/snowman.mp4',
      },
    ]
  )


  return (
		<main className={cls.main}>
			{/* <Carousel show={3.5} slide={3} swiping={true}>
		  	{
          data.map(item => (
            <Link 
              to={'/watch'} 
              key={item.id} 
              className={cls.card}
              onClick={() => handleUrl(item.url, item.name, item.description, item.views)}
            >
              <img className={cls.card_preview} src={item.preview} alt="" />
              <h1 className={cls.card_name}> {item.name} </h1>
              <input className={cls.card_title} value={item.description} readOnly />
              <p className={cls.card_view}> {item.views} views </p>
            </Link>
          ))
        }
      </Carousel> */}
		</main>
	)
}