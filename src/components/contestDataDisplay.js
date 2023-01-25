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

function createData(time, title, description) {
  return { time, title, description };
}

const rows = [
  createData(
    "09:00:00",
    "Meeting with Team",
    "Discuss project progress and upcoming tasks"
  ),
  createData(
    "10:30",
    "Call with Client",
    "Discuss project requirements and timelines"
  ),
  createData("12:00", "Lunch Break", "Take a break and recharge"),
  createData(
    "13:00",
    "Design Review",
    "Review design mockups with design team"
  ),
  createData("15:00", "Code Review", "Review and merge pull requests"),
];

const ContestDataDisplay = () => {
  //   const Time = useSelector((state) => state.contest.timeDuration);
  //   const Title = useSelector((state) => state.contest.title);
  //   const Description = useSelector((state) => state.contest.description);

  //   console.log(Time, "Time");
  //   console.log(Title, "Title");
  //   console.log(Description, "Description");

  return (
    <>
      <Typography variant="h4" align="center" contained>
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
            {rows.map((row) => (
              <TableRow key={row.title}>
                <TableCell component="th" scope="row">
                  {row.time}
                </TableCell>
                <TableCell align="left">{row.title}</TableCell>
                <TableCell align="left">{row.description}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ContestDataDisplay;
