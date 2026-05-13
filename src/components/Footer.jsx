import '../styles/Footer.css';

const Footer = ({ copy, navItems, onNavigation }) => {
    const currentYear = new Date().getFullYear();
    const handleNavigation = (event, sectionId) => {
        event.preventDefault();
        onNavigation(sectionId);
    };

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-main">
                    <div className="footer-info">
                        <h3>Julio Cesar Vivas Medina</h3>
                        <p className="footer-tagline">{copy.tagline}</p>
                    </div>

                    <div className="footer-social">
                        <h4>{copy.social}</h4>
                        <div className="social-links">
                            <a
                                href="https://github.com/Dino-Julius"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                <i className="fab fa-github"></i>
                                GitHub
                            </a>
                            <a
                                href="https://linkedin.com/in/juliovivas1407"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="social-link"
                            >
                                <i className="fab fa-linkedin"></i>
                                LinkedIn
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-bottom">
                    <div className="footer-nav">
                        {navItems.map((item) => (
                            <a
                                key={item.id}
                                href={item.href}
                                onClick={(event) => handleNavigation(event, item.id)}
                            >
                                {item.label}
                            </a>
                        ))}
                    </div>

                    <div className="footer-copyright">
                        <p>
                            © {currentYear} Julio Cesar Vivas Medina. {copy.rights}
                        </p>
                        <p className="footer-credits">{copy.built}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
