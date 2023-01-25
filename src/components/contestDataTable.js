import {
  Table,
  TableHead,
  TableBody,
  TableCell,
  TableRow,
  Paper,
  Typography,
  TableContainer,
} from "@mui/material";
import "../css/dataTable.css";
import { useSelector } from "react-redux";

const ContestDataDisplay = () => {
  const contestData = useSelector((state) => state.contest);

  return (
    <>
      <Typography variant="h4" align="center">
        Tasks
      </Typography>
      <TableContainer className="contest-data-container" component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Time</TableCell>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contestData.map((data) => (
              <TableRow>
                <TableCell component="th" scope="row">
                  {data.duration}
                </TableCell>
                <TableCell align="left">{data.title}</TableCell>
                <TableCell align="left">{data.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ContestDataDisplay;
