
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
    definition: "Web application that stores barangay information",
    image: "",
  },
  {
    no: 3,
    name: "CTE Information System",
    technologies: "JavaScript, ReactJS, PHP, Laravel, MySQL",
    definition:
      "Web application that stores faculties' data and their class schedules",
    image: "",
  },
  {
    no: 4,
    name: "RFID Payment",
    technologies: "Python, Raspberry Pi, RFID Module",
    definition: "A beep card for payments in school canteen and/or jeepney",
    image: "",
  },
];

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
