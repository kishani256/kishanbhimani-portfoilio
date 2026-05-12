import Sidebar from "../components/Sidebar";
import Hero from "../components/Hero";

function Home() {
  return (
    <div className="bg-[#020617] min-h-screen">

      <Sidebar />

      <main
        className="
        ml-[revert-layer]
        min-h-screen
        overflow-hidden"
      >
        <Hero />
      </main>

    </div>
  );
}

export default Home;