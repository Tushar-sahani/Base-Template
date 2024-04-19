import React from 'react';
import about_img from '../assets/doe.webp';
import { motion } from 'framer-motion';
import html from '../assets/skills/html.png';
import css from '../assets/skills/css.png';
import js from '../assets/skills/js.png';
import react from '../assets/skills/react.png';
import tailwind from '../assets/skills/tailwind.png';
import next from '../assets/skills/next.png';
import django from '../assets/skills/django.png';
import java from '../assets/skills/java.png';
import python from '../assets/skills/python.png';
import docker from '../assets/skills/docker.png';
import git from '../assets/skills/github.png';
import mysql from '../assets/skills/mysql.png';
import api from '../assets/skills/api.png';
function Skills() {
    return (
        <div className="text-left mb-4">
            <div className="max-md:text-center lg:pl-52 pt-16 max-md:m-auto">
                <p className="text-thin text-[#9f9f9f]">My knowledge in some tools</p>
                <h1 className="text-4xl pt-3">My Skills</h1>
            </div>
            <div className='flex w-10/12 m-auto'>
                <div className="text-[#c9c8c8] lg:w-1/2 grid grid-cols-2 gap-6 text-center lg:p-16 m-auto mt-8">
                    <div className="rounded-md shadow-md shadow-[#009e66] hover:scale-105 duration-300 flex justify-center align-middle">
                        <img src={html} alt="html" className="my-4 w-6 h-6" />
                        <p className="my-4 mx-2">HTML</p>
                    </div>
                    <div className=" rounded-md shadow-md shadow-[#009e66] hover:scale-105 duration-300  flex justify-center align-middle">
                        <img src={css} alt="html" className="my-4 w-6 h-6" />
                        <p className="my-4 mx-2">CSS</p>
                    </div>
                    <div className=" rounded-md shadow-md shadow-[#009e66] hover:scale-105 duration-300  flex justify-center align-middle">
                        <img src={js} alt="html" className="my-4 w-6 h-6" />
                        <p className="my-4 mx-2">JavaScript</p>
                    </div>
                    <div className=" rounded-md shadow-md shadow-[#009e66] hover:scale-105 duration-300  flex justify-center align-middle">
                        <img src={git} alt="html" className="my-4 w-6 h-6" />
                        <p className="my-4 mx-2">Github</p>
                    </div>
                    <div className=" rounded-md shadow-md shadow-[#009e66] hover:scale-105 duration-300  flex justify-center align-middle">
                        <img src={react} alt="html" className="my-4 w-6 h-6" />
                        <p className="my-4 mx-2">React</p>
                    </div>
                    <div className=" rounded-md shadow-md shadow-[#009e66] hover:scale-105 duration-300  flex justify-center align-middle">
                        <img src={tailwind} alt="html" className="my-4 w-6 h-5" />
                        <p className="my-4 mx-2">TailwindCss</p>
                    </div>
                    <div className=" rounded-md shadow-md shadow-[#009e66] hover:scale-105 duration-300  flex justify-center align-middle">
                        <img src={next} alt="html" className="my-4 w-6 h-6" />
                        <p className="my-4 mx-2">Next</p>
                    </div>
                    <div className=" rounded-md shadow-md shadow-[#009e66] hover:scale-105 duration-300  flex justify-center align-middle">
                        <img src={django} alt="html" className="my-4 w-9 h-6" />
                        <p className="my-4">Django</p>
                    </div>
                    <div className=" rounded-md shadow-md shadow-[#009e66] hover:scale-105 duration-300  flex justify-center align-middle">
                        <img src={api} alt="html" className="my-4 w-9 h-6" />
                        <p className="my-4 mx-2">REST API</p>
                    </div>
                    <div className=" rounded-md shadow-md shadow-[#009e66] hover:scale-105 duration-300  flex justify-center align-middle">
                        <img src={mysql} alt="html" className="my-4 w-6 h-6" />
                        <p className="my-4 mx-2">Mysql</p>
                    </div>
                    <div className=" rounded-md shadow-md shadow-[#009e66] hover:scale-105 duration-300  flex justify-center align-middle">
                        <img src={docker} alt="html" className="my-4 w-6 h-6" />
                        <p className="my-4 mx-2">Docker</p>
                    </div>
                    <div className=" rounded-md shadow-md shadow-[#009e66] hover:scale-105 duration-300  flex justify-center align-middle">
                        <img src={java} alt="html" className="my-4 w-6 h-6" />
                        <p className="my-4 mx-2">Java</p>
                    </div>
                    <div className=" rounded-md shadow-md shadow-[#009e66] hover:scale-105 duration-300  flex justify-center align-middle">
                        <img src={python} alt="html" className="my-4 w-6 h-6" />
                        <p className="my-4 mx-2">Python</p>
                    </div>
                </div>
                <motion.img
                    initial={{
                        opacity: 0,
                        x: -100,
                    }}
                    whileInView={{
                        opacity: 1,
                        x: 0,
                        transition: {
                            duration: 1,
                        },
                    }}
                    viewport={{ once: true }}
                    src={about_img}
                    className="w-1/3 max-md:hidden max-md:mb-7 max-md:max-lg:w-1/4 max-md:border-2 max-md:border-[#009e66] sm:max-lg:rounded-full m-auto sm:max-lg:mt-16 max-md:w-1/3 max-md:border-1 max-md:rounded-full max-md:m-auto"
                    alt="John doe"
                />
            </div>
        </div>
    );
}

export default Skills;
