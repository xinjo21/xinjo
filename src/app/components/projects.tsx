import DetechFish from "../../../public/projects/detechfish.png";
import StaMaria from "../../../public/projects/stamaria.png";

import Image from "next/image";
import { Box, Center, Flex } from "@chakra-ui/react";
import {
  Card,
  CardHeader,
  CardBody,
  Typography,
} from "@material-tailwind/react";

type ProjectType = {
  no: number;
  name: string;
  technologies: string;
  definition: string;
  image?: any;
};

const projectList: ProjectType[] = [
  {
    no: 1,
    name: "DetechFish",
    technologies:
      "JavaScript, Python, ReactJS, ElectronJS, TailwindCSS, Flask, RaspberryPi",
    definition:
      "A software and hardware-based application to assist local fisherfolks in fish detection underwater and seamless logging of detected fish groups and their corresponding location into a database.",
    image: DetechFish,
  },
  {
    no: 2,
    name: "Sta. Maria Barangay Information System",
    technologies: "JavaScript, ReactJS, NodeJS, ExpressJS, MongoDB",
    definition:
      "Develop and implemented a full-stack web application to efficiently store and manage barangay information, including residents, business and addresses.",
    image: StaMaria,
  },
  {
    no: 3,
    name: "CTE Information System",
    technologies: "JavaScript, ReactJS, PHP, Laravel, MySQL",
    definition:
      "Develop web-based information system for storing faculty members’ personal data, their class schedule and documents",
    image: "",
  },
  {
    no: 4,
    name: "RFID Payment",
    technologies: "Python, Raspberry Pi, RFID Module",
    definition:
      "Designed and implemented a RFID-based payment system to streamline transaction in the school canteen",
    image: "",
  },
];

export default function Project() {
  return (
    <Box
      w="100vw"
      h={["100%", "100vh"]}
      px={[4, 8, 14]}
      className="bg-gradient-to-r from-indigo-900/10 via-blue-100/10 to-blue-900/10 p-10 "
    >
      <Typography variant="h3" className="mb-7">Projects</Typography>
      <Flex gap={4} flexDir={["column", "column", "column", "row"]} my={20} justifyContent='center' alignContent='center'>
        {projectList.map((project: ProjectType) => (
          <Card key={project.no} className="w-full max-w-[26rem] shadow-lg">
            <CardHeader floated={false} color="blue-gray" className="h-[215px]">
              <Image
                src={project.image}
                alt={`Logo of ${project.name}`}
                fill={false}
              />
            </CardHeader>
            <CardBody>
              <div className="mb-3 flex items-center justify-between">
                <Typography
                  variant="h5"
                  color="blue-gray"
                  className="font-medium"
                >
                  {project.name}
                </Typography>
              </div>
              <Typography color="gray">{project.definition}</Typography>
              <Typography className="mt-8 text-sm text-blue-500">
                Technologies:
              </Typography>
              <Typography className="text-sm ">
                {project.technologies}
              </Typography>
            </CardBody>
          </Card>
        ))}
      </Flex>
    </Box>
  );
}
/* 
export default function Project() {
  return (
    <>
      <p className="text-2xl font-bold m-5">Works</p>
      <div className="md:flex">
        {projectList &&
          projectList.map((project: ProjectType) => (
            <ProjectCard key={project.no} Project={project} />
          ))}
      </div>
    </>
  );
}

function ProjectCard({ Project }: ProjectType) {
  return (
    <div className="m-5 w-[400px] h-[500px] bg-neutral-900 rounded-md border border-gray-700">
      <div className="w-[400px] h-[250px] bg-neutral-100 rounded-md"></div>
      <div className="h-[250px] p-5 flex flex-col justify-between">
        <div>
          <p className="text-lg font-bold mb-2">{Project.name}</p>
          <p className="mb-2">{Project.definition}</p>
        </div>
        <div>
          <p className="text-sm text-neutral-400">Technologies:</p>
          <p className="text-sm">{Project.technologies}</p>
        </div>
      </div>
    </div>
  );
}
 */
