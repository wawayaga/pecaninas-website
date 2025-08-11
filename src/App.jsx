import "./App.css";
import Header from "./components/Header";
import Router from "./components/Router";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <main className="flex-grow">
        <Header />
        <div>
          <Router />
        </div>
      </main>
      <Footer />
    </>
  );
}

export default App;
