import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import { Home } from "./pages/Home";
import '@coreui/coreui/dist/css/coreui.min.css'
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
