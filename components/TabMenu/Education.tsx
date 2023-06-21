import { useSignal } from "@preact/signals";

export default function Education() {
  const programOfEducation = useSignal([
    {
      programmName: "MSC WEB ENGINEERING",
      univerSity: "TU CHEMNITZ,GERMANY",
      startDate: "10/2021",
      endDate: "current",
    },
    {
      programmName: "BSC COMPUTER SCIENCE",
      univerSity: "DAFFODIL INTERNATIONAL UNIVERSITY, BANGLADESH",
      startDate: "04/2015",
      endDate: "03/2019",
    },
  ]);
  return (
    <div
      class={"w-full md:my-5 flex flex-col gap-y-3 items-center"}
    >
      {programOfEducation.value.map((item, index) => (
        <div
          class={"w-[672px] px-6 py-8 bg-gray-100 border border-gray-400 rounded hover:(shadow-xl)  "}
          key={index}
        >
          <h1 class={"font-bold text-3xl text-cyan-700 p-2"}>
            {item.programmName}
          </h1>
          <h3
            class={"font-base leading-loose font-montserrat italic text-gray-500 p-2"}
          >
            {item.univerSity}
          </h3>
          <p class={"pl-2"}>Duration: {item.startDate} - {item.endDate}</p>
        </div>
      ))}
    </div>
  );
}
