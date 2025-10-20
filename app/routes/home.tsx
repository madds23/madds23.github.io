import type { Route } from "./+types/home";
import { Navbar } from "~/components/navbar";
import { Hero } from "~/components/hero";
import { Footer } from "~/components/footer";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
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
  return <body><p>body</p></body>
}
