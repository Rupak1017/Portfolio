// src/App.jsx
import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Splash from "./pages/Splash";
import Portfolio from "./pages/Portfolio";

const App = () => {
  const [ready, setReady] = useState(false);
  const [skipSplash, setSkipSplash] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("visitedPortfolio")) {
      setSkipSplash(true);
    }
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            skipSplash ? (
              <Navigate to="/portfolio" replace />
            ) : (
              <Splash onReady={() => setReady(true)} />
            )
          }
        />
        <Route path="/portfolio" element={<Portfolio />} />
        {/* Optional: fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* Navigate once Splash finishes */}
      {ready && <Navigate to="/portfolio" replace />}
    </BrowserRouter>
  );
};

export default App;
