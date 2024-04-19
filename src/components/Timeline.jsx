import React from 'react';
import { motion,useScroll } from 'framer-motion';
function Timeline() {
  const { scrollYProgress } = useScroll();
    return (
        <div className=" text-white box-border animate-fade" style={{ fontFamily: 'Poppins,sans-serif' }}>
            <div className="flex align-middle justify-center flex-col">
                <div className="m-auto p-16">
                    <h1 className="text-5xl mt-3">Timeline</h1>
                </div>
                <div className="flex max-md:flex-col w-4/5 m-auto">
                    <motion.div
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
                    >
                        <h1 className="text-2xl font-bold pb-5">Education</h1>
                        <ol className="relative border-s border-gray-200 dark:border-gray-700">
                            <li className="mb-10 ms-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind CSS</h3>
                                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                    Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
                                    E-commerce & Marketing pages.
                                </p>
                            </li>
                            <li className="mb-10 ms-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in Figma</h3>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                    All of the pages and components are first designed in Figma and we keep a parity between the two versions even as
                                    we update the project.
                                </p>
                            </li>
                            <li className="ms-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">E-Commerce UI code in Tailwind CSS</h3>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                    Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
                                </p>
                            </li>
                        </ol>
                    </motion.div>
                    <motion.div className="ml-14 max-md:ml-0 max-md:mt-10"
                        initial={{
                            opacity: 0,
                            x: 100,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                            transition: {
                                duration: 1,
                            },
                        }}
                        viewport={{ once: true }}>
                        <h1 className="text-2xl font-bold pb-5">Experience</h1>
                        <ol className="relative border-s border-gray-200 dark:border-gray-700">
                            <li className="mb-10 ms-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">February 2022</time>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Application UI code in Tailwind CSS</h3>
                                <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                                    Get access to over 20+ pages including a dashboard layout, charts, kanban board, calendar, and pre-order
                                    E-commerce & Marketing pages.
                                </p>
                            </li>
                            <li className="mb-10 ms-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">March 2022</time>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Marketing UI design in Figma</h3>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                    All of the pages and components are first designed in Figma and we keep a parity between the two versions even as
                                    we update the project.
                                </p>
                            </li>
                            <li className="ms-4">
                                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                                <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">April 2022</time>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">E-Commerce UI code in Tailwind CSS</h3>
                                <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                                    Get started with dozens of web components and interactive elements built on top of Tailwind CSS.
                                </p>
                            </li>
                        </ol>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Timeline;
