import { motion } from 'framer-motion';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { containerVariants, itemVariants } from '@/lib/animations';

const Index = () => {
  const navigate = useNavigate();

  const handleViewWork = () => {
    navigate('/projects');
  };

  const handleStatClick = (label: string) => {
    if (label === "Projects Completed") {
      navigate('/projects');
    } else if (label === "Months Experience") {
      navigate('/about');
    }
  };

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
            <motion.h1 
              className="text-4xl md:text-6xl font-bold mb-6"
              variants={itemVariants}
            >
              <span className="gradient-text">Hi, I'm Kirthic</span>
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8"
            >
              I am a PHP Developer specializing in robust backend solutions
              and dynamic web applications
            </motion.p>
            
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            >
              <motion.button
                onClick={() => navigate('/projects')}
                whileHover={{ 
                  scale: 1.05, 
                  boxShadow: "0 0 40px rgba(168, 85, 247, 0.6)",
                  y: -5
                }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 bg-gradient-primary rounded-2xl text-primary-foreground font-bold text-xl transition-all duration-300 glow flex items-center gap-2"
              >
                View My Work
                <ArrowRight size={20} />
              </motion.button>
              
              <motion.button
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(59, 130, 246, 0.4)",
                  y: -5
                }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 glass rounded-2xl font-bold text-xl transition-all duration-300 text-foreground border border-white/30 hover:bg-white/20 flex items-center gap-2"
              >
                <Download size={20} />
                Resume
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Introduction Section */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="glass p-8 rounded-2xl">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h2 className="text-2xl font-bold mb-4 gradient-text-secondary">
                    Welcome to My Digital Playground
                  </h2>
                  <p className="text-muted-foreground mb-4">
                    I'm a passionate PHP developer with over 6 Months  of experience creating 
                    robust backend solutions and scalable web applications.
                  </p>
                  <p className="text-muted-foreground mb-6">
                    From RESTful APIs to full-stack web applications, 
                    I bring ideas to life through clean code and efficient architecture.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {["PHP", "Laravel", "MySQL",  "CodeIgniter"].map((tech) => (
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

          {/* Quick Stats */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
              {[
                { number: "5+", label: "Projects Completed", icon: "🚀" },
                { number: "6+", label: "Months Experience", icon: "⭐" },
                // { number: "100%", label: "Client Satisfaction", icon: "💯" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  onClick={() => handleStatClick(stat.label)}
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    boxShadow: "0 0 30px rgba(168, 85, 247, 0.2)"
                  }}
                  className="glass p-6 rounded-xl text-center group cursor-pointer"
                >
                  <div className="text-4xl mb-4">{stat.icon}</div>
                  <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Links */}
          <motion.div variants={itemVariants} className="text-center">
            <h2 className="text-2xl font-bold mb-8 gradient-text">
              Let's Connect
            </h2>
            <div className="flex justify-center gap-6">
              {[
                { icon: Github, label: "GitHub", href: "https://github.com/SKirthicKumar/" },
                { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/kirthic-kumar-580a87271" },
                { icon: Mail, label: "Email", href: "mailto:kirthickumar689@gmail.com" }
              ].map((link) => {
                const Icon = link.icon;
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    whileHover={{ 
                      scale: 1.1,
                      boxShadow: "0 0 20px rgba(168, 85, 247, 0.4)"
                    }}
                    whileTap={{ scale: 0.95 }}
                    className="p-4 glass rounded-xl hover:bg-white/10 transition-all duration-300 group"
                  >
                    <Icon className="w-6 h-6 group-hover:text-primary transition-colors" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Index;