import { motion } from 'framer-motion';
import { Code, Database, Server, Heart } from 'lucide-react';
import { containerVariants, itemVariants } from '@/lib/animations';

const About = () => {
  const skills = [
    {
      icon: Code,
      title: "Backend Development",
      description: "Building robust server-side applications and APIs with PHP frameworks",
      technologies: ["PHP", "Laravel", "CodeIgniter"]
    },
    {
      icon: Database,
      title: "Database Design",
      description: "Designing and optimizing database structures for scalable applications",
      technologies: ["MySQL", "PostgreSQL"]
    },
    {
      icon: Server,
      title: "API Development",
      description: "Creating RESTful APIs and web services for seamless data integration",
      technologies: ["REST API", "JSON"]
    },
    {
      icon: Heart,
      title: "Problem Solving",
      description: "Passionate about turning complex problems into simple, elegant solutions",
      technologies: ["Performance Optimization", "Testing", "Debugging"]
    }
  ];


  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-4xl mx-auto"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="gradient-text">About Me</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A passionate PHP developer who loves creating robust, scalable, and efficient backend solutions
            </p>
          </motion.div>

          {/* Bio Section */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="glass p-8 rounded-2xl">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4 gradient-text-secondary">
                    Backend Development Expert
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    With over 6 months of experience in PHP development, I specialize in creating 
                    robust backend solutions and scalable web applications that power modern businesses.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    I'm passionate about building efficient server-side applications, 
                    designing optimal database structures, and creating secure APIs that deliver exceptional performance.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["PHP", "Laravel", "MySQL", "CodeIgniter", "REST API"].map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="relative flex justify-center">
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="w-64 h-64 sm:w-80 sm:h-80 bg-gradient-primary rounded-2xl relative overflow-hidden"
                  >
                    <div className="absolute inset-4 bg-background rounded-xl flex items-center justify-center">
                      <div className="text-4xl sm:text-6xl gradient-text">👨‍💻</div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
              What I Do Best
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={skill.title}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.02,
                      boxShadow: "0 0 30px rgba(168, 85, 247, 0.2)"
                    }}
                    className="glass p-6 rounded-xl group cursor-pointer"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-primary rounded-lg group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                          {skill.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {skill.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {skill.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-1 bg-muted rounded text-xs text-muted-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Timeline */}
          <motion.div variants={itemVariants} className="mt-20">
            <h2 className="text-3xl font-bold text-center mb-12 gradient-text">
              My Journey
            </h2>
            <div className="space-y-8">
              {[
                 {
                  year: "2022",
                  title: "College - BCA",
                  college: "Yadav College",
                  description: "Graduated with a BCA from Yadav College in 2022, gaining strong foundational knowledge in computer science and web development."
                },
                {
                  year: "2023",
                  title: "Intern - Web Development",
                  company: "Alpharive Tech",
                  description: "Completed internship from August to October, gaining hands-on experience in web development"
                },
                {
                  year: "2025",
                  title: "PHP Developer",
                  company: "Laabamone Business Solutions",
                  description: "Developing scalable web applications using PHP and Laravel"
                }
              ].map((item, index) => (
                <motion.div
                  key={item.year}
                  variants={itemVariants}
                  className="flex gap-6 items-start"
                >
                  <div className="flex flex-col items-center">
                    <div className="w-4 h-4 bg-gradient-primary rounded-full" />
                    {index !== 1 && <div className="w-px h-16 bg-gradient-primary mt-2" />}
                  </div>
                  <div className="flex-1 pb-8">
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-sm font-mono text-primary">{item.year}</span>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                    </div>
                    <p className="text-secondary font-medium mb-2">{item.company}</p>
                    <p className="text-muted-foreground">{item.description}</p>
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

export default About;