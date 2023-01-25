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

const ContestDataDisplay = () => {
  //   const Time = useSelector((state) => state.contest.timeDuration);
  //   const Title = useSelector((state) => state.contest.title);
  //   const Description = useSelector((state) => state.contest.description);

  //   console.log(Time, "Time");
  //   console.log(Title, "Title");
  //   console.log(Description, "Description");

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
            <TableRow>
              <TableCell component="th" scope="row">
                1
              </TableCell>
              <TableCell align="left">2</TableCell>
              <TableCell align="left">3</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ContestDataDisplay;
