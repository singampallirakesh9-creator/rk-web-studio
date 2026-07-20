import { MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919182285902?text=Hi%20Rakesh%2C%20I%27d%20like%20a%20website%20for%20my%20business"
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.6, type: 'spring', stiffness: 200, damping: 16 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.94 }}
      className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full bg-[#25D366] shadow-[0_8px_30px_rgba(37,211,102,0.5)]"
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] animate-pulse-ring" />
      <MessageCircle className="w-6 h-6 text-white relative z-10" strokeWidth={2.2} />
    </motion.a>
  );
}
