import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import { Home } from "./pages/Home";
import "@coreui/coreui/dist/css/coreui.min.css";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { UserProvider } from "./context/UserContext";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <div className="left-side"></div>
        <div className="center-main">
          <BrowserRouter>
            <Navbar />
            <Routes>
              <Route index element={<Home />} />
            </Routes>
            <Footer />
          </BrowserRouter>
        </div>
        <div className="right-side"></div>
      </div>
    </UserProvider>
  );
}

export default App;
