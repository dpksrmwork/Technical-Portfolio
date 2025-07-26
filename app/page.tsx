import Hero from '@/components/Hero'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import Skills from '@/components/Skills'
import Contact from '@/components/Contact'

export default function Home() {
  return (
    <main className="bg-gray-900 text-white overflow-x-hidden">
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  )
}