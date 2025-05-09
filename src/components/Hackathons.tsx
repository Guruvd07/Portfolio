import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Trophy, Award, Calendar, ChevronDown, ChevronUp, ExternalLink, Users } from 'lucide-react';
import SectionHeading from './SectionHeading';
import AnimatedCard from './AnimatedCard';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import hack01 from '../../public/lovable-uploads/Hackthon & Competion/AvinyaCompetion/1.jpeg'
import hack02 from '../../public/lovable-uploads/Hackthon & Competion/AvinyaCompetion/2.jpeg'
import hack04 from '../../public/lovable-uploads/Hackthon & Competion/Cavista/3.jpeg'
import hack05 from '../../public/lovable-uploads/Hackthon & Competion/Cavista/2.jpeg'
import hack06 from '../../public/lovable-uploads/Hackthon & Competion/Cavista/1.jpeg'
import hack07 from '../../public/lovable-uploads/Hackthon & Competion/E-Cell/IMG-20250413-WA0020.jpg'
import hack08 from '../../public/lovable-uploads/Hackthon & Competion/E-Cell/IMG-20250413-WA0021.jpg'
import hack09 from '../../public/lovable-uploads/Hackthon & Competion/E-Cell/idea03.jpg'
import hack09a from '../../public/lovable-uploads/Hackthon & Competion/E-Cell/IMG-20250413-WA0022.jpg'
import hack10 from '../../public/lovable-uploads/Hackthon & Competion/IBM/bmc.jpeg'
import hack11 from '../../public/lovable-uploads/Hackthon & Competion/IBM/1740464644045.jpeg'
import hack12 from '../../public/lovable-uploads/Hackthon & Competion/IBM/me.jpeg'
import hack03 from '../../public/lovable-uploads/Hackthon & Competion/IBM/1740464647851.jpeg'
import hack13 from '../../public/lovable-uploads/Hackthon & Competion/SIH/Sih01.jpg'
import hack14 from '../../public/lovable-uploads/Hackthon & Competion/SIH/Sih02.jpg'
import hack15 from '../../public/lovable-uploads/Hackthon & Competion/SIH/Sih03.jpg'
import hack16 from '../../public/lovable-uploads/Hackthon & Competion/SIH/Sih04.jpg'
import hack17 from '../../public/lovable-uploads/Hackthon & Competion/SIH/1.jpg'
import hack18 from '../../public/lovable-uploads/Hackthon & Competion/SIH/2.jpg'
import hack19 from '../../public/lovable-uploads/Hackthon & Competion/SIH/3.jpg'
import hack20 from '../../public/lovable-uploads/Hackthon & Competion/SIH/4.jpg'
import hack21 from '../../public/lovable-uploads/Hackthon & Competion/SIH/6.jpg'
import hack22 from '../../public/lovable-uploads/Hackthon & Competion/SIH/5.jpg'
import hack23 from '../../public/lovable-uploads/Hackthon & Competion/SIH/8.jpg'
import hack24 from '../../public/lovable-uploads/Hackthon & Competion/SIH/9.jpg'
import hack25 from '../../public/lovable-uploads/Hackthon & Competion/SIH/IMG-20250413-WA0023.jpg'

interface Hackathon {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  achievement: string;
  date: string;
  team: string;
  image: string;
  images?: string[];
  link?: string;
}

