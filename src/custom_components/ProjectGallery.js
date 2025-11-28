import './ProjectGallery.css'
import { useState, useCallback, useId } from 'react';
/*
const inViewport = (entries, observer) => {
  entries.forEach(entry => {
    console.log(entry);
    const classes = entry.target.classList;
    if ([...classes].includes("fade-in")) {
      entry.target.classList.remove("fade-in");
    }
    else {
      entry.target.classList.add("fade-in");
    }
  });
};

const Obs = new IntersectionObserver(inViewport);
const obsOptions = {}; 

Array.from(document.getElementsByClassName('card')).forEach(element => {
  console.log(element);
  Obs.observe(element, obsOptions);
  console.log(element);
});

*/
document.addEventListener("DOMContentLoaded", function(event) {
  document.addEventListener("scroll", function(event) {
      const cards = document.getElementsByClassName("card");
      const windowOffsetTop = window.innerHeight + window.scrollY;
      console.log('WinOffset - ' + windowOffsetTop);

      Array.prototype.forEach.call(cards, (card) => {       
        console.log(card);  
        const classesArray = card.classList;
          if (windowOffsetTop >= card.offsetTop) {
            if (![...classesArray].includes("fade-in")) {
              card.classList.add("fade-in");
              console.log(card.key + ' [ADD] - ' + card.className);

            }
          }
          else if([...classesArray].includes("fade-in")){
            console.log(card.key + ' [REMOVE] - ' + card.className);
            card.classList.remove("fade-in");
          }
      });
  });
});

function ProjectGallery(){
    const [tags, setTags] = useState([]);
    const id = useId();
    
    const typeColors = new Map([
      ["Game", '#CF2376'],
      ["Game Jam", '#BF2A2A'],
      ["Game Engine", '#AE00FF'],
      ["Web", '#388258'],
      ["Python", '#F7E00C'],
    ]);

    const sourceColors = new Map([
      ["Bachelor's Degree", '#044BBD'],
      ["Master's Degree", '#00B7FF'],
      ["Internship", '#00B7FF'],
      ["Upcoming", '#EEAECA']
    ])

    const projects = [
        {
          title: 'Lady Umbrella',
          link:'https://store.steampowered.com/app/3956890/Lady_Umbrella/',
          year: '2025',
          image: 'https://raw.githubusercontent.com/ph0nsy/portfolio/refs/heads/main/src/assets/LadyUmbrella.jpg',
          description:
            'This is an example project item. You can sort through these using the tags. You can also click a tag to add it to the filter.',
          tags: [
            'Game',
            'Unreal Engine', 
            'C++', 
            "Master's Degree"
          ],
        },
        {
          title: 'Portfolio Website',
          year: '2025',
          link:'https://store.steampowered.com/app/3956890/Lady_Umbrella/',
          image: '',
          description: 'React implementation of the game of life.',
          tags: [
            'Web', 
            'React', 
            'JavaScript', 
            'Front-end'
          ],
        },
        {
          title: 'Pop-it Box-it',
          year: '2025',
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
          title: 'Math Rails: Line Mapper',
          year: '2025',
          link:'https://store.steampowered.com/app/3956890/Lady_Umbrella/',
          image: '',
          description: 'A command-line Tic Tac Toe game written in Ruby',
          tags: [
            'Game', 
            'Unity',
            'C#', 
            "Bachelor's Degree"
          ],
        },
        {
          title: 'Ticketing App',
          year: '2024',
          link:'https://store.steampowered.com/app/3956890/Lady_Umbrella/',
          image: '',
          description: 'Calculator written in Javascript',
          tags: [
            'Web', 
            'React', 
            'JavaScript', 
            'Front-end',
            'Internship'
          ],
        },
        {
          title: "It's not funny anymore",
          year: '2024',
          link:'https://store.steampowered.com/app/3956890/Lady_Umbrella/',
          image: '',
          description: 'A Weather App with React Native ',
          tags: [
            'Game Jam',
            'Unity',
            'C#',
          ],
        },
        {
          title: "Shitpost Status",
          year: '2023',
          link:'https://store.steampowered.com/app/3956890/Lady_Umbrella/',
          image: '',
          description: 'A Weather App with React Native ',
          tags: [
            'Game', 
            'JavaScript',
            'Phaser 3',
            'Socket.io',
            "Bachelor's Degree"
          ],
        },
        {
          title: 'AI & Dataminging Projects',
          year: '2023',
          link:'https://store.steampowered.com/app/3956890/Lady_Umbrella/',
          image: '',
          description: 'Calculator written in Javascript',
          tags: [
            'Python', 
            'Jupyter', 
            'Tensorflow', 
            "Bachelor's Degree"
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
          description: 'A Weather App with React Native ',
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
          image: '',
          description: 'Full stack todo-list written in fullstack Javascript',
          tags: [
            'Game Engine',
            'C++',
            'Upcoming'
          ],
        },
      ];

    const addTag = useCallback(
        (tag) => () => {
            if (!tags.includes(tag)) { return setTags((prevTags) => [...prevTags, tag]); }
        },
        [tags]
    );
    
    const deleteTag = useCallback(
        (tagId) => () => {
            const tagsFiltered = tags.filter((tag) => { return tag !== tagId; });
            setTags(tagsFiltered);
        },
        [tags]
    );

    const matchTags = (current, target) => {
        return target.every((tag) => current.includes(tag));
    };

    return (
    <div className='tags-container'>
        <div style={{ width:'100%' }}>
        {tags.length > 0
            ? tags.map((tag) => {
                return (
                <button
                    key={`close-button-${id}`}
                    className='close cursor-target'
                    onClick={deleteTag(tag)}
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
            let colorSource = null;
            
            for (const x of tags) {
              if (colorType == null && [...typeColors.keys()].includes(x)) {
                colorType = typeColors.get(x);
              }
              if (colorSource == null && [...sourceColors.keys()].includes(x)) {
                colorSource = sourceColors.get(x);
              }
            }

            if (colorSource == null) colorSource = colorType;
            
            const linearGradient = { 
              background : 'radial-gradient(ellipse at top, ' + colorType + ', transparent), radial-gradient(ellipse at bottom, ' + colorSource + ', transparent)', 
             }


            let widthHeader = window.innerWidth > 764 ? '70%' : '100%';
            let alignmentHeader = window.innerWidth > 764 ? 'center' : 'left';

            return (
              <div key={`card-${id}`} className='card cursor-target' style={linearGradient}>
                <a style={{ textDecoration:'none', color:'inherit', textdecoration:'small' }} target="_blank" href={link}>
                  <img className='cardImage' src={image} alt={'missing image'}/>
                  <div style={{ width:'90%', display:'block', margin:'auto'}}>
                    <h1 style={{ display:'inline-block', textAlign:{alignmentHeader}, width:{widthHeader} }}>{title}</h1>
                    {window.innerWidth > 764 && <h2 style={{ display:'inline-block', textAlign:'right', width:'20%' }}>{year}</h2>}
                    <p>{description}</p>
                  </div>                  
                </a>
                  {tags.map((tag) => {
                  return (
                      <button
                      key={`add-button-${id}`}
                      type='button'
                      className='tag-button cursor-target'
                      onClick={addTag(tag)}
                      >
                      {tag}
                      </button>
                  );
                  })}
              </div>
            );
        })}
    </div>);
    
}

export default ProjectGallery;