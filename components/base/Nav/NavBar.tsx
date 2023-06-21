import NavButton from "../../../islands/NavButton.tsx";

interface MyComponentProps {
  title: string;
}

export default function NavBar({ title }: MyComponentProps) {
  return (
    <nav class="bg-white border-gray-200 w-full fixed overflow-hidden top-0  ">
      <div class=" flex flex-wrap items-center justify-between mx-auto  p-4 ">
        <a class="flex items-center">
          <img
            src="/image/prolog.png"
            class="h-8 mr-3"
            alt="protfolio Logo"
          />
          <span class="self-center font-signature text-2xl font-semibold whitespace-nowrap dark:text-white">
            {title}
          </span>
        </a>
        <NavButton />
      </div>
    </nav>
  );
}
