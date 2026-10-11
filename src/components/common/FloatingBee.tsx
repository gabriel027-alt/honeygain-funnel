'use client';

import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';

export function FloatingBee() {
  const { scrollYProgress } = useScroll();

  const x = useTransform(scrollYProgress, [0, 0.22, 0.48, 0.72, 1], ['65vw', '8vw', '74vw', '15vw', '45vw']);
  const y = useTransform(scrollYProgress, [0, 0.22, 0.48, 0.72, 1], ['18vh', '38vh', '32vh', '50vh', '68vh']);
  const rotate = useTransform(scrollYProgress, [0, 0.22, 0.48, 0.72, 1], [0, -12, 10, -8, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.22, 0.48, 0.72, 1], [1, 0.85, 1.05, 0.9, 1.25]);

  return (
    <motion.div
      style={{ x, y, rotate, scale }}
      className="fixed top-0 left-0 z-50 pointer-events-none hidden md:block"
    >
      <motion.div
        animate={{ y: [-6, 6, -6], rotate: [-2, 2, -2] }}
        transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
        className="w-36 lg:w-44 h-auto drop-shadow-[0_0_35px_rgba(0,230,118,0.5)]"
      >
        <Image
          src="/bee-isolated.png"
          alt="Abelha Honeygain 3D"
          width={200}
          height={200}
          priority
          className="w-full h-auto object-contain mix-blend-screen"
        />
      </motion.div>
    </motion.div>
  );
}

export default FloatingBee;