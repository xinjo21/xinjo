import Image from "next/image";
import XinJoLogo from "../images/xinjo-logo.svg";
import ProfilePic from "../images/xinjo-pic.png";
import { Box, Center, Flex, Spacer, HStack } from "@chakra-ui/react";
import {
  Typography,
  Button,
  Card,
  CardBody,
  CardFooter,
} from "@material-tailwind/react";
import { SiLinkedin, SiGithub, SiBehance } from "react-icons/si";
import { motion } from "framer-motion";

const RESUME_LINK =
  "https://drive.google.com/file/d/1srFIMenzKFayA18Dr52wj8CB33X2j-VB/view?usp=drive_link";

const links = [
  {
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/elrazinjo/",
  },
  {
    label: "Github",
    link: "https://github.com/xinjo21",
  },
  {
    label: "Facebook",
    link: "https://fb.com/xinjo21",
  },
  {
    label: "Instagram",
    link: "https://www.instagram.com/xinjo_/",
  },
  {
    label: "Behance",
    link: "http://be.net/xinjo21",
  },
];

export default function About() {
  return (
    <Box
      w="100vw"
      px={[2, 8, 14]}
      className="bg-gradient-to-r from-indigo-900/10 via-blue-100/0 to-blue-900/10"
    >
      <Flex h="100vh" flexDir={["column", "column", "row"]}>
        <Center w={["100%", "25%"]} flexDir="column">
          <motion.div
            initial={{ x: -500 }}
            animate={{ x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <Typography className="font-bold text-xl md:text-2xl text-left mt-6 w-full">
              Transforming Ideas into{" "}
              <a className="underline decoration-blue-500 decoration-4">
                Seamless Digital Experiences
              </a>
              {"  "}💻
            </Typography>
            <Typography className="font-light text-base md:text-lg text-left w-full">
              based in Zamboanga, Philippines 🌴
            </Typography>
          </motion.div>
        </Center>

        <Center
          flexDir="column"
          w={["100%", "50%"]}
          h={["70%", "100%"]}
          py={[0, 14]}
        >
          <Image
            priority
            src={ProfilePic}
            alt="Picture of El-Razin"
            className="fill absolute -z-10 top-60 w-auto h-auto md:h-screen"
          />
          <Image
            priority
            src={XinJoLogo}
            alt="Logo of XinJo"
            className="fill absolute -z-20 top-52 right-28 md:w-auto md:h-screen opacity-20"
          />
          <motion.div
            initial={{ y: -500 }}
            animate={{ y: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
            className="text-center"
          >
            <Typography className="font-normal text-lg text-gray-700 mt-4 md:mt-14">
              Hello
            </Typography>
            <Typography className="font-black text-4xl md:text-6xl tracking-normal">
              {`I'm El-Razin Jo`}
            </Typography>
            <Typography className="font-bold text-lg  text-blue-500">
              Full Stack Web Developer & Graphic Designer
            </Typography>
          </motion.div>

          <Spacer />

          <Button
            color="blue"
            variant="filled"
            size="lg"
            className="rounded-full shadow-2xl shadow-blue-400 mb-20 sm:mb-10 lg:mb-20"
            onClick={() => open(RESUME_LINK)}
          >
            Download Resume
          </Button>
        </Center>

        <Center w={["100%", "25%"]} flexDir="column" py={[0, 14]}>
          <Spacer />
          <motion.div
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            transition={{
              duration: 0.8,
              delay: 0.5,
              ease: [0, 0.71, 0.2, 1.01],
            }}
          >
            <Box className="text-right p-5 mb-10 md:mb-0">
              <p className="text-sm md:text-base">
                I am open for projects, speeches, or a chat.
              </p>
              <p className="font-medium text-base md:text-lg">
                Get in touch with me
              </p>
              <a
                className="text-blue-500 text-base md:text-lg"
                href="mailto:elrazinmjo@gmail.com"
              >
                ✉️ elrazinmjo@gmail.com
              </a>
              <Box className="flex gap-2 place-content-center text-xs lg:text-sm">
                {links.map(({ label, link }) => (
                  <>
                    <a
                      key={label}
                      className="hover:text-blue-500"
                      href={link}
                      target="_blank"
                    >
                      {label}
                    </a>
                    •
                  </>
                ))}
              </Box>
              <p className="tracking-wide text-xs lg:text-sm font-bold mt-5">
                © 2023 El-Razin Jo
              </p>
            </Box>
          </motion.div>
        </Center>
      </Flex>
    </Box>
  );
}
