import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Mic, Users, MapPin, ExternalLink, Award, Users as UsersIcon, Trophy, ChevronDown, ChevronUp, Heart } from 'lucide-react';
import SectionHeading from './SectionHeading';
import AnimatedCard from './AnimatedCard';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from './ui/collapsible';
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from './ui/pagination';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from './ui/dialog';
import Event01a from "../../public/lovable-uploads/Events & Speaking/Guru/Nak.jpg"
import Event01b from "../../public/lovable-uploads/Events & Speaking/Guru/nak1.jpg"
import Event01c from "../../public/lovable-uploads/Events & Speaking/Guru/Nak2.jpg"
import Event02a from "../../public/lovable-uploads/Events & Speaking/Guru/sih1.jpg"
import Event02b from "../../public/lovable-uploads/Events & Speaking/Guru/sih.jpg"
import Event03a from "../../public/lovable-uploads/Events & Speaking/Guru/mahatech.jpg"
import Event03b from "../../public/lovable-uploads/Events & Speaking/Guru/Lanke.jpg"
import Event03c from "../../public/lovable-uploads/Events & Speaking/Event03/maha02.jpg"
import Event03d from "../../public/lovable-uploads/Events & Speaking/Event03/trophies.jpg"
import Event04a from "../../public/lovable-uploads/Events & Speaking/Guru/cn6.jpeg"
import Event04b from "../../public/lovable-uploads/Events & Speaking/Guru/cn3.jpeg"
import Event04c from "../../public/lovable-uploads/Events & Speaking/Guru/cn1.jpeg"
import Event04d from "../../public/lovable-uploads/Events & Speaking/Guru/cn4.jpeg"
import Event04e from "../../public/lovable-uploads/Events & Speaking/Guru/cn5.jpeg"

interface Event {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  date: string;
  location: string;
  audience: string;
  image: string;
  images?: string[];
  link?: string;
  eventType: 'award' | 'Felicitation' | 'organizer' | 'Inauguration';
}

