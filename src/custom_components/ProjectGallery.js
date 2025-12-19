import './ProjectGallery.css'
import { useEffect } from 'react';
import { useTags } from '../hooks/useTagsContext';

function ProjectGallery({ title = 'Projects' }){
  
    const { tags, addTag, deleteTag, removeAll } = useTags();
  
useEffect(() => {
  let scheduled = false;

  const handleScroll = () => {
    if (scheduled) return;
    scheduled = true;

    requestAnimationFrame(() => {
      const cards = document.getElementsByClassName('card');
      const viewportHeight = window.innerHeight;

      Array.from(cards).forEach((card) => {
        const rect = card.getBoundingClientRect();
        const isVisible = rect.top < viewportHeight && rect.bottom > 0;

        if (isVisible) {
          card.classList.add('fade-in');
        } else {
          card.classList.remove('fade-in');
        }
      });

      scheduled = false;
    });
  };

  // initial check
  handleScroll();
  window.addEventListener('scroll', handleScroll, { passive: true });
  window.addEventListener('resize', handleScroll);

  return () => {
    window.removeEventListener('scroll', handleScroll);
    window.removeEventListener('resize', handleScroll);
  };
}, []);



    const typeColors = new Map([
      ["Game", '#CF2376'],
      ["Game Jam", '#BF2A2A'],
      ["Game Engine", '#AE00FF'],
      ["Web", '#388258'],
      ["Python", '#F7E00C'],
    ]);

    const projects = [
        {
          title: 'Lady Umbrella',
          link:'https://store.steampowered.com/app/3956890/Lady_Umbrella/',
          year: '2025',
          image: './assets/LadyUmbrella.png',
          description:
            "Master's final project developed in Unreal Engine 5.5. I worked on a custom third-person camera system, UI menus (design & implementation), and performance optimization, collaborating within a multidisciplinary team of ~40 developers.",
          tags: [
            'Game',
            'Unreal Engine', 
            'C++',
          ],
          imageStyle: 'cover',
        },
        {
          title: 'Portfolio Website',
          year: '2025',
          link:'https://github.com/ph0nsy/portfolio',
          image: './assets/Portfolio.png',
          description: 'Personal portfolio built with React, using React Bits and custom components. Designed as an expandable platform to showcase projects and document ongoing work.',
          tags: [
            'Web', 
            'React', 
            'JavaScript'
          ],
          imageStyle: 'cover',
        },
        {
          title: 'Pop It Box It',
          year: '2025',
          link:'https://globalgamejam.org/games/2025/bubble-paper-shooter-fabrik-xtream-survival-and-what-hell-happening-real-popity-3',
          image: 'https://ggjv4.s3.us-west-1.amazonaws.com/files/styles/sidebar_full/s3/games/2025/428876/team_picture/WhatsApp%20Image%202025-01-26%20at%2003.40.23.jpeg?VersionId=GUAI5cUx65vHn.O_UyD9D4n2nMdDkHuP&itok=cMfKKXij',
          description: 'Global Game Jam 2025 project developed in Unity with a team of 7 under the theme “Bubbles”. Rapidly prototyped the main gameplay around the theme, focused on speed, team coordination and scope managing.',
          tags: [
            'Game Jam',
            'Unity',
            'C#',
          ],
          imageStyle: 'cover',
        },
        {
          title: 'Math Rails Line-Mapper',
          year: '2025',
          link:'https://ph0nsy.itch.io/math-rails-line-mapper',
          image: './assets/MathRailsLineMapper.png',
          description: 'Proof of concept for an educational game focused on teaching mathematical function visualization. Developed in Unity as part of my Computer Science degree, exploring gameplay-driven learning mechanics.',
          tags: [
            'Game', 
            'Unity',
            'C#',
          ],
          imageStyle: 'cover',
        },
        {
          title: 'Ticketing App',
          year: '2024',
          link:'https://www.improntasoluciones.com/en',
          image: 'https://cdn.janto.es/pro/webImpronta23/img/20231018123300_1697625180.682Impronta.jpg',
          description: 'Frontend developer internship at Impronta Soluciones. Worked in a small team to build and maintain a React-based ticketing application, focusing on UI implementation and usability.',
          tags: [
            'Web', 
            'React', 
            'JavaScript'
          ],
          imageStyle: 'cover',
        },
        {
          title: "It's not funny anymore",
          year: '2024',
          link:'https://ph0nsy.itch.io/its-not-funny-anymore',
          image: 'https://img.itch.zone/aW1hZ2UvMjUzNzM2OC8xNTA5NTkzNC5qcGVn/original/jH0VJ9.jpeg',
          description: 'Game jam project developed in Unity with a team of 10 under the theme “Make Me Laugh”. Contributed to gameplay implementation, importing 3D models into the project and rapid iteration.',
          tags: [
            'Game Jam',
            'Unity',
            'C#',
          ],
          imageStyle: 'cover',
        },
        {
          title: "Shitpost Status",
          year: '2023',
          link:'https://ph0nsy.itch.io/shitpost-status',
          image: 'https://img.itch.zone/aW1hZ2UvMjIyMDQ5Ny8xMzU3MzIyOS5wbmc=/original/7Kzupq.png',
          description: 'Multiplayer browser card game hosted on itch.io and Vercel developed as a Computer Science project using Phaser 3 and Socket.io for client-server communication.',
          tags: [
            'Game', 
            'JavaScript',
            'Socket.io'
          ],
          imageStyle: 'cover',
        },
        {
          title: 'AI & Dataminging Projects',
          year: '2023',
          link:'https://store.steampowered.com/app/3956890/Lady_Umbrella/',
          image: './assets/GitHub_Logo_White.png',
          description: 'Collection of Python-based projects based on machine learning and data analysis, developed during for Computer Science degree using tools like Jupyter and TensorFlow.',
          tags: [
            'Python', 
            'Jupyter', 
            'Tensorflow'
          ],
          imageStyle: 'contain',
        },
        {
          title: "Sprouts",
          year: '2023',
          link:'https://github.com/ph0nsy/GGJ-2023',
          image: './assets/Sprouts.png',
          description: 'Global Game Jam 2023 project developed in Unity with a team of 10, based on the theme “Roots”. Helped novice Unity developers during the game creation.',
          tags: [
            'Game Jam',
            'Unity',
            'C#'
          ],
          imageStyle: 'cover',
        },
        {
          title: "Vice Duo",
          year: '2022',
          link:'https://github.com/ph0nsy/GGJ-22',
          image: 'https://raw.githubusercontent.com/ph0nsy/GGJ-22/refs/heads/main/Assets/Sprites/Menu/bakgroundMainMenu.png',
          description: 'Game jam project developed in Unity with a team of 5 under the theme “Duality”. Explored local 2 player controls and mechanics.',
          tags: [
            'Game Jam',
            'Unity',
            'C#'
          ],
          imageStyle: 'cover',
        },
        {
          title: 'LaMancha Engine',
          year: 'Upcoming',
          link:'https://github.com/ph0nsy/LaMancha-Engine',
          image: './assets/LaMancha_Github_Repo_Logo.png',
          description: 'Lightweight 2D game engine written in C/C++, currently under development. Targeted at low-end platforms (including R36S), with scripting support via Lua and a focus on simplicity and performance.',
          tags: [
            'Game Engine',
            'C++',
            'Lua',
          ],
          imageStyle: 'cover',
        },
      ];

    const matchTags = (current, target) => {
        return target.every((tag) => current.includes(tag));
    };
  // Scroll -> add/remove fade-in class on .card elements.
  // Use requestAnimationFrame to throttle DOM updates and cleanup on unmount.
  useEffect(() => {
    let scheduled = false;

    const handleScroll = () => {
      if (scheduled) return;
      scheduled = true;
      requestAnimationFrame(() => {
        const cards = document.getElementsByClassName('card');
        const windowOffsetTop = window.innerHeight + window.scrollY;
        Array.prototype.forEach.call(cards, (card) => {
          const classesArray = card.classList;
          if (windowOffsetTop >= card.offsetTop) {
            if (![...classesArray].includes('fade-in')) {
              card.classList.add('fade-in');
            }
          } else if ([...classesArray].includes('fade-in')) {
            card.classList.remove('fade-in');
          }
        });
        scheduled = false;
      });
    };

    // immediate check + attach
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // no dependencies: this effect deals with DOM only

    return (
    <div style={{ width:'100%', background: 'url(./assets/LU_RenderCity.png) no-repeat center', backgroundSize: 'cover' }}>
    <h1 className='rubik-mono-one-regular'>{title}</h1>
    <div className='tags-container' style={{ backdropFilter: 'grayscale(1%) blur(10px) brightness(90%)' }}>
        <div style={{ width:'100%', gap:'8px', minHeight:'5vh', margin:'1.5vh 10vw', backdropFilter: 'none', border: 'solid 0.5rem', borderRadius: '24px' }}>
        {tags.length > 0
            ? tags.map((tag) => {
                return (
                <button
                    key={`close-button-${tag}`}
                    className='close cursor-target bungee-regular'
                    onClick={() => { deleteTag(tag) }}
                    style = {{ margin:'15px 0px' }}
                >
                    {tag} &nbsp; x
                </button>
                );
            })
            : <p style={{ fontSize:'30px', fontVariant:'small-caps', margin:'15px 0px' }}>click a tag to filter projects</p>}
        </div>
        {projects
        .filter((proj) => matchTags(proj.tags, tags))
        .map(({ title, year, link, image, description, tags, imageStyle }) => {
            
            let colorType = null;
            
            for (const x of tags) {
              if (colorType == null && [...typeColors.keys()].includes(x)) {
                colorType = typeColors.get(x);
              }
            }

            {/*background : 'radial-gradient(ellipse at bottom, ' + colorType + ', transparent), radial-gradient(ellipse at top, #A716B0, transparent)',*/} 
            const linearGradient = { 
              background : 'radial-gradient(ellipse at bottom, #485696, transparent), radial-gradient(ellipse at top, #A716B0, transparent)',
             }

            let textSizeHeader = window.innerWidth > 764 ? '28px' : '24px';
            let textSizeDesc = window.innerWidth > 764 ? '16px' : '16px';
            let textSizeTag = window.innerWidth > 764 ? '14px' : '16px';

            return (
              <div key={`card-${title}`} className='card cursor-target' style={linearGradient}>
                <a style={{ textDecoration:'none', color:'inherit', textdecoration:'small' }} target="_blank" href={link}>
                  <div style={{ width:'100%', display:'block', margin:'auto', paddingBottom:'10px', position:'relative' }}>
                    <img className='cardImage' src={image} alt={'missing image'} style={{objectFit:imageStyle}}/>
                    <h1 style={{ margin:'0px 3px', textAlign:'center', width:'100%', fontVariant:'small-caps', fontSize:textSizeHeader }}>{title}</h1>
                    <h2 style={{ position:'absolute', margin:'5px', width:'20%', fontSize:'32px', top:'10px', left:'10px', textShadow:'2px 2px 6px #000000', fontVariant:'small-caps' }}>{year}</h2>
                    <p style={{ margin:'5px 10px', fontSize:textSizeDesc }}>{description}</p>
                  </div>            
                </a>
                  <div style={{ position:'absolute', top:'10px', right:'10px', display:'flex', width:'30%', justifyContent:'flex-start', flexDirection:'row', flexWrap: 'wrap', alignItems:'stretch' }}>   
                    {tags.map((tag) => {  
                    return (
                        <button
                        key={`add-button-${tag}`}
                        type='button'
                        className='tag-button bungee-regular cursor-target'
                        onClick={() => { addTag(tag) }}
                        style={{ fontSize:textSizeTag }}
                        >
                        {tag}
                        </button>
                    );
                    })}  
                  </div> 
              </div>
            );
        })}
    </div>
  </div>);
    
}

export default ProjectGallery;