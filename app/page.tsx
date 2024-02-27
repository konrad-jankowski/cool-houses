import MainSlider from "./components/Main/MainSlider";
import Packages from "./sections/Packages";
import { About } from "./sections/About";
import { Area } from "./sections/Area";
import { Houses } from "./sections/Houses";

export default function Home() {
  return (
    <main>
      <MainSlider />
      <About />
      <Packages />
      <Area />
      <Houses />
    </main>
  );
}
