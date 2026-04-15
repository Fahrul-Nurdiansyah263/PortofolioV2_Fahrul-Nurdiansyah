import React, { useState, useEffect } from "react";
import { 
  X, Github, ExternalLink, AlertCircle, CheckCircle2, 
  Layers, Code2, Cpu 
} from "lucide-react";

/**
 * 1. COMPONENT: ProjectModal
 * Menampilkan detail spesifik: Masalah, Solusi, dan Tech Stack.
 */
const ProjectModal = ({ project, isOpen, onClose, translation }) => {
  if (!isOpen || !project) return null;

  // Mencegah scroll pada body saat modal terbuka
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white dark:bg-[#0a0a0a] border border-neutral-200 dark:border-neutral-800 w-full max-w-4xl max-h-[90vh] rounded-2xl shadow-2xl overflow-hidden flex flex-col animate-in zoom-in-95 duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="relative h-48 sm:h-64 overflow-hidden">
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
               <span className="flex items-center gap-1"><Layers size={14} /> Fullstack</span>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-8">
          
          {/* Section: Problem & Solution */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-red-500 font-semibold">
                <AlertCircle size={18} />
                <h3>The Problem</h3>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                {/* Asumsi translation() bisa mengambil key .problem */}
                {project.problem || "Deskripsi masalah yang dihadapi pengguna sebelum aplikasi ini diciptakan."}
              </p>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-green-500 font-semibold">
                <CheckCircle2 size={18} />
                <h3>The Solution</h3>
              </div>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                {project.solution || "Bagaimana aplikasi ini memberikan fitur dan alur kerja yang efisien untuk menyelesaikan masalah tersebut."}
              </p>
            </div>
          </div>

          {/* Section: Tech Stack Icons */}
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
        <div className="p-6 border-t border-neutral-200 dark:border-neutral-800 flex flex-wrap gap-3">
          <a 
            href={project.githubUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 bg-neutral-900 dark:bg-white text-white dark:text-black py-3 rounded-xl font-medium hover:opacity-90 transition-opacity"
          >
            <Github size={18} /> View Source Code
          </a>
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

/**
 * 2. COMPONENT: UI/3D-Card (Simulasi dari library Anda)
 */
const CardContainer = ({ children, className }) => (
  <div className={`perspective-1000 ${className}`}>{children}</div>
);
const CardBody = ({ children, className }) => (
  <div className={`transition-all duration-200 ease-out transform-gpu hover:shadow-xl ${className}`}>
    {children}
  </div>
);
const CardItem = ({ children, className, as: Component = "div" }) => (
  <Component className={className}>{children}</Component>
);

/**
 * 3. COMPONENT: Common/ThreeDCard
 * Diperbarui agar bisa diklik untuk membuka modal.
 */
function ThreeDCard({ onClick, title, description, img, icon }) {
  return (
    <div className="cursor-pointer group" onClick={onClick}>
      <CardContainer className="inter-var">
        <CardBody className="bg-gray-50 dark:bg-black border rounded-xl p-4 dark:border-white/[0.2] border-black/[0.1] w-full h-auto transition-transform group-hover:-translate-y-1">
          <CardItem className="text-lg font-bold text-black dark:text-white">
            {title}
          </CardItem>

          <CardItem className="w-full mt-3 overflow-hidden rounded-lg">
            {img ? (
              <img
                src={img}
                alt={title}
                className="w-full lg:h-48 md:h-40 h-30 object-cover rounded-lg group-hover:scale-105 transition-transform duration-500"
                onError={(e) => (e.target.style.display = "none")}
              />
            ) : (
              <div className="w-full lg:h-48 md:h-40 h-30 bg-neutral-200 dark:bg-neutral-800 flex items-center justify-center rounded-lg">
                <Code2 className="text-neutral-400" />
              </div>
            )}
          </CardItem>

          <CardItem as="p" className="text-sm text-neutral-600 dark:text-neutral-400 mt-3 line-clamp-2">
            {description}
          </CardItem>

          <div className="flex justify-between items-center mt-6">
            <CardItem className="px-3 py-1 rounded-xl text-xs dark:text-white">
              <div className="flex gap-2 text-xl opacity-70 group-hover:opacity-100 transition-opacity">
                {icon}
              </div>
            </CardItem>
            <span className="text-xs font-medium text-blue-500">Learn More →</span>
          </div>
        </CardBody>
      </CardContainer>
    </div>
  );
}

/**
 * 4. COMPONENT: Main App (Projects Section)
 */
export default function App() {
  // Dummy Translation Function (Sesuaikan dengan LanguageContext Anda)
  const translation = (key) => {
    const data = {
      "projects.title": "My Projects",
      "projects.items.ruliConnect.title": "RuliConnect",
      "projects.items.ruliConnect.description": "A comprehensive social platform for networking.",
      "projects.items.ruliConnect.problem": "Banyak profesional muda kesulitan menemukan mentor dan rekan kolaborasi yang memiliki visi yang sama dalam lingkungan yang aman dan terkurasi.",
      "projects.items.ruliConnect.solution": "RuliConnect menyediakan sistem matching berbasis minat dan AI chat untuk menghubungkan profesional dengan aman.",
      // ... tambahkan data lainnya
    };
    return data[key] || key;
  };

  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openProject = (projectData) => {
    setSelectedProject(projectData);
    setIsModalOpen(true);
  };

  // Contoh data proyek (Ini harusnya datang dari array atau file konfigurasi)
  const projectsData = [
    {
      id: "ruliConnect",
      title: translation("projects.items.ruliConnect.title"),
      description: translation("projects.items.ruliConnect.description"),
      problem: translation("projects.items.ruliConnect.problem"),
      solution: translation("projects.items.ruliConnect.solution"),
      img: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800",
      githubUrl: "https://github.com/Fahrul-Nurdiansyah263/RuliConnect",
      icon: (
        <div className="flex gap-2">
          <span className="text-blue-400">Next.js</span>
          <span className="text-cyan-400">Tailwind</span>
          <span className="text-green-400">Supabase</span>
        </div>
      )
    },
    // Tambahkan item lain di sini...
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black font-sans text-neutral-900 dark:text-neutral-100">
      <section id="projects" className="flex flex-col mx-auto max-w-7xl px-6 py-20">
        <div className="flex flex-col items-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">
            {translation("projects.title")}
          </h1>
          <div className="h-1.5 w-20 bg-blue-600 rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {projectsData.map((project) => (
            <ThreeDCard
              key={project.id}
              {...project}
              onClick={() => openProject(project)}
            />
          ))}
        </div>

        {/* Global Modal Component */}
        <ProjectModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          project={selectedProject}
          translation={translation}
        />
      </section>
    </div>
  );
}