import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import { Home } from "./pages/Home";
import "@coreui/coreui/dist/css/coreui.min.css";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { UserProvider } from "./context/UserContext";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { PageAnimation } from "./components/animation/PageAnimation";
import { AnimatePresence } from "framer-motion";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <div className="left-side"></div>
        <div className="center-main">
          <BrowserRouter>
            <Navbar />
            <AnimatePresence mode="wait">
              <Routes>
                <Route
                  index
                  element={
                    <PageAnimation>
                      <Home />
                    </PageAnimation>
                  }
                />
                <Route
                  path="/login"
                  element={
                    <PageAnimation>
                      <Login />
                    </PageAnimation>
                  }
                />
                <Route
                  path="/sign-up"
                  element={
                    <PageAnimation>
                      <Signup />
                    </PageAnimation>
                  }
                />
              </Routes>
            </AnimatePresence>

            <Footer />
          </BrowserRouter>
        </div>
        <div className="right-side"></div>
      </div>
    </UserProvider>

    // <UserProvider>
    //   <motion.div
    //     initial={{ opacity: 0 }} // Initial animation properties
    //     animate={{ opacity: 1 }} // Animation properties to apply on mount
    //     exit={{ opacity: 0 }} // Animation properties to apply on unmount
    //     transition={{ duration: 5 }} // Animation duration
    //     className="App"
    //   >
    //     <div className="left-side"></div>
    //     <div className="center-main">
    //       <BrowserRouter>
    //         <Navbar />
    //         <Routes>
    //           <Route index element={<Home />} />
    //           <Route path="/login" element={<Login />} />
    //           <Route path="/sign-up" element={<Signup />} />
    //         </Routes>
    //         <Footer />
    //       </BrowserRouter>
    //     </div>
    //     <div className="right-side"></div>
    //   </motion.div>
    // </UserProvider>
  );
}

export default App;
