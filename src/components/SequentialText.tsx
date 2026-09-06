import { motion } from 'framer-motion';

export default function SequentialText() {
  const line1 = "Empowering Ethiopian";
  const line2 = "students with global opportunities";

  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.1 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 20,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
      },
    },
  };

  const renderLine = (text: string, customDelay: number, className: string) => (
    <motion.div
      className={`flex flex-wrap justify-center ${className}`}
      variants={container}
      initial="hidden"
      animate="visible"
      custom={customDelay}
    >
      {text.split(" ").map((word, wordIndex) => (
        <span key={wordIndex} className="inline-flex overflow-hidden mr-[0.25em] last:mr-0">
          {Array.from(word).map((letter, letterIndex) => (
            <motion.span variants={child} key={`${wordIndex}-${letterIndex}`}>
              {letter}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.div>
  );

  return (
    <h1 className="text-6xl md:text-8xl font-sans font-bold mb-6 tracking-tighter flex flex-col items-center">
      {renderLine(line1, 1, "text-white")}
      {renderLine(line2, 2, "text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-indigo-400 pb-2")}
    </h1>
  );
}
