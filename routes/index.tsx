import { Head } from "$fresh/runtime.ts";
import About from "../components/base/other/about.tsx";
import Skills from "../components/base/other/skill.tsx";

import BasicLayout from "../components/layouts/default.tsx";
import Tab from "../islands/Tab.tsx";
import Zippy from "../islands/zippyButton.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Tarek's Portfolio</title>
        <link
          rel={"icon"}
          href={"/image/protfolio.png"}
          type={"image/x-icon"}
        />
      </Head>
      <BasicLayout>
        <About />
        <Skills />
        <Zippy />
        <Tab />
      </BasicLayout>
    </>
  );
}
