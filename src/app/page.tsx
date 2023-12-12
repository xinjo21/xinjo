"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ThemeProvider } from "@material-tailwind/react";
import { ChakraProvider } from "@chakra-ui/react";
import { useFollowPointer } from "./mouse-pos";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";

import About from "./components/about";
import Project from "./components/projects";
import TechStack from "./components/techs";
import Background from "./components/background";
import Footer from "./components/footer";
import Dev from "./components/dev";

export default function App() {
  const ref = useRef(null);
  const { x, y } = useFollowPointer(ref);

  const data = [
    {
      label: "About",
      value: "about",
      desc: <About />,
    },
    {
      label: "Projects",
      value: "projects      ",
      desc: <Project />,
    },
    {
      label: "Technology",
      value: "techstack",
      desc: <TechStack />,
    },
    {
      label: "Background",
      value: "background",
      desc: <Background />,
    },
  ];

  return (
    <ThemeProvider>
      <ChakraProvider>
        <motion.div
          ref={ref}
          className="w-[25px] h-[25px] rounded-full bg-blue-500 top-0 left-0 fixed opacity-75 pointer-events-none z-50"
          animate={{ x, y }}
          transition={{
            type: "spring",
            damping: 20,
            stiffness: 250,
            restDelta: 0.001,
          }}
        />

        <main>
          <Tabs value="about">
            <TabsBody
              animate={{
                initial: { y: 250 },
                mount: { y: 0 },
                unmount: { y: 250 },
              }}
            >
              {data.map(({ value, desc }) => (
                <TabPanel
                  key={value}
                  value={value}
                  className="text-gray-800 p-0"
                >
                  {desc}
                </TabPanel>
              ))}
            </TabsBody>
            
            <TabsHeader
              className="backdrop-blur-sm bg-gray-50/5 fixed inset-x-0 bottom-0 z-10"
              indicatorProps={{
                className: "bg-blue-900/10 shadow-none !text-gray-900",
              }}
            >
              {data.map(({ label, value }) => (
                <Tab key={value} value={value}>
                  {label}
                </Tab>
              ))}
            </TabsHeader>
          </Tabs>
          {/*
        <Project />
        <TechStack />
        <Background />
        <Footer /> 
        */}
        </main>
      </ChakraProvider>
    </ThemeProvider>
  );
}
