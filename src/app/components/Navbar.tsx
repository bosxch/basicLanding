import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import style from '../styles/Navbar.module.css';

gsap.registerPlugin(ScrollToPlugin);

const Navbar: React.FC = () => {
    const navbarRef = useRef<HTMLDivElement | null>(null);
    const itemsRef = useRef<(HTMLLIElement | null)[]>([]);
    const [activeIndices, setActiveIndices] = useState<number[]>([]);
    const [lastActiveIndex, setLastActiveIndex] = useState<number | null>(null);
    const [scrolling, setScrolling] = useState(false); // Para controlar el scroll automático
    const [clickedItem, setClickedItem] = useState<number | null>(null); // Para controlar si hubo clic

    useEffect(() => {
        const handleScroll = () => {
            if (scrolling) return; // Ignoramos si estamos haciendo scroll automático
    
            if (!navbarRef.current) return;
    
            const navbar = navbarRef.current;
            const currentScrollY = window.scrollY;
            const viewportHeight = window.innerHeight;
            const viewportWidth = window.innerWidth;
    
            // Posición inicial y fija basada en el tamaño de la pantalla
            const initialPosition = viewportHeight * (viewportWidth <= 768 ? 0.85 : 0.8); // 90% desde el bottom en mobile
            const fixedPosition = viewportHeight * (viewportWidth <= 768 ? 0.05 : 0.03); // 10% desde el top
            const scrolledDistance = currentScrollY * (viewportWidth <= 768 ? 0.8 : 0.8); // Control del desplazamiento
    
            // Calcula la nueva posición del navbar
            const newPosition = Math.max(fixedPosition, initialPosition - scrolledDistance);
    
            // Movimiento del navbar con GSAP
            gsap.to(navbar, {
                top: newPosition,
                duration: 0.3,
                ease: 'power1.out',
            });
    
            // Lógica para activar secciones basado en el scroll
            const viewportThreshold = viewportHeight * 0.3;
            let foundActiveIndex: number | null = null;
    
            itemsRef.current.forEach((item, index) => {
                const targetSection = document.getElementById(item?.textContent?.toLowerCase() || '');
                if (targetSection) {
                    const rect = targetSection.getBoundingClientRect();
                    if (rect.top <= viewportThreshold && rect.bottom >= viewportThreshold) {
                        foundActiveIndex = index;
                    }
                }
            });
    
            if (foundActiveIndex !== null && clickedItem === null) {
                const newActiveIndices = Array.from({ length: foundActiveIndex + 1 }, (_, i) => i);
                setActiveIndices(newActiveIndices);
                setLastActiveIndex(foundActiveIndex);
            }
    
            if (foundActiveIndex === clickedItem) {
                setClickedItem(null);
            }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrolling, clickedItem]);
    

    
    
    const handleItemClick = (index: number, item: string) => {
        const targetSection = document.getElementById(item.toLowerCase());
        if (targetSection) {
            const offset = 0; // Ajuste de 0px
            const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - offset;

            setScrolling(true); // Deshabilitar el control del scroll
            setClickedItem(index); // Marcar el ítem como clickeado

            gsap.to(window, {
                scrollTo: { y: targetPosition, offsetY: offset },
                duration: 0.2,
                ease: 'power1.out',
                onComplete: () => {
                    setScrolling(false); // Rehabilitar el control del scroll una vez que la animación termina
                },
            });
        }

        // Marcar como activo el ítem clicado
        const newActiveIndices = Array.from({ length: index + 1 }, (_, i) => i);
        setActiveIndices(newActiveIndices);
        setLastActiveIndex(index);
    };

    

    return (
        <div
            ref={navbarRef}
            style={{
                position: 'fixed',
                left: '50%',
                transform: 'translateX(-50%)',
                top: '80%',
                width: '80%',
                color: 'white',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
            }}
            className={style.navbar}
        >
            <ul className={style.ul}>
                {['Trade', 'Transparency', 'Invest', 'Community'].map((item, index) => (
                    <li
                        key={index}
                        ref={(el) => { itemsRef.current[index] = el; }}
                        className={`${style.li} 
                            ${activeIndices.includes(index) ? style.active : ''} 
                            ${lastActiveIndex !== null && index < lastActiveIndex ? style.leftActive : ''} 
                            ${lastActiveIndex === index && index > 0 ? style.activeLast : ''} 
                            ${activeIndices.includes(index) && index === 0 && lastActiveIndex !== 0 ? style.leftOnly : ''} 
                        `}
                        onClick={() => handleItemClick(index, item)}
                    >
                        <a href={`#${item.toLowerCase()}`}>
                            {item}
                        </a>
                    </li>
                ))}
            </ul>
            <img src='/images/android-chrome-512x512.png' alt='boostedLogo' className={style.imgLogo} />
        </div>
    );
};

export default Navbar;
