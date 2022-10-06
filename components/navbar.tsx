import classNames from "classnames";
import { TbLayoutSidebarLeftCollapse } from "react-icons/tb";
import { IoMenu } from "react-icons/io5";
import Image from "next/image";
import { useEffect, useState } from "react";

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
      threshold: 0.5,
    });
    sections.forEach((section: { id: string; name: string }) => {
      observer.observe(document.querySelector(section.id)!);
    });
  }, [sections]);

  const handleSectionChange = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry: IntersectionObserverEntry) => {
      if (entry.isIntersecting) {
        setActive(`#${entry.target.id}`);
      }
    });
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
        className={
          "h-screen bg-white fixed z-50 w-full flex flex-col items-center gap-10 " +
          showMenu
        }
      >
        <Image
          src="/vercel.svg"
          width={100}
          height={100}
          alt="Ronald Skinner Dev"
        />
        <ul className="flex flex-col w-full items-center gap-4 font-semibold font-exo">
          {sections.map((section) => (
            <li
              key={section.name}
              className={isActive(section.id)}
              onClick={() => setIsOpen(false)}
            >
              <a href={section.id}>{section.name}</a>
            </li>
          ))}
        </ul>
        <TbLayoutSidebarLeftCollapse
          className="absolute right-0 bottom-20 text-4xl text-sky-600 drop-shadow cursor-pointer"
          onClick={() => setIsOpen(false)}
        />
      </nav>
      <IoMenu
        className="fixed top-3 right-3 text-4xl text-sky-600 z-10 drop-shadow cursor-pointer"
        onClick={() => toggleMenu()}
      />
    </>
  );
};

export default Navbar;
