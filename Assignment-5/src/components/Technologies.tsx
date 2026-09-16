import { useEffect, useState } from "react";
import TechnologyCard from "./TechnologyCard";
import type { Technology } from "../App";

const Technologies = ({
  selectedTechnologies,
  handleAddTechnology
}: {
  selectedTechnologies: Technology[];
  handleAddTechnology: (technology: Technology) => void;
}) => {
  const [technologies, setTechnologies] = useState<Technology[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/technologies.json")
      .then((response) => response.json())
      .then((data: Technology[]) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <section
        id="technologies"
        className="py-20 text-center"
      >
        <div className="flex flex-col items-center gap-4">
          <div className="h-12 w-12 animate-spin rounded-full border-4 border-violet-200 border-t-violet-600"></div>

          <p className="text-slate-600">
            Loading technologies...
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="technologies"
      className="mx-auto max-w-7xl px-4 py-20"
    >
      <div className="mb-10 text-center">
        <p className="mb-2 font-medium text-violet-600">
          EXPLORE
        </p>

        <h2 className="text-3xl font-bold md:text-4xl">
          Explore the
          <span className="bg-gradient-to-r from-orange-500 via-pink-500 to-violet-600 bg-clip-text text-transparent">
            {" "}Technologies
          </span>
        </h2>

        <p className="mx-auto mt-4 max-w-2xl text-slate-600">
          Choose technologies and create your own development stack.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">
        {technologies.map((technology) => (
          <TechnologyCard
            key={technology.id}
            technology={technology}
            selectedTechnologies={selectedTechnologies}
            handleAddTechnology={handleAddTechnology}
          />
        ))}
      </div>
    </section>
  );
};

export default Technologies;