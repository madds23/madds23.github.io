import type { Route } from "./+types/about";
import { Navbar } from "~/components/navbar";
import { Hero } from "~/components/hero";
import { Footer } from "~/components/footer";
import { SideBySide } from "~/components/sidebysideimg";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "About Me | Music by Madds" },
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
    <SideBySide headerImgSrc="/meet_madds.png" textContent="" imgSrc="/madds1.jpg" imgSide="left">
      <p>
        Hi! I'm Madds, your (hopefully) new favorite podcast host. I have been studying music for 15 years now and am finishing my degree in music! I actually started this podcast as a senior project for my last semester of school, but I hope to continue after my first season.
        <br /><br />
        I hope to continue growing throughout creating this podcast.
      </p>
    </SideBySide>
    <SideBySide textContent="" imgSrc="/madds2.jpg" imgSide="right">
      <p>
        I hope this podcast inspires you to keep an open mind about much. There's so much to discover, and I can't wait to share all the parts I find fascinating.
        <br /><br />
        Off the mic, I'm usually listening to music, adding to my ever-growing vinyl wish list, and spending time with my husband and our two cats.
        <br /><br />
        I hope you decide to press play and follow along on this crazy adventure!
      </p>
    </SideBySide>
  </main>
}
