import { SiLinkedin, SiGithub, SiBehance } from "react-icons/si";
import { BsChevronCompactDown } from "react-icons/bs";

export default function About() {
  return (
    <div className=" h-screen w-screen  bg-zinc-900  ">
      <div className="flex items-end p-6 h-[90vh] md:p-24 justify-between">
        <div>
          <p className="font-bold text-2xl mb-2">
            fullstack web developer & graphic designer
          </p>
          <div className="flex text-4xl">
            <p>
              I am <strong>El-Razin Jo</strong>, based in the Philippines
            </p>
          </div>
          <p>Currently looking for a work. resume</p>
        </div>
        <div className="z-10 h-full flex flex-col gap-8 place-content-center color-gray-500">
          <a href="https://github.com/xinjo21" target="_blank">
            <SiGithub className="w-7 h-7" />
          </a>
          <a href="https://www.linkedin.com/in/elrazinjo/" target="_blank">
            <SiLinkedin className="w-7 h-7" />
          </a>
          <a href="http://be.net/xinjo21" target="_blank">
            <SiBehance className="w-7 h-7" />
          </a>
        </div>
      </div>
      <div className="flex flex-col place-items-center h-[10vh] p-7">
        <p className="font-mono tracking-widest">more</p>
        <BsChevronCompactDown className="h-6 w-6" />
      </div>
    </div>
  );
}
