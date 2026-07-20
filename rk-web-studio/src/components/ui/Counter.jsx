import { useEffect, useRef } from 'react';
import { useInView, useMotionValue, useSpring } from 'framer-motion';

export default function Counter({ to, suffix = '', prefix = '', duration = 2 }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: duration * 1000, bounce: 0 });

  useEffect(() => {
    if (isInView) motionValue.set(to);
  }, [isInView, to, motionValue]);

  useEffect(() => {
    return spring.on('change', (v) => {
      if (ref.current) ref.current.textContent = `${prefix}${Math.floor(v)}${suffix}`;
    });
  }, [spring, prefix, suffix]);

  return <span ref={ref}>{prefix}0{suffix}</span>;
}
