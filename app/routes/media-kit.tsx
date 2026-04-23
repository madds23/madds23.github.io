import type { Route } from "./+types/media-kit";
import { Navbar } from "~/components/navbar";
import { Footer } from "~/components/footer";

export function meta({ }: Route.MetaArgs) {
  return [
    { title: "Media Kit | Music by Madds" },
    { name: "description", content: "Partner with the Music by Madds Podcast!" },
  ];
}

export default function MediaKit() {
  return <>
    <Navbar />
    <MediaKitBody />
    <Footer />
  </>
}

function MediaKitBody() {
  return <main className="bg-white text-madds-maroon">
    {/* Hero / CTA Section */}
    <section className="flex flex-col items-center text-center px-6 py-12 md:py-20">
      <img src="full_logo.png" alt="Music by Madds" className="w-48 md:w-64 mb-6" />
      <h1 className="text-2xl md:text-4xl font-bold mb-8">
        The music podcast for mainstream<br className="hidden md:block" /> music lovers.
      </h1>

      <img src="we_need_you.png" alt="We need you!" className="w-48 md:w-64 mb-6" />

      <p className="text-lg md:text-xl max-w-2xl mb-4 font-semibold">
        Our mission is to bring educational and entertaining music content to the mainstream music world. To achieve that, we need your help.
      </p>
      <p className="text-lg md:text-xl max-w-2xl mb-8 font-semibold">
        Download our media kit* to find out how you can help today!
      </p>

      <a
        href="/Media%20Kit.pdf"
        download
        className="inline-block px-8 py-4 rounded-full bg-madds-maroon text-white text-xl font-semibold shadow-md hover:opacity-90 transition"
      >
        Download Our Media Kit
      </a>

      <p className="mt-10 text-lg md:text-xl max-w-2xl font-semibold">
        Want to see the podcast in action? Keep scrolling to see high-engagement moments from the podcast and one of our top performing social media posts.
      </p>
      <p className="mt-4 text-sm">
        *media kit data will be refreshed May 21, 2026
      </p>
    </section>

    {/* Featured moments */}
    <section className="px-6 md:px-16 lg:px-28 py-12 space-y-16 md:space-y-24">
      {/* Moment 1 - text left, video right */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 text-left">
          <p className="text-lg md:text-2xl font-semibold leading-relaxed">
            Celebrating Bruno Mars' return to solo music, this episode is an album review filled with humor and music theory.
          </p>
        </div>
        <div className="md:w-1/2 w-full">
          <ResponsiveYouTube embedId="TbYcaNAnGgs" title="Bruno Mars episode" />
        </div>
      </div>

      {/* Moment 2 - video left, text right */}
      <div className="flex flex-col md:flex-row-reverse items-center gap-8">
        <div className="md:w-1/2 text-left">
          <p className="text-lg md:text-2xl font-semibold leading-relaxed">
            With the debut of Spotify's newest feature, there are lots of questions. This episode, the most-viewed episode of the podcast, is a detailed tutorial on using the mix feature.
          </p>
        </div>
        <div className="md:w-1/2 w-full">
          <ResponsiveYouTube embedId="jqa9SnZojn4" title="Spotify mix feature episode" />
        </div>
      </div>

      {/* Moment 3 - text left, video right */}
      <div className="flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 text-left">
          <p className="text-lg md:text-2xl font-semibold leading-relaxed">
            This reel/Short, taken from The Wishbone Pajama Party, was the first podcast clip to take off on Instagram and YouTube. With 60k+ views on Instagram, the video remains one of the podcast's top-performing reels.
          </p>
        </div>
        <div className="md:w-1/2 w-full">
          <ResponsiveYouTube embedId="Cqp8fRrTa-Q" title="Wishbone Pajama Party reel" aspectRatio="9/16" />
        </div>
      </div>
    </section>
  </main>
}

function ResponsiveYouTube({ embedId, title, aspectRatio = "16/9" }: { embedId: string; title: string; aspectRatio?: string }) {
  const isVertical = aspectRatio === "9/16";
  return (
    <div className={`relative w-full rounded-md overflow-hidden shadow-md ${isVertical ? "max-h-[600px] aspect-[9/16] mx-auto" : "aspect-video"}`}>
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${embedId}`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    </div>
  )
}
