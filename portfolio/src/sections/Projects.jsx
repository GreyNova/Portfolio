import { useState, useEffect } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion } from "motion/react";

export const projectCategories = [
  "GenAI",
  "Full Stack",
  "Front End",
  "Back End",
  "ML",
  "BlockChain",
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [showList, setShowList] = useState(false);

  // Stop background scrolling when modal is open
  useEffect(() => {
    if (showList) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [showList]);

  const filteredProjects = myProjects.filter((project) =>
    Array.isArray(project.category)
      ? project.category.includes(activeCategory)
      : project.category === activeCategory
  );

  return (
    <section className="relative c-space section-spacing" id="projects">
      <h2 className="text-heading">My Selected Projects</h2>

      {/* Grid of Category Cards */}
      <div className="grid grid-cols-1 gap-6 mt-10 sm:grid-cols-2 lg:grid-cols-3">
        {projectCategories.map((category) => (
          <div
            key={category}
            onClick={() => {
              setActiveCategory(category);
              setShowList(true);
            }}
            className="relative flex items-center justify-center p-10 overflow-hidden transition-all duration-300 border shadow-lg cursor-pointer rounded-2xl bg-white/5 border-white/10 backdrop-blur-md hover:-translate-y-2 hover:bg-white/10 min-h-[200px] group"
          >
            {/* Glassmorphic inner glow effect */}
            <div className="absolute inset-0 transition-opacity duration-300 opacity-0 bg-gradient-to-br from-white/10 to-transparent group-hover:opacity-100" />

            <h3 className="relative z-10 text-3xl font-bold tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-400">
              {category}
            </h3>
          </div>
        ))}
      </div>

      {/* Projects List Modal */}
      {showList && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center w-full h-full p-5 bg-black/90"
        >
          <motion.div
            className="relative w-full max-w-4xl p-8 overflow-y-auto border shadow-2xl max-h-[85vh] rounded-3xl bg-[#0a0a0a] border-white/10"
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
          >
            <div className="sticky top-0 z-50 flex items-center justify-between py-4 mb-6 border bg-[#111111] border-white/10 px-6 rounded-2xl">
              <h3 className="text-3xl font-bold text-white">
                {activeCategory} Projects
              </h3>
              <button
                onClick={() => {
                  setShowList(false);
                }}
                className="p-2 transition-colors rounded-lg bg-white/5 hover:bg-white/20"
              >
                <img src="assets/close.svg" className="w-6 h-6" alt="Close" />
              </button>
            </div>

            <div className="flex flex-col w-full">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <Project
                    key={project.id}
                    {...project}
                  />
                ))
              ) : (
                <div className="flex flex-col items-center justify-center py-20 opacity-50">
                  <p className="text-xl text-neutral-400">
                    No projects yet in this category.
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
};

export default Projects;
