import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CgNametag } from "react-icons/cg";
import { HiMenuAlt1 } from "react-icons/hi";

const nav = () => {
  const links = [
    {
      link: "Skills",
      section: "#Skills",
    },
    {
      link: "Projects",
      section: "#Projects",
    },
    {
      link: "Testimonials",
      section: "#Testimonials",
    },
  ];

  const [isOpen, setIsOpen] = useState(false);

  function openMenu() {
    setIsOpen(true);
  }

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <>
      <div className="flex items-center justify-between p-10 lg:flex-row ">
        <div>
          <a
            href="#"
            className="text-white font-mono text-3xl tracking-wider flex items-center"
          >
            <CgNametag />
            AUCODE
          </a>
        </div>
        <div className="space-x-4">
          <div className="hidden lg:block space-x-2">
            <ul className="flex">
              {links.map((link, index) => {
                return (
                  <li key={index} className="text-white text-xl  mb-2">
                    <a
                      href={link.index}
                      className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl"
                    >
                      {link.link}
                    </a>
                  </li>
                );
              })}
              <li></li>
            </ul>
          </div>
          <div className="lg:hidden">
            {isOpen ? (
              <AiOutlineClose
                size={30}
                className="text-white cursor-pointer"
                onClick={closeMenu}
              />
            ) : (
              <HiMenuAlt1
                size={30}
                className="text-white cursor-pointer"
                onClick={openMenu}
              />
            )}
          </div>
        </div>
      </div>

      <div>
        {isOpen ? (
          <div className="flex justify-between ml-10">
            <ul>
              {links.map((link, index) => {
                return (
                  <li key={index} className="text-white text-xl  mb-2">
                    <a href={link.section}>{link.link}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </>
  );
};

export default nav;
