import { motion } from 'framer-motion';
import { ExternalLink, Github, Code, Palette, Zap } from 'lucide-react';
import { useState } from 'react';
import { containerVariants, itemVariants } from '@/lib/animations';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "3D Portfolio Website",
      description: "An immersive portfolio website featuring Three.js animations, particle systems, and smooth transitions.",
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop",
      technologies: ["React", "Three.js", "Framer Motion", "TypeScript"],
      category: "web",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 2,
      title: "Interactive Data Dashboard",
      description: "A responsive dashboard with real-time data visualization and interactive charts.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
      technologies: ["React", "D3.js", "Node.js", "MongoDB"],
      category: "web",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 3,
      title: "Mobile Gaming App",
      description: "A cross-platform mobile game built with React Native and smooth animations.",
      image: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=600&h=400&fit=crop",
      technologies: ["React Native", "Expo", "TypeScript", "Firebase"],
      category: "mobile",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 4,
      title: "AI Chat Interface",
      description: "A modern chat interface with AI integration and real-time messaging.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      technologies: ["Next.js", "OpenAI API", "Socket.io", "PostgreSQL"],
      category: "ai",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      id: 5,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce solution with payment integration and admin panel.",
      image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=400&fit=crop",
      technologies: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
      category: "web",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      id: 6,
      title: "Design System Library",
      description: "A comprehensive component library with Storybook documentation.",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
      technologies: ["React", "Storybook", "Styled Components", "TypeScript"],
      category: "design",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  const filters = [
    { id: 'all', name: 'All Projects', icon: Code },
    { id: 'web', name: 'Web Apps', icon: Code },
    { id: 'mobile', name: 'Mobile', icon: Zap },
    { id: 'ai', name: 'AI/ML', icon: Zap },
    { id: 'design', name: 'Design', icon: Palette }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);


  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">My Projects</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A showcase of my recent work and creative experiments
            </p>
          </motion.div>

          {/* Filter Buttons */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filterItem) => {
              const Icon = filterItem.icon;
              return (
                <motion.button
                  key={filterItem.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFilter(filterItem.id)}
                  className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                    filter === filterItem.id
                      ? 'bg-gradient-primary text-primary-foreground shadow-glow'
                      : 'glass hover:bg-white/10'
                  }`}
                >
                  <Icon size={18} />
                  {filterItem.name}
                </motion.button>
              );
            })}
          </motion.div>

          {/* Featured Projects */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-2xl font-bold mb-8 gradient-text-secondary">Featured Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.filter(p => p.featured).map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -5, boxShadow: "0 0 30px rgba(168, 85, 247, 0.2)" }}
                  className="group glass rounded-xl overflow-hidden cursor-pointer"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.a
                        href={project.liveUrl}
                        whileHover={{ scale: 1.1 }}
                        className="p-2 bg-primary/80 rounded-lg text-primary-foreground backdrop-blur-sm"
                      >
                        <ExternalLink size={16} />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        whileHover={{ scale: 1.1 }}
                        className="p-2 bg-secondary/80 rounded-lg text-secondary-foreground backdrop-blur-sm"
                      >
                        <Github size={16} />
                      </motion.a>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs text-muted-foreground">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Completed Projects */}
          <motion.div variants={itemVariants} className="mb-16">
            <h2 className="text-2xl font-bold mb-8 gradient-text-secondary">Completed Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "RoboNexus",
                  description: "Advanced robotics platform with AI integration and real-time control systems for automated manufacturing processes.",
                  image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop",
                  technologies: ["HTML", "CSS", "MySQL", "JavaScript", "PHP", "CodeIgniter"],
                  category: "web",
                  liveUrl: "https://robonexus.co.in/",
                  githubUrl: "#"
                },
                {
                  title: "S2S Taxi",
                  description: "Taxi booking system with real-time tracking and payment integration for seamless transportation services.",
                  image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=600&h=400&fit=crop",
                  technologies: ["HTML", "CSS", "MySQL", "JavaScript", "PHP", "CodeIgniter","REST API"],
                  category: "web",
                  liveUrl: "https://s2staxi.com/",
                  githubUrl: "#"
                },
                {
                  title: "PKDrop Taxi",
                  description: "On-demand taxi service platform with driver management system and route optimization features.",
                  image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop",
                  technologies: ["HTML", "CSS", "MySQL", "JavaScript", "PHP", "CodeIgniter", "REST API"],
                  category: "web",
                  liveUrl: "https://pkdroptaxi.com/",
                  githubUrl: "#"
                },
                {
                  title: "BloodPressure Form",
                  description: "Medical form system for data management with patient tracking capabilities.",
                  image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop",
                  technologies: ["HTML", "CSS", "MySQL", "JavaScript", "PHP", "CodeIgniter"],
                  category: "web",
                  liveUrl: "https://form.bloodpressureplace.com/",
                  githubUrl: "#"
                }
              ].map((project) => (
                <motion.div
                  key={project.title}
                  variants={itemVariants}
                  whileHover={{ y: -5, boxShadow: "0 0 30px rgba(168, 85, 247, 0.2)" }}
                  className="group glass rounded-xl overflow-hidden cursor-pointer"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.a
                        href={project.liveUrl}
                        whileHover={{ scale: 1.1 }}
                        className="p-2 bg-primary/80 rounded-lg text-primary-foreground backdrop-blur-sm"
                      >
                        <ExternalLink size={16} />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        whileHover={{ scale: 1.1 }}
                        className="p-2 bg-secondary/80 rounded-lg text-secondary-foreground backdrop-blur-sm"
                      >
                        <Github size={16} />
                      </motion.a>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs text-muted-foreground">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* All Projects Grid */}
          <motion.div variants={itemVariants}>
            <h2 className="text-2xl font-bold mb-8 gradient-text-secondary">All Projects</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  variants={itemVariants}
                  whileHover={{ y: -5, boxShadow: "0 0 30px rgba(168, 85, 247, 0.2)" }}
                  className="group glass rounded-xl overflow-hidden cursor-pointer"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <motion.a
                        href={project.liveUrl}
                        whileHover={{ scale: 1.1 }}
                        className="p-2 bg-primary/80 rounded-lg text-primary-foreground backdrop-blur-sm"
                      >
                        <ExternalLink size={16} />
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        whileHover={{ scale: 1.1 }}
                        className="p-2 bg-secondary/80 rounded-lg text-secondary-foreground backdrop-blur-sm"
                      >
                        <Github size={16} />
                      </motion.a>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-3 line-clamp-2">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 text-xs text-muted-foreground">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;