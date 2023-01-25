import { Container } from "@mui/material";
import ContestDataDisplay from "./components/contestDataDisplay";
import Header from "./components/header";
import Stopwatch from "./components/stopwatch";
const App = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Header />
        <Stopwatch />
        <ContestDataDisplay />
      </Container>
    </>
  );
};

export default App;
