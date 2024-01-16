import React from "react";
import cls from './ControlsItems.module.scss'
import { 
  IoPauseOutline,
  IoPlayOutline,
  IoVolumeHighOutline,
  IoVolumeMuteOutline,
  IoContractOutline,
  IoExpandOutline,
  IoSaveOutline,
  IoPlaySkipBackOutline,
  IoPlaySkipForwardOutline,
  IoSettingsOutline,

} from 'react-icons/io5'

export const ControlsItems = ({
  state,
  played,
  duration,
  handlePlay,
  handleVolume,
  handleMuted,
}) => {

  const {
    playing,
    volume,
    muted,
  } = state

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  return (
    <>
      <div className={cls.controls_items} >
        <section className={cls.section} >
          <div className={cls.play_pause_box}>
            <IoPlaySkipBackOutline className={cls.icon} />
            <div onClick={() => handlePlay()} className={cls.play_pause} >
              {
                playing === false ? 
                <IoPlayOutline className={cls.icon} />
                :
                <IoPauseOutline className={cls.icon} />
              }
            </div>
            <IoPlaySkipForwardOutline className={cls.icon} />
          </div>
          <div className={cls.volume_icons} onClick={() => handleMuted()}>
            {
                muted === false ? 
                <IoVolumeHighOutline className={cls.icon} />
                :
                <IoVolumeMuteOutline className={cls.icon} />
            }
          </div>
          <div className={cls.volume_input}>
            <input 
              type="range" 
              min={0} max={1} 
              step={0.1}
              value={volume}
              className={cls.input} 
              onChange={handleVolume}
            />
          </div>
          <div className={cls.duration}>
            <span>{formatTime(played)} / {formatTime(duration)}</span>
          </div>
        </section>
        <section className={cls.section}>
          <IoSettingsOutline  className={cls.icon} />
          <div className={cls.screen_size}>
            <IoExpandOutline className={cls.icon} />
          </div>
        </section>
      </div>
    </>
  )
}