import { ComponentChildren } from "preact";

interface ToolLipProps {
  children: ComponentChildren;
  Title: string;
}

export default function ToolLip({ children, Title }: ToolLipProps) {
  return (
    <div
      class={"group relative flex flex-col gap-y-3 items-center justify-center"}
    >
      {children}
      <span
        class={"invisible opacity-0 group-hover:(visible opacity-100) transition bg-violet-300  text-white text-base p-1 rounded absolute top-12 whitespace-nowrap"}
      >
        {Title}
      </span>
    </div>
  );
}
// bg-gradient-to-r from-indigo-500 to-violet-200
