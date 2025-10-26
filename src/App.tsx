import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Hero } from './components/Hero';
import { EventDetails } from './components/EventDetails';
import { Schedule } from './components/Schedule';
import { Gallery } from './components/Gallery';
import { RSVP } from './components/RSVP';
import { Registry } from './components/Registry';
import { Footer } from './components/Footer';
import bghero from './assets/bg-hero.jpg';

import backgroundImage from 'figma:asset/3db6c423e96eaa957232a8cbc831b8cbf405470c.png';

export default function App() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0.7, 0.5, 0.3]);

  return (
    <div ref={containerRef} className="relative min-h-screen">
      {/* Parallax Background */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <motion.div 
          style={{ y }}
          className="absolute inset-0 h-[120vh] w-full"
        >
          <img 
            src={backgroundImage} 
            alt="Wedding background"
            className="h-full w-full object-fill"
          />
        </motion.div>
        {/* Dark overlay with gradient for readability */}
        <motion.div 
          style={{ opacity }}
          className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black/90"
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Hero />
        <EventDetails />
        <Schedule />
        <Gallery />
        <RSVP />
        <Registry />
        <Footer />
      </div>
    </div>
  );
}
