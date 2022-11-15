import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Page2 from "./pages/Page2";
import Page3 from "./pages/Page3";
import Page4 from "./pages/Page4";
import Page5 from "./pages/Page5";
import Page6 from "./pages/Page6";

function App() {
  return (
    <div>
      <Header />
      <main style={styles.container}>
        <Nav />
        <section>
          <Routes>
            <Route exact path="/" element={<Main />} />
            <Route path="/Main" element={<Main />} />
            <Route path="/Page2" element={<Page2 />} />
            <Route path="/Page3" element={<Page3 />} />
            <Route path="/Page4" element={<Page4 />} />
            <Route path="/Page5" element={<Page5 />} />
            <Route path="/Page6" element={<Page6 />} />
          </Routes>
        </section>
        <Footer/>
      </main>
    </div>
  );
}

export default App;

const styles = {
  container: {
    display: "flex",
    flexDirection: "row",
    height: "auto",
  },
};
