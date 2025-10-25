import { useState } from 'react';
import { motion } from 'motion/react';
import { Card } from './ui/card';
import { Button } from './ui/button';
import { Gift, Copy, Check, Smartphone, Building2 } from 'lucide-react';
import { toast } from 'sonner@2.0.3';

const paymentMethods = [
  {
    name: 'GCash',
    icon: Smartphone,
    accountName: 'Jan & Jona',
    accountNumber: '0968445383',
    description: 'Mobile payment via GCash',
    color: 'from-blue-600 to-blue-400'
  },
  {
    name: 'Landbank',
    icon: Building2,
    accountName: 'Jan & Jona',
    accountNumber: 'XXXX-XXXX-XXXX',
    description: 'Bank transfer or deposit',
    color: 'from-green-600 to-green-400'
  }
];

export function Registry() {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const copyToClipboard = (text: string, index: number) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopiedIndex(index);
      toast.success('Account number copied!', {
        description: 'Paste it in your payment app'
      });
      setTimeout(() => setCopiedIndex(null), 2000);
    });
  };

  return (
    <section className="py-20 px-4 bg-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-amber-500/20 text-amber-400 mb-6">
            <Gift className="w-8 h-8" />
          </div>
          <h2 className="mb-4 text-amber-400">Gift & Donations</h2>
          <p className="text-gray-300 max-w-2xl mx-auto">
            Your presence is the greatest gift, but if you wish to honor us with a monetary gift, you may send it through the following channels.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {paymentMethods.map((method, index) => {
            const Icon = method.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full bg-black/60 backdrop-blur-sm border-amber-600/30 hover:border-amber-500/50 transition-all">
                  <div className="space-y-4">
                    {/* Header with gradient icon */}
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${method.color}`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="text-amber-400">{method.name}</h3>
                        <p className="text-xs text-gray-500">{method.description}</p>
                      </div>
                    </div>

                    {/* Account Details */}
                    <div className="space-y-3 pt-2">
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Account Name</p>
                        <p className="text-gray-200">{method.accountName}</p>
                      </div>
                      
                      <div>
                        <p className="text-xs text-gray-500 mb-1">Account Number</p>
                        <div className="flex items-center gap-2">
                          <p className="text-gray-200 flex-grow">{method.accountNumber}</p>
                          <Button
                            size="sm"
                            variant="outline"
                            className="border-amber-600/50 text-amber-400 hover:bg-amber-500/10"
                            onClick={() => copyToClipboard(method.accountNumber, index)}
                          >
                            {copiedIndex === index ? (
                              <Check className="w-4 h-4" />
                            ) : (
                              <Copy className="w-4 h-4" />
                            )}
                          </Button>
                        </div>
                      </div>
                    </div>

                    {/* QR Code Placeholder */}
                    <div className="pt-4">
                      <div className="aspect-square w-full max-w-[200px] mx-auto bg-white rounded-lg p-4 flex items-center justify-center">
                        <div className="text-center">
                          <Icon className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                          <p className="text-xs text-gray-500">QR Code</p>
                          <p className="text-xs text-gray-400">Coming Soon</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-12 text-center"
        >
          <Card className="p-6 bg-amber-900/20 border-amber-600/30 max-w-2xl mx-auto">
            <p className="text-gray-300">
              <strong className="text-amber-400">Note:</strong> Please include your name in the transaction reference for our records. Thank you for your generosity!
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
