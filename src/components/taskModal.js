import { useDispatch } from "react-redux";
import {
  Box,
  TextField,
  Button,
  Modal,
  Typography,
  Paper,
} from "@mui/material";
import "../css/taskModal.css";
import { useState } from "react";
import { addContest } from "../redux/actions";

const TaskModal = ({ duration, openModal, setOpenModal }) => {
  const initModalData = Object.freeze({
    title: "",
    description: "",
    duration: "",
  });

  const [formData, updateFormData] = useState(initModalData);
  const dispatch = useDispatch();

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSaveData = () => {
    dispatch(addContest(formData));
    setOpenModal(false);
  };

  const handleChange = (e) => {
    updateFormData({
      ...formData,
      duration: duration,
      [e.target.name]: e.target.value.trim(),
    });
  };

  return (
    <Modal open={openModal} onClose={handleCloseModal}>
      <Paper elevation={3} className="task-modal">
        <Typography align="center" variant="h4">
          Tasks
        </Typography>
        <form onSubmit={(e) => e.preventDefault()}>
          <TextField
            required
            fullWidth
            label="Name"
            name="title"
            onChange={handleChange}
            margin="normal"
          />
          <TextField
            required
            fullWidth
            label="Description"
            name="description"
            onChange={handleChange}
            margin="normal"
            multiline
            rows={4}
          />
          <Box className="form-btn">
            <Button
              onClick={handleSaveData}
              variant="contained"
              color="primary"
            >
              Save
            </Button>
            <Button
              onClick={handleCloseModal}
              variant="contained"
              color="warning"
            >
              Cancel
            </Button>
          </Box>
        </form>
      </Paper>
    </Modal>
  );
};

export default TaskModal;
