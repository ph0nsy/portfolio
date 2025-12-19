import './App.css';

import { useState, useEffect } from 'react';
import { useMobile } from './hooks/useMobile';
import { TagsProvider } from './hooks/useTagsContext';

import ReactDOM from 'react-dom'

//import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import Header from './custom_components/Header';
import Navigation from './custom_components/Navigation';
import ProjectGallery from './custom_components/ProjectGallery';

import AnimatedContent from './react_bits_components/AnimatedContent';
import LogoLoop from './react_bits_components/LogoLoop'
import TargetCursor from './react_bits_components/TargetCursor';
import Marquee from './custom_components/Marquee'

import { IoIosMail } from "react-icons/io";
import { LiaHomeSolid, LiaArchiveSolid, LiaUserAltSolid, LiaGithub, LiaItchIo, LiaLinkedinIn, LiaMailBulkSolid, LiaMailchimp } from 'react-icons/lia';
import { SiReact, SiUnrealengine, SiJavascript, SiCplusplus, SiGit, SiMysql, SiPython, SiLua, SiCss3, SiHtml5 } from 'react-icons/si';
import { BiLogoUnity } from 'react-icons/bi';
import { TbBrandCSharp } from 'react-icons/tb';

const techLogos_Lang = [
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1024px-Unofficial_JavaScript_logo_2.svg.png",   title: "JavaScript",   href: "JavaScript" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/ISO_C%2B%2B_Logo.svg/256px-ISO_C%2B%2B_Logo.svg.png?20170928190710",    title: "C++",          href: "C++" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/Logo_C_sharp.svg/1820px-Logo_C_sharp.svg.png",  alt: "C#",           href: "C#" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/2048px-Python-logo-notext.svg.png",       title: "Pyhon",        href: "Python" },
  { src: "https://pngimg.com/d/mysql_PNG9.png",        title: "MySQL",        href: "MySQL" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Lua-Logo.svg/2048px-Lua-Logo.svg.png",          title: "Lua",          href: "Lua" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Git_icon.svg/2048px-Git_icon.svg.png",          title: "Git",          href: "Git" }
];

const techLogos_Game = [
  { node: <SiUnrealengine />, title: "UnrealEngine", href: "Unreal Engine" },
  { node: <BiLogoUnity />,    title: "Unity",        href: "Unity" },
  { src: "https://cdn.phaser.io/images/logo/logo-download.png", alt: "Phaser", href: "Phaser" }
];

