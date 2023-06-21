import {
  FaAngular,
  FaCss3,
  FaDatabase,
  FaGithub,
  FaHtml5,
} from "react-icons/fa";
import {
  SiJavascript,
  SiNuxtdotjs,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import { IoLogoVue } from "react-icons/io5";
import ToolLip from "../toolLip.tsx";

export default function Skills() {
  return (
    <div class="md:(max-w-4xl mt-20 mx-auto)   xs:(flex flex-col gap-y-4 items-center mt-10 )">
      <h1
        class="text-3xl font-medium font-montserrat underline mb-4"
        style={{
          textDecorationColor: "aqua",
          textUnderlineOffset: "8px",
        }}
      >
        Tech Skills
      </h1>
      <div class="flex flex-wrap flex-row gap-5  p-8" id={"Skills"}>
        <ToolLip Title="HTML5">
          <FaHtml5 class="w-8 h-8 text-orange-600  transition duration-150 ease-out  hover:(shadow-2xl scale-150 ease-in)" />
        </ToolLip>
        <ToolLip Title="CSS3">
          <FaCss3 class="w-8 h-8 text-sky-500 transition duration-150 ease-out  hover:(shadow-2xl scale-150 ease-in)" />
        </ToolLip>
        <ToolLip Title="JavaScript">
          <SiJavascript class="w-8 h-8 text-yellow-300 transition duration-150 ease-out  hover:(shadow-2xl scale-150 ease-in)" />
        </ToolLip>
        <ToolLip Title="TypeScript">
          <SiTypescript class="w-8 h-8 text-sky-900 transition duration-150 ease-out  hover:(shadow-2xl scale-150 ease-in)" />
        </ToolLip>
        <ToolLip Title="Vue3">
          <IoLogoVue class="w-8 h-8 text-green-400  transition duration-150 ease-out  hover:(shadow-2xl scale-150 ease-in)" />
        </ToolLip>
        <ToolLip Title="Nuxt3">
          <SiNuxtdotjs class="w-8 h-8 text-green-400 transition duration-150 ease-out  hover:(shadow-2xl scale-150 ease-in)" />
        </ToolLip>
        <ToolLip Title="GitHub">
          <FaGithub class="w-8 h-8 transition duration-150 ease-out  hover:(shadow-2xl scale-150 ease-in)" />
        </ToolLip>
        <ToolLip Title="TailWind">
          <SiTailwindcss class="w-8 h-8  text-sky-300 transition duration-150 ease-out  hover:(shadow-2xl scale-150 ease-in)" />
        </ToolLip>
        <ToolLip Title="SQL&Non-SQL ">
          <FaDatabase class="w-8 h-8 transition duration-150 ease-out  hover:(shadow-2xl scale-150 ease-in)" />
        </ToolLip>
        <ToolLip Title="Angular">
          <FaAngular class="w-8 h-8 text-red-600 transition duration-150 ease-out  hover:(shadow-2xl scale-150 ease-in)" />
        </ToolLip>
      </div>
    </div>
  );
}
