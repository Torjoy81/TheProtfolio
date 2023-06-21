import { useEffect, useState } from "preact/hooks";
import NavBody from "../components/base/Nav/NavBody.tsx";
import { Fragment } from "preact";

export default function NavButton() {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    addEventListener("resize", () => {
      if (window.screen.width > 420) {
        setNavOpen(false);
      }
    });
  });

  const handleNav = () => {
    setNavOpen((prevState) => !prevState);
  };
  return (
    <Fragment>
      <button
        data-collapse-toggle="navbar-default"
        type="button"
        class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
        aria-controls="navbar-default"
        aria-expanded="false"
        onClick={handleNav}
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          >
          </path>
        </svg>
      </button>
      <NavBody showIsActive={navOpen} />
    </Fragment>
  );
}
