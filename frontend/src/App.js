import Footer from "./Components/Footer";
import Header from "./Components/Header";
import {Container} from 'react-bootstrap'

//arrow functions
const App = () => {
  return (
    <>
    <Header />
    <main>
      <Container>
    <h1> Welcome to My Shop!</h1>
    </Container>
    </main>
    <Footer/>
    </>
  );
}


export default App;
