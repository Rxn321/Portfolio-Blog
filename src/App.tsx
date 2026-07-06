import Enter from "./components/Enter";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import Toggle from "./components/Toggle";
import { motion } from "framer-motion";

import lightBg from "./assets/lightBg.avif";
import darkBg from "./assets/darkBg.avif";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [darkLoaded, setDarkLoaded] = useState(false);

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
    <div className="h-screen relative overflow-hidden">

      {/* LIGHT BACKGROUND */}
      <motion.img
        src={lightBg}
        className="absolute inset-0 w-full h-full object-cover"
        initial={false}
        animate={{
          opacity: darkMode ? 0 : 1,
          scale: darkMode ? 1.1 : 1,
        }}
        transition={{ duration: 0.7 }}
      />

      {/* DARK BACKGROUND */}
      {darkLoaded && (
        <motion.img
          src={darkBg}
          className="absolute inset-0 w-full h-full object-cover"
          initial={false}
          animate={{
            opacity: darkMode ? 1 : 0,
            scale: darkMode ? 1 : 1.05,
            filter: darkMode ? "blur(0px)" : "blur(5px)",
          }}
          transition={{ duration: 0.7 }}
        />
      )}

      {/* OVERLAY */}
      <motion.div
        className="absolute inset-0 bg-black/40"
        initial={false}
        animate={{
          opacity: darkMode ? 1 : 0,
        }}
        transition={{ duration: 0.7 }}
      />

      {/* HEADER */}
      <div className="relative z-10">
        <Header darkMode={darkMode} />
      </div>

      {/* TOGGLE */}
      <div className="absolute top-4 right-10 z-10">
        <Toggle
          darkMode={darkMode}
          toggleTheme={() => setDarkMode(!darkMode)}
        />
      </div>

      {/* ENTER */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10">
        <Enter darkMode={darkMode} />
      </div>

      {/* FOOTER */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-10">
        <Footer />
      </div>
    </div>
  );
}

export default App;