'use client';

import { useState } from "react";
import Link from "next/link";
import { BsDiscord, BsTelegram, BsInstagram, BsTwitter, BsReddit, BsLinkedin, BsYoutube, BsTiktok } from "react-icons/bs";
import styles from '../styles/Footer.module.css';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [error, setError] = useState(''); // Estado para manejar errores
    const [showImage, setShowImage] = useState(false); // Estado para mostrar el PNG

    const handleSubscribe = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Validación de email simple
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!email) {
            setError('Email is required :/');
        } else if (!emailRegex.test(email)) {
            setError('Please enter a valid email :/');
        } else {
            setError(''); // Clear the error
            setEmail('');

            // Mostrar el PNG durante 3 segundos
            setShowImage(true);
            setTimeout(() => {
                setShowImage(false); // Ocultar el PNG después de 3 segundos
            }, 3000);

            console.log('Email submitted:', email);
        }
    };

    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
            <div className={styles.footerSection}>
                    <h2 className={styles.footerTitle}>About Us</h2>
                    <p>
                        Stay ahead with our handpicked selections of the latest trends in
                        tech, lifestyle, and design. We deliver innovation straight to your inbox.
                    </p>
                </div>

                <div className={styles.footerSection}>
                    <h2 className={styles.footerTitle}>Quick Links</h2>
                    <ul className={styles.footerLinks}>
                        <li><Link href="#trade">Trade</Link></li>
                        <li><Link href="#transparency">Transparency</Link></li>
                        <li><Link href="#invest">Invest</Link></li>
                        <li><Link href="#community">Community</Link></li>
                    </ul>
                </div>                <div className={styles.footerSection}>
                    <div className={styles.card}>
                        <span className={styles.cardTitle}>
                            Subscribe
                            <svg
                                fill="#EB5E28"
                                width="40px"
                                viewBox="0 -960 960 960"
                                height="40px"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M106.67-564q0-93.33 41.5-171.17 41.5-77.83 111.16-129.5L299-811.33q-57.33 42.66-91.5 106.66T173.33-564h-66.66Zm680 0q0-76.67-34.17-140.67-34.17-64-91.5-106.66l39.67-53.34q69.66 51.67 111.16 129.5 41.5 77.84 41.5 171.17h-66.66ZM160-200v-66.67h80v-296q0-83.66 49.67-149.5Q339.33-778 420-796v-24q0-25 17.5-42.5T480-880q25 0 42.5 17.5T540-820v24q80.67 18 130.33 83.83Q720-646.33 720-562.67v296h80V-200H160Zm320-301.33ZM480-80q-33 0-56.5-23.5T400-160h160q0 33-23.5 56.5T480-80ZM306.67-266.67h346.66v-296q0-72-50.66-122.66Q552-736 480-736t-122.67 50.67q-50.66 50.66-50.66 122.66v296Z"
                                ></path>
                            </svg>
                        </span>

                        <p className={styles.cardContent}>Hop on our newsletter list!</p>

                        <form className={styles.cardForm} onSubmit={handleSubscribe} noValidate>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className={styles.subscribeInput}
                                />
                                <div className={styles.errorContainer}>
                                    {error && <p className={styles.errorMessage}>{error}</p>}
                                </div>
                            </div>

                            <button type="submit" className={styles.signUp}>
                                <svg
                                    fill="#e8eaed"
                                    width="24px"
                                    viewBox="0 -960 960 960"
                                    height="24px"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="m321-80-71-71 329-329-329-329 71-71 400 400L321-80Z"></path>
                                </svg>

                                {/* PNG detrás del botón */}
                                    <img
                                        src="/images/thumbUp.png" // Reemplaza con la ruta correcta de tu PNG
                                        alt="Success"
                                        className={`${styles.pngBehindButton} ${showImage ? styles.showImage : styles.hideImage}`}  // Aplicar clase dinámica para mostrar/ocultar la imagen
                                        />
                                
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            <div className={styles.footerBottom}>
                <p>&copy; 2024 Boost | All Rights Reserved</p>
                <ul className={styles.socialIcons}>
                    <li><a href="https://discord.com" aria-label="Discord" target="_blank" rel="noopener noreferrer"><BsDiscord /></a></li>
                    <li><a href="https://telegram.org" aria-label="Telegram" target="_blank" rel="noopener noreferrer"><BsTelegram /></a></li>
                    <li><a href="https://instagram.com" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><BsInstagram /></a></li>
                    <li><a href="https://twitter.com" aria-label="Twitter" target="_blank" rel="noopener noreferrer"><BsTwitter /></a></li>
                    <li><a href="https://reddit.com" aria-label="Reddit" target="_blank" rel="noopener noreferrer"><BsReddit /></a></li>
                    <li><a href="https://linkedin.com" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><BsLinkedin /></a></li>
                    <li><a href="https://youtube.com" aria-label="YouTube" target="_blank" rel="noopener noreferrer"><BsYoutube /></a></li>
                    <li><a href="https://tiktok.com" aria-label="TikTok" target="_blank" rel="noopener noreferrer"><BsTiktok /></a></li>
                             </ul>
            </div>
        </footer>
    );
};

export default Footer;
