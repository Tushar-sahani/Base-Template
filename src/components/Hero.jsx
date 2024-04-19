import home_img from "../assets/bg.png";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import { useState, useEffect } from "react";

const Name = () => {
  return (
    <div
      className="text-center text-[#f0f0f0] absolute -translate-x-2/4 -translate-y-2/4 top-2/4 left-1/4 max-md:left-1/2 max-md:w-full max-sm:m-auto"
      style={{ fontFamily: "Poppins,sans-serif" }}
    >
      <h1 className="font-extrabold text-6xl pb-8  max-sm:text-4xl">
        Jhon Doe
      </h1>
      <h1 className="md:flex md:flex-row text-4xl md:ml-14 font-semibold max-md:text-3xl">
        <span className="">I'm a </span>
        <span className="ml-2 text-[#009e66]">
          <Typewriter
            onInit={(typewriter) => {
              typewriter
                .typeString("Developer")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Programmer")
                .pauseFor(1000)
                .deleteAll()
                .typeString("Learner")
                .pauseFor(1000)
                .deleteAll()
                .start();
            }}
            options={{
              loop: true,
            }}
          />
        </span>
      </h1>
    </div>
  );
};
const Hero = () => {

  const [loader, setLoader] = useState(false);

  useEffect(() => {
    setLoader(true);
    setTimeout(() => {
      setLoader(false);
    }, 800);
  }, []);
  return (
    <div className="bg-[#111] text-center w-full flex justify-center align-middle           
      ">
        <div
          className="w-full h-screen"
          style={{
            backgroundImage: `url(${home_img})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundAttachment: "fixed",
            marginTop:'-89px',
          }}
        >
          <Name />
          <div className="">
            <ul className="flex align-middle absolute -translate-x-2/4 -translate-y-2/4 top-2/3 left-1/4 max-md:left-1/2">
              <Link to="#">
                <TwitterIcon
                  sx={{ color: "white", fontSize: "25px" }}
                  className="m-3 hover:text-[#00acee] hover:scale-150 hover:transition-all "
                />
              </Link>
              <Link to="#">
                <LinkedInIcon
                  sx={{ color: "white", fontSize: "25px" }}
                  className="m-3 hover:text-[#0A66C2] hover:scale-150 hover:transition-all"
                />
              </Link>
              <Link to="#">
                <GitHubIcon
                  sx={{ color: "white", fontSize: "25px" }}
                  className="m-3 hover:text-gray-500 hover:scale-150 hover:transition-all"
                />
              </Link>
              <Link to="#">
                <InstagramIcon
                  sx={{ color: "white", fontSize: "25px" }}
                  className="m-3 hover:text-[#fa7e1e] hover:scale-150 hover:transition-all"
                />
              </Link>
            </ul>
          </div>
        </div>
    </div>
  );
};

export default Hero;
