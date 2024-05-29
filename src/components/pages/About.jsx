import Img from "../../assets/Images/img8.jpg";

const About = () => {
  return (
    <div className=" bg-gray-200">
      <div className="container mx-auto">
        <div className="">
          <div className="flex justify-center  items-center ">
            <div className="">
              <h1 className="text-green-600 text-6xl font-bold ">
                JOIN THE ISLAMIC COMMUNITY
              </h1>
              <p className="mt-4 text-gray-700 leading-relaxed">
                Proin gravida nibh vel velit auctor aliquet. Aenean
                sollicitudin. This is Photoshop&apos;s version of Lorem Ipsum.
                Proin gravida nibh vel velit auctor aliquet. Aenean itudin. This
                is Photoshop&apos;s version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet.
                <div>
                  <span>~ by Akshay H. (Community Head)</span>
                </div>
              </p>
            </div>

            <div className=" flex justify-end relative">
              <img src={Img} alt="" className="opacity-75 " />
              <div className="absolute inset-0 flex flex-col justify-center items-center text-white text-2xl w-full">
                <div className="bg-green-500 bg-opacity-50 p-4 rounded w-full h-full">
                  <h4>contact us for a joining</h4>
                  <h1>+8801234541234</h1>
                  <span>Mosque@example.com</span>
                  <button className="bg-yellow-500-500 hover:bg-yellow-300 rounded px-4 py-2 mt-4 opacity-0 hover:opacity-100 transition duration-300">
                    Learn More
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
