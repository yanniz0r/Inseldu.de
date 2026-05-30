import appCss from '../../styles/globals.css?url'
import {
  createRootRoute,
  HeadContent,
  Outlet,
  Scripts,
} from '@tanstack/react-router'
import { useState, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import '../locales/i18n'
import Button from '../components/button'
import { UserCircle, Menu } from 'lucide-react'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    ],
    links: [
      { rel: 'preload', href: appCss, as: 'style' },
      { rel: 'stylesheet', href: appCss },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFound,
})

function NotFound() {
  const { t } = useTranslation('index-page')
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 bg-background px-6 text-center">
      <span className="text-9xl font-extrabold text-primary">404</span>
      <p className="text-2xl font-light text-on-surface">{t('notFound.message')}</p>
      <a href="/">
        <Button color="primary">{t('notFound.cta')}</Button>
      </a>
    </div>
  )
}

const NAV_SECTIONS = ['intro', 'projects', 'techstack', 'contact'] as const
type NavSection = typeof NAV_SECTIONS[number]

function useActiveSection(): NavSection {
  const [active, setActive] = useState<NavSection>('intro')

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    NAV_SECTIONS.forEach((id) => {
      const el = document.getElementById(id)
      if (!el) return
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id)
        },
        { rootMargin: '-40% 0px -55% 0px', threshold: 0 }
      )
      observer.observe(el)
      observers.push(observer)
    })

    return () => observers.forEach((o) => o.disconnect())
  }, [])

  return active
}

function scrollToSection(id: string) {
  const target = document.getElementById(id)
  if (target) {
    window.scrollTo({ top: target.offsetTop - 80, behavior: 'smooth' })
  }
}

function NavDrawer({ isOpen, onClose, activeSection }: { isOpen: boolean; onClose: () => void; activeSection: NavSection }) {
  const { t, i18n } = useTranslation('nav')
  const handleNav = (id: string) => {
    onClose()
    setTimeout(() => scrollToSection(id), 300)
  }

  return (
    <div className={`fixed inset-0 z-[60] ${isOpen ? '' : 'hidden'}`}>
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm" onClick={onClose} />
      <aside
        className={`fixed inset-y-0 left-0 h-full w-80 rounded-r-xl bg-surface shadow-lg flex flex-col p-6 transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex items-center gap-4 mb-8">
          <div className="w-12 h-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
            <UserCircle size={24} />
          </div>
          <div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface">Yannic Inselmann</h3>
            <p className="font-body-md text-body-md text-on-surface-variant">{t('leadSoftwareDeveloper')}</p>
          </div>
        </div>
        <nav className="flex flex-col gap-2">
          {NAV_SECTIONS.map((id) => (
            <button
              key={id}
              onClick={() => handleNav(id)}
              className={`flex items-center gap-4 px-4 py-3 rounded-full transition-all text-left w-full ${
                activeSection === id
                  ? 'bg-primary-container text-primary'
                  : 'text-on-surface-variant hover:bg-surface-container-high'
              }`}
            >
              <span className="font-body-md capitalize">{t(id)}</span>
            </button>
          ))}
        </nav>
        <div className="mt-auto pt-6 border-t border-border-subtle space-y-4">
          <p className="font-label-caps text-secondary font-semibold uppercase">{t('availableForProjects')}</p>
          <button
            onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en')}
            className="font-label-caps text-[11px] uppercase tracking-widest border border-border-subtle rounded-full px-3 py-1.5 text-slate-text hover:text-primary hover:border-primary transition-colors"
          >
            {i18n.language === 'en' ? 'Auf Deutsch wechseln' : 'Switch to English'}
          </button>
        </div>
      </aside>
    </div>
  )
}

function RootComponent() {
  const { t, i18n } = useTranslation('nav')
  const [drawerOpen, setDrawerOpen] = useState(false)
  const activeSection = useActiveSection()

  const toggleLang = () => i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en')

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault()
    scrollToSection(id)
  }

  return (
    <html lang="en" className="light">
      <head>
        <HeadContent />
      </head>
      <body className="bg-background text-on-surface font-body-md selection:bg-primary-container selection:text-white">

          <script
            defer
            src="https://umami.inselmann.online/script.js"
            data-website-id="3755d45d-5afa-4d60-bea0-4c55e1e37d5b"
          />
          <header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-border-subtle h-20">
            <nav className="max-w-[1440px] mx-auto px-gutter flex justify-between items-center h-full">
              <a className="font-headline-sm font-bold tracking-tight text-on-surface" href="#">
                Yannic Inselmann
              </a>
              <div className="hidden md:flex items-center gap-10">
                {NAV_SECTIONS.map((id) => (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={(e) => handleNavClick(e, id)}
                    className={`font-body-md font-medium transition-colors capitalize ${
                      activeSection === id
                        ? 'text-primary border-b-2 border-primary pb-1'
                        : 'text-slate-text hover:text-primary'
                    }`}
                  >
                    {t(id)}
                  </a>
                ))}
                <Button href="https://de.linkedin.com/in/yannic-inselmann-7178a415a" size="md">
                  {t('resume')}
                </Button>
                <button
                  onClick={toggleLang}
                  className="font-label-caps text-[11px] uppercase tracking-widest border border-border-subtle rounded-full px-3 py-1.5 text-slate-text hover:text-primary hover:border-primary transition-colors"
                >
                  {i18n.language === 'en' ? 'DE' : 'EN'}
                </button>
              </div>
              <button
                className="md:hidden text-on-surface p-2"
                onClick={() => setDrawerOpen(true)}
                aria-label="Open menu"
              >
                <Menu size={24} />
              </button>
            </nav>
          </header>
          <NavDrawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} activeSection={activeSection} />
          <main className="pt-20">
            <Outlet />
          </main>
        <Scripts />
      </body>
    </html>
  )
}
