import React, { useEffect, useState } from "react";

function StopWatch() {

  const [secondCount, setSecondCount] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const [delay, setDelay] = useState(1000)

    useEffect(() => {
        let timerId = null;
        if (isRunning && isPaused === false) {
            timerId = setInterval(() => {
            setSecondCount((secondCount) => secondCount + 1);
        }, delay);
        } else {
        clearInterval(timerId);
        }
        return () => {
        clearInterval(timerId);
        };
    }, [isRunning, isPaused, delay]);

    

    const start = () => {
        if (isRunning) {
            setIsPaused(!isPaused);
        } else {
            setIsRunning(true);
            setIsPaused(false);
        }
    }

    const reset = () => {
        setIsRunning(false);
        setSecondCount(0);
    }

    const handleDelayChange = (e) => {
        if (e.target.value) {
            setDelay(e.target.value);
        }
    }

    return (
        <div className="Center Content">
            <h1>{formatTime(secondCount)}</h1>
            <div className="StopWatchControls">
                <button 
                    className="AutoWidth Rounded Button Success" 
                    onClick={start}
                    style={{marginRight:"15px"}}
                >
                    {isRunning && !isPaused ? "Pause" : "Start"}
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

