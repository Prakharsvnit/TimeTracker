import { Container } from "@mui/material";
import ContestDataTable from "./components/contestDataTable";
import Header from "./components/header";
import Stopwatch from "./components/stopwatch";
const App = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Header />
        <Stopwatch />
        <ContestDataTable />
      </Container>
    </>
  );
};

export default App;
