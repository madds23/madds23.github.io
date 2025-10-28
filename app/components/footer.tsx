import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram, faYoutube, faSpotify } from "@fortawesome/free-brands-svg-icons"

export function Footer() {
  return <footer className="bg-madds-pink w-full h-24 flex items-center justify-center">
    <img src="mbm.png" alt="footer" className="h-8 md:h-10 mr-auto ml-4" />
    <div className="p-4 flex items-center justify-center text-4xl text-madds-maroon">
      <a href="https://youtube.com/@musicbymadds_podcast" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faYoutube} />
      </a>
      <a href="https://instagram.com/musicbymadds_podcast" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faInstagram} />
      </a>
      <a href="https://open.spotify.com/show/7i20wl8EovMWqp49fGYbR7?si=e090a3309f1d4694" target="_blank" rel="noreferrer">
        <FontAwesomeIcon icon={faSpotify} />
      </a>
    </div>
  </footer>
}
