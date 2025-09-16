import { motion } from 'framer-motion';
import { Code, Server, Database, Globe, Smartphone, Shield } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { containerVariants, itemVariants, scaleVariants } from '@/lib/animations';

const Skills = () => {
  const [inView, setInView] = useState(false);
  const skillsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.3 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const skillCategories = [
    {
      title: "PHP Development",
      icon: Code,
      color: "primary",
      skills: [
        { name: "PHP", level: 90 },
        { name: "Laravel", level: 85 },
        { name: "CodeIgniter", level: 80 },
        { name: "Symfony", level: 70 },
        { name: "Composer", level: 85 }
      ]
    },
    {
      title: "Backend & APIs",
      icon: Server,
      color: "secondary",
      skills: [
        { name: "REST API", level: 85 },
        { name: "GraphQL", level: 75 },
        { name: "JSON/XML", level: 90 },
        { name: "Microservices", level: 70 },
        { name: "API Security", level: 80 }
      ]
    },
    {
      title: "Database Management", 
      icon: Database,
      color: "accent",
      skills: [
        { name: "MySQL", level: 90 },
        { name: "PostgreSQL", level: 75 },
        { name: "Redis", level: 70 },
        { name: "MongoDB", level: 65 },
        { name: "Database Design", level: 85 }
      ]
    },
    {
      title: "Frontend Technologies",
      icon: Globe,
      color: "primary",
      skills: [
        { name: "JavaScript", level: 80 },
        { name: "HTML/CSS", level: 85 },
        { name: "Bootstrap", level: 80 },
        { name: "jQuery", level: 75 },
        { name: "AJAX", level: 80 }
      ]
    },
    {
      title: "Development Tools",
      icon: Shield,
      color: "secondary",
      skills: [
        { name: "Git/GitHub", level: 85 },
        { name: "Apache/Nginx", level: 75 },
        { name: "Docker", level: 60 },
        { name: "Linux/Ubuntu", level: 70 },
        { name: "Debugging", level: 85 }
      ]
    },
    {
      title: "Web Technologies",
      icon: Globe,
      color: "accent",
      skills: [
        { name: "Performance", level: 80 },
        { name: "SEO", level: 75 },
        { name: "Security", level: 80 },
        { name: "Testing", level: 70 },
        { name: "CMS Development", level: 75 }
      ]
    }
  ];


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
              <span className="gradient-text">My Skills</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A comprehensive overview of my PHP development expertise and technical capabilities
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div 
            ref={skillsRef}
            variants={itemVariants} 
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {skillCategories.map((category, categoryIndex) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={category.title}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.02,
                    boxShadow: "0 0 30px rgba(168, 85, 247, 0.2)"
                  }}
                  className="glass p-6 rounded-2xl group"
                >
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 bg-gradient-${category.color} rounded-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-muted rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={inView ? { width: `${skill.level}%` } : { width: 0 }}
                            transition={{ 
                              duration: 1.5, 
                              delay: categoryIndex * 0.1 + skillIndex * 0.1,
                              ease: "easeOut"
                            }}
                            className={`h-full bg-gradient-${category.color} rounded-full relative`}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-pulse-glow rounded-full" />
                          </motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Professional Tools */}
          <motion.div variants={itemVariants} className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12 gradient-text-secondary">
              Professional Tools
            </h2>
            <div className="flex flex-wrap justify-center gap-6">
              {[
                "VS Code", "Git", "Docker", "AWS", "Vercel", "Firebase",
                "Postman", "Jira", "Slack", "Linear", "Notion", "Figma"
              ].map((tool, index) => (
                <motion.div
                  key={tool}
                  variants={scaleVariants}
                  whileHover={{ 
                    scale: 1.1,
                    boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)"
                  }}
                  className="px-6 py-3 glass rounded-lg text-center cursor-pointer transition-all duration-300 hover:bg-white/10"
                >
                  <span className="font-medium">{tool}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Certifications & Achievements */}
          <motion.div variants={itemVariants} className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
              Certifications & Achievements
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "React Developer Certification",
                  issuer: "Meta",
                  year: "2023",
                  description: "Advanced React concepts and best practices"
                },
                {
                  title: "AWS Cloud Practitioner",
                  issuer: "Amazon Web Services",
                  year: "2023",
                  description: "Cloud computing fundamentals and AWS services"
                },
                {
                  title: "UX Design Certificate",
                  issuer: "Google",
                  year: "2022",
                  description: "User experience design principles and methods"
                }
              ].map((cert) => (
                <motion.div
                  key={cert.title}
                  variants={itemVariants}
                  whileHover={{ y: -5 }}
                  className="glass p-6 rounded-xl text-center group cursor-pointer"
                >
                  <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <span className="text-2xl">🏆</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                    {cert.title}
                  </h3>
                  <p className="text-secondary font-medium mb-2">{cert.issuer}</p>
                  <p className="text-sm text-muted-foreground mb-2">{cert.year}</p>
                  <p className="text-sm text-muted-foreground">{cert.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;