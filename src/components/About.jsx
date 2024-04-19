import { Link } from 'react-router-dom';
import about_img from '../assets/doe.webp';
import DownloadIcon from '@mui/icons-material/Download';
import { motion } from 'framer-motion';

const About = () => {
    
    return (
        <div className="text-white box-border mb-28" style={{ fontFamily: 'Poppins,sans-serif' }}>
            <div className="flex align-middle justify-center flex-col">
                <div className="m-auto p-20">
                    <p className="text-thin text-[#9f9f9f]">Get to Know About Me</p>
                    <h1 className=" text-5xl max-md:ml-8">About</h1>
                </div>
                <div className="lg:w-3/4 max-md:w-full flex m-auto sm:max-lg:flex-col sm:max-lg:text-center sm:max-lg:p-auto max-md:flex-col max-md:text-center max-md:p-auto">
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
                        className="w-1/3 lg:h-96 max-md:mb-7 max-md:max-lg:w-1/4 max-md:border-2 max-md:border-[#009e66] sm:max-lg:rounded-full m-auto sm:max-lg:mt-16 max-md:w-1/3 max-md:border-1 max-md:rounded-full max-md:m-auto"
                        alt="Tushar Sahani"
                    />
                    <motion.div
                        className="ml-14 max-md:ml-0"
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
                        viewport={{ once: true }}
                    >
                        {/* <div > */}
                        <div className="p-5 ">
                            <h1 className="text-[#009e66] text-2xl p-2 -mt-5 sm:max-lg:mr-10">Who am i?</h1>
                            <h1 className="text-3xl font-bold p-3 max-md:text-xl">I'm John Doe, Full Stack Developer and Java Programmer</h1>
                            <p className="text-[#9f9f9f] p-2 text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae sed voluptatum iusto minus voluptates at quam sint
                                qui iste dicta eius nesciunt, tempora atque expedita ipsa impedit dolorem mollitia voluptatem! Quis praesentium
                                voluptate dolores pariatur unde repellendus itaque vero. Enim ipsam iste optio repudiandae aliquam a ad, fugiat atque
                                sapiente!
                            </p>
                            <hr className="text-[#9f9f9f] mt-6" />
                        </div>
                        <div className="flex flex-col max-md:ml-5">
                            <div className="flex max-md:flex-col max-md:p-0 p-2 ">
                                <div className="flex pl-4 max-md:pl-0">
                                    <span>Name:</span>
                                    <p className="pl-2 text-[#9f9f9f]">Tushar Sahani</p>
                                </div>
                                <div className="flex pl-40 max-md:pl-0">
                                    <span>Email:</span>
                                    <p className="pl-2 text-[#009e66] hover:text-[#346b57] cursor-pointer">
                                        <a href="mailto:tusharsahani000@gmail.com">tusharsahani000@gmail.com</a>
                                    </p>
                                </div>
                            </div>
                            <div className="flex max-md:flex-col  max-md:p-0 p-2">
                                <div className="flex max-md:pl-0 pl-4">
                                    <span>Age:</span>
                                    <p className="pl-2 text-[#9f9f9f]">22</p>
                                </div>
                                <div className="flex pl-[283px] max-md:pl-0">
                                    <span>Live: </span>
                                    <p className="pl-2 text-[#9f9f9f]">Deoria, Uttar Pradesh</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
export default About;