const Hackathons: React.FC = () => {
  const [showAll, setShowAll] = useState(false);
  const [selectedHackathon, setSelectedHackathon] = useState<Hackathon | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  
  const hackathons: Hackathon[] = [
    {
      id: "hack1",
      title: "Smart India Hackathon 2024",
      description: "Selected as a finalist in this prestigious national-level competition, demonstrating technical problem-solving skills on real-world challenges at IIT Tirupati.",
      fullDescription: "We are thrilled to share our journey as Finalists at the Smart India Hackathon 2024! 🎉 Team Sashwat is incredibly grateful for this opportunity to innovate, collaborate, and push the boundaries of technology for good. A special thank you to IIT Tirupati for hosting such a well-organized and impactful finale, and for providing constant support throughout the event.\n\nWe would also like to extend our heartfelt thanks to our Academic Mentor, Amar Sir, and our Industrial Mentor, Neeraj Kumar, for their invaluable guidance and unwavering support. Their expertise and encouragement played a crucial role in our journey.\n\nThis experience has been nothing short of transformative. We are excited to continue our exploration, learning, and creation in the tech space, with a focus on driving meaningful impact. Here's to more opportunities to innovate and contribute to the future!",
      achievement: "Grand Finalist",
      date: "2024",
      team: "Team Shashwat",
      image: hack13,
      images: [
        hack13,
        hack14,
        hack15,
        hack16,
        hack17,
        hack18,
        hack19,
        hack20,
        hack21,
        hack22,
        hack23,
        hack24,
        hack25
      ],
      link: "https://www.linkedin.com/posts/guru-dahiphale-02862225b_sih2024-teamsashwat-sihfinalist-activity-7273925986352578561-ITmJ?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_8Z6ABnjwj7meVtWdU95R9kczlmGIrMDA"
    },
    {
      id: "hack2",
      title: "BMC Hackademia 2025 ",
      description: "✨ BMC Hackademia 2025 – A Remarkable Experience!",
      fullDescription: "We had the incredible opportunity to be finalists at BMC Hackademia 2025, where we worked on a Generative AI project aimed at driving innovation and shaping the future of technology. This journey was both challenging and rewarding, pushing us to explore new possibilities and tackle complex problems.",
      achievement: "Finalist",
      date: "2025",
      team: "Team Shashwat",
      image: hack10,
      images: [
        hack10,
        hack11,
        hack12,
        hack03
      ],
      link: "https://www.linkedin.com/posts/guru-dahiphale-02862225b_bmchackademia2025-generativeai-hackathon-activity-7300037843525988352-7gFD?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_8Z6ABnjwj7meVtWdU95R9kczlmGIrMDA"
    },
    {
      id: "hack3",
      title: "MIT E-SUMMIT 2024 Ideathon",
      description: "Our team Shashwat won First Prize in the Ideathon at MIT E-SUMMIT 2024, competing alongside talented innovators and pushing creative boundaries.",
      fullDescription: "Thrilled to share that our team Sashwat won First Prize in the Ideathon at MIT E-SUMMIT 2024! 🏆 It was an incredible experience competing alongside talented innovators, pushing the boundaries of creativity and impact. Grateful for this opportunity and excited for what lies ahead!",
      achievement: "First Prize",
      date: "2024",
      team: "Team Shashwat",
      image: hack07,
      images: [
        hack07,
        hack08,
        hack09,
        hack09a,
    
      ],
      link: "https://www.linkedin.com/posts/guru-dahiphale-02862225b_mitesummit2024-innovation-ideathon-activity-7260965387998035968-uW-b?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_8Z6ABnjwj7meVtWdU95R9kczlmGIrMDA"
    },
    {
      id: "hack4",
      title: "Microsoft , Edunet Foundation , TechSaksham Regional Showcase 2025",
      description: "Team Shashwat won First Consolation Prize at the Microsoft Edunet Foundation TechSaksham Regional Showcase!",
      fullDescription: "It was an incredible experience presenting our project at this event, where innovation and technology came together. A big thank you to Microsoft, Edunet Foundation, SAP, and MIT Academy of Engineering for organizing this platform and fostering innovation.",
      achievement: "First Consolation Prize",
      date: "2025",
      team: "Team Shashwat",
      image: hack04,
      images: [
        hack04,
        hack05,
        hack06
      ],
      link: "https://www.linkedin.com/posts/guru-dahiphale-02862225b_microsoft-techsaksham-teamshashwat-activity-7314134778994159616-BqCS?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_8Z6ABnjwj7meVtWdU95R9kczlmGIrMDA"
    },
    {
      id: "hack5",
      title: "MITAOE DATATHON First RunnerUp",
      description: "Secured First Runner-up position at the MITAOE DATATHON 2025 – a national-level Software and Hardware Hackathon!",
      fullDescription: "🚀 It was an incredible journey tackling a real-world problem statement provided by WorqHat and we're grateful for the opportunity to innovate and present our solution in front of an amazing panel.",
      achievement: "First RunnerUp",
      date: "2025",
      team: "Team Shashwat",
      image: hack01,
      images: [
        hack01,
        hack02,
      ],
      link: "https://www.linkedin.com/posts/guru-dahiphale-02862225b_datathon2025-teamshashwat-hackathonwinners-activity-7316120214511706115-VqTs?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_8Z6ABnjwj7meVtWdU95R9kczlmGIrMDA"
    }
  ];

  const displayedHackathons = showAll ? hackathons : hackathons.slice(0, 3);

  return (
    <section id="hackathons" className="section-padding bg-gradient-to-b from-background to-background/95">
      <div className="section-container">
        <SectionHeading 
          title="Hackathons & Competitions" 
          subtitle="Problem Solving in Action" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {displayedHackathons.map((hackathon, index) => (
            <motion.div
              key={hackathon.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <AnimatedCard 
                className="h-full cursor-pointer hover:border-primary/30 transition-colors"
                glowOnHover={true}
                tiltAmount={0}
                onClick={() => setSelectedHackathon(hackathon)}
              >
                <div className="relative aspect-video mb-4 overflow-hidden rounded-t-lg bg-gray-800">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                  <img 
                    src={hackathon.image} 
                    alt={hackathon.title} 
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute top-3 right-3 z-20">
                    <span className="glass-morphism px-3 py-1 rounded-full text-xs font-medium border border-primary/30 flex items-center">
                      <Trophy size={14} className="mr-1 text-primary" />
                      {hackathon.achievement}
                    </span>
                  </div>
                </div>
                
                <div className="p-5">
                  <h3 className="text-xl font-semibold mb-2">{hackathon.title}</h3>
                  <p className="text-gray-300 text-sm mb-4">{hackathon.description}</p>
                  
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center text-sm">
                      <Calendar size={16} className="mr-2 text-primary" />
                      <span>{hackathon.date}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Users size={16} className="mr-2 text-primary" />
                      <span>{hackathon.team}</span>
                    </div>
                  </div>
                </div>
              </AnimatedCard>
            </motion.div>
          ))}
        </div>
        
        {/* Show more/less button */}
        <div className="flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center glass-morphism px-6 py-3 rounded-lg border border-primary/30 hover:bg-primary/10 transition-colors"
          >
            {showAll ? (
              <>
                <ChevronUp size={18} className="mr-2" />
                Show Less Hackathons
              </>
            ) : (
              <>
                <ChevronDown size={18} className="mr-2" />
                Show More Hackathons
              </>
            )}
          </button>
        </div>

        {/* Dialog for hackathon details */}
        {selectedHackathon && (
          <Dialog open={!!selectedHackathon} onOpenChange={() => {
            setSelectedHackathon(null);
            setSelectedImage(null);
          }}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
              <DialogHeader>
                <DialogTitle className="text-2xl font-bold flex items-center">
                  {selectedHackathon.title}
                  <span className="ml-3 inline-flex items-center glass-morphism px-3 py-1 rounded-full text-xs font-medium border border-primary/30">
                    <Trophy size={14} className="mr-1 text-primary" />
                    {selectedHackathon.achievement}
                  </span>
                </DialogTitle>
                <DialogDescription>
                  <div className="flex items-center mt-2 space-x-4">
                    <div className="flex items-center text-sm">
                      <Calendar size={16} className="mr-2 text-primary" />
                      <span>{selectedHackathon.date}</span>
                    </div>
                    <div className="flex items-center text-sm">
                      <Users size={16} className="mr-2 text-primary" />
                      <span>{selectedHackathon.team}</span>
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>
              
              {selectedHackathon.images && selectedHackathon.images.length > 0 && (
                <div className="mt-4 mb-6">
                  {/* Main image display */}
                  <div 
                    className="relative aspect-video rounded-lg overflow-hidden bg-gray-800 cursor-pointer"
                    onClick={() => setSelectedImage(selectedHackathon.images![0])}
                  >
                    <img 
                      src={selectedHackathon.images[0]} 
                      alt={selectedHackathon.title} 
                      className="w-full h-full object-contain"
                    />
                  </div>
                  
                  {/* Thumbnail grid */}
                  <div className="grid grid-cols-4 gap-2 mt-2">
                    {selectedHackathon.images.slice(1).map((img, idx) => (
                      <div 
                        key={idx} 
                        className="relative aspect-video rounded-lg overflow-hidden bg-gray-800 cursor-pointer"
                        onClick={() => setSelectedImage(img)}
                      >
                        <img 
                          src={img} 
                          alt={`${selectedHackathon.title} - ${idx + 1}`} 
                          className="w-full h-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              <div className="my-6">
                {selectedHackathon.fullDescription.split('\n\n').map((paragraph, idx) => (
                  <p key={idx} className="mb-4 text-gray-300">{paragraph}</p>
                ))}
              </div>
              
              {selectedHackathon.link && (
                <a 
                  href={selectedHackathon.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary text-sm hover:underline mt-2"
                >
                  View on LinkedIn
                  <ExternalLink size={14} className="ml-1" />
                </a>
              )}
            </DialogContent>
          </Dialog>
        )}

        {/* Image viewer dialog */}
        {selectedImage && (
          <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0 bg-transparent border-none">
              <div className="relative w-full h-full flex items-center justify-center">
                <img 
                  src={selectedImage} 
                  alt="Selected hackathon image" 
                  className="max-w-full max-h-[80vh] object-contain"
                />
                <button 
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 bg-black/50 rounded-full p-2 hover:bg-black/75 transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              </div>
            </DialogContent>
          </Dialog>
        )}
      </div>
    </section>
  );
};

export default Hackathons;