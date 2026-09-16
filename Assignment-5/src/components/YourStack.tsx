import { FaTimes, FaTrash } from "react-icons/fa";
import type { Technology } from "../App";

interface YourStackProps {
  selectedTechnologies: Technology[];
  handleRemoveTechnology: (id: number) => void;
  handleRemoveAll: () => void;
}

const YourStack = ({
  selectedTechnologies,
  handleRemoveTechnology,
  handleRemoveAll
}: YourStackProps) => {
  return (
    <aside className="sticky top-24 h-fit rounded-xl border border-slate-200 bg-white p-6 shadow-sm">

      <div className="mb-6 flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold">
            Your Stack
          </h2>

          <p className="text-sm text-slate-500">
            {selectedTechnologies.length} Technology Selected
          </p>
        </div>

        {selectedTechnologies.length > 0 && (
          <button
            onClick={handleRemoveAll}
            className="text-sm text-red-500 hover:text-red-700"
          >
            Remove All
          </button>
        )}
      </div>

      {/* Empty State */}
      {selectedTechnologies.length === 0 ? (
        <div className="rounded-lg bg-slate-50 p-6 text-center">
          <p className="font-medium text-slate-500">
            No technologies selected yet
          </p>

          <p className="mt-2 text-sm text-slate-400">
            Your stack is empty
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {selectedTechnologies.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center justify-between rounded-lg border p-3"
            >
              <div className="flex items-center gap-3">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-10 w-10 object-contain"
                />

                <div>
                  <h3 className="font-semibold">
                    {technology.name}
                  </h3>

                  <p className="text-xs text-slate-500">
                    {technology.category}
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleRemoveTechnology(technology.id)}
                className="text-slate-400 hover:text-red-500"
              >
                <FaTimes />
              </button>
            </div>
          ))}

          <button
            onClick={handleRemoveAll}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-lg border border-red-200 py-3 text-red-500 hover:bg-red-50"
          >
            <FaTrash />
            Remove All
          </button>
        </div>
      )}
    </aside>
  );
};

export default YourStack;