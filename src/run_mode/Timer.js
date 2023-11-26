import { CountdownCircleTimer } from "react-countdown-circle-timer";

const Timer = ({ timerComplete, time }) =>{

    return (
        <CountdownCircleTimer
          isPlaying
          duration={time}
          colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
          colorsTime={[10,5,3,0]}
          onComplete={() => timerComplete()}
        >
          {renderTime}
        </CountdownCircleTimer>
    )
}

export default Timer

const renderTime = ({ remainingTime }) => {
  
    return (
      <div style={{textAlign:"center"}}>
        <div className="text">Remaining</div>
        <div className="value">{remainingTime}</div>
        <div className="text">seconds</div>
      </div>
    );
  };