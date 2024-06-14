import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faFacebook, faYoutube } from '@fortawesome/free-brands-svg-icons';
import logo from '../images/logo.png';

const footerLinks = [
    {
        title: "About Us",
        links: ["Team", "News", "Blog", "Apply"]
    },
    {
        title: "Governance+",
        links: ["Amrit Series", "Governance Decluttered", "Governance Frameworks", "Sushasan"]
    },
    {
        title: "Events & Initiatives",
        links: ["Code for GovTech (C4GT)", "The Governance Challenge (TGC)"]
    }
];

const socialLinks = [
    { icon: faLinkedin, ariaLabel: "LinkedIn" },
    { icon: faInstagram, ariaLabel: "Instagram" },
    { icon: faFacebook, ariaLabel: "Facebook" },
    { icon: faYoutube, ariaLabel: "YouTube" }
];

const Footer = () => (
    <footer className="bg-white text-black pt-12 px-8 border-t border-red-200 mt-8">
        <div className="max-w-7xl mx-auto flex justify-between pb-12 items-start space-y-4 md:space-y-0 md:flex-row flex-col">
            <div>
                <img src={logo} alt="Samagra Logo" className="w-56 h-auto mb-4" aria-label="Samagra Logo" />
                <address className="not-italic">
                    <strong>Samagra | Transforming Governance</strong><br />
                    9/5 Sarvapriya Vihar, New Delhi 110016
                </address>
            </div>
            <div className="flex space-x-8">
                {footerLinks.map((section, index) => (
                    <div key={index}>
                        <h4 className="font-semibold mb-2 text-yellow-500">{section.title}</h4>
                        <ul>
                            {section.links.map((link, index) => (
                                <li key={index}>{link}</li>
                            ))}
                        </ul>
                        {index === footerLinks.length - 1 && <div className="mt-4">
                            <h4 className="font-semibold mb-2 text-yellow-500">Follow Us</h4>
                            <div className="flex space-x-4">
                                {socialLinks.map((social, index) => (
                                    <a key={index} href="#" aria-label={social.ariaLabel}>
                                        <FontAwesomeIcon icon={social.icon} className="w-6 h-6" />
                                    </a>
                                ))}
                            </div>
                        </div>}
                    </div>
                ))}

            </div>
        </div>
        <div className="text-center my-4 pt-4 border-t border-gray-200">
            <p className="text-gray-600">&copy; 2024 Samagra Development Associates Pvt. Ltd. <a href="#" className="text-gray-500 underline">CSR</a></p>
        </div>
    </footer>
);

export default Footer;
