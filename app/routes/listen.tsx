import type { Route } from "./+types/listen";
import { Navbar } from "~/components/navbar";
import { Hero } from "~/components/hero";
import { Footer } from "~/components/footer";
import { SideBySide } from "~/components/sidebysideimg";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import {faSpotify} from "@fortawesome/free-brands-svg-icons"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About the Podcast | Music by Madds" },
    { name: "description", content: "Welcome to the Music by Madds Podcast!" },
  ];
}

export default function About() {
  return <>
    <Navbar />
    <Hero />
    <AboutBody />
    <Footer />
  </>
}

function AboutBody() {
  return <main className="bg-white p-4 md:p-10 text-left text-red-950 text-2xl font-sans font-medium lg:px-16 xl:px-28">
    <SideBySide headerImgSrc="/press_play.png" textContent="" imgSrc="/home1.webp" imgSide="right">
      <p>
        Whether you're a casual listener or a vinyl obsessive, press play and discover something new with me on The Music by Madds Podcast. Want to hear about pop? We've got it. Want to learn more about classical music? We've got it. Need some new songs for your playlist? Stay until the end of each episode for my Songs of the Day segment.
        <br /><br />
        Come hang out with me, Madds, and dive into the music podcast you didn't know you needed.
      </p>
    </SideBySide>
    <div className="flex flex-col md:flex-row gap-4 p-4">
      <img src="/e1thumb.webp" alt="episode 1" className="md:basis-2/3 overflow-hidden rounded-md shadow-md" />
      <div className="m-4 flex justify-center items-center md:basis-1/3">
        <a href="https://open.spotify.com/episode/2rcXEKWNe0CkgWkng7xbYy?si=75I7vBtBT1aU7AMxpJCCEg" target="_blank" className="m-auto p-4 rounded-full bg-madds-maroon text-white shadow-md">
          <FontAwesomeIcon icon={faSpotify} />
          Listen to Episode 1
        </a>
      </div>
    </div>
  </main>
}
