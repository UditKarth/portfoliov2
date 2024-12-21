import { Card, CardContent } from "@/components/ui/card"

export function Skills() {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "Node.js",
    "Python",
    "SQL",
    "MongoDB",
    "Git",
    "AWS",
    "Docker",
    "CI/CD",
  ]

  return (
    <section className="py-12 bg-zinc-950" id="skills">
      <div className="container px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">Skills</h2>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4 max-w-[1200px] mx-auto place-items-center">
          {skills.map((skill, index) => (
            <Card 
              key={index} 
              className="bg-zinc-900 border-zinc-800 transition-all duration-300 hover:bg-[#23236e] transform hover:scale-105 w-full"
            >
              <CardContent className="flex items-center justify-center p-4">
                <span className="text-center font-medium">{skill}</span>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

