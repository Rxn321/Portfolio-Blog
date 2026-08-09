import { IoHome } from "react-icons/io5";

function Home({ onHome }: { onHome: () => void }) {
  return (
    <button
      className="w-12 h-12 flex items-center justify-center rounded-full bg-transparent text-white hover:scale-110 transition"
      onClick={onHome}
    >
      <IoHome size={20} />
    </button>
  );
}

export default Home;
