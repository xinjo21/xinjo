type ExperienceType = {
  no: Number;
  position: String;
  companyName: String;
  description: String;
  dateStartAndEnd: String;
  technologies: String[];
};

const experienceList: ExperienceType[] = [
  {
    no: 1,
    position: "Graphics Programmer | Contractual",
    companyName: "Research Development and Evaluation Center - WMSU",
    description:
      "Created and animated an agro-tourism video for projects at WMSU Campus C",
    dateStartAndEnd: "Dec 2022 - Jan 2023",
    technologies: [
      "Adobe Premier Pro",
      "Adobe After Effect",
      "Adobe Illustrator",
      "Communication",
      "Collaboration",
    ],
  },
  {
    no: 2,
    position: "Software Developer | Internship",
    companyName: "College of Teachers Education - WMSU",
    description:
      "Develop a web application to store faculties's personal data and their class schedules",
    dateStartAndEnd: "Jan 2022 - May 2022",
    technologies: [
      "JavaScript",
      "React",
      "NodeJS",
      "ExpressJS",
      "MongoDB",
      "ChakraUI",
      "Communication",
      "Collaboration",
    ],
  },
  {
    no: 3,
    position: "Technical Lead & Creative Lead",
    companyName: "Google Developer Student Club Crimson",
    description:
      "Designed and conceptualized publication materials and organized a technical and career-oriented events and seminars",
    dateStartAndEnd: "July 2019 - May 2022",
    technologies: [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Google Technologies",
      "Leadership",
      "Communication",
      "Collaboration",
      "Presentation",
      "Organizing",
    ],
  },
  {
    no: 4,
    position: "Creative Lead",
    companyName: "The Venom Publication",
    description: "Designed and lead the creative part of organization",
    dateStartAndEnd: "July 2019 - May 2022",
    technologies: [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Communication",
      "Collaboration",
      "Management",
      "Presentation",
      "Organizing",
      "Team Building",
    ],
  },
  {
    no: 5,
    position: "Editor-In-Chief & Graphic Designer",
    companyName: "The New Blazer",
    description:
      "Lead the whole organization and created design concept for yearbook and materials",
    dateStartAndEnd: "July 2019 - May 2022",
    technologies: [
      "Adobe Illustrator",
      "Adobe Photoshop",
      "Adobe After Effect",
      "Adobe Premiere Pro",
      "Adobe InDesign",
      "Leadership",
      "Communication",
      "Collaboration",
      "Management",
      "Presentation",
      "Organizing",
      "Team Building",
      "Mentoring",
    ],
  },
];

export default function Background() {
  return (
    <div className="mt-20 w-[100vw] md:w-[70vw] w-[90vw] ">
      <p className="text-2xl font-bold m-5 text-center mt-10">
        Background & Experience
      </p>
      {experienceList &&
        experienceList.map((experience: ExperienceType) => (
          <ExperienceCard key={experience.no} experience={experience} />
        ))}
    </div>
  );
}

function ExperienceCard({ experience }: ExperienceType) {
  const technologies: String[] = experience.technologies;

  return (
    <div className="md:grid grid-cols-3 mt-10">
      <p className="text-neutral-500 text-sm uppercase">
        {experience.dateStartAndEnd}
      </p>

      <div className="col-span-2">
        <p className="font-bold text-lg">{experience.position}</p>
        <p className="text-neutral-400">{experience.companyName}</p>
        <p className="mt-3">{experience.description}</p>
        <div className="flex gap-2 flex-wrap text-neutral-400 py-2 w-100">
          {technologies &&
            technologies.map((technology: String) => (
              <div
                key={experience.no}
                className="flex border border-neutral-400 px-2 rounded-full"
              >
                <p className="text-xs">{technology}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
