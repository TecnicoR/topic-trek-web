import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import React, { useContext, useEffect, useState } from "react";
import { Home } from "./pages/Home";
import "@coreui/coreui/dist/css/coreui.min.css";
import { Navbar } from "./components/navbar/Navbar";
import { Footer } from "./components/footer/Footer";
import { Loader } from "./components/loader/Loader";
import { UserContext } from "./context/UserContext";
import { Login } from "./pages/Login";
import { Signup } from "./pages/Signup";
import { PageAnimation } from "./components/animation/PageAnimation";
import { AnimatePresence } from "framer-motion";
import { ProtectedRoute } from "./components/security/ProtectedRoute";
import { NotFound } from "./pages/NotFound";
import { AddBlog } from "./pages/AddBlog";
import "react-quill/dist/quill.snow.css";
import { Blog } from "./pages/Blog";
import { Favorites } from "./pages/Favorites";
import { MyProfile } from "./pages/MyProfile";
import { apiHelper } from "./services/apiHelper";
import { EditBlog } from "./pages/EditBlog";
import { PublicRoute } from "./components/security/PublicRoute";
import { getMe } from "./services/userService";
import { EmailVerificationMessage } from "./pages/EmailVerificationMessage";
import { ForgotPassword } from "./pages/ForgotPassword";

function App() {
  const [loader, setLoader] = useState(false);
  const { setUser } = useContext(UserContext);

  useEffect(() => {
    if (localStorage.getItem("accessToken") != null) {
      getMe().then((res) => {
        setUser(res);
      });
    }
    apiHelper.interceptors.request.use(
      (config) => {
        setLoader(true);
        return Promise.resolve(config);
      },
      (err) => {
        setLoader(false);
        return Promise.reject(err);
      }
    );

    apiHelper.interceptors.response.use(
      (response) => {
        setLoader(false);
        return Promise.resolve(response);
      },
      (err) => {
        setLoader(false);
        return Promise.reject(err);
      }
    );
  }, [setUser]);

  document.title = "Topic Trek - passport to infinite knowledge";
  return (
    <div className="App">
      <div className="left-side"></div>
      <div className="center-main">
        <BrowserRouter>
          <Navbar />
          {loader && <Loader />}
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
                  <PublicRoute>
                    <PageAnimation>
                      <Login />
                    </PageAnimation>
                  </PublicRoute>
                }
              />
              <Route
                path="/forgot-password"
                element={
                  <PublicRoute>
                    <PageAnimation>
                      <ForgotPassword />
                    </PageAnimation>
                  </PublicRoute>
                }
              />
              <Route
                path="/sign-up"
                element={
                  <PublicRoute>
                    <PageAnimation>
                      <Signup />
                    </PageAnimation>
                  </PublicRoute>
                }
              />
              <Route
                path="/add-blog"
                element={
                  <ProtectedRoute>
                    <PageAnimation>
                      <AddBlog />
                    </PageAnimation>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/blog/:id"
                element={
                  // <ProtectedRoute>
                  <PageAnimation>
                    <Blog />
                  </PageAnimation>
                  // </ProtectedRoute>
                }
              />
              <Route
                path="/blog-edit/:id"
                element={
                  <ProtectedRoute>
                    <PageAnimation>
                      <EditBlog />
                    </PageAnimation>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/email-verification-message"
                element={
                  <PageAnimation>
                    <EmailVerificationMessage />
                  </PageAnimation>
                }
              />
              <Route
                path="/favorites"
                element={
                  <ProtectedRoute>
                    <PageAnimation>
                      <Favorites />
                    </PageAnimation>
                  </ProtectedRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <PageAnimation>
                      <MyProfile />
                    </PageAnimation>
                  </ProtectedRoute>
                }
              />
              <Route
                path="*"
                element={
                  <PageAnimation>
                    <NotFound />
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
