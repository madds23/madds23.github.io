import { faBars } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useState } from "react"
import { NavLink } from "react-router"

export function Navbar() {
  const [hidden, setHidden] = useState(true);

  const navClassName = `bg-madds-pink flex flex-col px-2 text-xl font-medium ${hidden ? "hidden" : ""}`

  return <>
    <div className="w-full bg-madds-pink grid grid-cols-3">
      <FontAwesomeIcon onClick={() => setHidden(!hidden)} icon={faBars} className="text-2xl p-2 my-auto" />
      <img src="mbm.png" className="w-60 mx-auto py-2 my-auto" />
    </div>
    <nav className={navClassName}>
      <NavLink to="/">
        Home
      </NavLink>
      <a href="https://musicbymadds.com/links">Links</a>
      <NavLink to="/about">
        About
      </NavLink>
    </nav>
  </>
}
