import { Box } from "@chakra-ui/react";
import { Typography } from "@material-tailwind/react";

type ExperienceType = {
  no: any;
  position: String;
  companyName: String;
  description: String;
  dateStartAndEnd: String;
  technologies: String[];
};

const experienceList: ExperienceType[] = [
  {
    no: 6,
    position: "Software Developer",
    companyName: "Mashup Garage",
    description: "",
    dateStartAndEnd: "Jan 2024 - Present",
    technologies: ["TypeScript", "ReactJS", "NextJS", "Firebase"],
  },
  {
    no: 5,
    position: "Graphics Programmer | Contractual",
    companyName: "Research Development and Evaluation Center - WMSU",
    description:
      "I created and animated an agro-tourism video for projects at WMSU Campus C.",
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
    no: 4,
    position: "Software Developer | Internship",
    companyName: "College of Teachers Education - WMSU",
    description:
      "Develop web-based information system for storing faculty members’ personal data, their class schedule and documents",
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
      "Designed and conceptualized publication materials for the club and organized technical and career-oriented events and seminars to enhance students’ knowledge and career prospects.",
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
    no: 2,
    position: "Creative Lead",
    companyName: "The Venom Publication",
    description: "Served as the Creative Lead for the official student publication of the College of Computing Studies at WMSU • • Designed and conceptualized publication materials • • Lead the creative team in establishing a distinct identity within the university.",
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
    no: 1,
    position: "Editor-In-Chief & Graphic Designer",
    companyName: "The New Blazer",
    description:
      "Served as Editor-in-Chief from 2019 to 2022, providing leadership and direction to the organization • • Held the role of Managing Editor from 2018 to 2019, contributing to the editorial and operational aspects of the publication • • Served as a Graphic Designer from 2016 to 2022, responsible for designing and conceptualizing the yearbook and other publication materials",
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
    <Box
      w="100vw"
      h="100%"
      px={[4, 8, 14]}
      className="p-10 pb-20"
    >
      <Typography variant="h3" className="mb-10">
        Background and Experience
      </Typography>

      {experienceList &&
        experienceList.map((experience: ExperienceType) => (
          <ExperienceCard key={experience.no} experience={experience} />
        ))}
    </Box>
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
        <Typography variant="h6">{experience.position}</Typography>
        <Typography variant='paragraph' className="text-blue-500 mb-2">{experience.companyName}</Typography>
        <Typography variant='small'>{experience.description}</Typography>
        <div className="flex gap-2 flex-wrap text-neutral-500 py-2 w-100">
          {technologies &&
            technologies.map((technology: String) => (
              <div
                key={experience.no}
                className="flex border border-blue-500/50 px-2 rounded-full"
              >
                <p className="text-xs">{technology}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}

/* export default function Background() {
  return (
    <div className="mt-20 w-[100vw] md:w-[70vw] w-[90vw]">
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
        <p className="text-indigo-400">{experience.companyName}</p>
        <p className="mt-3">{experience.description}</p>
        <div className="flex gap-2 flex-wrap text-neutral-500 py-2 w-100">
          {technologies &&
            technologies.map((technology: String) => (
              <div
                key={experience.no}
                className="flex border border-neutral-500 px-2 rounded-full"
              >
                <p className="text-xs">{technology}</p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
 */
