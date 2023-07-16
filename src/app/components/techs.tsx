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
    <>
      <p className="text-2xl font-bold m-5">Technologies I use</p>

      <div className="flex flex-wrap flex-col gap-4 md:w-[70vw] w-[90vw]">
        <div className="flex flex-col bg-zinc-900 rounded-md p-4 gap-4">
          <p className="font-bold">Programming Languages </p>
          <div className="flex flex-wrap gap-4">
            <SiJavascript className="w-12 h-12" />
            <SiTypescript className="w-12 h-12" />
            <SiPython className="w-12 h-12" />
            <SiCplusplus className="w-12 h-12" />
          </div>
        </div>

        <div className="flex flex-col bg-zinc-900 rounded-md p-4 gap-4">
          <p className="font-bold">Web/App Development</p>
          <div className="flex flex-wrap gap-4">
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

        <div className="flex flex-col bg-zinc-900 rounded-md p-4 gap-4">
          <p className="font-bold">Database</p>
          <div className="flex flex-wrap gap-4">
            <SiMongodb className="w-12 h-12" />
            <SiMysql className="w-12 h-12" />
          </div>
        </div>

        <div className="flex flex-col bg-zinc-900 rounded-md p-4 gap-4">
          <p className="font-bold">Graphic Designing | UI/UX</p>
          <div className="flex flex-wrap gap-4">
            <SiAdobephotoshop className="w-12 h-12" />
            <SiAdobeillustrator className="w-12 h-12" />
            <SiAdobexd className="w-12 h-12" />
            <SiFigma className="w-12 h-12" />
          </div>
        </div>

        <div className="flex flex-col bg-zinc-900 rounded-md p-4 gap-4">
          <p className="font-bold">Tools & Others</p>
          <div className="flex flex-wrap gap-4">
            <SiVisualstudio className="w-12 h-12" />
            <SiLinux className="w-12 h-12" />
            <SiRaspberrypi className="w-12 h-12" />
            <SiGit className="w-12 h-12" />
            <SiPowershell className="w-12 h-12" />
          </div>
        </div>
      </div>
    </>
  );
}
