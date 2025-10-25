import { motion } from 'motion/react';
import { Calendar, MapPin, Clock, ExternalLink } from 'lucide-react';
import { Card } from './ui/card';
import { Separator } from './ui/separator';
import { Button } from './ui/button';

export function EventDetails() {
  const venueAddress = "26JM+38M, Maramba Blvd, Lingayen, Pangasinan";
  const googleMapsUrl = "https://www.google.com/maps/search/?api=1&query=26JM%2B38M%2C+Maramba+Blvd%2C+Lingayen%2C+Pangasinan";
  
  return (
    <section id="event-details" className="py-20 px-4 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="mb-4 text-amber-400">Wedding Details</h2>
        <p className="text-gray-300 max-w-2xl mx-auto">
          We invite you to share in our joy as we exchange vows and celebrate the beginning of our journey together.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Ceremony */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-8 h-full bg-black/60 backdrop-blur-sm border-amber-600/30">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-500/20 text-amber-400 mb-4">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-amber-400 mb-2">Ceremony</h3>
            </div>

            <Separator className="mb-6 bg-amber-600/30" />

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-100">3:00 PM</p>
                  <p className="text-sm text-gray-400">Ceremony begins promptly</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-100">{venueAddress}</p>
                  <Button
                    variant="link"
                    className="text-amber-400 hover:text-amber-300 p-0 h-auto text-sm mt-2"
                    onClick={() => window.open(googleMapsUrl, '_blank')}
                  >
                    View on Google Maps
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* Reception */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Card className="p-8 h-full bg-black/60 backdrop-blur-sm border-amber-600/30">
            <div className="text-center mb-6">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-500/20 text-amber-400 mb-4">
                <Calendar className="w-8 h-8" />
              </div>
              <h3 className="text-amber-400 mb-2">Reception</h3>
            </div>

            <Separator className="mb-6 bg-amber-600/30" />

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <Clock className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-100">5:00 PM</p>
                  <p className="text-sm text-gray-400">Cocktails, dinner & dancing</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-amber-400 mt-1 flex-shrink-0" />
                <div>
                  <p className="text-gray-100">{venueAddress}</p>
                  <Button
                    variant="link"
                    className="text-amber-400 hover:text-amber-300 p-0 h-auto text-sm mt-2"
                    onClick={() => window.open(googleMapsUrl, '_blank')}
                  >
                    View on Google Maps
                    <ExternalLink className="w-3 h-3 ml-1" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Google Map */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="mt-12"
      >
        <Card className="p-2 bg-black/60 backdrop-blur-sm border-amber-600/30 overflow-hidden">
          <div className="aspect-video w-full rounded-lg overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3842.2!2d120.2333!3d16.03!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDAxJzU0LjgiTiAxMjDCsDE0JzAwLjAiRQ!5e0!3m2!1sen!2sph!4v1234567890!5m2!1sen!2sph&q=26JM%2B38M%2C+Maramba+Blvd%2C+Lingayen%2C+Pangasinan"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Wedding Venue Location"
            ></iframe>
          </div>
        </Card>
      </motion.div>

      {/* Additional Info */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-12 text-center"
      >
        <Card className="p-6 bg-amber-900/20 border-amber-600/30 max-w-2xl mx-auto">
          <p className="text-gray-300">
            <strong className="text-amber-400">Dress Code:</strong> Formal attire
          </p>
          <p className="text-gray-300 mt-2">
            <strong className="text-amber-400">Note:</strong> Ceremony and reception at the same venue
          </p>
        </Card>
      </motion.div>
    </section>
  );
}
