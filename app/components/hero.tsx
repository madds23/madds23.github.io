import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faHeadphones } from "@fortawesome/free-solid-svg-icons"

export function Hero() {
  return <div className="relative">
    <img src="web-banner.png" className="w-full"/>
    <a href="/listen" className="absolute bottom-6 md:bottom-12 right-8 bg-madds-maroon text-white p-2 rounded-full shadow-md md:text-2xl md:p-4 lg:text-3xl lg:p-5 xl:text-5xl xl:p-6">
      <FontAwesomeIcon icon={faHeadphones} />
      Listen now!
    </a>
  </div>
}
