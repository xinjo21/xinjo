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
  SiAdobepremierepro,
  SiAdobeaftereffects,
} from "react-icons/si";
import { Box, Center } from "@chakra-ui/react";
import { Typography } from "@material-tailwind/react";

export default function TechStack() {
  return (
    <Box
      w="100vw"
      h={["100%", '100vh']}
      px={[4, 8, 14]}
      className="bg-gradient-to-r from-indigo-900/10 via-blue-100/10 to-blue-900/10 p-10 "
    >
      <Typography variant="h3" className="mb-10">
        Technologies I use
      </Typography>
      <Center>
        <div className="flex flex-wrap gap-4 md:w-[70vw] w-[90vw] justify-center m-auto">
          <div className="flex flex-col rounded-md p-4 gap-4 md:w-96 w-[90vw]">
            <p className="text-center text-blue-500">Programming Languages </p>
            <div className="flex flex-wrap gap-6 justify-center">
              <SiJavascript className="w-12 h-12" />
              <SiTypescript className="w-12 h-12" />
              <SiPython className="w-12 h-12" />
              <SiCplusplus className="w-12 h-12" />
            </div>
          </div>
          <div className="flex flex-col rounded-md p-4 gap-4 md:w-96 w-[90vw]">
            <p className="text-center text-blue-500">Web/App Development</p>
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
            <p className="text-center text-blue-500">Database</p>
            <div className="flex flex-wrap gap-6 justify-center ">
              <SiMongodb className="w-12 h-12" />
              <SiMysql className="w-12 h-12" />
            </div>
          </div>

          <div className="flex flex-col rounded-md p-4 gap-4 md:w-96 w-[90vw]">
            <p className="text-center text-blue-500">
              Graphic Designing | UI/UX
            </p>
            <div className="flex flex-wrap gap-6 justify-center ">
              <SiAdobephotoshop className="w-12 h-12" />
              <SiAdobeillustrator className="w-12 h-12" />
              <SiAdobepremierepro className="w-12 h-12" />
              <SiAdobeaftereffects className="w-12 h-12" />
              <SiAdobexd className="w-12 h-12" />
              <SiFigma className="w-12 h-12" />
            </div>
          </div>

          <div className="flex flex-col rounded-md p-4 gap-4 md:w-96 w-[90vw]">
            <p className="text-center text-blue-500">Tools & Others</p>
            <div className="flex flex-wrap gap-6 justify-center ">
              <SiVisualstudio className="w-12 h-12" />
              <SiLinux className="w-12 h-12" />
              <SiRaspberrypi className="w-12 h-12" />
              <SiGit className="w-12 h-12" />
              <SiPowershell className="w-12 h-12" />
            </div>
          </div>
        </div>
      </Center>
    </Box>
  );
}