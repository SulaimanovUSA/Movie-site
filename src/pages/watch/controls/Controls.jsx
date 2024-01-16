import React from "react";
import cls from './Controls.module.scss'
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

} from 'react-icons/io5'
import { ControlsItems } from "./controls_items/ControlsItems/ControlsItems";

export const Controls = ({
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
  } = state

  return (
    <>
      <div className={cls.controls} onClick={() => handlePlay()}>
        <section 
          className={playing === true ? `${cls.play_pause_box} ${cls.play_pause_opacity}` : cls.play_pause_box}
        >
          {
            playing === false ? 
            <IoPlayOutline className={cls.icon} />
            :
            <IoPauseOutline className={cls.icon} />
          }
        </section>
      </div>
      <ControlsItems 
        state={state}
        volume={volume}
        played={played}
        duration={duration}
        handlePlay={handlePlay}
        handleVolume={handleVolume}
        handleMuted={handleMuted}
      />
    </>
  )
}