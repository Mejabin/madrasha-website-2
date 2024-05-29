import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Transition } from "react-transition-group";
import { FaArrowRight } from "react-icons/fa";
import image1 from "../../assets/Images/img2.jpg";
import image2 from "../../assets/Images/img3.jpg";
import image3 from "../../assets/Images/img4.jpg";

const images = [image1, image2, image3];

const Home = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval);
  }, []);

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
              className={`absolute inset-0 flex flex-col justify-center items-center transition-opacity ${state}`}
            >
              <img
                src={image}
                alt={`Slide ${i + 1}`}
                className="w-full h-full object-cover"
              />
              <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0 flex flex-col justify-center items-center"
              >
                <div className="text-8xl text-center text-white">
                  <span className="text-green-500">ALLAH HELP</span>{" "}
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
