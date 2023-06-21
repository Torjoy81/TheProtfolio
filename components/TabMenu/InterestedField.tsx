import { useSignal } from "@preact/signals";

export default function InterestedField() {
  const interestField = useSignal([
    "BlockChain",
    "Cloud Application",
    "Traveling",
    "Cooking",
  ]);

  return (
    <div
      class={"md:(max-w-4xl h-[250px] bg-gradient-to-r from-violet-200 to-pink-200 border border-gray-500 my-4 rounded overflow-y-auto)"}
    >
      <ul class={"px-6 py-8 space-y-2 list-disc ml-8"}>
        {interestField.value.map((interested, index) => (
          <li key={index} class={"texl-xl font-bold uppercase "}>
            {interested}
          </li>
        ))}
      </ul>
    </div>
  );
}
