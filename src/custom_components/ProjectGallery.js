import './ProjectGallery.css'

import { useState, useCallback, useId } from 'react';


function ProjectGallery(){
    const [tags, setTags] = useState([]);
    const id = useId();

    const projects = [
        {
          title: 'Example 0',
          image: '',
          description:
            'This is an example project item. You can sort through these using the tags. You can also click a tag to add it to the filter.',
          tags: ['react', 'javascript', 'game', 'back-end'],
        },
        {
          title: 'Game of Life',
          image: '',
          description: 'React implementation of the game of life.',
          tags: ['react', 'javascript', 'game', 'web', 'front-end'],
        },
        {
          title: 'Calculator',
          image: '',
          description: 'Calculator written in Javascript',
          tags: ['javascript', 'utility', 'web'],
        },
        {
          title: 'Tic Tac Toe',
          image: '',
          description: 'A command-line Tic Tac Toe game written in Ruby',
          tags: ['ruby', 'game', 'cli'],
        },
        {
          title: 'TodoList',
          image: '',
          description: 'Full stack todo-list written in fullstack Javascript',
          tags: [
            'react',
            'javascript',
            'node',
            'fullstack',
            'front-end',
            'back-end',
            'web',
            'mvc',
          ],
        },
        {
          title: 'Weather',
          image: '',
          description: 'A Weather App with React Native ',
          tags: [
            'react',
            'javascript',
            'react-native',
            'front-end',
            'mobile',
            'android',
            'ios',
          ],
        },
        {
          title: 'Markdown Editor',
          image: '',
          description: 'Markdown Editor powered by Monaco and React',
          tags: ['react', 'javascript', 'monaco', 'front-end'],
        },
        {
          title: 'Bloggie',
          image: '',
          description: 'Rails-powered blog with a React front-end',
          tags: [
            'react',
            'javascript',
            'ruby',
            'front-end',
            'back-end',
            'fullstack',
            'ruby-on-rails',
            'mvc',
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
        <div>
        {tags.length > 0
            ? tags.map((tag) => {
                return (
                <button
                    key={`close-button-${id}`}
                    className='close'
                    onClick={deleteTag(tag)}
                >
                    {tag} &nbsp; x
                </button>
                );
            })
            : 'No tags selected'}
        </div>
        {projects
        .filter((proj) => matchTags(proj.tags, tags))
        .map(({ title, description, tags }) => {
            return (
            <div key={`card-${id}`} className='card'>
                <div>
                <p>{title}</p>
                <p>{description}</p>
                </div>
                {tags.map((tag) => {
                return (
                    <button
                    key={`add-button-${id}`}
                    type='button'
                    className='tag-button cursor-target'
                    onClick={addTag(tag)}
                    >
                    #{tag}
                    </button>
                );
                })}
            </div>
            );
        })}
    </div>);
    
}

export default ProjectGallery;