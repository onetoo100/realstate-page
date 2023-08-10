import "./scss/app.scss";
import Header from "./components/Header";
import Content from "./components/Content";
import Highlights from "./components/Highlights";
import Testimonials from "./components/Testimonials";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Header />
      <Content />
      <Highlights />
      <Testimonials />
      <Footer />
    </>
  );
}

export default App;
