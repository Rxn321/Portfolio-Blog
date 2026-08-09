import { getTheme } from "../styles/theme";
import useIsMobile from "../styles/mobile"

function Enter({darkMode, onEnter,}: {darkMode: boolean;onEnter: () => void;}) {

  const theme = getTheme(darkMode);
  const isMobile = useIsMobile();
  
  return (
    <section className="w-full min-h-screen flex items-center justify-center py-4">
      <div className="flex flex-col items-center gap-6">
        <h1 className={`font-thin tracking-widest text-center ${theme.text} ${isMobile ? "text-2xl" : "text-4xl"}`}>
          Things I've been larping
        </h1>

        <button className="px-8 py-2 rounded-full border-2 border-white bg-transparent text-white flex items-center gap-2 
        text-lg font-medium hover:bg-gray-200/20 transition" onClick={onEnter}>
          Enter
        </button>
      </div>
    </section>

  );
}

export default Enter;