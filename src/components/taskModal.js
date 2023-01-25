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
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpenModal(false);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  dispatch(addContest({ title, description, duration }));

  return (
    <Modal open={openModal} onClose={handleCloseModal}>
      <Paper elevation={3} className="task-modal">
        <Typography align="center" variant="h4">
          Tasks
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            required
            fullWidth
            type="text"
            name="title"
            label="Title"
            margin="normal"
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            required
            fullWidth
            type="text"
            name="description"
            label="Description"
            margin="normal"
            multiline
            onChange={(e) => setDescription(e.target.value)}
            rows={4}
          />
          <Box className="form-btn">
            <Button type="submit" variant="contained" color="primary">
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
