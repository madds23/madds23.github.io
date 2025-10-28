import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faSpotify } from "@fortawesome/free-brands-svg-icons"

export function Hero() {
  return <div className="relative">
    <img src="web-banner.png" className="w-full"/>
    <a href="https://open.spotify.com/show/7i20wl8EovMWqp49fGYbR7?si=e090a3309f1d4694" target="_blank" rel="noreferrer" className="absolute bottom-6 md:bottom-12 left-8 bg-madds-maroon text-white p-2 rounded-full shadow-md md:text-2xl md:p-4 lg:text-3xl lg:p-5 xl:text-5xl xl:p-6">
      <FontAwesomeIcon icon={faSpotify} />
      Listen now!
    </a>
  </div>
}