const Events: React.FC = () => {
  const [showMore, setShowMore] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const events: Event[] = [
    {
      id: "event1",
      title: "Awarded at Nakshatra'25 🚀 ",
      description: "Awarded for outstanding performance as SIH Finalists",
      fullDescription: "Proud to share that me and my team Shashwat were awarded at our college event Nakshatra 2025 for being finalists in the prestigious Smart India Hackathon (SIH)! Our journey through the Smart India Hackathon was filled with innovation, teamwork, and problem-solving under real-world pressure. Being selected as finalists among thousands of teams across India was a huge achievement in itself, and being recognized at our college made it even more special.",
      date: "2025",
      location: "Nakshatra 2025 , MIT Academy of Engineering, Pune",
      audience: "Team Shashwat",
      image: Event01a,
      images: [
        Event01a,
        Event01b,
        Event01c
      ],
      // link: "https://www.linkedin.com/posts/viraj-mandlik-21a79a290_ai-mentalhealth-sentimentanalysis-activity-7301601151601278976-IBig",
      eventType: "award"
    },
    {
      id: "event2",
      title: "Felicitated at MITAOE ",
      description: "Felicitated at MITAOE as Smart India Hackathon Finalists 🏅",
      fullDescription: "Excited to share that me and my team were felicitated at MIT Academy of Engineering (MITAOE) for being finalists in the Smart India Hackathon (SIH) 2025! Being recognized by our institution for our innovation and dedication was a proud moment for all of us. Representing MITAOE at a national-level platform like SIH was an enriching experience, and the felicitation truly acknowledged our hard work and passion for solving real-world challenges.",
      date: "2025",
      location: "MIT Academy of Engineering , Pune",
      audience: "Team Shashwat",
      image: Event02a,
      images: [
        Event02a,
        Event02b,
      ],
      // link: "https://www.linkedin.com/posts/kartikey-sapkal-316822248_mozillaclub-mitaoe-socialresponsibility-activity-7239510686073008128-SASG",
      eventType: "Felicitation"
    },
    {
      id: "event3",
      title: "MAHATech 2025 Organizer",
      description: "Part of the organizing team for this grand industrial exhibition, gaining hands-on experience in event planning, business interactions, and leadership.",
      fullDescription: "✨ Excited to share my incredible journey at MAHATech 2025! ✨\n\nBeing a part of the organizing team for this grand industrial exhibition was a truly enriching experience. From crowd management, sales, and registration to handling multiple event operations, I got hands-on exposure to event planning, problem-solving, and business interactions.\n\nThis journey helped me sharpen my leadership, coordination, and communication skills, and it was an honor to work alongside some amazing professionals and industry experts.",
      date: "2025",
      location: "Pune, India",
      audience: "Industry Professionals & Students",
      image: Event03a,
      images: [
        Event03a,
        Event03b,
        Event03c,
        Event03d
      ],
      link: "https://www.linkedin.com/posts/guru-dahiphale-02862225b_mahatech2025-eventmanagement-businessgrowth-activity-7294385312238067712-35mE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_8Z6ABnjwj7meVtWdU95R9kczlmGIrMDA",
      eventType: "organizer"
    },
    {
      id: "event4",
      title: "Official Inauguration of 10x Club MITAOE |",
      description: "Official launch of the 10x Club at MITAOE to promote innovation, collaboration, and student-led growth in tech and entrepreneurship. The event was honored by the presence of distinguished guests and faculty members.",
      fullDescription: "TThe 10x Club was officially inaugurated at MIT Academy of Engineering (MITAOE) as a student-driven initiative focused on innovation, peer learning, and real-world problem solving. This event marked the beginning of a new platform dedicated to empowering students to think bigger, build smarter, and grow together in the fields of technology and entrepreneurship. \n\n The inauguration ceremony was graced by several distinguished guests and faculty members who have been instrumental in supporting and nurturing student innovation: \n\n Director: Gaudar Sir \n\n Deputy Director: Shitalkumar Jain Sir \n\n CSE Department Dean: Gaudar Ma'am \n\n Chief Guest: Pooja Rathore Ma'am \n\n Faculty Members: Manish Giri Sir , Santosh Warpe Sir , Meenakshi Ma'am \n\n Club Faculty Head: Bhagyashree Alhat Ma'am  \n\n Their presence added great value to the event, providing insights and encouragement that will guide the club in its future endeavors. Following the inauguration, the 10x Club launched its recruitment process, inviting students with a passion for innovation, learning, and impact to join the community and contribute to its mission. \n\n  This milestone marks just the beginning of the 10x Club's journey—one that promises to foster creativity, leadership, and hands-on experiences for all its members.",
      date: "2024",
      location: "MIT Academy of Engineering, Pune",
      audience: "10X Club - CORE Team",
      image: Event04a,
      images: [
        Event04a,
        Event04b,
        Event04c,
        Event04d,
        Event04e
      ],
      link: "https://www.linkedin.com/posts/guru-dahiphale-02862225b_10xclubmitaoe-inaugurationsuccess-recruitmentdrive-activity-7301115486803488768-GfdF?utm_source=share&utm_medium=member_desktop&rcm=ACoAAD_8Z6ABnjwj7meVtWdU95R9kczlmGIrMDA",
      eventType: "Inauguration"
    }
  ];

  const visibleEvents = showMore ? events : events.slice(0, 3);

  const getEventIcon = (eventType: string) => {
    switch (eventType) {
      case 'award':
        return <Award size={14} className="mr-1 text-primary" />;
      case 'Felicitation':
        return <Heart size={14} className="mr-1 text-primary" />;
      case 'competition':
        return <Trophy size={14} className="mr-1 text-primary" />;
      case 'organization':
        return <UsersIcon size={14} className="mr-1 text-primary" />;
      default:
        return <UsersIcon size={14} className="mr-1 text-primary" />;
    }
  };

  const getEventLabel = (eventType: string) => {
    switch (eventType) {
      case 'award':
        return 'Award';
      case 'Felicitation':
        return 'Felicitation';
      case 'organizer':
        return 'Organizer';
      default:
        return 'Inauguration';
    }
  };

  return (
    <section id="events" className="section-padding bg-gradient-to-b from-background to-background/90">
      <div className="section-container">
        <SectionHeading 
          title="Events & Speaking" 
          subtitle="Sharing Knowledge" 
        />
        
        {selectedEvent ? (
          <div className="mb-8">
            <button 
              onClick={() => setSelectedEvent(null)}
              className="mb-4 flex items-center text-blue-400 hover:text-blue-300 transition-colors"
            >
              <ChevronUp size={16} className="mr-1" />
              Back to events
            </button>
            
            <AnimatedCard className="overflow-hidden" glowOnHover={false} tiltAmount={0}>
              {/* Main image display */}
              <div 
                className="relative aspect-video mb-4 overflow-hidden rounded-lg cursor-pointer"
                onClick={() => setSelectedImage(selectedEvent.images![0])}
              >
                <div className="absolute inset-0 bg-black/20 z-10"></div>
                <img 
                  src={selectedEvent.image} 
                  alt={selectedEvent.title} 
                  className="w-full h-full object-contain"
                />
              </div>
              
              <div className="p-6">
                <div className="flex items-center mb-2">
                  <span className="glass-morphism px-3 py-1 rounded-full text-xs font-medium flex items-center">
                    {getEventIcon(selectedEvent.eventType)}
                    {getEventLabel(selectedEvent.eventType)}
                  </span>
                </div>
                
                <h2 className="text-2xl font-bold mb-4">{selectedEvent.title}</h2>
                
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm">
                    <Calendar size={16} className="mr-2 text-primary" />
                    <span>{selectedEvent.date}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <MapPin size={16} className="mr-2 text-primary" />
                    <span>{selectedEvent.location}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Users size={16} className="mr-2 text-primary" />
                    <span>{selectedEvent.audience}</span>
                  </div>
                </div>
                
                <div className="my-6">
                  {selectedEvent.fullDescription.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="mb-4 text-gray-300">{paragraph}</p>
                  ))}
                </div>
                
                {selectedEvent.images && selectedEvent.images.length > 0 && (
                  <div className="my-6">
                    <h3 className="text-lg font-semibold mb-4">Event Gallery</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                      {selectedEvent.images.slice(1).map((img, idx) => (
                        <div 
                          key={idx} 
                          className="relative aspect-square rounded-lg overflow-hidden bg-gray-800 cursor-pointer"
                          onClick={() => setSelectedImage(img)}
                        >
                          <img 
                            src={img} 
                            alt={`${selectedEvent.title} - image ${idx + 1}`} 
                            className="w-full h-full object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {selectedEvent.link && (
                  <a 
                    href={selectedEvent.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-primary text-sm hover:underline mt-4"
                  >
                    View on LinkedIn
                    <ExternalLink size={14} className="ml-1" />
                  </a>
                )}
              </div>
            </AnimatedCard>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
              {visibleEvents.map((event, index) => (
                <motion.div
                  key={event.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-100px" }}
                >
                  <AnimatedCard 
                    className="h-full cursor-pointer hover:border-primary/30 transition-colors" 
                    onClick={() => setSelectedEvent(event)}
                    glowOnHover={true}
                    tiltAmount={0}
                  >
                    <div className="relative aspect-video mb-4 overflow-hidden rounded-t-lg bg-gray-800">
                      <img 
                        src={event.image} 
                        alt={event.title} 
                        className="w-full h-full object-contain"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent z-10"></div>
                      <div className="absolute bottom-4 left-4 z-20">
                        <span className="glass-morphism px-3 py-1 rounded-full text-xs font-medium flex items-center">
                          {getEventIcon(event.eventType)}
                          {getEventLabel(event.eventType)}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-5">
                      <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
                      <p className="text-gray-300 text-sm mb-4">{event.description}</p>
                      
                      <div className="space-y-3 mb-4">
                        <div className="flex items-center text-sm">
                          <Calendar size={16} className="mr-2 text-primary" />
                          <span>{event.date}</span>
                        </div>
                        <div className="flex items-center text-sm">
                          <MapPin size={16} className="mr-2 text-primary" />
                          <span>{event.location}</span>
                        </div>
                      </div>
                      
                      <button 
                        className="inline-flex items-center text-primary text-sm hover:underline mt-2"
                        onClick={(e) => {
                          e.stopPropagation();
                          setSelectedEvent(event);
                        }}
                      >
                        View Details
                        <ChevronDown size={14} className="ml-1" />
                      </button>
                    </div>
                  </AnimatedCard>
                </motion.div>
              ))}
            </div>
            
            {events.length > 3 && (
              <div className="flex justify-center mt-6">
                <button
                  onClick={() => setShowMore(!showMore)}
                  className="glass-morphism px-4 py-2 rounded-lg flex items-center text-sm hover:bg-primary/10 transition-colors"
                >
                  {showMore ? (
                    <>
                      <ChevronUp size={16} className="mr-2" />
                      Show Less
                    </>
                  ) : (
                    <>
                      <ChevronDown size={16} className="mr-2" />
                      Show More Events
                    </>
                  )}
                </button>
              </div>
            )}
          </>
        )}

        {/* Image viewer dialog */}
        {selectedImage && (
          <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
            <DialogContent className="max-w-4xl max-h-[90vh] overflow-hidden p-0 bg-transparent border-none">
              <div className="relative w-full h-full flex items-center justify-center">
                <img 
                  src={selectedImage} 
                  alt="Selected event image" 
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

export default Events;