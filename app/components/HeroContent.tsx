"use client";

import { motion, type Variants } from "framer-motion";

interface HeroContentProps {
  badge?: string;
  headingLine1: string;
  headingLine2: string;
  subtitle: string;
  children?: React.ReactNode;
}

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function HeroContent({
  badge,
  headingLine1,
  headingLine2,
  subtitle,
  children,
}: HeroContentProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col items-center text-center"
    >
<motion.h1
        variants={itemVariants}
        className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight mb-5 [text-shadow:0_2px_12px_rgba(0,0,0,0.6)]"
      >
        <span className="text-white">{headingLine1}</span>
        <br />
        <span className="text-white">
          {headingLine2}
        </span>
      </motion.h1>

      <motion.p
        variants={itemVariants}
        className="text-base md:text-lg lg:text-xl text-white/90 leading-relaxed max-w-2xl [text-shadow:0_1px_8px_rgba(0,0,0,0.7)]"
      >
        {subtitle}
      </motion.p>

      {children && (
        <motion.div variants={itemVariants} className="mt-8">
          {children}
        </motion.div>
      )}
    </motion.div>
  );
}
