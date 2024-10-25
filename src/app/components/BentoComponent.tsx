'use client'

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import padlockImg from '../../../public/images/freepik-export-202410222332013UUV.png';
import styles from '../styles/BentoLayout.module.css';
import MainBtn from './MainBtn';
import { BsDiscord, BsTelegram, BsInstagram, BsTwitterX, BsReddit, BsLinkedin, BsYoutube, BsTiktok } from "react-icons/bs";
import { gsap } from 'gsap';

const keywords1 = ['Community', 'Trading', 'DeFi Protocols', 'Blockchain', 'Liquidity', 'Machine Learning', 'Experts'];
const keywords2 = ['Speed', 'Transparency', 'Innovation', 'Global Markets', 'Growth', 'Cryptocurrencies', 'Assets'];

const BentoLayout: React.FC = () => {
    
    const carouselLeftRef = useRef<HTMLDivElement>(null);
    const carouselRightRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const setupInfiniteScroll = (container: HTMLDivElement | null, direction: 'left' | 'right') => {
            if (container) {
                // Duplicar el contenido para permitir la animación infinita sin huecos
                const originalContent = container.innerHTML;
                container.innerHTML += originalContent; // Duplica el contenido
    
                const contentWidth = container.scrollWidth / 2; // Ancho del contenido original
    
                // Ajuste de GSAP según la dirección
                gsap.to(container, {
                    x: direction === 'left' ? -contentWidth : contentWidth, // Mueve en la dirección correcta
                    ease: "linear",
                    repeat: -1,
                    duration: 30, // Ajusta la duración
                    modifiers: {
                        x: gsap.utils.unitize(x => {
                            return direction === 'left'
                                ? parseFloat(x) % contentWidth
                                : (parseFloat(x) % contentWidth) - contentWidth; // Ajuste para el carrusel a la derecha
                        })
                    }
                });
            }
        };
    
        if (carouselLeftRef.current) {
            setupInfiniteScroll(carouselLeftRef.current, 'left'); // Mueve a la izquierda
        }
    
        if (carouselRightRef.current) {
            setupInfiniteScroll(carouselRightRef.current, 'right'); // Mueve a la derecha
        }
    
        return () => {
            // Limpieza de animaciones
        };
    }, []);
          

  return (
    <div className={styles.container} id='community'>
      <div className={styles.item1}>
        
      <div className={styles.carouselTopWrapper}>
          <div className={styles.carouselContent} ref={carouselLeftRef}>
            {keywords1.map((keyword, index) => (
              <span key={index}>{keyword}</span>
            ))}
          </div>
        </div>
        <div className={styles.carouselBottomWrapper}>
          <div className={styles.carouselContent} ref={carouselRightRef}>
            {keywords2.map((keyword, index) => (
              <span key={index}>{keyword}</span>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.item2}>        
        <Image src={padlockImg} alt='padlockImg' className={styles.padlockImg}/>
        <p className={styles.bentoTitle}>unlock your financial potential today</p>
        <p className={styles.bentoText}>Start boosting yourself with the best trading service that has everything you need: speed, liquidity, recommendations given by AI trusted by experts, and transparency.</p>
        <MainBtn text={'start now'} />
      </div>
      <div className={styles.item3}>
      <p className={styles.bentoTitle}>join our crew</p>
      <p className={styles.bentoText}>Be part of the Boost community and join our channels, we are waiting for you!
      </p>
      <div className={styles.crewMedia}>
      <BsDiscord />
      <BsTelegram />
      </div>

      </div>
      <div className={styles.item4}>
      <p className={styles.bentoTitle}>Stay tuned</p>
      <p className={styles.bentoText}>Check us out and keep up with our updates
      </p>

        <div className={styles.socialMedia}>
        <BsInstagram />
        <BsTwitterX />
        <BsReddit />
        <BsYoutube />
        <BsTiktok />
        <BsLinkedin />
  
        </div>
      </div>
    </div>
  );
};

export default BentoLayout;
