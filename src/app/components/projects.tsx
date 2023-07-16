type ProjectType = {
  no: number;
  name: string;
  technologies: string;
  definition: string;
  image?: string;
};

const projectList: ProjectType[] = [
  {
    no: 1,
    name: "DetechFish",
    technologies:
      "JavaScript, Python, ReactJS, ElectronJS, TailwindCSS, Flask, RaspberryPi",
    definition:
      "Device that helps the fisherman see and detect fish underwater",
    image: "",
  },
  {
    no: 2,
    name: "Sta. Maria Barangay Information System",
    technologies: "JavaScript, ReactJS, NodeJS, ExpressJS, MongoDB",
    definition: "Full stack web application that stores barangay information",
    image: "",
  },
  {
    no: 3,
    name: "RFID Payment",
    technologies: "Python, Raspberry Pi, RFID Module",
    definition: "A beep card for payments in school canteen and/or jeepney",
    image: "",
  },
];

export default function Project() {
  return (
    <>
      <p className="text-2xl font-bold m-5">Projects</p>
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
    <div className="m-5 w-[400px] h-[440px] bg-zinc-900 rounded-md">
      <div className="w-[400px] h-[250px] bg-zinc-100 rounded-md"></div>
      <div className=" p-5 flex flex-col">
        <p className="text-lg font-bold mb-2">{Project.name}</p>
        <p className="mb-2">{Project.definition}</p>
        <div>
          <p className="text-sm text-zinc-400">Technologies:</p>
          <p className="text-sm">{Project.technologies}</p>
        </div>
      </div>
    </div>
  );
}
