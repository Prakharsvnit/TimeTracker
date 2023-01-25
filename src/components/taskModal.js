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
import { addContest } from "../redux/actions";

const TaskModal = ({ openModal, setOpenModal }) => {
  const dispatch = useDispatch();

  const handleSubmit = (event) => {
    event.preventDefault();
    setOpenModal(false);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
  };

  const handleTitleChange = (event) => {
    dispatch(addContest(event.target.value));
  };

  const handleDescriptionChange = (event) => {
    dispatch(addContest(event.target.value));
  };

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
            onChange={handleTitleChange}
          />
          <TextField
            required
            fullWidth
            type="text"
            name="description"
            label="Description"
            margin="normal"
            multiline
            onChange={handleDescriptionChange}
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
