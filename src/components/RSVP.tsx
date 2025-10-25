import { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { toast } from 'sonner@2.0.3';
import { Heart } from 'lucide-react';
import emailjs from 'emailjs-com';
import confetti from 'canvas-confetti';

export function RSVP() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    attending: 'yes',
    guests: '1',
    dietaryRestrictions: '',
    message: ''
  });

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  // ✅ Validation function
  const validateForm = () => {
    if (!formData.name.trim()) {
      toast.error('Full name is required');
      return false;
    }
    if (!formData.email.trim()) {
      toast.error('Email address is required');
      return false;
    }
    // Basic email pattern
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      toast.error('Please enter a valid email address');
      return false;
    }
    if (formData.attending === 'yes' && (!formData.guests || formData.guests === '0')) {
      toast.error('Please select the number of guests');
      return false;
    }
    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Validate before sending
    if (!validateForm()) return;

    // ✅ Replace with your EmailJS credentials
   const serviceId = 'service_qwcfhi1';
    const templateId = 'template_odit78d';
    const publicKey = 'x2TQFcJ_uW2rrSMW3';

    emailjs.send(serviceId, templateId, formData, publicKey)
      .then(() => {
        toast.success('RSVP Submitted!', {
          description: 'Your response has been sent successfully. Thank you!'
        });

        // 🎊 Trigger confetti
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#fbbf24', '#ffffff', '#000000']
        });

        // Reset form
        setFormData({
          name: '',
          email: '',
          attending: 'yes',
          guests: '1',
          dietaryRestrictions: '',
          message: ''
        });
      })
      .catch((error) => {
        console.error('EmailJS Error:', error);
        toast.error('Submission Failed', {
          description: 'Something went wrong. Please try again later.'
        });
      });
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-b from-gray-900 to-black">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-500/20 text-amber-400 mb-6">
            <Heart className="w-8 h-8 fill-amber-400" />
          </div>
          <h2 className="mb-4 text-amber-400 text-3xl font-semibold">RSVP</h2>
          <p className="text-gray-300">
            Kindly respond by December 10, 2025
          </p>
        </motion.div>

        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card className="p-8 bg-black/60 backdrop-blur-sm border-amber-600/30">
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Full Name */}
              <div className="space-y-2">
                <Label htmlFor="name" className="text-gray-300">Full Name *</Label>
                <Input
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => handleChange('name', e.target.value)}
                  placeholder="Enter your name"
                  className="border-amber-600/30 bg-black/40 text-gray-100 focus:border-amber-500 placeholder:text-gray-500"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-300">Email *</Label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => handleChange('email', e.target.value)}
                  placeholder="your.email@example.com"
                  className="border-amber-600/30 bg-black/40 text-gray-100 focus:border-amber-500 placeholder:text-gray-500"
                />
              </div>

              {/* Attending */}
              <div className="space-y-3">
                <Label className="text-gray-300">Will you be attending? *</Label>
                <RadioGroup
                  value={formData.attending}
                  onValueChange={(value) => handleChange('attending', value)}
                  className="flex gap-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="yes" id="yes" className="border-amber-600/50 text-amber-400" />
                    <Label htmlFor="yes" className="cursor-pointer text-gray-300">
                      Joyfully accepts
                    </Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="no" id="no" className="border-amber-600/50 text-amber-400" />
                    <Label htmlFor="no" className="cursor-pointer text-gray-300">
                      Regretfully declines
                    </Label>
                  </div>
                </RadioGroup>
              </div>

              {/* Conditional Guest Info */}
              {formData.attending === 'yes' && (
                <>
                  <div className="space-y-2">
                    <Label htmlFor="guests" className="text-gray-300">Number of Guests *</Label>
                    <Select
                      value={formData.guests}
                      onValueChange={(value) => handleChange('guests', value)}
                    >
                      <SelectTrigger className="border-amber-600/30 bg-black/40 text-gray-100 focus:border-amber-500">
                        <SelectValue placeholder="Select guests" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Guest</SelectItem>
                        <SelectItem value="2">2 Guests</SelectItem>
                        <SelectItem value="3">3 Guests</SelectItem>
                        <SelectItem value="4">4 Guests</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="dietary" className="text-gray-300">Dietary Restrictions</Label>
                    <Input
                      id="dietary"
                      value={formData.dietaryRestrictions}
                      onChange={(e) => handleChange('dietaryRestrictions', e.target.value)}
                      placeholder="e.g., Vegetarian, Gluten-free, Allergies"
                      className="border-amber-600/30 bg-black/40 text-gray-100 focus:border-amber-500 placeholder:text-gray-500"
                    />
                  </div>
                </>
              )}

              {/* Message */}
              <div className="space-y-2">
                <Label htmlFor="message" className="text-gray-300">Message to the Couple</Label>
                <Textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => handleChange('message', e.target.value)}
                  placeholder="Share your well wishes..."
                  className="border-amber-600/30 bg-black/40 text-gray-100 focus:border-amber-500 placeholder:text-gray-500 min-h-24"
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full bg-amber-600 hover:bg-amber-700 text-black font-semibold"
              >
                Submit RSVP
              </Button>
            </form>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
