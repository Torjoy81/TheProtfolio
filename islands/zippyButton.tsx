import { useState } from "preact/hooks";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import IconStarFilled from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/star-filled.tsx";

export default function Zippy() {
  const [features, setFeaures] = useState([{
    heading: "Frontend",
    body: [
      "Flex && Grid Design",
      "Independent Filter",
      "Dependent Filter",
      "Responsive Design",
      "Basic Animation",
      "NavBar",
      "SideBar",
      "Dialog",
      "Tab",
      "AutoComplete Search",
      "ImageGrid",
      "Pagination",
      "Carousel",
      "Zippy",
    ],
    isOpen: false,
  }, {
    heading: "Backend",
    body: [
      "Api Managment",
      "Relatonal DB",
      "Handling Middleware",
      "Form validation",
      "Authentication",
      "Authorization",
      "WebScoket",
    ],
    isOpen: false,
  }]);

  const handleButton = (Heading: string) => {
    // setFeaures([...features,{heading:Heading,body:Body,isOpen:!isSow}])
    setFeaures((prevState) => {
      const index = prevState.findIndex((zipItem) =>
        zipItem.heading === Heading
      );
      prevState[index].isOpen = !prevState[index].isOpen;

      return [...prevState];
    });
  };

  return (
    <div class="md:(max-w-4xl mt-10 mx-auto) xs:(mx-auto p-8)">
      <h1
        class="text-3xl font-medium font-montserrat underline mb-4"
        style={{
          textDecorationColor: "aqua",
          textUnderlineOffset: "8px",
        }}
      >
        Experience With Features
      </h1>
      <ul class="space-y-3">
        {features.map((todo) => (
          <li
            class="border border-gray-400 rounded-lg "
            onClick={() => handleButton(todo.heading)}
          >
            <div
              class="flex justify-between items-center p-4 border-b border-gray-400"
              style={{
                boxShadow:
                  "inset 6px 6px 10px 0 rgba(0,0,0,0.2),inset -6px -6px 10px 0 rgba(255,255,255,0.5)",
              }}
            >
              <h1 class="text-2xl uppercase font-bold font-releway text-gray-400">
                {todo.heading}
              </h1>
              <MdOutlineKeyboardArrowDown
                class={`w-6 h-6 ${
                  todo.isOpen
                    ? "transition ease-in-out duration-300 rotate-180"
                    : "transition ease-in-out duration-300 rotate-0"
                }`}
              />
            </div>
            <div
              class={"p-2.5 " +
                (todo.isOpen ? "" : "hidden")}
            >
              <ul
                class={"md:(grid grid-cols-4 justify-items-stretch gap-4 max-w-4xl mx-auto) xs:(mx-auto max-w-md)"}
              >
                {todo.body.map((item) => (
                  <li
                    class={"flex gap-x-1 text-base font-medium font-montserrat justify-self-start text-rose-400 "}
                  >
                    <IconStarFilled class="text-yellow-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
