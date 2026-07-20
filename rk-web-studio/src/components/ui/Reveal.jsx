import { motion } from 'framer-motion';

/**
 * Wraps children in a blur/fade/slide-up reveal that triggers once on scroll.
 * dir: 'up' | 'left' | 'right' | 'none'
 */
export default function Reveal({
  children,
  delay = 0,
  dir = 'up',
  duration = 0.7,
  className = '',
  as = 'div',
}) {
  const offsets = {
    up: { y: 28, x: 0 },
    left: { y: 0, x: -32 },
    right: { y: 0, x: 32 },
    none: { y: 0, x: 0 },
  };
  const { y, x } = offsets[dir];
  const Comp = motion[as] || motion.div;

  return (
    <Comp
      initial={{ opacity: 0, y, x, filter: 'blur(6px)' }}
      whileInView={{ opacity: 1, y: 0, x: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </Comp>
  );
}