const techLogos_Web = [
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/2048px-HTML5_logo_and_wordmark.svg.png",        alt: "HTLM",         href: "HTLM" },
  { src: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/CSS3_logo_and_wordmark.svg/1452px-CSS3_logo_and_wordmark.svg.png",         alt: "CSS",          href: "CSS" },
  { src: "https://images.icon-icons.com/2415/PNG/512/react_original_wordmark_logo_icon_146375.png",        alt: "React",        href: "React" }
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
      <div style={{ maxWidth: '100vw', height: '50vh', clipPath: 'polygon(100% 50%, 0% 100%, 100% 100%)', background: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%)', marginTop: '100vh', marginBottom: '-0.5vh'}}></div>
      <section className="App-content">
        {/*About + Contact (+ Portfolio link)*/} 
        
        {/* Start decoration */}
        <div style={{ maxWidth: '100vw', minHeight: '20vh', clipPath: 'polygon(0% 50%, 0% 100%, 100% 100%)', background: 'white' }}></div>
        <div style={{ margin: '-0.1vh 0', background: 'white', padding: '5vh 12vw' }}>
          <AnimatedContent
            distance={150}
            direction="vertical"
            reverse={false}
            duration={1.2}
            ease="power3.out"
            initialOpacity={0.2}
            animateOpacity
            scale={1.1}
            threshold={0.2}
            delay={0.01}
          >
            {/* fontSize: '78px' */}
            <h1 style={{ fontSize: '48px', textAlign: 'left', color: 'black', fontVariant: 'small-caps' }}>Who am I?</h1>
          </AnimatedContent>
          
          <div style={{ minHeight: '40vh' }}>              
            <div style={{ display: 'flex', verticalAlign: 'bottom' }}>
              <AnimatedContent
                distance={250}
                direction="vertical"
                reverse={false}
                duration={1.2}
                ease="bonce.out"
                initialOpacity={0.01}
                animateOpacity
                scale={1.1}
                threshold={0.2}
                delay={0.04}
                style={{ flex: '1' }}
              >
                <a href='https://www.linkedin.com/in/ph0nsy'><LiaLinkedinIn className='cursor-target' size={70} style={{ color: '#0a66c2',  padding: '10px 0' }}/></a>
              </AnimatedContent>
              
              <AnimatedContent
                distance={250}
                direction="vertical"
                reverse={false}
                duration={1.2}
                ease="bonce.out"
                initialOpacity={0.01}
                animateOpacity
                scale={1.1}
                threshold={0.2}
                delay={0.05}
                style={{ flex: '1', margin: '10px' }}
              >
                <a href='https://github.com/ph0nsy' style={{ marginLeft:'10px' }}><LiaGithub className='cursor-target' size={70} style={{ color: 'black', padding: '10px 0' }}/></a>        
              </AnimatedContent>
            </div>

            <AnimatedContent
              distance={250}
              direction="horizontal"
              reverse={false}
              duration={1.25}
              ease="bonce.out"
              initialOpacity={0.0}
              animateOpacity
              scale={1.1}
              threshold={0.2}
              delay={0.1} 
            >
              <img src="./assets/hey_thats_me.png" style={{ verticalAlign: 'top',  float: 'right', shapeOutside: 'polygon(50% 0%, 100% 50%, 50% 100%, 10% 60%)', shapeMargin:'5rem', margin:'-10vh 0 2vh 2vh' }} />
              <p style={{ verticalAlign: 'top', textAlign: 'left', fontSize: '24px', color: 'black', lineHeight: '2.2rem' }}>
              I'm a <b>game programmer</b> working on gameplay systems, tools, and player-facing features. I have experience working on things like camera systems, UI flows, and gameplay; and I enjoy when small technical decisions have a big impact on how the game feels to play.
              <br/>
              I have a <b>Computer Science degree</b> from Universidad Francisco de Vitoria (2025), a <b>Graduate Degree in Game Development</b> (2022), and I'm currently finishing a <b>Master's in Game Programming</b> at <span style={{ fontVariant: 'small-caps' }}>U-Tad</span> University. My background blends strong CS fundamentals with hands-on game development experience.
              <br/>
              I enjoy experimenting and prototyping, and I often take part in game jams (<i>every <b>Global Game Jam</b> since 2022</i>) as a way to explore ideas, iterate quickly, and learn from working with multiple people from multiple disciplines.
              <br/>
              I'm also interested in <i>symbolic AI</i> and <i>GOFAI</i> approaches (heuristics, search, planning) and how they can be applied to make game systems.
              </p>

            </AnimatedContent>

          </div>
        </div>        
        <div style={{ maxWidth: '100vw', minHeight: '20vh', clipPath: 'polygon(100% 50%, 0% 0%, 100% 0%)', background: 'white' }}></div>          

        <div style={{ width: '100%', padding: '5vh 0', minHeight: '15vh',  position: 'relative', overflow: 'hidden' }}>        
          <Marquee
            marqueeText='SKILLS'
            textSize='16vh'
            marqHeight='10vh'
            tilt='4deg'
            invertDir={1}
          />
          <br/>
          <LogoLoop
            logos={techLogos_Lang}
            speed={120}
            direction="left"
            logoHeight={isMobile ? 10 : 8}
            gap={isMobile ? 30 : 100}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#000000"
            ariaLabel="Programming Languages Skills"
            style={{ rotate: '-2deg' }}
          />     
          <br/>     
          <Marquee
            marqueeText='LANGUAGES'
            textSize='8vh'
            marqHeight='5vh'
            tilt='-2deg'
          />
          <br/>   
          <LogoLoop
            logos={techLogos_Game}
            speed={120}
            direction="right"
            logoHeight={isMobile ? 10 : 8}
            gap={isMobile ? 30 : 150}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#000000"
            ariaLabel="Game Development Skills"
            style={{ rotate: '2deg' }}
          />    
          <br/>    
          <Marquee
            marqueeText='GAME DEV'
            textSize='8vh'
            marqHeight='5vh'
            tilt='2deg'
            invertDir={1}
          />
          <br/>   
          <LogoLoop
            logos={techLogos_Web}
            speed={120}
            direction="left"
            logoHeight={isMobile ? 10 : 8}
            gap={isMobile ? 30 : 150}
            pauseOnHover
            scaleOnHover
            fadeOut
            fadeOutColor="#000000"
            ariaLabel="Web Development Skills"
            style={{ rotate: '-2.5deg' }}
          />  
          <br/>    
          <Marquee
            marqueeText='WEB DEV'
            textSize='8vh'
            marqHeight='5vh'
            tilt='-2.5deg'
          />
          <br/>   
        </div>
      
        {/*Skills Showcase*/}

        {/*Featured project (link code and steam) */}

        <ProjectGallery />

      </section>
      {/*Contact + Footer + Socials*/}
      <footer className="App-footer">
        <p style={{ paddingTop: '1.5rem', margin: '0' }}>Alonso Moreno © 2025</p>
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
