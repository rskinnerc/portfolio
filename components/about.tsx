import Image from "next/future/image";
import Link from "next/link";

const About = () => {
  return (
    <section id="about" className="pt-20">
      <div className="relative h-20">
        <h1 className="font-exo text-3xl font-bold absolute top-0.5 right-0 pr-3 tracking-wide z-10 text-sky-600">
          About Me
        </h1>
        <h2 className="font-exo text-5xl font-bold absolute top-0 right-0 pr-3 tracking-wide text-fuchsia-600/10 z-0">
          About Me
        </h2>
      </div>
      <div className="my-10 flex flex-col gap-10">
        <div className="rounded-full border-4 border-sky-600/40 w-fit mx-auto p-0">
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
        <div className="p-3 font-ibm">
          <p className="mb-6 text-slate-600">
            <span className="text-3xl">I&apos;</span>m a{" "}
            <span className="bg-gradient-to-r from-sky-600 to-fuchsia-600 bg-clip-text text-transparent font-semibold">
              Full-stack web developer{" "}
            </span>
            and veterinary doctor based in Colombia, passionate about finding
            solutions to real-world problems through clean and performant code.
            Fluent in multiple languages, frameworks, technologies, and modern
            tools, capable of ramping up quickly and efficiently.
          </p>
          <p className="mb-6 text-slate-600">
            <span className="text-3xl">I</span> love animals, but horses and
            dogs are my favorites. I enjoy learning new things and teaching them
            to others.{" "}
          </p>
          <Link href="/about"><a className="font-exo animate-pulse text-fuchsia-600">Want to know me more?</a></Link>
        </div>
      </div>
    </section>
  );
};

export default About;
