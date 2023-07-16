import { SiLinkedin, SiGithub, SiBehance } from "react-icons/si";
import { BsChevronCompactDown } from "react-icons/bs";

export default function About() {
  return (
    <>
      <div className="flex items-end h-[90vh] w-screen p-6 md:p-24 bg-zinc-900 justify-between">
        <div>
          <p className="font-bold text-2xl mb-2">
            fullstack web developer & graphic designer
          </p>
          <div className="flex text-4xl">
            <p>
              I am <strong>El-Razin Jo</strong>, based on the Philippines
            </p>
          </div>
          <p>not a pro but pwede na</p> 
        </div>
        <div className="h-full flex flex-col gap-8 place-content-center color-gray-500">
          <SiGithub className="w-7 h-7" />
          <SiLinkedin className="w-7 h-7" />
          <SiBehance className="w-7 h-7" />
        </div>
      </div>
      <p className="h-[10vh] pt-2 font-mono tracking-widest flex flex-col place-items-center">
        scroll down <BsChevronCompactDown className="h-6 w-6" />
      </p>
    </>
  );
}
