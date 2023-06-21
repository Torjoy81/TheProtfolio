import { useState } from "preact/hooks";
import { IS_BROWSER } from "$fresh/runtime.ts";
import FeedBack from "../components/TabMenu/Feedback.tsx";

import Education from "../components/TabMenu/Education.tsx";
import InterestedField from "../components/TabMenu/InterestedField.tsx";

export default function Tab() {
  const [currentTabs, setCurrentTabs] = useState("Feedback");
  const tabPanles = [
    {
      id: 1,
      tabName: "FeedBack",
      panalName: "Feedback",
    },
    {
      id: 2,
      tabName: "InterestedField",
      panalName: "Interested",
    },
    {
      id: 3,
      tabName: "Education Degree",
      panalName: "Education",
    },
  ];

  const handleTab = (panalName: string) => {
    setCurrentTabs(panalName);
  };
  return (
    <div class="md:(max-w-4xl mt-10 mx-auto )">
      <div class="md:( flex gap-x-1) xs:(mx-auto p-8 flex flex-col)">
        {tabPanles.map((value) =>
          IS_BROWSER && (
            <div key={value.id}>
              <button
                class={"bg-transparent font-semibold text-md font-bold font-sans uppercase py-2 px-4 border-b-[3px] " +
                  (currentTabs === value.panalName
                    ? "border-cyan-500 "
                    : "border-gray-400 ") +
                  "hover:border-transparent focus:outline-none focus:ring-0 focus:ring-offset-0"}
                onClick={() => handleTab(value.panalName)}
                disabled={currentTabs === value.panalName}
              >
                {value.tabName}
              </button>
              <div class="sm:hidden">Tarek</div>
            </div>
          )
        )}
      </div>

      <div class={"mt-5 xs:hidden"}>
        {currentTabs === "Feedback"
          ? <FeedBack />
          : currentTabs === "Interested"
          ? <InterestedField />
          : <Education />}
      </div>
    </div>
  );
}
