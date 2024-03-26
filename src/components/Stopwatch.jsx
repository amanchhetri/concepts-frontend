import React, {useState, useEffect} from 'react'

function Stopwatch() {
    const [count, setCount] = useState(0);
    const [status, setStatus] = useState(false);

    useEffect(() => {
        let abc;

        if(status) {
            abc = setInterval(() => {
                setCount((prevCount) => prevCount + 1)
            }, 1000);
 
            return () => clearInterval(abc)
        }

    }, [count, status])

    const handleStart = () => {
        setStatus(true)
    }
    const handleStop = () => {
        setStatus(false)
    }
    const handleReset = () => {
        setCount(0);
        setStatus(false) 
    }
  return (
    <div>
        <h1>Stopwatch</h1>
        <button onClick={handleStart}>Start</button>
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
        <h1>{count}</h1>
    </div>
  )
}

export default Stopwatch