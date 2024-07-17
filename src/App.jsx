import About from "./components/About";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Products from "./components/Products";
import Flavours from "./components/Flavours";

function App() {
  return (
    <main className="mx-4">
      <NavBar />
      <Hero />
      <Flavours />
      <Products />
      <About />
      <Footer />
    </main>
  );
}

export default App;
