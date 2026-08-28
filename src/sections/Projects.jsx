import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import ThreeDCard from "../components/common/ThreeDCard";
import ProjectModal from "../components/common/ProjectModal";
import projectsData from "../data/projects";
import { useLanguage } from "../context/LanguageContext";

export default function Projects({ limit, showFilter = true }) {
  const { translation } = useLanguage();

  const [selectedFramework, setSelectedFramework] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const frameworks = [
    "All",
    ...new Set(projectsData.map((project) => project.framework)),
  ];

  const allProjects = limit ? projectsData.slice(0, limit) : projectsData;

  const visibleProjects = allProjects.filter(
    (project) =>
      selectedFramework === "All" || project.framework === selectedFramework
  );

  const openModal = (project) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);

  return (
    <section id="projects" className="flex flex-col mx-auto font-inter">
      {/* Heading */}
      <div className="flex justify-between items-end max-w-7xl w-full mx-auto px-6 py-6 mt-12">
        <div>
          <h1 className="dark:text-white text-4xl font-bold">
            {translation("projects.title")}
          </h1>

          <p className="dark:text-gray-300 text-lg mt-2">
            {translation("projects.subtitle")}
          </p>
        </div>

        {limit && (
          <Link
            to="/projects"
            className="
              hidden sm:inline-flex
              items-center gap-2
              text-sm font-medium
              text-gray-600 dark:text-gray-300
              hover:text-black dark:hover:text-white
              transition-colors
            "
          >
            View All Projects
            <span>→</span>
          </Link>
        )}
      </div>

      {/* Filter buttons */}
      {showFilter && (
        <div className="flex flex-wrap justify-center gap-2 mt-8 px-6">
          {frameworks.map((fw) => (
            <button
              key={fw}
              onClick={() => setSelectedFramework(fw)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium
                transition-all duration-300
                ${selectedFramework === fw
                  ? "bg-black text-white dark:bg-white dark:text-black"
                  : "bg-gray-100 text-gray-600 dark:bg-[#1f1f1f] dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#2a2a2a]"
                }
              `}
            >
              {fw}
            </button>
          ))}
        </div>
      )}

      {/* Projects Grid */}
      <div
        className="
          max-w-7xl mx-auto
          w-full px-6
          grid grid-cols-1
          sm:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-6 mt-5
        "
      >
        <AnimatePresence mode="popLayout">
          {visibleProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{
                duration: 0.3,
                delay: index * 0.05,
                ease: "easeOut",
              }}
            >
              <ThreeDCard
                title={translation(project.title)}
                description={translation(project.description)}
                img={project.image}
                githubUrl={project.githubUrl}
                onClick={() => openModal(project)}
                icon={
                  <>
                    {project.technologies.map(({ Icon, color }, techIndex) => (
                      <Icon key={techIndex} className={color} />
                    ))}
                    {project.extraImages?.map((image, imageIndex) => (
                      <img
                        key={`extra-${imageIndex}`}
                        src={image.src}
                        loading="lazy"
                        className="w-6 h-6 object-contain"
                      />
                    ))}
                  </>
                }
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Mobile View All */}
      {limit && (
        <Link
          to="/projects"
          className="
            sm:hidden
            self-center
            mt-8
            text-sm font-medium
            text-gray-600 dark:text-gray-300
          "
        >
          View All Projects →
        </Link>
      )}

      {/* Project Modal */}
      <ProjectModal
        isOpen={!!selectedProject}
        project={
          selectedProject
            ? {
              title: translation(selectedProject.title),
              description: translation(selectedProject.description),
              img: selectedProject.image,
              githubUrl: selectedProject.githubUrl,
              problem: selectedProject.problem
                ? translation(selectedProject.problem)
                : undefined,
              solution: selectedProject.solution
                ? translation(selectedProject.solution)
                : undefined,
              demoUrl: selectedProject.demoUrl,
              icon: (
                <div className="flex flex-wrap gap-4 text-2xl">
                  {selectedProject.technologies.map(({ Icon, color }, i) => (
                    <Icon key={i} className={color} />
                  ))}
                  {selectedProject.extraImages?.map((image, i) => (
                    <img
                      key={`modal-extra-${i}`}
                      src={image.src}
                      className="w-7 h-7 object-contain"
                    />
                  ))}
                </div>
              ),
            }
            : null
        }
        onClose={closeModal}
        translation={translation}
      />
    </section>
  );
}