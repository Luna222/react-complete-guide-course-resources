import { useState, useEffect } from 'react';

export default function ProgressBar({ timeOut }) {
  const [remainingTime, setRemaingTime] = useState(timeOut);

  useEffect(() => {
    //👉 timerHandler will be executed after EVERY 10 milliseconds & the remainingTime will get updated accordingly (reduce by 10ms each time)
    //🔹asynchronous: running in the background, other codes get executed
    const interval = setInterval(() => {
      //1st interval: remainingTime = 2990, 2nd interval: remainingTime = 2980, 3rd interval: remainingTime = 2970, ...
      setRemaingTime(pendingRemainingTime => pendingRemainingTime - 10);
      console.log(remainingTime);
    }, 10);

    //🧹cleanUpFn
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <progress value={remainingTime} max={timeOut} />;
}
