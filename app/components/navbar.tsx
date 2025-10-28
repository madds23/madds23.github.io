import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { NavLink, Link } from "react-router"

export function Navbar() {
  const [hidden, setHidden] = useState(true);

  const navClassName = `bg-madds-pink flex flex-col px-2 text-xl font-medium ${hidden ? "hidden" : ""}`

  return <>
    <div className="w-full bg-madds-pink grid grid-cols-3">
      <FontAwesomeIcon onClick={() => setHidden(!hidden)} icon={faBars} className="text-2xl p-2 my-auto" />
      <Link to="/">
        <img src="mbm.png" className="w-60 mx-auto py-2 my-auto" />
      </Link>
    </div>
    <nav className={navClassName}>
      <NavLink to="/">
        Home
      </NavLink>
      <NavLink to="/about">
        About Me
      </NavLink>
      <NavLink to="/listen">
        About the Podcast
      </NavLink>
      <a href="https://musicbymadds.com/links">Links</a>
    </nav>
  </>
}
