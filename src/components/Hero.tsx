

import {
  FiDownload,
} from "react-icons/fi";
import { useNavigate } from "react-router-dom";

interface HeroProps {
  darkMode: boolean;
}

const Hero = ({ darkMode }: HeroProps) => {
  const navigate = useNavigate()
  return (
    <section className={`relative min-h-screen font-sans flex items-center justify-center overflow-hidden py-24 px-6 transition-colors duration-300 ${
      darkMode ? 'bg-slate-900 text-white' : 'bg-white text-slate-900'
    }`}>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center z-10">
        {/* Left: Text Content */}
        <div className="flex flex-col text-center lg:text-left items-center lg:items-start">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            AbdulAzeez Ahmad
          </h1>

          <p className={`text-2xl md:text-3xl mt-3 ${
            darkMode ? 'text-gray-300' : 'text-slate-600'
          }`}>
            Cost and Contract Professional
          </p>

          <p className={`text-base mt-6 max-w-xl ${
            darkMode ? 'text-gray-400' : 'text-slate-600'
          }`}>
            With over 5 years' experience delivering ₦500M+ residential,
            commercial, and infrastructure projects, I specialize in cost
            planning, estimation, management, contract administration, and
            scheduling. I have achieved 15–30% savings through value engineering
            and smart procurement. Committed to sustainability and digital
            innovation, I integrate cost management with project leadership,
            SDGs, and data-driven solutions to deliver smarter, future-ready
            outcomes.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center lg:justify-start gap-4">
            <button onClick={()=> navigate('/projects')} className="bg-blue-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-700 transition duration-300">
              View My Work
            </button>
            <button className={`border font-semibold py-3 px-8 rounded-lg flex items-center gap-2 transition duration-300 ${
              darkMode 
                ? 'border-gray-700 text-white hover:bg-white/10' 
                : 'border-gray-300 text-slate-900 hover:bg-slate-100'
            }`}>
              <FiDownload />
              <span>Download CV</span>
            </button>
          </div>
        </div>

        {/* Right: Decorative Visuals (Now responsive) */}
        <div className="relative flex items-center justify-center w-full h-[350px] sm:h-[450px] lg:h-[500px] mt-16 lg:mt-0">
          {/* Main Circle Frame */}
          <div className={`absolute w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] lg:w-[480px] lg:h-[480px] border rounded-full ${
            darkMode ? 'border-gray-700' : 'border-gray-300'
          }`} />

          {/* Image Container with Overlay */}
          <div className="relative w-[240px] h-[240px] sm:w-[320px] sm:h-[320px] lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80"
              alt="AbdulAzeez Ahmad"
              className="w-full h-full object-cover" // object-cover ensures the image fills the space without distortion
            />
            {/* This overlay darkens the image to match the original design */}
            {/* <div className="absolute inset-0 bg-black/60 rounded-full"></div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
