import { useState, useEffect } from 'react';
import '../styles/Header.css';

const Header = ({
    activeSection,
    navItems,
    onNavigation,
    language,
    onLanguageToggle,
    theme,
    toggleTheme,
    actions
}) => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleClick = (event, sectionId) => {
        event.preventDefault();
        onNavigation(sectionId, language);
        setMenuOpen(false);
    };

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="header-container">
                <div className="logo">
                    <a href={`/${language}/about`} onClick={(event) => handleClick(event, 'about')}>
                        Julio Vivas
                    </a>
                </div>

                <nav className={`nav ${menuOpen ? 'open' : ''}`} aria-label="Primary navigation">
                    <ul className="nav-list">
                        {navItems.map((item) => (
                            <li key={item.id}>
                                <a
                                    href={item.href}
                                    className={activeSection === item.id ? 'active' : ''}
                                    onClick={(event) => handleClick(event, item.id)}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <div className="header-actions">
                    <button
                        className="language-toggle"
                        onClick={onLanguageToggle}
                        aria-label={actions.language}
                    >
                        {language === 'es' ? 'EN' : 'ES'}
                    </button>

                    <button
                        className="theme-toggle"
                        onClick={toggleTheme}
                        aria-label={actions.theme}
                    >
                        <span aria-hidden="true">{theme === 'dark' ? 'Light' : 'Dark'}</span>
                    </button>

                    <button
                        className="menu-toggle"
                        onClick={toggleMenu}
                        aria-label={actions.menu}
                    >
                        <span className={`hamburger ${menuOpen ? 'active' : ''}`}></span>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
