import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export function Navbar() {
  return <nav className="w-full bg-madds-pink justify-center grid grid-cols-3">
    <FontAwesomeIcon icon={faBars} className="text-2xl p-2 my-auto" />
    <img src="mbm.png" className="w-60 mx-auto py-2 my-auto" />
  </nav>
}
