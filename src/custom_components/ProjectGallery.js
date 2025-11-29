import './ProjectGallery.css'
import { useEffect } from 'react';
import { useTags } from '../hooks/useTagsContext';

function ProjectGallery(){
  
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
          image: 'https://raw.githubusercontent.com/ph0nsy/portfolio/refs/heads/main/src/assets/LadyUmbrella.png',
          description:
            'This is an example project item. You can sort through these using the tags. You can also click a tag to add it to the filter.',
          tags: [
            'Game',
            'C++',
            'Unreal Engine', 
          ],
        },
        {
          title: 'Portfolio Website',
          year: '2025',
          link:'https://github.com/ph0nsy/portfolio',
          image: 'https://raw.githubusercontent.com/ph0nsy/portfolio/refs/heads/main/src/assets/GitHub_Logo_White.png',
          description: 'React implementation of the game of life.',
          tags: [
            'Web', 
            'React', 
            'JavaScript'
          ],
        },
        {
          title: 'Pop-it Box-it',
          year: '2025',
          link:'https://github.com/ph0nsy/LaMancha-Engine',
          image: '',
          description: 'A Weather App with React Native ',
          tags: [
            'Game Jam',
            'C#',
            'Unity'
          ],
        },
        {
          title: 'Math Rails: Line Mapper',
          year: '2025',
          link:'https://ph0nsy.itch.io/math-rails-line-mapper',
          image: 'https://img.itch.zone/aW1nLzE4MjA3OTgyLnBuZw==/original/atW7sn.png',
          description: 'A command-line Tic Tac Toe game written in Ruby',
          tags: [
            'Game', 
            'C#',
            'Unity'
          ],
        },
        {
          title: 'Ticketing App',
          year: '2024',
          link:'https://www.improntasoluciones.com/en',
          image: 'https://cdn.janto.es/pro/webImpronta23/img/20231018123300_1697625180.682Impronta.jpg',
          description: 'Calculator written in Javascript',
          tags: [
            'Web', 
            'React', 
            'JavaScript'
          ],
        },
        {
          title: "It's not funny anymore",
          year: '2024',
          link:'https://ph0nsy.itch.io/its-not-funny-anymore',
          image: 'https://img.itch.zone/aW1hZ2UvMjUzNzM2OC8xNTA5NTkzNC5qcGVn/original/jH0VJ9.jpeg',
          description: 'A Weather App with React Native ',
          tags: [
            'Game Jam',
            'C#',
            'Unity'
          ],
        },
        {
          title: "Shitpost Status",
          year: '2023',
          link:'https://ph0nsy.itch.io/shitpost-status',
          image: 'https://img.itch.zone/aW1hZ2UvMjIyMDQ5Ny8xMzU3MzIyOS5wbmc=/original/7Kzupq.png',
          description: 'A Weather App with React Native ',
          tags: [
            'Game', 
            'JavaScript',
            'Socket.io'
          ],
        },
        {
          title: 'AI & Dataminging Projects',
          year: '2023',
          link:'https://store.steampowered.com/app/3956890/Lady_Umbrella/',
          image: 'https://raw.githubusercontent.com/ph0nsy/portfolio/refs/heads/main/src/assets/GitHub_Logo_White.png',
          description: 'Calculator written in Javascript',
          tags: [
            'Python', 
            'Jupyter', 
            'Tensorflow'
          ],
        },
        {
          title: "Sprouts",
          year: '2023',
          link:'https://store.steampowered.com/app/3956890/Lady_Umbrella/',
          image: '',
          description: 'A Weather App with React Native ',
          tags: [
            'Game Jam',
            'Unity',
            'C#'
          ],
        },
        {
          title: "Vice Duo",
          year: '2022',
          link:'https://store.steampowered.com/app/3956890/Lady_Umbrella/',
          image: '',
          description: 'A Weather App with React Native',
          tags: [
            'Game Jam',
            'Unity',
            'C#'
          ],
        },
        {
          title: 'LaMancha Engine',
          year: 'Upcoming',
          link:'https://store.steampowered.com/app/3956890/Lady_Umbrella/',
          image: 'https://raw.githubusercontent.com/ph0nsy/LaMancha-Engine/refs/heads/main/config/linux/icon_256.png',
          description: 'Full stack todo-list written in fullstack Javascript',
          tags: [
            'Game Engine',
            'C++',
          ],
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
    <div className='tags-container'>
        <div style={{ width:'100%', gap:'8px' }}>
        {tags.length > 0
            ? tags.map((tag) => {
                return (
                <button
                    key={`close-button-${tag}`}
                    className='close cursor-target'
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
        .map(({ title, year, link, image, description, tags }) => {
            
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

            let textSizeHeader = window.innerWidth > 764 ? '32px' : '24px';
            let textSizeDesc = window.innerWidth > 764 ? '18px' : '14px';
            let textSizeTag = window.innerWidth > 764 ? '12px' : '12px';

            return (
              <div key={`card-${title}`} className='card cursor-target' style={linearGradient}>
                <a style={{ textDecoration:'none', color:'inherit', textdecoration:'small' }} target="_blank" href={link}>
                  <div style={{ width:'100%', display:'block', margin:'auto', paddingBottom:'10px', position:'relative' }}>
                    <img className='cardImage' src={image} alt={'missing image'}/>
                    <h1 style={{ margin:'5px 0px', textAlign:'center', width:'100%', fontVariant:'small-caps', fontSize:textSizeHeader }}>{title}</h1>
                    <h2 style={{ position:'absolute', margin:'5px', width:'20%', fontSize:'24px', top:'10px', left:'10px', textShadow:'2px 2px 6px #000000', fontVariant:'small-caps' }}>{year}</h2>
                    <p style={{ margin:'5px 0px', fontSize:textSizeDesc }}>{description}</p>
                  </div>            
                </a>
                  <div style={{ position:'absolute', top:'10px', right:'10px', display:'flex', width:'30%', justifyContent:'flex-start', flexDirection:'row', flexWrap: 'wrap', alignItems:'stretch' }}>   
                    {tags.map((tag) => {  
                    return (
                        <button
                        key={`add-button-${tag}`}
                        type='button'
                        className='tag-button cursor-target'
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
    </div>);
    
}

export default ProjectGallery;