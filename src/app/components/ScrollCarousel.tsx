"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from 'split-type';
import styles from '../styles/ScrollCarousel.module.css';

gsap.registerPlugin(ScrollTrigger);

const ScrollCarousel = () => {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;

    if (carousel) {
      // Dividir el texto en letras usando SplitType
      const splitText = new SplitType(carousel, { types: 'chars' });

      const chars = splitText.chars;
      if (!chars) return;
      const totalCharsWidth = chars.reduce((acc, char) => acc + char.offsetWidth, 0); // Ancho total de todos los caracteres

      // Ajustar el ancho del contenedor del carrusel
      gsap.set(carousel, { width: totalCharsWidth });

            // Crear el efecto de escalado fluido para las letras centrales y vecinas
            const updateCharScaling = () => {
                const windowCenter = window.innerWidth / 2;
        
                chars.forEach((char, i) => {
                  const charCenter = char.getBoundingClientRect().left + char.offsetWidth / 2;
                  const distanceToCenter = Math.abs(charCenter - windowCenter);
        
                  // Escalar las letras en función de su proximidad al centro
                  if (distanceToCenter < 100) {
                    // La letra en el centro o cerca del centro
                    gsap.to(char, { scale: 1.5, padding: '7px', fontWeight: 900,   ease: "power1.inOut", duration: 0.1 });
                    // Escalar los vecinos
                    if (chars[i - 1]) {
                      gsap.to(chars[i - 1], { scale: 1.3,padding: '5px',  fontWeight: 900, ease: "power1.inOut", duration: 0.1 });
                    }
                    if (chars[i + 1]) {
                      gsap.to(chars[i + 1], { scale: 1.3,padding: '5px',  fontWeight: 900, ease: "power1.inOut", duration: 0.1 });
                    }
                  } else if (distanceToCenter < 200) {
                    // Vecinos un poco más alejados del centro
                    gsap.to(char, { scale: 1.2,padding: '3px', fontWeight: 700,  ease: "power1.inOut", duration: 0.1 });
                  } else {
                    // Letras que no están cerca del centro
                    gsap.to(char, { scale: 1, fontWeight: 500,  ease: "power1.inOut", duration: 0.1 });
                  }
                });
              };

      // Crear el desplazamiento sincronizado con el scroll
      gsap.to(carousel, {
        x: (-totalCharsWidth + window.innerWidth)*3.5, // Mover el carrusel por completo
        ease: "none",
        scrollTrigger: {
          trigger: carousel,
          start: "bottom bottom", // Comienza cuando el texto entra en la parte inferior de la pantalla
          end: `+=${totalCharsWidth}`, // Finaliza cuando todo el carrusel ha salido de la pantalla
          scrub: 1, // Sincroniza con el scroll
          onUpdate: updateCharScaling,
        },
      });

      // Usar ScrollTrigger para actualizar la escala en cada cambio de scroll
      ScrollTrigger.create({
        trigger: carousel,
        start: "top top", // Activo durante todo el desplazamiento
        end: "bottom bottom",
        onUpdate: updateCharScaling, // Actualizar escalado en cada scroll
        scrub: 1,
      });
    }

    return () => {
      gsap.killTweensOf(carousel); // Limpiar animaciones
      ScrollTrigger.getAll().forEach(trigger => trigger.kill()); // Eliminar triggers
    };
  }, []);

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.carouselMain}>
      <div className={styles.carouselContent} ref={carouselRef}>
        Seamless Trading - Low Risk Cost - Efficient Operations - High Profitability - Seamless Trading - Low Risk Cost - Efficient Operations - High Profitability - Seamless Trading - Low Risk Cost - Efficient Operations - High Profitability
      </div>
    </div>
    </div>
  );
};

export default ScrollCarousel;
