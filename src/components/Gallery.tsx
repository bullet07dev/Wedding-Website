import { motion } from 'motion/react';
import journeyImage1 from 'figma:asset/e5bf881f838ec188c82358e995543717ecd0108a.png';
import journeyImage2 from 'figma:asset/c78640b2ff49be42d67d9c33538297e3b14703b9.png';
import journeyImage3 from 'figma:asset/51681f9dd8664a695d3f882372e8c340d8460612.png';

const galleryImages = [
  {
    src: journeyImage1,
    alt: 'Jan & Jona in the snow'
  },
  {
    src: journeyImage2,
    alt: 'The proposal moment'
  },
  {
    src: journeyImage3,
    alt: 'The engagement ring'
  }
];

export function Gallery() {
  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-amber-400">Our Journey</h2>
          <p className="text-gray-300">
            A glimpse into our love story
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="relative aspect-square overflow-hidden rounded-lg shadow-lg border-2 border-amber-600/30"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
