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
      <Typography variant="h4" sx={{ mb: 3 }} align="center">
        Tasks
      </Typography>
      <TableContainer
        sx={{ width: 500, m: "auto", border: 1 }}
        component={Paper}
      >
        <Table>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{ fontSize: 25, fontWeight: 500, textAlign: "center" }}
              >
                Time
              </TableCell>
              <TableCell
                sx={{ fontSize: 25, fontWeight: 500, textAlign: "center" }}
              >
                Title
              </TableCell>
              <TableCell
                sx={{ fontSize: 25, fontWeight: 500, textAlign: "center" }}
              >
                Description
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {contestData.map((data) => (
              <TableRow sx={{ fontWeight: "bold" }}>
                <TableCell
                  sx={{ fontSize: 20, fontWeight: 500, textAlign: "center" }}
                >
                  {data.duration}
                </TableCell>
                <TableCell
                  sx={{ fontSize: 20, fontWeight: 500, textAlign: "center" }}
                >
                  {data.title}
                </TableCell>
                <TableCell
                  sx={{ fontSize: 20, fontWeight: 500, textAlign: "center" }}
                >
                  {data.description}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};

export default ContestDataDisplay;
