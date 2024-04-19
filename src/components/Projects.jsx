import React, { useState } from 'react';
import LanguageSharpIcon from '@mui/icons-material/LanguageSharp';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';
import GitHubIcon from '@mui/icons-material/GitHub';
import projectData from '../utils/projects';

const Modal = ({ project, onClose }) => {
    return (
        <div className="bg-[#1f1e1e] left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-lg w-2/5 max-md:mt-4 transition-all duration-300 absolute m-auto z-40">
            <button className="m-2" onClick={onClose}>
                <CloseIcon sx={{ fontSize: '30px', color: '#009e66' }} />
            </button>
            <img src={project.img_url} alt={project.name} className="p-5" />
            <div className="p-3">
                <h1 className="lg:text-2xl px-2 font-bold">{project.name}</h1>
                <p className="text-sm p-2 text-[#9f9f9f]">{project.description}</p>
                <div className="flex m-2">
                    <span className="mt-2">Stack Used:</span>
                    <ul className="flex text-sm max-md:justify-center">
                        {project.stack.map((tech, index) => (
                            <li key={index} className="p-2 bg-[#83838378] rounded-full ml-2">
                                {tech}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="flex align-middle mt-2 m-2">
                    <span className="">Links: </span>
                    <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <GitHubIcon sx={{ color: '#009e66', fontSize: '25px' }} className="hover:scale-125 ml-3" />
                    </a>
                    <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                        <LanguageSharpIcon sx={{ color: '#009e66', fontSize: '25px' }} className="hover:scale-125 ml-3" />
                    </a>
                </div>
            </div>
        </div>
    );
};

const Projects = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (project) => {
        setSelectedProject(project);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <div className=" text-white box-border animate-fade" style={{ fontFamily: 'Poppins,sans-serif' }}>
            <div className="flex align-middle justify-center flex-col">
                <div className="m-auto p-16">
                    <p className="text-thin text-[#9f9f9f]">Check out My Projects</p>
                    <h1 className="text-5xl mt-3">Projects</h1>
                </div>
                <div className="flex flex-wrap justify-center m-auto sm:max-lg:flex-col sm:max-lg:text-center max-md:flex-col max-md:text-center max-md:mb-4">
                    {selectedProject && (
                        <>
                            <div className="z-30 w-screen h-screen top-0 backdrop-blur-sm bg-[#ffffff0f] fixed"></div>
                            <Modal project={selectedProject} onClose={closeModal} />
                        </>
                    )}
                    {projectData.map((data) => (
                        <div
                            key={data.name}
                            className="bg-[#1f1e1e] cursor-pointer hover:bg-[#484848d5] rounded-md lg:m-4 w-96 max-md:mt-4 overflow-hidden"
                            onClick={() => openModal(data)}
                        >
                            <img src={data.img_url} alt={data.name} className="w-full hover:scale-105 duration-300 transition-all" />
                            <h1 className="lg:text-2xl p-2">{data.name}</h1>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Projects;
