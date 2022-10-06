import classNames from "classnames";
import { enterScope } from "immer/dist/internal";
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
  const [active, setActive] = useState('#heading');
  
  useEffect(() => {
    let observer = new IntersectionObserver(handleSectionChange, {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    });
    sections.forEach((section: {id: string, name: string}) => {
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
      'text-sky-600': tag === active,
    })
  }

  return (
    <nav className="h-screen bg-white absolute z-10 w-full flex flex-col items-center gap-6">
      <Image
        src="/vercel.svg"
        width={100}
        height={100}
        alt="Ronald Skinner Dev"
      />
      <ul className="flex flex-col w-full items-center gap-3 font-semibold font-exo">
        {sections.map((section) => (
          <li key={section.name} className={isActive(section.id)}>
            <a href={section.id}>{section.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
