import type { Route } from "./+types/home";
import { Navbar } from "~/components/navbar";
import { Hero } from "~/components/hero";
import { Footer } from "~/components/footer";
import { SideBySide } from "~/components/sidebysideimg";
import { Link } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Music by Madds" },
    { name: "description", content: "Welcome to the Music by Madds Podcast!" },
  ];
}

export default function Home() {
  return <>
    <Navbar />
    <Hero />
    <HomeBody />
    <Footer />
  </>
}

function HomeBody() {
  return <main className="bg-white p-4 md:p-10 text-left text-red-950 text-2xl font-sans font-medium lg:px-16 xl:px-28">
    <SideBySide headerImgSrc="/press_play.png" textContent="Whether you're a casual listener or a vinyl obsessive, press play and discover something new with me on The Music by Madds Podcast. Want to hear about pop? We've got it. Want to learn more about classical music? We've got it. Need..." imgSrc="/home1.jpg" imgSide="right" >
      <div className="m-4 flex justify-center items-center md:basis-1/3">
        <Link to="/listen" className="m-auto p-4 rounded-full bg-madds-maroon text-white shadow-md">
          Read More
        </Link>
      </div>
    </SideBySide>
    <SideBySide headerImgSrc="/meet_madds.png" textContent="Hi! I'm Madds, your new favorite podcast host. I have been studying music for 15 years now and am finishing a degree in music! I actually started this podcast as a senior project for my last semester of school, but I hope to continue after my first season. I hope..." imgSrc="/madds1.jpg" imgSide="left" >
      <div className="m-4 flex justify-center items-center md:basis-1/3">
        <Link to="/about" className="m-auto p-4 rounded-full bg-madds-maroon text-white shadow-md">
          Read More
        </Link>
      </div>
    </SideBySide>
  </main>
}
