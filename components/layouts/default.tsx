import { ComponentChildren } from "preact";
import NavBar from "../base/Nav/NavBar.tsx";
import BannerBody from "../base/Banner/BannerBody.tsx";
import Footer from "../footer.tsx";
type ChildrenProps = {
  children: ComponentChildren;
};
export default function BasicLayout({ children }: ChildrenProps) {
  return (
    <div>
      <NavBar title="Protfolio of Tarek" />
      <BannerBody />
      {children}
      <Footer />
    </div>
  );
}
