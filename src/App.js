import './App.css';

import { useState, useEffect } from 'react';
import { useMobile } from './hooks/useMobile';
import ReactDOM from 'react-dom'

//import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import Header from './custom_components/Header';
import Navigation from './custom_components/Navigation';
import ProjectGallery from './custom_components/ProjectGallery';

import LogoLoop from './react_bits_components/LogoLoop'
import TargetCursor from './react_bits_components/TargetCursor';

import { LiaHomeSolid, LiaArchiveSolid, LiaUserAltSolid, LiaGithub, LiaItchIo, LiaLinkedinIn } from 'react-icons/lia';
import { SiReact, SiUnrealengine, SiJavascript, SiCplusplus, SiGit, SiMysql, SiPython } from 'react-icons/si';
import { BiLogoUnity } from 'react-icons/bi';
import { TbBrandCSharp } from 'react-icons/tb';

const techLogos = [
  { node: <SiReact />,        title: "React",        href: "https://github.com/ph0nsy" },
  { node: <SiUnrealengine />, title: "UnrealEngine", href: "https://github.com/ph0nsy" },
  { node: <BiLogoUnity />,    title: "Unity",        href: "https://github.com/ph0nsy" },
  { node: <SiJavascript />,   title: "JavaScript",   href: "https://github.com/ph0nsy" },
  { node: <SiCplusplus />,    title: "C++",          href: "https://github.com/ph0nsy" },
  { node: <TbBrandCSharp />,  title: "C#",           href: "https://github.com/ph0nsy" },
  { node: <SiPython />,       title: "Pyhon",        href: "https://github.com/ph0nsy" },
  { node: <SiMysql />,        title: "MySQL",        href: "https://github.com/ph0nsy" },
  { node: <SiGit />,          title: "Git",          href: "https://github.com/ph0nsy" },
];

/*
// Alternative with image sources
const imageLogos = [
  { src: "/logos/company1.png", alt: "Company 1", href: "https://company1.com" },
  { src: "/logos/company2.png", alt: "Company 2", href: "https://company2.com" },
  { src: "/logos/company3.png", alt: "Company 3", href: "https://company3.com" },
];
*/


function App() {
  
  const isMobile = useMobile().isMobile;

  return (
    <div className="App">
      {!isMobile && <TargetCursor 
        spinDuration={8}
        hideDefaultCursor={true}
        parallaxOn={true}
      />}
      <Header id="Home" mobile={isMobile} />
      {/*<section className="App-content">

        <div style={{ width: '75%', marginRight: 'auto', marginLeft: 'auto', height: '15vh',  position: 'relative', overflow: 'hidden' }}>
          <LogoLoop
            logos={techLogos}
            speed={60}
            direction="left"
            logoHeight={98}
            gap={68}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#000000"
            ariaLabel="Technical Skills"
          />
        </div>
        <ProjectGallery />*/}
        {/*About + Contact (+ Portfolio link)*/} 

        {/*className=""*/}
      
        {/*Skills Showcase*/}

        {/*Portfolio (link) Showcase*/}

      {/*</section>*/}
      {/*Contact + Footer + Socials*/}
      <footer className="App-footer">
        <Navigation mobile={isMobile} />
        {!isMobile && 
        <div style={{ position:'fixed', marginRight:'auto', marginLeft:'auto', bottom: '150px', left:'50%', transform:'translate(-50%, 0%)' }}>
          <div style={{ display:'inline-block', margin:'25px', backgroundColor:'black', borderRadius:'40px' }} className="cursor-target"><LiaGithub size={92} onClick={() => window.open("https://github.com/ph0nsy", "_self")} /></div>
          <div style={{ display:'inline-block', margin:'25px', backgroundColor:'#fa5c5c', borderRadius:'20px' }} className="cursor-target"><LiaItchIo size={92} onClick={() => window.open("https://ph0nsy.itch.io", "_self")} /></div>
          <div style={{ display:'inline-block', margin:'25px', backgroundColor:'#0a66c2', borderRadius:'10px' }} className="cursor-target"><LiaLinkedinIn size={92} onClick={() => window.open("https://www.linkedin.com/in/ph0nsy", "_self")} /></div>
        </div>}
      </footer>
    </div>
  );
}

export default App;
