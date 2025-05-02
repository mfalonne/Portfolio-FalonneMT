import Apropos from "./components/Apropos";
import Competences from "./components/Competences";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";

const App = () => {
  return (
    <>
      <Navbar />
      <Header />
      <Apropos />
      <Competences />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
