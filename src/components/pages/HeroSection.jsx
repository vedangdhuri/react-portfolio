import { FlipWords } from "../ui/FlipWords";
import { motion } from "motion/react";
import ProfileCard from "../ui/ProfileCard";
import avtarUrl from '../../assets/img/main_image.png';
import codeIcon from '../../assets/img/code.png';

export const HeroSection = () => {
  const words = ["a Computer Engineer", "a UI/UX Designer", " a Photo Editor", "a Gamer", "learning the MERN stack"];
  const variants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
  };
  return (

    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4 -translate-y-16"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">

        <ProfileCard className="flex justify-center mt-10 lg:mt-10"
          enableMobileTilt
          showBehindGlow={false}
          behindGlowColor="hsla(199, 100%, 70%, 0.6)"
          customInnerGradient="linear-gradient(145deg,hsla(199, 40%, 45%, 0.55) 0%,hsla(11, 60%, 70%, 0.27) 100%)"
          avatarUrl={avtarUrl}
          iconUrl={codeIcon}
          showIcon={true}
        />

        {/* Hero Text */}
        <div className="space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight mt-10">
            <span className="opacity-0 animate-fade-in-delay-1"> Hello 👋, Im</span>
            <span className="text-blue-400 opacity-0 animate-fade-in-delay-1 transition delay-150 ease-in-out hover:text-indigo-500">
              {" "}
              Vedang
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Dhuri
            </span>
          </h2>

          <div className="text-1xl md:text-3xl font-bold tracking-tight justify-items-center mt-5">
            <span className="animate-fade-in-delay-2 flex">
              I&apos;m
              <span className="text-blue-400 animate-fade-in-delay-3 transition delay-150 ease-in-out hover:text-indigo-500">
                <motion.span
                  variants={variants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 1.5 }}
                >
                  <FlipWords
                    words={words}
                    className="ml-2"
                  />
                </motion.span>
              </span>

            </span>
          </div>

          <div className="pt-4 opacity-0 animate-fade-in-delay-4 flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#projects" className="cosmic-button bg-blue-400 font-bold transistion delay-150 ease-in-out hover:translate-y-1 hover:scale-110 hover:bg-indigo-500 hover:shadow-[0px_0px_25px_0px_rgba(124,134,225,1)]">
              View My Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
