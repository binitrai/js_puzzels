import React, { useEffect, useState } from "react";

function StopWatch() {

  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [time, setTime] = useState(0);
  const [delay, setDelay] = useState(1000)

useEffect(() => {
    let interval = null;
    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        setTime((time) => time + 1);
      }, delay);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isActive, isPaused, delay]);

    

    const start = () => {
        if (isActive) {
            setIsPaused(!isPaused);
        } else {
            setIsActive(true);
            setIsPaused(false);
        }
    }

    const reset = () => {
        setIsActive(false);
        setTime(0);
    }

    const handleDelayChange = (e) => {
        if (e.target.value) {
            setDelay(e.target.value);
        }
    }

    return (
        <div className="Center Content">
            <h1>{formatTime(time)}</h1>
            <div className="StopWatchControls">
                <button 
                    className="AutoWidth Rounded Button Success" 
                    onClick={start}
                    style={{marginRight:"15px"}}
                >
                    {isActive && !isPaused ? "Pause" : "Start"}
                </button>
                <button 
                    className="AutoWidth Rounded Button Danger" 
                    onClick={reset}
                >
                    Reset
                </button>
                <div style={{marginTop: "20px"}}>
                    <label>
                        Set delay: 
                        <input 
                            className="inputStyle" 
                            style={{width:"150px", marginLeft : "5px"}}
                            onChange={handleDelayChange} 
                            value={delay} 
                            type="text"
                            placeholder="Set Delay"
                        />
                    </label>
                    
                </div>
                
            </div>
        </div>
    )
}

function formatTime(time) {
    let seconds = parseInt(time, 10); // don't forget the second param
    let hours   = Math.floor(seconds / 3600);
    let minutes = Math.floor((seconds - (hours * 3600)) / 60);
    seconds = seconds - (hours * 3600) - (minutes * 60);
    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    
    return [hours, minutes, seconds].join(" : ");
}
export default formatTime;

