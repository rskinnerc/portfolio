import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
import About from "../components/about";
import Contact from "../components/contact";
import Projects from "../components/projects";
import Skills from "../components/skills";
import Navbar from "../components/navbar";
import Image from "next/future/image";
import landindBg from "../public/heading-bg.png";
import logo from "../public/logo-min.png";
import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoMedium,
  IoStar,
} from "react-icons/io5";
import { FaAngellist } from "react-icons/fa";
import Script from "next/script";

const Home: NextPage = (props: any) => {
  return (
    <div>
      <Script src="https://challenges.cloudflare.com/turnstile/v0/api.js?onload=onloadTurnstileCallback" />
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
        <section
          id="heading"
          className="h-screen opacity-0 transition-opacity delay-300 will-change-auto"
        >
          <Image
            src={landindBg}
            alt="Ronald Skinner Landing Page"
            className="absolute bottom-0 h-1/2 z-20 object-cover lg:h-auto lg:w-10/12 lg:left-1/2 lg:transform lg:-translate-x-1/2"
          />
          <div className="flex h-1/2 lg:h-1/3 flex-col justify-center gap-20 relative p-2 z-30 items-center bg-sky-500/5 rounded-bl-full">
            <div>
              <h2 className="text-xl text-center md:text-2xl text-slate-600">
                Hey there! I&apos;m
              </h2>{" "}
              <h1 className="font-exo drop-shadow-md text-4xl text-center bg-gradient-to-r from-sky-600 to-fuchsia-600 bg-clip-text text-transparent font-bold md:text-5xl lg:text-6xl">
                RONALD SKINNER
              </h1>
              <h2 className="font-caveat text-4xl font-semibold text-center text-sky-600 md:text-5xl">
                Full-Stack Web Developer
              </h2>
            </div>
          </div>
          <Link href="#contact">
            <a className="absolute bottom-16 left-1/2 translate -translate-x-1/2 from-fuchsia-900 to-fuchsia-700 hover:from-sky-900 hover:to-sky-700 bg-gradient-to-r shadow-fuchsia-900/50 hover:shadow-sky-900/50 shadow-md hover:shadow-lg py-2 px-4 rounded-md text-white font-bold font-exo z-40">
              LET&apos;S CONNECT
            </a>
          </Link>
        </section>
        <About />
        <Skills skills={props.skills} />
        <Projects projects={props.projects} />
        <Contact />
        <hr />
        <footer className="bg-sky-100 py-6 ">
          <div className="flex flex-col md:flex-row md:items-start md:gap-11 md:w-11/12 xl:w-10/12 mx-auto">
            <div className="md:w-1/3">
              <Image
                src={logo}
                width={340}
                height={232}
                className="w-24 mx-auto drop-shadow-lg"
                alt="Ronald Skinner Dev"
              />
            </div>
            <div className=" md:w-1/3">
              <h3 className="font-exo text-xl text-sky-600 font-semibold text-center mb-6">
                Find Me
              </h3>
              <div className="flex items-center justify-center my-10 md:mt-0 gap-4">
                <a
                  href="https://www.linkedin.com/in/rskinnerc/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-3xl text-sky-600 drop-shadow-md hover:text-fuchsia-600"
                >
                  <IoLogoLinkedin />
                </a>
                <a
                  href="https://github.com/rskinnerc"
                  target="_blank"
                  rel="noreferrer"
                  className="text-3xl text-sky-600 drop-shadow-md hover:text-fuchsia-600"
                >
                  <IoLogoGithub />
                </a>
                <a
                  href="https://twitter.com/XSkinner"
                  target="_blank"
                  rel="noreferrer"
                  className="text-3xl text-sky-600 drop-shadow-md hover:text-fuchsia-600"
                >
                  <IoLogoTwitter />
                </a>
                <a
                  href="https://medium.com/@rskinnerc"
                  target="_blank"
                  rel="noreferrer"
                  className="text-3xl text-sky-600 drop-shadow-md hover:text-fuchsia-600"
                >
                  <IoLogoMedium />
                </a>
                <a
                  href="https://angel.co/u/rskinnerc"
                  target="_blank"
                  rel="noreferrer"
                  className="text-3xl text-sky-600 drop-shadow-md hover:text-fuchsia-600"
                >
                  <FaAngellist />
                </a>
              </div>
            </div>
            <div className="px-2 md:w-1/3">
              <h3 className="font-exo text-xl text-sky-600 font-semibold text-center mb-6">
                Latest Projects
              </h3>
              <ul>
                {props.projects.slice(0, 3).map((project: any) => {
                  return (
                    <li
                      key={project._uid}
                      className="text-slate-600 font-ibm flex items-center gap-3"
                    >
                      <IoStar className="text-sm" />{" "}
                      <a href={project.demo}>{project.name}</a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <p className="text-center font-exo text-slate-600 italic mt-20">
            Copyright &copy; 2022 Ronald Skinner Cardenas - Full-Stack Developer
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Home;

import getStoryblokApi, { storyblok } from "../lib/storyblok";
import Link from "next/link";

export const getStaticProps: GetStaticProps = async () => {
  console.log("getStaticProps Was Called at ", new Date().toLocaleString());

  storyblok();
  let storyblokApi = getStoryblokApi();
  let skillsData = await storyblokApi.get("cdn/stories", {
    page: 1,
    per_page: 100,
    version: "published",
    starts_with: "skills/",
    cv: Date.now(),
  });

  let projects = await storyblokApi.get("cdn/stories", {
    page: 1,
    per_page: 100,
    version: "published",
    starts_with: "projects/",
    cv: Date.now(),
  });

  let skills = skillsData.data.stories.map((skill: any) => {
    return { ...skill.content, uuid: skill.uuid };
  });

  projects = projects.data.stories.map((project: any) => {
    project.content.skills = project.content.skills.map((skill: any) => {
      return skills.find((s: any) => s.uuid === skill);
    });
    return project.content;
  });

  return {
    props: { skills, projects },
    revalidate: 300,
  };
};
