import Apropos from "./components/Apropos";
import Competences from "./components/Competences";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Apropos />
      <Competences />
      <Footer />
    </>
  );
};

export default App;
