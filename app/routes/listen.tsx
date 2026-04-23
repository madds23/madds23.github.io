import type { Route } from "./+types/listen";
import { Navbar } from "~/components/navbar";
import { Hero } from "~/components/hero";
import { Footer } from "~/components/footer";
import { SideBySide } from "~/components/sidebysideimg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpotify, faYoutube, faAmazon } from "@fortawesome/free-brands-svg-icons"
import { faHeart } from "@fortawesome/free-solid-svg-icons"

export function meta({ }: Route.MetaArgs) {
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
    return <main className="bg-white p-4 md:p-10 text-left text-red-950 text-2xl font-medium lg:px-16 xl:px-28">
        <SideBySide headerImgSrc="/press_play.png" textContent="" imgSrc="/home1.webp" imgSide="right">
            <p>
                Whether you're a casual listener or a vinyl obsessive, press play and discover something new with me on The Music by Madds Podcast. Want to hear about pop? We've got it. Want to learn more about classical music? We've got it. Need some new songs for your playlist? Stay until the end of each episode for my Songs of the Day segment.
                <br /><br />
                Come hang out with me, Madds, and dive into the music podcast you didn't know you needed.
            </p>
        </SideBySide>
        <div className="flex flex-col md:flex-row gap-4 p-4">
            <img src="/e1thumb.webp" alt="episode 1" className="md:basis-2/3 overflow-hidden rounded-md shadow-md" />
            <div className="m-4 flex flex-col gap-3 justify-center items-center md:basis-1/3">
                <a href="https://www.youtube.com/@musicbymadds_podcast" target="_blank" rel="noreferrer" className="w-full p-2 rounded-full bg-madds-maroon text-white shadow-md flex items-center justify-center gap-2">
                    <FontAwesomeIcon icon={faYoutube} />
                    YouTube
                </a>
                <a href="https://open.spotify.com/show/7i20wl8EovMWqp49fGYbR7?si=2bc18a8ed0cc4a53&nd=1&dlsi=7d3ad72494b64ed3" target="_blank" rel="noreferrer" className="w-full p-2 rounded-full bg-madds-maroon text-white shadow-md flex items-center justify-center gap-2">
                    <FontAwesomeIcon icon={faSpotify} />
                    Spotify
                </a>
                <a href="https://www.iheart.com/podcast/269-the-music-by-madds-podcast-316618500/episode/newstalk-670-931-kboi-5390?app=listen" target="_blank" rel="noreferrer" className="w-full p-2 rounded-full bg-madds-maroon text-white shadow-md flex items-center justify-center gap-2">
                    <FontAwesomeIcon icon={faHeart} />
                    iHeart Radio
                </a>
                <a href="https://music.amazon.com/podcasts/2f0bbd55-6170-43a1-87d5-2a5a657cb632/the-music-by-madds-podcast" target="_blank" rel="noreferrer" className="w-full p-2 rounded-full bg-madds-maroon text-white shadow-md flex items-center justify-center gap-2">
                    <FontAwesomeIcon icon={faAmazon} />
                    Amazon Music
                </a>
            </div>
        </div>
    </main>
}
