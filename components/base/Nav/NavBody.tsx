import { useSignal } from "@preact/signals";

interface NavBodyProps {
  showIsActive: boolean;
}

export default function NavBody({ showIsActive }: NavBodyProps) {
  const navMenu = useSignal([
    "Home",
    "About",
    "Experience",
    "Projects",
    "Qualification",
  ]);

  const currentMenu = useSignal("Home");

  const handleNavMenu = (menu: string) => {
    currentMenu.value = menu;
  };

  return (
    <div
      class={`${showIsActive ? "" : "hidden"} w-full md:block md:w-auto`}
      id="navbar-default"
    >
      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
        {navMenu.value.map((nav, index) => (
          <li
            key={index}
            onClick={() => handleNavMenu(nav)}
          >
            <a
              href="#"
              class={"block py-2 pl-3 pr-4 rounded" +
                (currentMenu.value === nav && " text-blue-700 ")}
              aria-current="page"
            >
              {nav.toUpperCase()}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
