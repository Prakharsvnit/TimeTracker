import { Container } from "@mui/material";
import Header from "./components/header";
import Stopwatch from "./components/stopwatch";
const App = () => {
  return (
    <>
      <Container maxWidth="xl">
        <Header />

        <Stopwatch />
      </Container>
    </>
  );
};

export default App;
