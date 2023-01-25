import { Box, Button } from "@mui/material";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import "../css/stopwatch.css";
import TaskModal from "./taskModal";
import { addContest } from "../redux/actions";

const Stopwatch = () => {
  const [start, setStart] = useState(false);
  const [pause, setPause] = useState(false);
  const [reset, setReset] = useState(false);
  const [time, setTime] = useState(0);
  const [openModal, setOpenModal] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    let intervalId;
    if (start) {
      intervalId = setInterval(() => {
        setTime((time) => time + 1);
      }, 1000);
    } else if (!start && time !== 0) {
      clearInterval(intervalId);
    }
    return () => clearInterval(intervalId);
  }, [start, time]);

  const timeFormat = () => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    const hoursTimer = hours.toString().padStart(2, "0");
    const minutesTimer = minutes.toString().padStart(2, "0");
    const secondsTimer = seconds.toString().padStart(2, "0");
    const stopwatchTime = `${hoursTimer}:${minutesTimer}:${secondsTimer}`;
    return stopwatchTime;
  };

  const duration = timeFormat();

  const startBtn = () => {
    setPause(false);
    setStart(!start);
    setReset(true);
  };

  const pauseBtn = () => {
    setStart(false);
    setPause(!pause);
    setReset(false);
  };

  const resetBtn = () => {
    setTime(0);
    setPause(true);
    setReset(!reset);
    setStart(false);
  };

  const handleOpenModal = () => {
    setStart(false);
    setOpenModal(true);
    dispatch(addContest(duration));
  };

  return (
    <>
      <time className="timer">{duration}</time>;
      <Box className="stopwatch">
        <Button variant="contained" disabled={start} onClick={startBtn}>
          Start
        </Button>
        <Button variant="contained" disabled={pause} onClick={pauseBtn}>
          Pause
        </Button>
        <Button variant="contained" disabled={reset} onClick={resetBtn}>
          Reset
        </Button>
        <Button variant="contained" onClick={handleOpenModal}>
          Save
        </Button>
      </Box>
      <TaskModal openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};

export default Stopwatch;
