import { useEffect, useState } from "react";

const TimerProgressBar = ({ duration = 5000, onComplete }) => {
  const [progressBar, setProgressBar] = useState(0);
  useEffect(() => {
    const totalStep = 100;
    const stepTime = duration / totalStep;
    let currentStep = 0;

    const interval = setInterval(() => {
      currentStep += 1;
      setProgressBar(currentStep);

      if (currentStep >= totalStep) {
        clearInterval(interval);
        onComplete?.();
      }
    }, stepTime);
    return () => clearInterval(interval);
  }, [duration, onComplete]);

  return (
    <div className="centerBar">
      <div>Timer Progress Bar </div>
      <div className="progressBarContainer">
        <div
          style={{
            width: `${progressBar}%`,
            height: "100%",
            backgroundColor: "#2196f3",
            transition: "width 0.2s liner",
          }}
        ></div>
      </div>
    </div>
  );
};

export default TimerProgressBar;
