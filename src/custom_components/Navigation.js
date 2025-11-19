import Navbar from "./Navbar"
import Dock from "../react_bits_components/Dock"

{/* Icons */}
import { LiaHomeSolid, LiaArchiveSolid, LiaUserAltSolid, LiaGithub, LiaItchIo, LiaLinkedinIn } from 'react-icons/lia';

const items = [
    /*{ icon: <LiaHomeSolid size={18} />, label: 'Home', onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }) },
    { icon: <LiaArchiveSolid size={18} />, label: 'Portfolio', onClick: () => alert('Archive  - To be further developed') },
    { icon: <LiaUserAltSolid size={18} />, label: 'Bio & Contact', onClick: () => alert('Bio & Contact - To be further developed') },*/
    { icon: <LiaGithub size={36} />, label: 'Github', onClick: () => window.open("https://github.com/ph0nsy", "_self") },
    { icon: <LiaItchIo size={36} />, label: 'ItchIo', onClick: () => window.open("https://ph0nsy.itch.io", "_self") },
    { icon: <LiaLinkedinIn size={36} />, label: 'Linkedin', onClick: () => window.open("https://www.linkedin.com/in/ph0nsy", "_self") },
  ];


function Navigation({ mobile=true }){
     return( !mobile 
        ? <></> /*<Navbar/>*/
        : <Dock 
            items={items}
            panelHeight={40}
            baseItemSize={50}
            magnification={68}
        />);
}

export default Navigation;