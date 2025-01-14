import Image from "next/image";
import NavBar from "./Components/NavBar";
import PokemonSection from "./Components/PokemonSection";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-[#121212]">
      <NavBar />
      <div className="container mt-24 mx-auto px-12 py-12">
        <PokemonSection />
      </div>
    </main>
  );
}
