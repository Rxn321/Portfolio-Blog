import Enter from "./components/Enter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
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
    <div className="h-screen relative overflow-hidden bg-gray-500">
      <motion.div
        className="absolute inset-0 will-change-transform"
        animate={
          entered
            ? {
                y: 0,
                scale: 1.5,
                opacity: 0,
              }
            : {
                y: 0,
                scale: 1,
                opacity: 1,
              }
        }
        transition={{
          duration: 1.5,
          ease: [0.2, 1, 0.4, 1],
        }}
        style={{
          transformOrigin: "center center",
          perspective: 1200,
        }}>
        {/* Light */}
        <motion.img
          src={lightBg}
          className="absolute inset-0 w-full h-full object-cover"
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
            className="absolute inset-0 w-full h-full object-cover"
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

        <div className="relative z-10">
          <Header darkMode={darkMode} />
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
          <Enter
            darkMode={darkMode}
            onEnter={() => setEntered(true)}
          />
        </div>

      </motion.div>

      {/* Toggle&Home */}
      <div className="absolute top-4 right-10 z-10">
        <Toggle darkMode={darkMode} toggleTheme={() => setDarkMode(!darkMode)}/>
        </div>
      <div className="absolute top-4 left-10 z-10">
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

