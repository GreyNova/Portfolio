import { useState } from "react";
import Project from "../components/Project";
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "motion/react";

export const projectCategories = [
  "All",
  "Full Stack",
  "Frontend",
  "Gen AI",
  "Data Analytics",
  "Backend",
];

const Projects = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { damping: 10, stiffness: 50 });
  const springY = useSpring(y, { damping: 10, stiffness: 50 });
  const handleMouseMove = (e) => {
    x.set(e.clientX + 20);
    y.set(e.clientY + 20);
  };
  const [preview, setPreview] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? myProjects
      : myProjects.filter((project) => project.category === activeCategory);

  return (
    <section
      onMouseMove={handleMouseMove}
      className="relative c-space section-spacing"
      id="projects"
    >
      <h2 className="text-heading">My Selected Projects</h2>

      {/* Category Filter */}
      <div className="flex flex-wrap items-center gap-3 mt-8 mb-2">
        {projectCategories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`relative px-4 py-2 text-sm font-normal rounded-full cursor-pointer transition-colors hover-animation ${
                isActive
                  ? "text-white"
                  : "text-neutral-400 hover:text-neutral-200"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="activeCategory"
                  className="absolute inset-0 rounded-full bg-gradient-to-r from-lavender/30 to-royal/30 border border-white/10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{category}</span>
            </button>
          );
        })}
      </div>

      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent mt-8 h-[1px] w-full" />
      {filteredProjects.map((project) => (
        <Project key={project.id} {...project} setPreview={setPreview} />
      ))}
      {preview && (
        <motion.img
          className="fixed top-0 left-0 z-50 object-cover h-56 rounded-lg shadow-lg pointer-events-none w-80"
          src={preview}
          style={{ x: springX, y: springY }}
        />
      )}
    </section>
  );
};

export default Projects;
