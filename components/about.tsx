import Image from "next/future/image";
import Link from "next/link";
import {
  IoLogoLinkedin,
  IoLogoGithub,
  IoLogoTwitter,
  IoLogoMedium,
} from "react-icons/io5";
import { FaAngellist } from "react-icons/fa";

const About = () => {
  return (
    <section id="about" className="pt-20">
      <div className="relative h-20 md:mt-6 lg:mt-16 md:w-11/12 xl:w-10/12">
        <h1 className="font-exo text-3xl font-bold absolute top-0.5 right-0 pr-3 tracking-wide z-10 text-sky-600 2xl:right-20">
          About Me
        </h1>
        <h2 className="font-exo text-5xl font-bold absolute top-0 right-0 pr-3 tracking-wide text-fuchsia-600/10 z-0 2xl:right-20">
          About Me
        </h2>
      </div>
      <div className="my-10 flex flex-col gap-10 md:flex-row md:w-10/12 xl:w-8/12 md:mx-auto">
        <div className="rounded-full border-4 border-sky-600/40 w-fit mx-auto p-0 h-fit">
          <div className="rounded-full border-4 border-fuchsia-600/30 w-fit mx-auto p-0.5">
            <Image
              src="/photo.jpeg"
              width={300}
              height={300}
              alt="Ronald's Profile"
              className=" rounded-full mx-auto w-40"
            />
          </div>
        </div>
        <div className="p-3 font-ibm md:w-2/3 2xl:text-xl">
          <p className="mb-6 text-slate-600">
            <span className="text-3xl">I&apos;</span>m a{" "}
            <span className="bg-gradient-to-r from-sky-600 to-fuchsia-600 bg-clip-text text-transparent font-semibold">
              Full-stack web developer{" "}
            </span>
            and veterinary doctor based in Colombia, passionate about
            programming and clean code. A critical-thinking and problem-solving
            person, willing to improve people&apos;s lives by creating engaging
            applications for individuals and enterprises.
          </p>
          <p className="mb-6 text-slate-600">
            <span className="text-3xl">I</span> love animals, but horses and
            dogs are my favorites. I enjoy learning new things and teaching them
            to others.{" "}
          </p>
          <Link href="/about">
            <a className="font-exo animate-pulse text-fuchsia-600">
              Want to know me more?
            </a>
          </Link>
          <div className="flex items-center justify-center my-10 gap-4">
            <a
              href="https://www.linkedin.com/in/rskinnerc/"
              target="_blank"
              rel="noreferrer"
              className="text-2xl text-sky-600 drop-shadow-md hover:text-fuchsia-600"
            >
              <IoLogoLinkedin />
            </a>
            <a
              href="https://github.com/rskinnerc"
              target="_blank"
              rel="noreferrer"
              className="text-2xl text-sky-600 drop-shadow-md hover:text-fuchsia-600"
            >
              <IoLogoGithub />
            </a>
            <a
              href="https://twitter.com/XSkinner"
              target="_blank"
              rel="noreferrer"
              className="text-2xl text-sky-600 drop-shadow-md hover:text-fuchsia-600"
            >
              <IoLogoTwitter />
            </a>
            <a
              href="https://medium.com/@rskinnerc"
              target="_blank"
              rel="noreferrer"
              className="text-2xl text-sky-600 drop-shadow-md hover:text-fuchsia-600"
            >
              <IoLogoMedium />
            </a>
            <a
              href="https://angel.co/u/rskinnerc"
              target="_blank"
              rel="noreferrer"
              className="text-2xl text-sky-600 drop-shadow-md hover:text-fuchsia-600"
            >
              <FaAngellist />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
