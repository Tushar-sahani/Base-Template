import { useEffect, useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { Link } from 'react-router-dom';

const Header = () => {
    const [menuIcon, setMenuIcon] = useState(false);
    const [showBackground, setShowBackground] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY >= 40) {
                setShowBackground(true);
            } else {
                setShowBackground(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    return (
        <div
            className={`sticky top-0 text-center flex z-30 transition-all duration-300 ${showBackground ? 'backdrop-blur-sm bg-[#ffffff0f] scale-90 rounded-full' : ''}`}
        >
            <div className="p-8 text-white flex">
                <Link target="_blank" to="/" className="text-[#1cc288] font-bold ">
                    John Doe
                </Link>
            </div>
            <div onClick={() => setMenuIcon(!menuIcon)} className="absolute right-8 top-8 cursor-pointer md:hidden">
                {menuIcon ? <CloseIcon sx={{ color: 'white', fontSize: '40px' }} /> : <MenuIcon sx={{ color: 'white', fontSize: '40px' }} />}
            </div>
            <ul
                className={`text-white absolute right-0 md:flex md:item-center md:pb-5 md:top-4  max-md:bg-[#191919] md:z-auto max-md:z-30 z-[-1] w-screen md:w-auto md:pl-0 lg:pl-9 transition-all duration-500 ease-in ${menuIcon ? 'top-20 opacity-100' : 'hidden'}  md:opacity-100 font-semibold z-40 tracking-widest`}
            >
                <li className="p-5 max-md:p-3  ">
                    <Link
                        to="/"
                        className="hover:text-[#009e66] after:mt-1 after:content-[''] after:block after:h-1 after:w-full after:bg-[#009e66] after:scale-x-0 after:origin-left after:transition-transform after:delay-200 after:ease-linear hover:after:scale-x-100"
                    >
                        HOME
                    </Link>
                </li>
                <li className="p-5 max-md:p-2 ">
                    <Link
                        to="/timeline"
                        className="hover:text-[#009e66] after:mt-1 after:content-[''] after:block after:h-1 after:w-full after:bg-[#009e66] after:scale-x-0 after:origin-left after:transition-transform after:delay-200 after:ease-linear hover:after:scale-x-100  "
                    >
                        TIMELINE
                    </Link>
                </li>
                <li className="p-5 max-md:p-2 ">
                    <Link
                        to="/project"
                        className="hover:text-[#009e66] after:mt-1 after:content-[''] after:block after:h-1 after:w-full after:bg-[#009e66] after:scale-x-0 after:origin-left after:transition-transform after:delay-200 after:ease-linear hover:after:scale-x-100  "
                    >
                        PROJECT
                    </Link>
                </li>
                <li className="p-5 max-md:p-2 ">
                    <Link
                        to="/contact"
                        className="hover:text-[#009e66] after:mt-1 after:content-[''] after:block after:h-1 after:w-full after:bg-[#009e66] after:scale-x-0 after:origin-left after:transition-transform after:delay-200 after:ease-linear hover:after:scale-x-100  "
                    >
                        CONTACT
                    </Link>
                </li>
            </ul>
        </div>
    );
};
export default Header;
