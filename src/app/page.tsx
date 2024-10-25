import BentoLayout from './components/BentoComponent';
import ScrollCarousel from './components/ScrollCarousel';
import Footer from './sections/Footer';
import Landing from './sections/Landing'; // Ruta correcta al componente Landing
import Trade from './sections/Trade';
import Transparency from './sections/Transparency';
import UseCrypto from './sections/UseCrypto';
// import Services from './sections/Services.tsx'; // Ruta correcta al componente Services
// import Contact from './sections/Contact.tsx'; // Ruta correcta al componente Contact
import './styles/global.css'

export default function HomePage() {
  return (
    <>
      <Landing />
      <ScrollCarousel/>
      <div className='sections-container'>
      <Trade />
      <Transparency/>
      <UseCrypto />
      <BentoLayout/>
      </div>
      <Footer/>
    </>
  );
}
