import { useEffect, useState } from "react";

export default function QuestionTimer({ timeout, onTimeout, mode }) {
  const [remainingTime, setRemainingTime] = useState(timeout);

  useEffect(() => {
    console.log("Setting Timeout");
    const timer = setTimeout(onTimeout, timeout);

    return () => {
      console.log("Clearing Timeout");
      clearTimeout(timer);
    };
  }, [onTimeout, timeout]);


  useEffect(() => {
    console.log("Setting Interval");
    const interval = setInterval(() => {
      setRemainingTime((prevRemainingTime) => prevRemainingTime - 100);
    }, 100);

    return () => {
      console.log("Clearing Interval");
      clearInterval(interval);
    };
  }, []);

  return <progress id="progress-time" max={timeout} value={remainingTime} className={mode} />;
}
