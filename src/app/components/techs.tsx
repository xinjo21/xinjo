import {
  SiJavascript,
  SiTypescript,
  SiPython,
  SiReact,
  SiNodedotjs,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiChakraui,
  SiRaspberrypi,
  SiLinux,
  SiVisualstudio,
  SiNextdotjs,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiGit,
  SiDjango,
  SiFlask,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobexd,
  SiFigma,
  SiPowershell,
  SiCplusplus,
  SiElectron,
} from "react-icons/si";
import { motion } from "framer-motion";

export default function TechStack() {
  return (
    <div className="bg-neutral-900 w-[100vw] mt-20 pb-20">
      <p className="text-2xl font-bold m-5 text-center mt-10">
        Technologies I use
      </p>

      <div className="flex flex-wrap gap-4 md:w-[70vw] w-[90vw] justify-center m-auto">
        <div className="flex flex-col rounded-md p-4 gap-4 md:w-96 w-[90vw]">
          <p className="text-center text-gray-400">Programming Languages </p>
          <div className="flex flex-wrap gap-6 justify-center">
            <SiJavascript className="w-12 h-12" />
            <SiTypescript className="w-12 h-12" />
            <SiPython className="w-12 h-12" />
            <SiCplusplus className="w-12 h-12" />
          </div>
        </div>
        <div className="flex flex-col rounded-md p-4 gap-4 md:w-96 w-[90vw]">
          <p className="text-center text-gray-400">Web/App Development</p>
          <div className="flex flex-wrap gap-6 justify-center ">
            <SiHtml5 className="w-12 h-12" />
            <SiCss3 className="w-12 h-12" />
            <SiNodedotjs className="w-12 h-12" />
            <SiReact className="w-12 h-12" />
            <SiNextdotjs className="w-12 h-12" />
            <SiExpress className="w-12 h-12" />
            <SiDjango className="w-12 h-12" />
            <SiFlask className="w-12 h-12" />
            <SiTailwindcss className="w-12 h-12" />
            <SiChakraui className="w-12 h-12" />
            <SiElectron className="w-12 h-12" />
          </div>
        </div>

        <div className="flex flex-col rounded-md p-4 gap-4 md:w-96 w-[90vw]">
          <p className="text-center text-gray-400">Database</p>
          <div className="flex flex-wrap gap-6 justify-center ">
            <SiMongodb className="w-12 h-12" />
            <SiMysql className="w-12 h-12" />
          </div>
        </div>

        <div className="flex flex-col rounded-md p-4 gap-4 md:w-96 w-[90vw]">
          <p className="text-center text-gray-400">Graphic Designing | UI/UX</p>
          <div className="flex flex-wrap gap-6 justify-center ">
            <SiAdobephotoshop className="w-12 h-12" />
            <SiAdobeillustrator className="w-12 h-12" />
            <SiAdobexd className="w-12 h-12" />
            <SiFigma className="w-12 h-12" />
          </div>
        </div>

        <div className="flex flex-col rounded-md p-4 gap-4 md:w-96 w-[90vw]">
          <p className="text-center text-gray-400">Tools & Others</p>
          <div className="flex flex-wrap gap-6 justify-center ">
            <SiVisualstudio className="w-12 h-12" />
            <SiLinux className="w-12 h-12" />
            <SiRaspberrypi className="w-12 h-12" />
            <SiGit className="w-12 h-12" />
            <SiPowershell className="w-12 h-12" />
          </div>
        </div>
      </div>
    </div>
  );
}
