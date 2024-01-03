import React from "react";
import Logo from "../../assets/images/logo.png";
import { TbWorld, TbBrandGithub, TbBrandLinkedin } from "react-icons/tb";

export const Footer = () => {
  return (
    <>
      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="https://flowbite.com/" className="flex items-center">
                <img src={Logo} className="h-8 me-3" alt="FlowBite Logo" />
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                  Movie World
                </span>
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Resources
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://vitejs.dev/guide/"
                      target="_blank"
                      className="hover:underline"
                    >
                      React + Vite
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://tailwindcss.com/"
                      target="_blank"
                      className="hover:underline"
                    >
                      Tailwind CSS
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://developer.themoviedb.org/docs"
                      target="_blank"
                      className="hover:underline"
                    >
                      API Resource
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a
                      href="https://portfolio-samirfdez.vercel.app/"
                      target="_blank"
                      className="hover:underline"
                    >
                      Portfolio
                    </a>
                  </li>
                  <li className="mb-4">
                    <a
                      href="https://github.com/SamirFdez"
                      target="_blank"
                      className="hover:underline"
                    >
                      Github
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://linkedin.com/in/samirfdez"
                      target="_blank"
                      className="hover:underline"
                    >
                      Linkedin
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Legal
                </h2>
                <ul className="text-gray-500 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <hr className="my-5 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

          <span className="block text-md text-gray-500 text-center dark:text-gray-400">
            Designed & built by Samir Fernández.
          </span>
          <div className="flex mt-2 justify-center ">
            <a
              href="https://portfolio-samirfdez.vercel.app/"
              target="_blank"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              style={{ fontSize: "20px" }}
            >
              <TbWorld />
              <span className="sr-only">Portfolio Web</span>
            </a>
            <a
              href="https://github.com/SamirFdez"
              target="_blank"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              style={{ fontSize: "20px" }}
            >
              <TbBrandGithub />
              <span className="sr-only">GitHub account</span>
            </a>
            <a
              href="https://linkedin.com/in/samirfdez"
              target="_blank"
              className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5"
              style={{ fontSize: "20px" }}
            >
              <TbBrandLinkedin />
              <span className="sr-only">Linkedin account</span>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};
