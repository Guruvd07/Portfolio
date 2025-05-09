import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from './SectionHeading';
import AnimatedCard from './AnimatedCard';

interface Skill {
  name: string;
  level: number;
  icon: string;
  category: 'Data Science' | 'frontend' | 'database' | 'devops' | 'other' | 'tools';
}

const Skills: React.FC = () => {
  const skills: Skill[] = [

    // DataScience
    { name: 'Machine Learning', level: 90, icon: '🤖', category: 'Data Science' },
{ name: 'Deep Learning', level: 80, icon: '🧠', category: 'Data Science' },
{ name: 'EDA', level: 90, icon: '📊', category: 'Data Science' },
{ name: 'Flask', level: 90, icon: '🍶', category: 'Data Science' }, // Flask as in the actual container
{ name: 'OCR', level: 90, icon: '📄', category: 'Data Science' },
{ name: 'PowerBI', level: 80, icon: '📈', category: 'Data Science' }, // Representing document/image text


    // Frontend
    //  { name: 'JavaScript', level: 95, icon: '⚛️', category: 'frontend' },
     { name: 'ReactJS', level: 90, icon: '⚛️', category: 'frontend' },
    { name: 'TypeScript', level: 85, icon: '📘', category: 'frontend' },
     { name: 'HTML/CSS', level: 95, icon: '🎨', category: 'frontend' },
    // { name: 'Next.js', level: 85, icon: '⚡', category: 'frontend' },
    

    
    //  Database
    // { name: 'MongoDB', level: 85, icon: '🍃', category: 'database' },
    { name: 'SQL', level: 80, icon: '🗄️', category: 'database' },
    // { name: 'PostgreSQL', level: 80, icon: '🐘', category: 'database' },
    
    // // DevOps
    // { name: 'AWS', level: 80, icon: '☁️', category: 'devops' },
    // { name: 'GCP', level: 80, icon: '☁️', category: 'devops' },
    // { name: 'CI/CD', level: 75, icon: '🔄', category: 'devops' },
    
    // Tools
    { name: 'GitHub', level: 90, icon: '🐙', category: 'tools' },
    { name: 'GitLab', level: 85, icon: '🦊', category: 'tools' },
    { name: 'VS Code', level: 90, icon: '💻', category: 'tools' },
    { name: 'Postman', level: 85, icon: '📮', category: 'tools' },
    // { name: 'IntelliJ', level: 85, icon: '🧠', category: 'tools' },
    // { name: 'Maven', level: 80, icon: '🔨', category: 'tools' },
    // { name: 'Gradle', level: 75, icon: '🐘', category: 'tools' },
    // { name: 'JUnit', level: 85, icon: '🧪', category: 'tools' },
    
   
    { name: 'OS Concepts', level: 85, icon: '💻', category: 'other' },
    { name: 'System Design', level: 85, icon: '🏗️', category: 'other' },
    { name: 'Git', level: 90, icon: '📦', category: 'other' },
  ];

  const categories = [
    { id: 'Data Science', name: 'Data Science' },
    { id: 'frontend', name: 'Frontend' },
    { id: 'database', name: 'Database' },
    // { id: 'devops', name: 'DevOps' },
    { id: 'tools', name: 'Tools' },
    // { id: 'other', name: 'Other' },
  ];

  return (
    <section id="skills" className="section-padding">
      <div className="section-container">
        <SectionHeading 
          title="My Skills" 
          subtitle="Technical Expertise" 
        />
        
        <div className="space-y-12">
          {categories.map((category) => (
            <div key={category.id} className="mb-12">
              <h3 className="text-xl font-semibold mb-6 text-gradient-primary">
                {category.name}
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills
                  .filter(skill => skill.category === category.id)
                  .map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true, margin: "-50px" }}
                    >
                      <AnimatedCard className="h-full">
                        <div className="flex items-start space-x-4">
                          <div className="glass-morphism w-12 h-12 flex items-center justify-center rounded-lg text-2xl">
                            <span role="img" aria-label={skill.name}>{skill.icon}</span>
                          </div>
                          <div className="flex-grow">
                            <h4 className="font-medium mb-2">{skill.name}</h4>
                            <div className="relative h-2 bg-white/10 rounded-full overflow-hidden">
                              <div 
                                className="absolute top-0 left-0 h-full bg-primary rounded-full"
                                style={{ width: `${skill.level}%` }}
                              >
                                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-70"></div>
                              </div>
                            </div>
                            <div className="flex justify-between text-xs mt-1">
                              <span>Proficiency</span>
                              <span>{skill.level}%</span>
                            </div>
                          </div>
                        </div>
                      </AnimatedCard>
                    </motion.div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
