import { createFileRoute } from '@tanstack/react-router'
import Footer from '../components/footer'
import Hero from '../components/pages/index/hero'
import Projects from '../components/pages/index/projects'
import Techstack from '../components/pages/index/techstack'
import Contact from '../components/pages/index/contact'
import pagesTranslations from '../locales/en/pages.json'

export const Route = createFileRoute('/')({
  head: () => ({
    meta: [
      { title: pagesTranslations['index-page'].title },
      { name: 'description', content: pagesTranslations['index-page'].meta.description },
    ],
  }),
  component: HomePage,
})

function HomePage() {
  return (
    <>
      <Hero />
      <Projects />
      <Techstack />
      <Contact />
      <Footer />
    </>
  )
}
