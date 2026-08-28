import React, { useEffect } from "react";
import {
  X, Github, ExternalLink, AlertCircle, CheckCircle2,
  Layers, Code2, Cpu
} from "lucide-react";

const ProjectModal = ({ project, isOpen, onClose, translation }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen || !project) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="bg-white dark:bg-[#0a0a0a] border border-neutral-200 dark:border-neutral-800 w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative h-48 sm:h-64 overflow-hidden flex-shrink-0">
          {project.img ? (
            <img
              src={project.img}
              alt={project.title}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full bg-neutral-100 dark:bg-neutral-900 flex items-center justify-center">
              <Code2 size={48} className="text-neutral-400" />
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-black/20 hover:bg-black/40 text-white rounded-full backdrop-blur-md transition-colors"
          >
            <X size={20} />
          </button>
          <div className="absolute bottom-4 left-6 right-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-1">{project.title}</h2>
            <div className="flex gap-3 text-white/80 text-sm">
              <span className="flex items-center gap-1"><Layers size={14} /> {project.framework || "Project"}</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">

          {/* Description */}
          <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
            {project.description}
          </p>

          {/* Problem & Solution */}
          {(project.problem || project.solution) && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {project.problem && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-red-500 font-semibold">
                    <AlertCircle size={18} />
                    <h3>The Problem</h3>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                    {project.problem}
                  </p>
                </div>
              )}
              {project.solution && (
                <div className="space-y-3">
                  <div className="flex items-center gap-2 text-green-500 font-semibold">
                    <CheckCircle2 size={18} />
                    <h3>The Solution</h3>
                  </div>
                  <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                    {project.solution}
                  </p>
                </div>
              )}
            </div>
          )}

          {/* Tech Stack */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 font-semibold text-neutral-800 dark:text-neutral-200">
              <Cpu size={18} />
              <h3>Technology Used</h3>
            </div>
            <div className="flex flex-wrap gap-4 text-2xl p-4 bg-neutral-50 dark:bg-white/5 rounded-xl">
              {project.icon}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-6 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap gap-3 flex-shrink-0">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-black py-3 rounded-xl font-medium hover:opacity-90 transition-opacity"
            >
              <Github size={18} /> View Source Code
            </a>
          )}
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 border border-neutral-300 dark:border-neutral-700 py-3 rounded-xl font-medium hover:bg-neutral-50 dark:hover:bg-white/5 transition-colors"
            >
              <ExternalLink size={18} /> Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;