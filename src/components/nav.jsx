import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { CgNametag } from "react-icons/cg";
import { HiMenuAlt1 } from "react-icons/hi";

const nav = () => {
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
            <a
              href=""
              className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl"
            >
              Skills
            </a>
            <a
              href=""
              className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl"
            >
              Projects
            </a>
            <a
              href=""
              className="text-white hover:bg-indigo-800 rounded-full px-5 py-2 text-xl"
            >
              Testimonials
            </a>
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
              <li className="text-white text-xl  mb-2">
                <a href="">Skills</a>
              </li>

              <li className="text-white text-xl  mb-2">
                <a href="">Projects</a>
              </li>

              <li className="text-white text-xl  mb-2">
                <a href="">Testimonials</a>
              </li>
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
