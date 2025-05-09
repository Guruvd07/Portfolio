
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send, Mail, Check, Github, Linkedin, Instagram } from 'lucide-react';
import emailjs from '@emailjs/browser';
import SectionHeading from './SectionHeading';
import AnimatedCard from './AnimatedCard';
import { useToast } from '@/hooks/use-toast';

const Contact: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Use EmailJS to send email
    emailjs.sendForm(
      'BrownyMailService',
      'BrownyContactTemplate',
      formRef.current!,
      '5ql90xon6V70ZOf4p'
    )
      .then((result) => {
        console.log('Email sent successfully:', result.text);
        setIsSubmitting(false);
        setIsSubmitted(true);
        
        toast({
          title: "Message sent!",
          description: "Thank you for reaching out. I'll get back to you soon.",
        });
        
        // Reset form after showing success message
        setTimeout(() => {
          setIsSubmitted(false);
          setFormState({
            name: '',
            email: '',
            subject: '',
            message: ''
          });
        }, 3000);
      }, (error) => {
        console.log('Failed to send email:', error.text);
        setIsSubmitting(false);
        
        toast({
          title: "Message failed to send",
          description: "There was an error sending your message. Please try again.",
          variant: "destructive",
        });
      });
  };

  const contactInfo = [
    { icon: Mail, label: 'Email', value: 'guruprasaddahiphale7@gmail.com' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/Guruvd07' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/guru-dahiphale-02862225b/' },
    { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/guruvd_07' }
  ];

  return (
    <section id="contact" className="section-padding">
      <div className="section-container">
        <SectionHeading 
          title="Contact Me" 
          subtitle="Get In Touch" 
        />
        
        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <AnimatedCard className="h-full" tiltAmount={0}>
              <h3 className="text-xl font-semibold mb-6">Send me a message</h3>
              
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-8">
                  <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mb-4">
                    <Check size={30} className="text-primary" />
                  </div>
                  <h4 className="text-xl font-medium mb-2">Message Sent!</h4>
                  <p className="text-gray-300 text-center">
                    Thank you for reaching out. I'll get back to you soon.
                  </p>
                </div>
              ) : (
                <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm text-gray-300">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleChange}
                        required
                        className="w-full glass-morphism bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-primary/50 transition-colors"
                      />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm text-gray-300">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        required
                        className="w-full glass-morphism bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-primary/50 transition-colors"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm text-gray-300">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formState.subject}
                      onChange={handleChange}
                      required
                      className="w-full glass-morphism bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-primary/50 transition-colors"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm text-gray-300">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full glass-morphism bg-white/5 border border-white/10 rounded-lg px-4 py-3 outline-none focus:border-primary/50 transition-colors resize-none"
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="inline-flex items-center glass-morphism px-6 py-3 rounded-lg border border-primary/30 hover:bg-primary/10 transition-colors disabled:opacity-70"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={18} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </AnimatedCard>
          </motion.div>
          
          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="space-y-6"
          >
            <AnimatedCard className="h-full" tiltAmount={0}>
              <h3 className="text-xl font-semibold mb-8">Contact Information</h3>
              
              <div className="space-y-6 mb-8">
                {contactInfo.map((contact, index) => (
                  <div key={index} className="flex items-start">
                    <div className="glass-morphism p-3 rounded-lg mr-4">
                      <contact.icon size={20} className="text-primary" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-400">{contact.label}</div>
                      <div className="font-medium">{contact.value}</div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div>
                <h4 className="text-lg font-medium mb-4">Connect with me</h4>
                <p className="text-gray-300 mb-6">
                  I'm always open to discussing new projects, creative ideas or opportunities to be part of your vision.
                </p>
                <div className="flex space-x-4">
                  {socialLinks.map((link) => (
                    <a
                      key={link.name}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass-morphism p-3 rounded-lg hover:bg-white/10 transition-colors"
                    >
                      <link.icon size={20} />
                    </a>
                  ))}
                </div>
              </div>
            </AnimatedCard>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
