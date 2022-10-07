import type { NextPage } from "next";
import Head from "next/head";
import About from "../components/about";
import Contact from "../components/contact";
import Projects from "../components/projects";
import Skills from "../components/skills";
import Navbar from "../components/navbar";
import Image from "next/future/image";
import landindBg from "../public/heading-bg.png";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Ronald Skinner Cardenas - Full-Stack Web Developer</title>
        <meta
          name="description"
          content="Ronald Skinner Cardenas - Full-Stack Web Developer"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Navbar />
        <section id="heading" className="h-screen">
          <Image
            src={landindBg}
            alt="Ronald Skinner Landing Page"
            className="absolute bottom-0 h-1/2 z-20 object-cover lg:h-auto lg:w-10/12 lg:left-1/2 lg:transform lg:-translate-x-1/2"
          />
          <div className="flex h-1/2 lg:h-1/3 flex-col justify-center gap-20 relative p-2 z-30 items-center bg-sky-500/5 rounded-bl-full">
            <div>
              <h2 className="text-xl text-center md:text-2xl text-slate-600">Hey there! I&apos;m</h2>{" "}
              <h1 className="font-exo drop-shadow-md text-4xl text-center bg-gradient-to-r from-sky-600 to-fuchsia-600 bg-clip-text text-transparent font-bold md:text-5xl lg:text-6xl">
                RONALD SKINNER
              </h1>
              <h2 className="font-caveat text-4xl font-semibold text-center text-sky-600 md:text-5xl">
                Full-Stack Web Developer
              </h2>
            </div>
          </div>
        </section>
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Home;
