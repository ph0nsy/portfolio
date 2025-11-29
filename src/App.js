import './App.css';

import { useState, useEffect } from 'react';
import { useMobile } from './hooks/useMobile';
import { TagsProvider } from './hooks/useTagsContext';

import ReactDOM from 'react-dom'

//import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import Header from './custom_components/Header';
import Navigation from './custom_components/Navigation';
import ProjectGallery from './custom_components/ProjectGallery';

import LogoLoop from './react_bits_components/LogoLoop'
import TargetCursor from './react_bits_components/TargetCursor';

import { IoIosMail } from "react-icons/io";
import { LiaHomeSolid, LiaArchiveSolid, LiaUserAltSolid, LiaGithub, LiaItchIo, LiaLinkedinIn, LiaMailBulkSolid, LiaMailchimp } from 'react-icons/lia';
import { SiReact, SiUnrealengine, SiJavascript, SiCplusplus, SiGit, SiMysql, SiPython, SiLua } from 'react-icons/si';
import { BiLogoUnity } from 'react-icons/bi';
import { TbBrandCSharp } from 'react-icons/tb';

const techLogos = [
  { node: <SiReact />,        title: "React",        href: "React" },
  { node: <SiUnrealengine />, title: "UnrealEngine", href: "Unreal Engine" },
  { node: <BiLogoUnity />,    title: "Unity",        href: "Unity" },
  { node: <SiJavascript />,   title: "JavaScript",   href: "JavaScript" },
  { node: <SiCplusplus />,    title: "C++",          href: "C++" },
  { node: <TbBrandCSharp />,  title: "C#",           href: "C#" },
  { node: <SiPython />,       title: "Pyhon",        href: "Python" },
  { node: <SiMysql />,        title: "MySQL",        href: "MySQL" },
  { node: <SiLua />,          title: "Lua",          href: "Lua" },
  {/*{ node: <SiGit />,          title: "Git",          href: "Git" },*/}
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
    
    <TagsProvider>
    <div className="App">
      {!isMobile && <TargetCursor 
        spinDuration={8}
        hideDefaultCursor={true}
        parallaxOn={true}
      />}
      <Header id="Home" mobile={isMobile} />
      <section className="App-content">

        <div style={{ width: '75%', marginRight: 'auto', marginLeft: 'auto', minHeight: '15vh', maxHeight: '25vh',  position: 'relative', overflow: 'hidden' }}>
          <LogoLoop
            logos={techLogos}
            speed={60}
            direction="left"
            logoHeight={isMobile ? 50 : 98}
            gap={isMobile ? 30 : 68}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#000000"
            ariaLabel="Technical Skills"
          />
        </div>
          <ProjectGallery />
        {/*About + Contact (+ Portfolio link)*/} 

        {/*className=""*/}
      
        {/*Skills Showcase*/}

        {/*Portfolio (link) Showcase*/}

      </section>
      {/*Contact + Footer + Socials*/}
      <footer className="App-footer">
        <Navigation mobile={isMobile} />
        {!isMobile && 
        <div style={{ position:'fixed', bottom: '20px', right:'5vw', width:'1vw', transform:'translate(-50%, 0%)' }}>
          <div style={{ display:'inline-block', margin:'10px', backgroundColor:'#000000', borderRadius:'50px', padding:'5px' }} className="cursor-target"><LiaGithub size={36} onClick={() => window.open("https://github.com/ph0nsy", "_self")} /></div>
          <div style={{ display:'inline-block', margin:'10px', backgroundColor:'#fa5c5c', borderRadius:'50px', padding:'5px' }} className="cursor-target"><LiaItchIo size={36} onClick={() => window.open("https://ph0nsy.itch.io", "_self")} /></div>
          <div style={{ display:'inline-block', margin:'10px', backgroundColor:'#0a66c2', borderRadius:'50px', padding:'5px' }} className="cursor-target"><LiaLinkedinIn size={36} onClick={() => window.open("https://www.linkedin.com/in/ph0nsy", "_self")} /></div>
          <div style={{ display:'inline-block', margin:'10px', backgroundColor:'#c71610', borderRadius:'50px', padding:'5px' }} className="cursor-target"><IoIosMail size={36} onClick={() => window.open("mailto:ph0nsydev@gmail.com", "_blank")} /></div>
        </div>}
      </footer>
    </div>
    </TagsProvider>
  );
}

export default App;
