import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Technologies from "./components/Technologies";
import YourStack from "./components/YourStack";
import Footer from "./components/Footer";


export interface Technology {
  id: number;
  name: string;
  category: string;
  description: string;
  icon: string;
  rating: number;
  difficulty: "Intermediate";
  badge: "Popular";
}

function App() {
  const [selectedTechnologies, setSelectedTechnologies] = useState<Technology[]>([]);

  // Add Technology
  const handleAddTechnology = (technology: Technology) => {
    const alreadyExists = selectedTechnologies.find(
      (item) => item.id === technology.id
    );

    if (alreadyExists) {
      toast.warning(`${technology.name} is already in your stack!`);
      return;
    }

 

    setSelectedTechnologies([
      ...selectedTechnologies,
      technology
    ]);

    toast.success(`${technology.name} added to your stack!`);
  };

  // Remove Single Technology
  const handleRemoveTechnology = (id: number) => {
    const removedTechnology = selectedTechnologies.find(
      (item) => item.id === id
    );

    const remainingTechnologies =
      selectedTechnologies.filter(
        (item) => item.id !== id
      );

    setSelectedTechnologies(remainingTechnologies);

    toast.info(
      `${removedTechnology?.name} removed from your stack!`
    );
  };

  // Remove All
  const handleRemoveAll = () => {
    if (selectedTechnologies.length === 0) {
      toast.warning("Your stack is already empty!");
      return;
    }

    setSelectedTechnologies([]);

    toast.error("All technologies removed!");
  };

  return (
    <>
      <Navbar />

      <Hero />

      <main>
        <section className="mx-auto max-w-7xl px-4 py-20">
          <div className="grid gap-8 lg:grid-cols-[1fr_330px]">

            {/* Technologies */}
            <Technologies
              selectedTechnologies={selectedTechnologies}
              handleAddTechnology={handleAddTechnology}
            />

            {/* Your Stack */}
            <YourStack
              selectedTechnologies={selectedTechnologies}
              handleRemoveTechnology={handleRemoveTechnology}
              handleRemoveAll={handleRemoveAll}
            />

          </div>
        </section>
      </main>

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={2500}
        theme="colored"
      />
    </>
  );
}

export default App;