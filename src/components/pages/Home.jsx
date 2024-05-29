import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Transition } from "react-transition-group";
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import image1 from "../../assets/Images/img2.jpg";
import image2 from "../../assets/Images/img3.jpg";
import image3 from "../../assets/Images/img4.jpg";
import image4 from "../../assets/Images/img6..webp";

const images = [image1, image2, image3];

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleLeftClick = () => {
    setIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleRightClick = () => {
    setIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="relative h-screen overflow-hidden">
      {images.map((image, i) => (
        <Transition
          key={i}
          in={index === i}
          timeout={500}
          mountOnEnter
          unmountOnExit
        >
          {(state) => (
            <motion.div
              key={i}
              className={`absolute inset-0 flex flex-col justify-center items-center transition-opacity ${state}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={image}
                alt={`Slide ${i + 1}`}
                className="w-full h-full object-cover opacity-30"
              />
              <div className="absolute top-1/2 left-0 transform -translate-y-1/2">
                <button
                  className="transform -translate-x-4 opacity-0 transition duration-300 ease-in-out focus:outline-none"
                  onClick={handleLeftClick}
                >
                  <FaArrowLeft />
                </button>
              </div>
              <div className="absolute top-1/2 right-0 transform -translate-y-1/2">
                <button
                  className="transform translate-x-4 opacity-0 transition duration-300 ease-in-out focus:outline-none"
                  onClick={handleRightClick}
                >
                  <FaArrowRight />
                </button>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col justify-center items-center"
              >
                <div className="text-8xl text-center text-white">
                  <img className="mx-auto mb-4" src={image4} alt="" />{" "}
                  {/* Center the image */}
                  <span className="text-green-500">ALLAH HELP </span>{" "}
                  <span className="text-yellow-500">THOSE</span>
                  <br />
                  WHO HELP THEMSELVES
                </div>
                <div className="bg-black bg-opacity-50 text-white px-4 py-2 mt-4">
                  <button className="bg-green-500 hover:bg-green-600 rounded px-4 py-2">
                    Learn More <FaArrowRight className="inline-block ml-2" />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </Transition>
      ))}
    </div>
  );
};

export default Home;
