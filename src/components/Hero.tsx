import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToDetails = () => {
    document.getElementById('event-details')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="src/assets/bg-hero.jpg"
          alt="Wedding couple"
          className="w-full h-full object-fill"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/5 via-black/10 to-black/50" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: 'easeOut' }}
        className="relative z-10 text-center text-white px-10"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.5, y: -50 }}
          animate={{ 
            opacity: 1, 
            scale: 1, 
            y: 0,
          }}
          transition={{ 
            duration: 1.2, 
            delay: 0.3,
            type: 'spring',
            bounce: .5,
          }}
          className="mb-100 text-amber-400"
          style={{ fontFamily: 'var(--font-memories)' }}

    
        >
          <motion.span
            animate={{
              textShadow: [
                '0 0 20px rgba(251, 191, 36, 0.5)',
                '0 0 40px rgba(251, 191, 36, 0.8)',
                '0 0 20px rgba(251, 191, 36, 0.5)'
              ]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
          >
            <span style={{ fontSize: '4.7rem' }}>Jan & Jona</span>
          </motion.span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="space-y-2"
        >
          <p className="text-xl text-amber-200">We're Getting Married!</p>
          <p className="text-lg text-amber-100">January 10, 2026</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-5"
        >
          <p className="text-base text-amber-200">Join us as we celebrate our love</p>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToDetails}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { duration: 1, delay: 1.5 },
          y: { duration: 2, repeat: Infinity, ease: 'easeInOut' }
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-amber-400 hover:text-amber-300 transition-colors"
        aria-label="Scroll to event details"
      >
        <ChevronDown className="w-8 h-8" />
      </motion.button>
    </div>
  );
}
