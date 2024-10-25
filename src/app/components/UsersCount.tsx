import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import styles from '../styles/UserxCount.module.css'; // Archivo CSS para estilos

const UsersCount = () => {
  const [count, setCount] = useState(0);
  const targetCount = 4.7 * 1000000; // 4.7 millones
  const [isVisible, setIsVisible] = useState(false); // Para detectar si el componente está en vista

  const countRef = useRef<HTMLSpanElement>(null);
  const textRef = useRef<HTMLDivElement>(null); // Cambiado a HTMLDivElement
  const containerRef = useRef<HTMLDivElement>(null); // Referencia al contenedor del componente

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setIsVisible(true); // Marcar el componente como visible
          observer.disconnect(); // Desconectar una vez visible para evitar re-ejecutar la animación
        }
      },
      { threshold: 0.1 } // El 10% del componente debe estar visible para que la animación comience
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let start = 0;
      const duration = 2; // Duración de la animación de suma en segundos

      // Animación del contador
      gsap.to({}, {
        duration: duration,
        onUpdate: () => {
          start += targetCount / (duration * 60); // Incremento calculado
          if (start >= targetCount) {
            setCount(targetCount); // Fijar en 4.7M al final
          } else {
            setCount(start);
          }
        },
        onComplete: () => {
          setCount(targetCount); // Asegurarse de que quede en 4.7M al finalizar
        },
      });

      // Comprobamos que textRef no es null
      if (textRef.current) {
        const highlights = textRef.current.querySelectorAll<HTMLElement>('.highlight'); // Afirmamos el tipo

        gsap.fromTo(
          highlights,
          { color: '#F19A3E' }, // Color inicial
          {
            duration: 3,
            onUpdate: () => {
              // Cambia el color del texto a transparente para mostrar el fondo
              Array.from(highlights).forEach((highlight) => {
                highlight.style.color = 'transparent'; // Asegúrate de que sea un HTMLElement
                highlight.style.background = 'radial-gradient(circle, #EB5E28, #F19A3E)';
                highlight.style.backgroundClip = 'text'
                highlight.style.webkitTextFillColor = 'transparent'
              });
            },
          }
        );
      }
    }
  }, [isVisible]); // Solo ejecuta la animación cuando isVisible cambia a true

  return (
    <div ref={containerRef} className={styles.container}>
      {/* Contenedor separado para el contador */}
      <div className={styles.counterContainer}>
        <span ref={countRef} className={styles.counter}>
          {`${(count / 1000000).toFixed(1)}M`} {/* Mostramos con un decimal */}
        </span>
      </div>

      {/* Contenedor separado para el texto */}
      <div className={styles.textContainer}>
        <p>
          people have supercharged their success <br className={styles.br}/>
          with our&nbsp;
          <span ref={textRef}>
            <span className="highlight">AI-powered solutions</span>, unlocking&nbsp;
            <span className="highlight">massive profits</span>.
          </span>
        </p>
      </div>
    </div>
  );
};

export default UsersCount;
