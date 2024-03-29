import classNames from "classnames";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import { IoMenu } from "react-icons/io5";
import Image from "next/future/image";
import { useEffect, useState } from "react";
import logo from "../public/logo-min.png";

const Navbar = () => {
  const [sections] = useState([
    { name: "HOME", id: "#heading" },
    { name: "ABOUT", id: "#about" },
    { name: "SKILLS", id: "#skills" },
    { name: "PROJECTS", id: "#projects" },
    { name: "CONTACT", id: "#contact" },
  ]);
  const [active, setActive] = useState("#heading");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    let observer = new IntersectionObserver(handleSectionChange, {
      root: null,
      rootMargin: "0px",
      threshold: [0.0, 0.2, 0.4, 0.6, 0.8, 1.0],
    });
    sections.forEach((section: { id: string; name: string }) => {
      observer.observe(document.querySelector(section.id)!);
    });
    observer.observe(document.getElementById("navbar")!);

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sections]);

  const handleSectionChange = (entries: IntersectionObserverEntry[]) => {
    entries
      .filter((entry) => entry.isIntersecting && entry.target.id !== "navbar")
      .forEach((entry) => {
        if (entry.intersectionRatio > 0.4) {
          if (entry.target.id === "heading" && entry.intersectionRatio > 0.7) {
            document.getElementById("navbar")!.classList.add("md:relative");
            document
              .getElementById("navbar")!
              .classList.remove("md:sticky", "top-0");
          }

          setActive(`#${entry.target.id}`);
        }

        if (entry.intersectionRatio > 0.2) {
          entry.target.classList.remove("opacity-10", "opacity-0");
        }
      });

    const navbarEntry = entries.find((entry) => entry.target.id === "navbar");

    if (navbarEntry && !navbarEntry.isIntersecting) {
      document.getElementById("navbar")!.classList.add("md:sticky", "top-0");
      document.getElementById("navbar")!.classList.remove("md:relative");
    }
  };

  const isActive = (tag: string): string => {
    return classNames({
      "text-sky-600": tag === active,
    });
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const showMenu = classNames({
    hidden: !isOpen,
  });

  return (
    <>
      <nav
        id="navbar"
        className={
          "h-screen bg-transparent md:bg-sky-500/5 backdrop-blur-md fixed z-50 w-full flex flex-col items-center gap-10 md:h-20 md:relative md:flex md:flex-row md:justify-around " +
          showMenu
        }
      >
        <Image
          src={logo}
          width={340}
          height={232}
          className="w-24 my-6 drop-shadow-lg"
          alt="Ronald Skinner Dev"
        />
        <ul className="flex flex-col w-full items-center gap-4 font-semibold font-exo md:flex-row md:w-fit">
          {sections.map((section) => (
            <li
              key={section.name}
              className={isActive(section.id)}
              onClick={() => setIsOpen(false)}
            >
              <a href={section.id === "#heading" ? "#" : section.id}>
                {section.name}
              </a>
            </li>
          ))}
        </ul>
        <TbLayoutSidebarLeftCollapse
          className="absolute right-0 bottom-20 text-4xl text-sky-600 drop-shadow cursor-pointer md:hidden"
          onClick={() => setIsOpen(false)}
        />
      </nav>
      <IoMenu
        className="fixed top-3 right-3 text-4xl text-sky-600 z-40 drop-shadow cursor-pointer md:hidden"
        onClick={() => toggleMenu()}
      />
    </>
  );
};

export default Navbar;
