"use client";
import "./home.css";
import Intro from "./components/Intro";
import Intro2 from "./components/Intro2";
import PopularResidents from "./components/PopularResidents";
import Reviews from "./components/Reviews";
import Callback from "./components/Callback";

export default function Home() {
  return (
    <main className="text-[#191726]">
      <Intro />
      <Intro2 />
      <PopularResidents />
      <Reviews />
      <Callback />
    </main>
  );
}
