import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Instagram } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import { containerVariants, itemVariants } from '@/lib/animations';
import emailjs from '@emailjs/browser';
import { emailjsConfig, recipientEmail } from '@/config/emailjs';
import { request } from 'https';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_email: recipientEmail
      };

      await emailjs.send(
        emailjsConfig.serviceId, 
        emailjsConfig.templateId, 
        templateParams, 
        emailjsConfig.publicKey
      );
      
      toast({
        title: "Message sent successfully!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', subject: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      toast({
        title: "Failed to send message",
        description: "Something went wrong. Please try again or contact me directly.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/SKirthicKumar/",
      color: "hover:text-foreground"
    },
    {
      name: "LinkedIn", 
      icon: Linkedin,
      url: "https://www.linkedin.com/in/kirthic-kumar-580a87271",
      color: "hover:text-blue-400"
    },
    {
      name: "Email",
      icon: Mail,
      url: "mailto:kirthickumar689@gmail.com",
      color: "hover:text-green-400"
    },
    {
      name: "Instagram",
      icon: Instagram,
      url: "https://instagram.com/your_instagram_handle", 
      color: "hover:text-pink-400"
    }
  ];  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "kirthickumarportfolio@gmail.com",
      href: "mailto:kirthickumarportfolio@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "Phone number available upon request.",
      href: "tel:+15551234567"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Madurai, Tamil Nadu, India",
      href: "#"
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
              <span className="gradient-text">Get In Touch</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Let's work together to bring your ideas to life. I'm always excited to discuss new projects and opportunities.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="glass p-8 rounded-2xl">
                <h2 className="text-2xl font-bold mb-6 gradient-text-secondary">
                  Send Me a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="glass border-white/20 focus:border-primary"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="glass border-white/20 focus:border-primary"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="glass border-white/20 focus:border-primary"
                      placeholder="What's this about?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="glass border-white/20 focus:border-primary resize-none"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 h-12"
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/20 border-t-white rounded-full animate-spin" />
                          Sending...
                        </div>
                      ) : (
                        <div className="flex items-center gap-2">
                          <Send size={18} />
                          Send Message
                        </div>
                      )}
                    </Button>
                  </motion.div>
                </form>
              </div>
            </motion.div>

            {/* Contact Info & Social */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Contact Information */}
              <div className="glass p-8 rounded-2xl">
                <h2 className="text-2xl font-bold mb-6 gradient-text-secondary">
                  Contact Information
                </h2>
                <div className="space-y-6">
                  {contactInfo.map((info) => {
                    const Icon = info.icon;
                    return (
                      <motion.a
                        key={info.label}
                        href={info.href}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-4 group cursor-pointer"
                      >
                        <div className="p-3 bg-gradient-primary rounded-lg group-hover:scale-110 transition-transform duration-300">
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">{info.label}</p>
                          <p className="font-medium group-hover:text-primary transition-colors">
                            {info.value}
                          </p>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Social Media */}
              <div className="glass p-8 rounded-2xl">
                <h2 className="text-2xl font-bold mb-6 gradient-text-secondary">
                  Follow Me
                </h2>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;
                    return (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ 
                          scale: 1.05,
                          boxShadow: "0 0 20px rgba(168, 85, 247, 0.3)"
                        }}
                        whileTap={{ scale: 0.95 }}
                        className={`flex items-center gap-3 p-4 glass rounded-xl transition-all duration-300 group ${social.color}`}
                      >
                        <Icon className="w-5 h-5" />
                        <span className="font-medium">{social.name}</span>
                      </motion.a>
                    );
                  })}
                </div>
              </div>

              {/* Availability */}
              <div className="glass p-8 rounded-2xl">
                <h2 className="text-2xl font-bold mb-4 gradient-text-secondary">
                  Availability
                </h2>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-green-400 font-medium">Available for new projects</span>
                </div>
                <p className="text-muted-foreground">
                  I'm currently open to freelance opportunities and interesting full-time positions. 
                  Let's discuss how we can work together!
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;