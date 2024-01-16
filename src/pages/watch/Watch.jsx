import React from 'react';
import cls from './Watch.module.scss'
import ReactPlayer from 'react-player'
import { Controls } from './controls/Controls';
import { useSelector } from 'react-redux';
import { Progress } from './progress/Progress';
import { Main } from '../../components/blocks/main/Main';
import { 
  IoArrowRedoOutline ,
  IoBookmarkOutline ,
} from "react-icons/io5"
import { GiSaveArrow } from "react-icons/gi"
import { SlLike, SlDislike } from "react-icons/sl"

export const Watch = ({ data }) => {
  const refPlayer = React.useRef()

  const [state, setState] = React.useState({
    playing: false,
    volume: 0.5,
    muted: false,
    seconds: '00:00',
    played_seconds: 0,
    duration: 0,
  })

  const {
    playing,
    volume,
    muted,
    played_seconds,
    duration,
  } = state

  const handlePlay = () => {
    setState({...state, playing: !state.playing})
  }

  const handleMuted = () => {
    setState({...state, muted: !state.muted})
  }

  const handleVolume = (e) => {
    setState({...state, volume: e.target.value})
  }

  const handleProgress = e => {
    setState({
      ...state,
      played_seconds: Math.floor(e.playedSeconds),
      seconds: formatTime(Math.floor(e.playedSeconds)),
    });
    console.log(e)
  };

  const handleProgressBar = (value) => {
    refPlayer.current.seekTo(Number(value))
    setState({
      ...state,
      played_seconds: Math.floor(value),
      seconds: formatTime(Math.floor(value)),
    });
  }

  const handleDuration = (duration) => {
    setState({ ...state, duration });
  };

  const handleSeek = value => {
    setState({ ...state, played_seconds: value, seconds: formatTime(value) });
  };

  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };
  
  const movie_data = JSON.parse(localStorage.getItem('movie_data'))
  const prevData = JSON.parse(localStorage.getItem('cards'))
  console.log(movie_data.saved)

  const hadleSaveCard = (url, name, description, views, id, preview) => {
    let data = {
      id: id,
      name: name,
      url: url,
      views: views,
      preview: preview,
      description: description,
      saved: false,
    }

    for (const item of prevData) {
      
    }

    const newData = [...prevData, data]

    localStorage.setItem('cards', JSON.stringify(newData))
  }

  return (
    <main className={cls.main}>
      <div className={cls.player}>
        <ReactPlayer
          className={cls.reactPlayer}
          width='100%'
          height='100%'
          url={movie_data.url}
          controls={false}
          playing={playing}
          volume={parseInt(volume)}
          muted={muted}
          onProgress={handleProgress}
          onDuration={handleDuration}
          ref={refPlayer}
        >

        </ReactPlayer>
        <Progress 
          handleProgressBar={handleProgressBar}
          played={played_seconds}
          duration={duration}
        />
        <Controls 
          state={state} 
          volume={volume}
          played={played_seconds}
          duration={duration}
          handlePlay={handlePlay}
          handleVolume={handleVolume}
          handleMuted={handleMuted}
        />
      </div>
      <div className={cls.title_container}>
        <h1 className={cls.name}> {movie_data.name} </h1>
        <section className={cls.section}>
          <div className={cls.user_profil}>

          </div>
          <div className={cls.icons}>
            <p className={cls.icon_box}> 
              <span className={cls.icon_like}>Нравиться <SlLike className={cls.icon} /></span> 
              <span className={cls.icon_like}> <SlDislike className={cls.icon} /></span> 
            </p>
            <p className={cls.icon_box}> Поделиться <IoArrowRedoOutline className={cls.icon} /> </p>
            <p className={cls.icon_box}> Сохранить <GiSaveArrow className={cls.icon} /> </p>
            {
              prevData[0].saved === false? 
              <p 
                className={cls.icon_box}
                onClick={() => hadleSaveCard(movie_data.url, movie_data.name, movie_data.description, movie_data.views, movie_data.id, movie_data.preview )}
              >
                В избраное <IoBookmarkOutline className={cls.icon} />
              </p>
              :
              <p 
                className={cls.icon_box}
                // onClick={() => hadleSaveCard(movie_data[0].url, movie_data[0].name, movie_data[0].description, movie_data[0].views, movie_data[0].id, movie_data[0].preview )}
              >
                Удалить <IoBookmarkOutline className={cls.icon} />
              </p>
            }
          </div>
        </section>
        <p className={cls.views}> {movie_data.views} views </p>
        <p className={cls.descriptionzz}> {movie_data.description} </p>
      </div>
      <Main />
    </main>
  );
};