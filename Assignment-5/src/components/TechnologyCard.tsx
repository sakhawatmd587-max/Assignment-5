import { FaStar, FaCheck } from "react-icons/fa";
import type { Technology } from "../App";

interface TechnologyCardProps {
  technology: Technology;
  selectedTechnologies: Technology[];
  handleAddTechnology: (technology: Technology) => void;
}
const TechnologyCard = ({
  technology,
  selectedTechnologies,
  handleAddTechnology
}: TechnologyCardProps) => {
  const isAdded = selectedTechnologies.some(
    (item) => item.id === technology.id
  );

  return (
    <div className="flex flex-col rounded-xl border border-slate-200 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg">

      {/* Top */}
      <div className="mb-4 flex items-start justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-12 w-12 object-contain"
        />

        <span className="rounded-full bg-violet-100 px-3 py-1 text-xs font-medium text-violet-700">
          {technology.badge}
        </span>
      </div>


      {/* Name */}
      <h3 className="mb-2 text-xl font-bold">
        {technology.name}
      </h3>

      {/* Description */}
      <p className="mb-4 min-h-[72px] text-sm leading-6 text-slate-600">
        {technology.description}
      </p>

      {/* Category */}
      <span className="mb-4 w-fit rounded-full bg-slate-100 px-3 py-1 text-xs text-slate-600">
        {technology.category}
      </span>

      {/* Difficulty + Rating */}
      <div className="mb-4 flex items-center justify-between text-sm">
        <span className="font-medium text-slate-600">
          {technology.difficulty}
        </span>

        <span className="flex items-center gap-1 text-yellow-500">
          <FaStar />
          {technology.rating}
        </span>
      </div>

      {/* Button */}
      <button
        onClick={() => handleAddTechnology(technology)}
        disabled={isAdded}
        className={`mt-auto w-full rounded-lg py-3 font-medium transition ${isAdded
            ? "cursor-not-allowed bg-green-100 text-green-700"
            : "bg-slate-900 text-white hover:bg-violet-700"
          }`}
      >
        {isAdded ? (
          <span className="flex items-center justify-center gap-2">
            <FaCheck />
            Added to Stack
          </span>
        ) : (
          "Add to Stack"
        )}
      </button>
    </div>
  );
};

export default TechnologyCard;