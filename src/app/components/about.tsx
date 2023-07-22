import { SiLinkedin, SiGithub, SiBehance } from "react-icons/si";
import { BsChevronCompactDown } from "react-icons/bs";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className=" h-screen w-screen  bg-zinc-900  ">
      <div className="flex items-end p-6 h-[90vh] md:p-24 justify-between">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
        >
          <p className="font-bold text-2xl mb-2">
            fullstack web developer & graphic designer
          </p>
          <div className="flex text-4xl">
            <p>
              I am <strong className="text-indigo-500">El-Razin Jo</strong>,
              based in the Philippines
            </p>
          </div>
          <p>Currently looking for a work. resume</p>
        </motion.div>

        <motion.div
          initial={{ x: 150 }}
          animate={{ x: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="z-10 h-full flex flex-col gap-8 place-content-center color-gray-500"
        >
          <a href="https://github.com/xinjo21" target="_blank">
            <SiGithub className="w-7 h-7" />
          </a>
          <a href="https://www.linkedin.com/in/elrazinjo/" target="_blank">
            <SiLinkedin className="w-7 h-7" />
          </a>
          <a href="http://be.net/xinjo21" target="_blank">
            <SiBehance className="w-7 h-7" />
          </a>
        </motion.div>
      </div>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 100 }}
        transition={{
          duration: 0.8,
          delay: 0.5,
          ease: [0, 0.71, 0.2, 1.01],
        }}
        className="flex flex-col place-items-center h-[10vh] p-7"
      >
        <p className="font-mono tracking-widest">more</p>
        <BsChevronCompactDown className="h-6 w-6" />
      </motion.div>
    </div>
  );
}
