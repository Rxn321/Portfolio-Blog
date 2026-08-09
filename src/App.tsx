import Enter from "./components/Enter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Gallery from "./components/Gallery";
import { useEffect, useState } from "react";
import Toggle from "./components/Toggle";
import { motion } from "framer-motion";

import lightBg from "./assets/lightBg.avif";
import darkBg from "./assets/darkBg.avif";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [darkLoaded, setDarkLoaded] = useState(false);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = darkBg;

    img.onload = () => {
      setDarkLoaded(true);
    };

    img.onerror = () => {
      setDarkLoaded(true);
    };
  }, []);

  return (
    <div className="h-screen relative overflow-hidden bg-neutral-800">
      <div className="absolute inset-0 z-0">
        <Gallery />
      </div>

      <motion.div
        className="absolute inset-0 will-change-transform"
        animate={
          entered
            ? {
                y: "-100vh",
                scale: 1.1,
                opacity: 0,
              }
            : {
                y: 0,
                scale: 1,
                opacity: 1,
              }
        }
        transition={{
          duration: 0.8,
          ease: [0.6, 0, 0.4, 1],
          opacity: {duration: 0.7},
        }}
        style={{
          transformOrigin: "center bottom",
        }}>
        {/* Light */}
        <motion.img
          src={lightBg}
          className="absolute inset-0 w-full h-full object-cover z-10"
          initial={false}
          animate={{
            opacity: darkMode ? 0 : 1,
            scale: darkMode ? 1.1 : 1,
          }}
          transition={{ duration: 0.7 }}/>
        {/* DARK BACKGROUND */}
        {darkLoaded && (
          <motion.img
            src={darkBg}
            className="absolute inset-0 w-full h-full object-cover z-10"
            initial={false}
            animate={{
              opacity: darkMode ? 1 : 0,
              scale: darkMode ? 1 : 1.05,
            }}
            transition={{ duration: 0.7 }}/>
        )}

        {/* Overlay */}
        <motion.div
          className="absolute inset-0 bg-black/40"
          initial={false}
          animate={{
            opacity: darkMode ? 1 : 0.1,
          }}
          transition={{ duration: 0.7 }}
        />

        <div className="relative z-20">
          <Header darkMode={darkMode} />
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20">
          <Enter
            darkMode={darkMode}
            onEnter={() => setEntered(true)}
          />
        </div>

      </motion.div>

      {/* Toggle&Home */}
      <div className="absolute top-4 right-10 z-20">
        <Toggle darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)}/>
        </div>
      <div className="absolute top-4 left-10 z-20">
        <Home onHome={() => setEntered(false)} />
      </div>
      {/* Footer */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20">
        <Footer />
      </div>

    </div>
  );
}

export default App;

