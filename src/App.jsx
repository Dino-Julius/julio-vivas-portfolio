import { useCallback, useEffect, useMemo, useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import Education from './components/Education'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Projects from './components/Projects'
import Additional from './components/Additional'
import Skills from './components/Skills'
import Footer from './components/Footer'
import { portfolio, sections } from './data/portfolio'
import './styles/globals.css'

const defaultLanguage = 'es'
const sectionIds = sections.map((section) => section.id)

const parseRoute = (pathname, hash = '') => {
    const segments = pathname.split('/').filter(Boolean)
    const firstSegment = segments[0]
    const hasLanguage = firstSegment === 'es' || firstSegment === 'en'
    const language = hasLanguage ? firstSegment : defaultLanguage
    const routeSegment = hasLanguage ? segments[1] : firstSegment
    const hashSegment = hash.replace('#', '')
    const routeSection = sections.find((section) => (
        section.path === routeSegment ||
        section.id === routeSegment ||
        (!routeSegment && (section.path === hashSegment || section.id === hashSegment))
    ))

    return {
        language,
        section: routeSection?.id || 'about'
    }
}

const buildPath = (language, sectionId) => {
    const section = sections.find((item) => item.id === sectionId) || sections[0]
    return `/${language}/${section.path}`
}

function App() {
    const initialRoute = parseRoute(window.location.pathname, window.location.hash)
    const [language, setLanguage] = useState(initialRoute.language)
    const [activeSection, setActiveSection] = useState(initialRoute.section)
    const [theme, setTheme] = useState('dark')
    const copy = portfolio[language]
    const navItems = useMemo(() => (
        sections.map((section) => ({
            ...section,
            label: copy.nav[section.id],
            href: buildPath(language, section.id)
        }))
    ), [copy.nav, language])

    const toggleTheme = () => {
        const newTheme = theme === 'dark' ? 'light' : 'dark'
        setTheme(newTheme)
        document.documentElement.setAttribute('data-theme', newTheme)
    }

    const scrollToSection = useCallback((sectionId, behavior = 'smooth') => {
        const section = document.getElementById(sectionId)
        if (section) {
            section.scrollIntoView({ behavior, block: 'start' })
        }
    }, [])

    const navigateTo = useCallback((sectionId, nextLanguage = language, shouldPush = true) => {
        const path = buildPath(nextLanguage, sectionId)
        setLanguage(nextLanguage)
        setActiveSection(sectionId)

        if (shouldPush && window.location.pathname !== path) {
            window.history.pushState({ language: nextLanguage, section: sectionId }, '', path)
        }

        window.requestAnimationFrame(() => scrollToSection(sectionId))
    }, [language, scrollToSection])

    const toggleLanguage = () => {
        const nextLanguage = language === 'es' ? 'en' : 'es'
        navigateTo(activeSection, nextLanguage)
    }

    useEffect(() => {
        const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
        const initialTheme = prefersDark ? 'dark' : 'light'
        setTheme(initialTheme)
        document.documentElement.setAttribute('data-theme', initialTheme)
    }, [])

    useEffect(() => {
        document.documentElement.lang = language
        document.title = copy.meta.title

        let description = document.querySelector('meta[name="description"]')
        if (!description) {
            description = document.createElement('meta')
            description.setAttribute('name', 'description')
            document.head.appendChild(description)
        }
        description.setAttribute('content', copy.meta.description)
    }, [copy.meta.description, copy.meta.title, language])

    useEffect(() => {
        window.requestAnimationFrame(() => scrollToSection(initialRoute.section, 'auto'))
    }, [initialRoute.section, scrollToSection])

    useEffect(() => {
        const updateActiveSection = () => {
            const scrollPosition = window.scrollY + 140
            let currentSection = sectionIds[0]

            sectionIds.forEach((sectionId) => {
                const section = document.getElementById(sectionId)
                if (section && section.offsetTop <= scrollPosition) {
                    currentSection = sectionId
                }
            })

            setActiveSection((previousSection) => (
                previousSection === currentSection ? previousSection : currentSection
            ))
        }

        const animationFrame = window.requestAnimationFrame(updateActiveSection)
        window.addEventListener('scroll', updateActiveSection, { passive: true })
        window.addEventListener('resize', updateActiveSection)

        return () => {
            window.cancelAnimationFrame(animationFrame)
            window.removeEventListener('scroll', updateActiveSection)
            window.removeEventListener('resize', updateActiveSection)
        }
    }, [])

    useEffect(() => {
        const path = buildPath(language, activeSection)
        if (window.location.pathname !== path) {
            window.history.replaceState({ language, section: activeSection }, '', path)
        }
    }, [activeSection, language])

    useEffect(() => {
        const handlePopState = () => {
            const route = parseRoute(window.location.pathname, window.location.hash)
            setLanguage(route.language)
            setActiveSection(route.section)
            window.requestAnimationFrame(() => scrollToSection(route.section))
        }

        window.addEventListener('popstate', handlePopState)
        return () => window.removeEventListener('popstate', handlePopState)
    }, [scrollToSection])

    return (
        <div className="app-container">
            <Header
                activeSection={activeSection}
                navItems={navItems}
                onNavigation={navigateTo}
                language={language}
                onLanguageToggle={toggleLanguage}
                theme={theme}
                toggleTheme={toggleTheme}
                actions={copy.actions}
            />

            <main className="content">
                <section id="about" className="section section-hero">
                    <About copy={copy.about} actions={copy.actions} />
                </section>

                <section id="experience" className="section">
                    <Experience copy={copy.experience} />
                </section>

                <section id="projects" className="section">
                    <Projects copy={copy.projects} actions={copy.actions} />
                </section>

                <section id="education" className="section">
                    <Education copy={copy.education} />
                </section>

                <section id="skills" className="section">
                    <Skills copy={copy.skills} />
                </section>

                <section id="achievements" className="section">
                    <Achievements copy={copy.achievements} />
                </section>

                <section id="additional" className="section">
                    <Additional copy={copy.additional} />
                </section>
            </main>

            <Footer
                copy={copy.footer}
                navItems={navItems}
                onNavigation={navigateTo}
                contact={copy.about.contact}
            />
        </div>
    )
}

export default App
