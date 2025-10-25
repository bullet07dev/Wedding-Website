import { motion } from 'motion/react';
import { Card } from './ui/card';

const scheduleItems = [
  { time: '2:30 PM', event: 'Guest Arrival', description: 'Welcome & seating at The Grand Chapel' },
  { time: '3:00 PM', event: 'Ceremony', description: 'Exchange of vows' },
  { time: '4:00 PM', event: 'Cocktail Hour', description: 'Light refreshments & mingling' },
  { time: '5:00 PM', event: 'Reception Begins', description: 'Grand entrance at Rosewood Ballroom' },
  { time: '5:30 PM', event: 'Dinner Service', description: 'Three-course plated dinner' },
  { time: '7:00 PM', event: 'First Dance', description: 'Followed by parent dances' },
  { time: '7:30 PM', event: 'Dancing & Celebration', description: 'Dance the night away' },
  { time: '10:00 PM', event: 'Send-Off', description: 'Sparkler exit' }
];

export function Schedule() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="mb-4 text-amber-400">Schedule of Events</h2>
          <p className="text-gray-300">
            Here's what to expect on our special day
          </p>
        </motion.div>

        <div className="space-y-4">
          {scheduleItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-6 bg-black/60 backdrop-blur-sm border-amber-600/30 hover:border-amber-500/50 transition-colors">
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0 w-20">
                    <div className="inline-flex items-center justify-center px-3 py-2 rounded-full bg-amber-500/20 text-amber-400">
                      {item.time}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h4 className="text-gray-100 mb-1">{item.event}</h4>
                    <p className="text-sm text-gray-400">{item.description}</p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
