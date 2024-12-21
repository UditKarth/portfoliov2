"use client"

import { useRef } from "react"
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface Project {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
}

function AnimatedCard({ project, index }: { project: Project; index: number }) {
  const ref = useRef<HTMLDivElement>(null)

  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["17.5deg", "-17.5deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-17.5deg", "17.5deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return

    const rect = ref.current.getBoundingClientRect()

    const width = rect.width
    const height = rect.height

    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top

    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5

    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: index * 0.1,
      }}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      whileHover={{ scale: 1.02, translateZ: "20px" }}
      className="relative"
    >
      <a 
        href={project.githubUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="block h-full"
      >
        <Card className="bg-zinc-900 border-zinc-800 transform-gpu transition-colors h-full">
          <CardHeader>
            <CardTitle className="transform-gpu" style={{ transform: "translateZ(75px)" }}>
              {project.title}
            </CardTitle>
            <CardDescription className="text-gray-400 transform-gpu" style={{ transform: "translateZ(50px)" }}>
              {project.description}
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2 transform-gpu" style={{ transform: "translateZ(75px)" }}>
              {project.technologies.map((tech: string, techIndex: number) => (
                <Badge key={techIndex} variant="secondary">
                  {tech}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </a>
    </motion.div>
  )
}

export function Projects() {
  const projects = [
    {
      title: "bluefin",
      description: "A tool that allows users to query houses and calculate/store financial viability.",
      technologies: ["Python/PyGUI", "React", "Puppeteer"],
      githubUrl: "https://github.com/UditKarth/bluefin"
    },
    {
      title: "Hinder",
      description: "A house tinder app that allows users to swipe through houses and find their dream home.",
      technologies: ["React", "Express", "HTML/CSS"],
      githubUrl: "https://github.com/UditKarth/Hinder---House-Tinder"
    },
    {
      title: "Exoplanet Query",
      description: "A web app that allows users to query for exoplanets and find their properties.",
      technologies: ["Flask", "Python"],
      githubUrl: "https://github.com/UditKarth/NASA-Exoplanet"
    },
  ]

  return (
    <section className="py-12 perspective-1000" id="projects">
      <div className="container px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 place-items-center max-w-[1200px] mx-auto">
          {projects.map((project, index) => (
            <AnimatedCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

