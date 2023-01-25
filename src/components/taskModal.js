import { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Modal,
  Typography,
  Paper,
} from "@mui/material";
import "../css/taskModal.css";

const TaskModal = ({ openModal, setOpenModal }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleSaveTask = () => {
    setOpenModal(false);
  };

  return (
    <Modal open={openModal} onClose={handleCloseModal}>
      <Paper elevation={3} className="task-modal">
        <Typography align="center" variant="h4" contained>
          Tasks
        </Typography>
        <form onSubmit={(e) => e.preventDefault()}>
          <TextField
            required
            fullWidth
            label="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            margin="normal"
          />
          <TextField
            required
            fullWidth
            label="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            margin="normal"
            multiline
            rows={4}
          />
          <Box className="form-btn">
            <Button
              onClick={handleSaveTask}
              type="submit"
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
