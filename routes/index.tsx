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
        <title>Fresh App</title>
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
