import React from 'react';
import './Footer.css';
import FooterCol from '../FooterCol/FooterCol';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faGooglePlusG } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
    const RecentPost =
        [
            { name: "Post1", link: "/post1" },
            { name: "Post2", link: "/Post2" },
            { name: "Post3", link: "/Post3" },
            { name: "Post4", link: "/Post4" },
            { name: "Post5", link: "/Post5" },
        ]
    const ourAddress = [
        { name: "Kishoreganj, Dhaka, Bangladesh", link: "/" },
        { name: "SMR SAIMON", link: "/" },

    ]
    const Pages = [
        { name: "About", link: "/About" },
        { name: "Services", link: "/Services" },
        { name: "Link", link: "/Link" },
        { name: "Link", link: "/Link" },
        { name: "Link", link: "/Link" },

    ]
    const services = [
        { name: "Link", link: "/Link" },
        { name: "Link", link: "/Link" },
        { name: "Link", link: "/Link" },
        { name: "Link", link: "/Link" },
        { name: "Link", link: "/Link" },

    ]
    return (
        <footer className="footer-area clear-both">
            <div className="container pt-5">

                <div className="row py-5">
                    <FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                        <div className="mt-5">
                            <h6>Call now</h6>
                            <button className="btn">+88 01757053084</button>
                            <h6>Email </h6>
                            <button className="btn">saimoncse333@gmail.com</button>
                        </div>
                    </FooterCol>
                    <FooterCol key={1} menuTitle="Recent Post" menuItems={RecentPost} />
                    <FooterCol key={2} menuTitle="Services" menuItems={services} />
                    <FooterCol key={3} menuTitle="Pages" menuItems={Pages} />

                </div>

                <div className="copyRight text-center">
                    <p className="text-gray">Copyright {(new Date()).getFullYear()} All Rights Reserved || Design && Build by Sultan Mahmud Saimon</p>
                </div>
            </div>
        </footer>

    );
};

export default Footer;