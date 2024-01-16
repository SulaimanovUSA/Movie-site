import React from "react";
import cls from './Progress.module.scss';

export const Progress = ({ handleProgressBar, played, duration }) => {
  const [value, setValue] = React.useState(0);
  console.log(value)

  React.useEffect(() => {
    setValue(played);
  }, [played]);

  const handleChange = (e) => {
    setValue(Number(e.target.value));
    handleProgressBar(e.target.value);
  };

  const calculateProgress = () => {
    if (duration > 0) {
      return (played / duration) * 100;
    }
    return 0;
  };

  const progressStyle = {
    width: `${calculateProgress()}%`,
  };

  return (
    <section className={cls.progress_box}>
      <input 
        type="range" 
        className={cls.progress_line}
        value={value} 
        onChange={handleChange}
        min={0}
        max={100}
      />
      {/* <div 
        className={cls.thump_line}  
        style={progressStyle}
      ></div> */}
    </section>
  );
};