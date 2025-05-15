
import React from 'react';
import { motion } from 'framer-motion';
import { Code, Briefcase, GraduationCap, ExternalLink } from 'lucide-react';
import SectionHeading from './SectionHeading';
import AnimatedCard from './AnimatedCard';

const Affiliations: React.FC = () => {
  // const codingPlatforms = [
  //   {
  //     name: "LeetCode",
  //     icon: "💻",
  //     url: "https://leetcode.com/u/Viraj_Mandlik/",
  //     description: "Solving data structures and algorithm challenges"
  //   },
  //   {
  //     name: "GeeksforGeeks",
  //     icon: "👨‍💻",
  //     url: "https://www.geeksforgeeks.org/user/virajma7nk7/",
  //     description: "Practicing competitive programming problems"
  //   }
  // ];

  const organizations = [
    {
      name: "10X - Coding Ninjas Club MITAOE",
      role: "CCO - ( Campus Creative Officer )",
      icon: <Briefcase className="text-primary" size={20} />,
      description: "Leading and contributing to the Coding Ninjas community on my campus would be an incredible opportunity to create and innovate."
    },
    {
      name: "TEDX Club MITAOE",
      role: "Social Media Manager",
      icon: <GraduationCap className="text-primary" size={20} />,
      description: "Strategize and execute all social media campaigns to promote TEDx events and share ideas worth spreading"
    }
  ];

  return (
    <section id="affiliations" className="section-padding bg-gradient-to-b from-background/95 to-background/90">
      <div className="section-container">
        <SectionHeading 
          title="Affiliations" 
          subtitle="Additional Activities" 
        />
        
        {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Competitive Coding */}
          {/* <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <AnimatedCard className="h-full" tiltAmount={0}>
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <Code size={24} className="text-primary mr-3" />
                  <h3 className="text-xl font-semibold">Competitive Coding</h3>
                </div>
                
                <p className="text-gray-300 mb-6">
                  I actively practice competitive programming to enhance my problem-solving skills and algorithmic thinking.
                  Below are the platforms where I regularly participate in coding challenges:
                </p>
                
                <div className="space-y-6"> */}
                  {/* {codingPlatforms.map((platform, index) => (
                    <div key={index} className="glass-morphism p-4 rounded-lg hover:bg-white/5 transition-colors">
                      <div className="flex items-center mb-2">
                        <span className="text-2xl mr-3" role="img" aria-label={platform.name}>{platform.icon}</span>
                        <h4 className="text-lg font-medium">{platform.name}</h4>
                      </div>
                      <p className="text-gray-300 text-sm mb-3">{platform.description}</p>
                      <a 
                        href={platform.url} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-primary text-sm hover:underline"
                      >
                        Visit Profile
                        <ExternalLink size={14} className="ml-1" />
                      </a>
                    </div>
                  ))} */}
                {/* </div>
              </div>
            </AnimatedCard>
          </motion.div> */} 
          
          {/* Organization Affiliations */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <AnimatedCard className="h-full" tiltAmount={0}>
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <Briefcase size={24} className="text-primary mr-3" />
                  <h3 className="text-xl font-semibold">Organization Affiliations</h3>
                </div>
                
                <p className="text-gray-300 mb-6">
                  I'm actively involved in technical communities and organizations, taking on leadership and contributor roles to drive innovation and knowledge sharing.
                </p>
                
                <div className="space-y-6">
                  {organizations.map((org, index) => (
                    <div key={index} className="glass-morphism p-4 rounded-lg hover:bg-white/5 transition-colors">
                      <div className="flex items-start">
                        <div className="mt-1">{org.icon}</div>
                        <div className="ml-3">
                          <h4 className="text-lg font-medium">{org.name}</h4>
                          <p className="text-primary text-sm mb-2">{org.role}</p>
                          <p className="text-gray-300 text-sm">{org.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedCard>
          </motion.div>
        </div>
    </section>
  );
};

export default Affiliations;
