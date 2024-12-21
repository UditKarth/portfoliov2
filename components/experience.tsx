"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function Experience() {
  const experiences = [
    {
      title: "Software Development Engineer Intern",
      company: "Amazon",
      period: "2024 - 2024",
      description: "During my internship, I worked on enhancing AWS Kinesis Firehose's functionality to better integrate with services like MSK, EC2, Lambda, S3, and Quicksight. I designed and implemented a system to seamlessly read data from multiple MSK topics, adding regex filtering for topic names to Firehose’s API. I also updated the backend to support concurrent delivery to S3 endpoints, boosting efficiency. To wrap up, I led a live demo for stakeholders, showcasing the end-to-end functionality of the system I built.",
      technologies: ["AWS (EC2, Lambda, S3, Quicksight)", "CI/CD", "Kafka", "Kinesis Firehose"],
    },
    {
      title: "Full Stack Intern",
      company: "Coyoteland",
      period: "2023 - 2024",
      description: "As a full-stack intern, I developed a robust data scraping tool using Puppeteer, gathering insights from nearly 800,000 data points. I created a scalable backend with Express and Node.js to handle the data processing and built interactive React-based visualizations to help stakeholders make sense of the information. Additionally, I spearheaded a targeted marketing campaign that led to a 200% increase in sales, showcasing the impact of both my technical and strategic contributions.",
      technologies: ["JavaScript", "React", "Puppeteer", "Express", "Node.js", "MongoDB"],
    },
    {
      title: "Cybersecurity Intern",
      company: "GG4L",
      period: "2022 - 2022",
      description: "In this role, I focused on enabling secure, user-friendly interfaces for teachers and students by implementing SAML-based SSO protocols. I collaborated directly with instructors to tailor secure solutions for their needs and provided weekly data analyses with actionable recommendations to improve system security and user experience.",
      technologies: ["SAML", "Kerberos", "Excel"],
    },
  ]

  return (
    <section className="py-12 bg-zinc-950" id="experience">
      <div className="container px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">Experience</h2>
        <div className="space-y-6 max-w-[1200px] mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="group bg-zinc-900 border-zinc-800 overflow-hidden hover:scale-[1.01] transition-all duration-300">
                <CardHeader>
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                    <div>
                      <CardTitle className="text-xl font-bold transition-colors duration-300 text-white group-hover:text-zinc-400">
                        {experience.title}
                      </CardTitle>
                      <CardDescription className="text-gray-400">
                        {experience.company} | {experience.period}
                      </CardDescription>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {experience.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex} 
                          variant="secondary"
                          className="bg-zinc-800 hover:bg-[#23236e] transition-colors duration-300"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{experience.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

