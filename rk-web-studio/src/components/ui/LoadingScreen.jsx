import { motion } from 'framer-motion';

export default function LoadingScreen() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.6, ease: 'easeInOut' } }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-surface"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex items-center gap-3"
      >
        <div className="w-11 h-11 rounded-xl bg-mesh-primary flex items-center justify-center font-display font-bold text-white">
          RK
        </div>
        <span className="font-display font-semibold text-lg tracking-tight text-ink">
          Web Studio
        </span>
      </motion.div>
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
        className="mt-8 h-[2px] w-40 origin-left bg-mesh-primary rounded-full"
      />
    </motion.div>
  );
}
