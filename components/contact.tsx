import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail } from 'lucide-react'

export function Contact() {
  return (
    <section className="py-12" id="contact">
      <div className="container px-4">
        <h2 className="mb-12 text-center text-3xl font-bold">Get in Touch</h2>
        <div className="flex justify-center space-x-6">
          <a href="https://github.com/UditKarth" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="h-16 w-16">
              <Github className="h-8 w-8" />
              <span className="sr-only">GitHub Profile</span>
            </Button>
          </a>
          <a href="https://www.linkedin.com/in/udit-karthikeyan-8a454b236/" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="lg" className="h-16 w-16">
              <Linkedin className="h-8 w-8" />
              <span className="sr-only">LinkedIn Profile</span>
            </Button>
          </a>
          <a href="mailto:uditkarthik@gmail.com">
            <Button variant="outline" size="lg" className="h-16 w-16">
              <Mail className="h-8 w-8" />
              <span className="sr-only">Email Contact</span>
            </Button>
          </a>
        </div>
      </div>
    </section>
  )
}
