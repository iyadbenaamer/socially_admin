import { useEffect } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";

import Login from "pages/Login";
import Home from "pages/home";
import Header from "layout/header";
import NotFound from "pages/NotFound";
import PopupMessage from "components/popup-message";
import { HoverCardProvider } from "components/user-hover-card/HoverCardContext";
import { DialogProvider } from "components/dialog/DialogContext";
import { MediaViewerProvider } from "components/media-viewer/MediaViewerContext";

const App = () => {
  const admin = useSelector((state) => state.admin);
  const isLoggedin = () => Boolean(admin);
  const theme = useSelector((state) => state.settings.theme);

  useEffect(() => {
    /*
      the app's loading effect dependes on this variable, when the app
      loads for the first time then the loading effect will be triggered 
      after that it won't be triggered because of this variable.
    */
    if (isLoggedin) {
      sessionStorage.setItem("isLoaded", true);
    }
  }, [isLoggedin]);

  return (
    <BrowserRouter>
      <div className={`App ${theme} bg-100`}>
        <DialogProvider>
          <MediaViewerProvider>
            <HoverCardProvider>
              <Header />
              <motion.main
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "linear" }}
              >
                <Routes>
                  <Route
                    path="/login"
                    element={
                      !isLoggedin() ? (
                        <Login />
                      ) : (
                        <Navigate to="/" replace={true} />
                      )
                    }
                  />
                  <Route
                    path="/"
                    element={
                      isLoggedin() ? (
                        <Home />
                      ) : (
                        <Navigate to="/login" replace={true} />
                      )
                    }
                  />
                  <Route path="*" element={<NotFound />} />
                </Routes>
                <PopupMessage />
              </motion.main>
            </HoverCardProvider>
          </MediaViewerProvider>
        </DialogProvider>
      </div>
    </BrowserRouter>
  );
};
export default App;
