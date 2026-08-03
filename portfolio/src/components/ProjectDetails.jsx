import { motion } from "motion/react";
import { createPortal } from "react-dom";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModal,
}) => {
  return createPortal(
    <div className="fixed inset-0 z-[60] flex items-center justify-center w-full h-full overflow-hidden backdrop-blur-sm bg-black/60">
      <motion.div
        className="relative max-w-2xl border shadow-2xl rounded-2xl bg-white/5 backdrop-blur-3xl border-white/10"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModal}
          className="absolute p-2 transition-colors rounded-lg top-5 right-5 bg-black/40 hover:bg-black/60 backdrop-blur-md"
        >
          <img src="assets/close.svg" className="w-6 h-6" />
        </button>
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full rounded-t-2xl max-h-[40vh] object-cover"
          />
        ) : (
          <div className="flex items-center justify-center w-full rounded-t-2xl max-h-[40vh] min-h-[200px] bg-gradient-to-br from-white/10 to-white/0">
            <span className="text-2xl font-semibold tracking-wide text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-500">
              {title}
            </span>
          </div>
        )}
        <div className="p-5 overflow-y-auto max-h-[40vh]">
          <div className="flex items-start justify-between gap-4 mb-4">
            <h5 className="text-2xl font-bold text-white">{title}</h5>
            <a
              className="inline-flex items-center gap-2 font-medium cursor-pointer bg-white/10 hover:bg-white/20 transition-colors px-4 py-2 rounded-xl text-white whitespace-nowrap border border-white/10"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project <img src="assets/arrow-up.svg" className="size-4" />
            </a>
          </div>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>
          {subDescription.map((subDesc, index) => (
            <p key={index} className="mb-3 font-normal text-neutral-400">{subDesc}</p>
          ))}
          <div className="flex flex-wrap gap-3 mt-4">
              {tags.map((tag) =>
                tag.path ? (
                  <img
                    key={tag.id}
                    src={tag.path}
                    alt={tag.name}
                    className="rounded-lg size-10 hover-animation"
                  />
                ) : (
                  <span
                    key={tag.id}
                    className="flex items-center justify-center px-3 rounded-lg h-10 text-sm text-neutral-300 bg-white/5 border border-white/10 hover-animation whitespace-nowrap"
                  >
                    {tag.name}
                  </span>
                )
              )}
          </div>
        </div>
      </motion.div>
    </div>,
    document.body
  );
};

export default ProjectDetails;
