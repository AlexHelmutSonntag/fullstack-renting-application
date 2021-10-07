// import '../styles/App.css'
import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/dist/client/router'

// import your icons
import { faSignInAlt, faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLinkProps } from 'react-bootstrap';

export default function Nav({ }: NavLinkProps) {
  const router = useRouter()


  return (
    <div className="Nav">
      <input type="checkbox" id="check" />

      <div className="ham-menu"/>

      <label htmlFor="check" className="ham-menu">
        <FontAwesomeIcon icon={faBars} size="2x" />
      </label>
      <div className="logo">
        <Link href='/'><a>viaRent</a></Link>
      </div>
      <div className="menu">
        <nav>
          <ul >
            <li className={router.pathname === "/" ? "active" : ""}><Link href="/"><a href="">Home</a></Link></li>
            <li className={router.pathname === "/offers" ? "active" : ""}><Link href="/offers"><a href="">Offers</a></Link></li>
          </ul>
        </nav >
      </div >
      <div className="login_signin">
        <div className="login">
          <FontAwesomeIcon icon={faSignInAlt} />
          <Link href="/login"><a>Log In</a></Link>
        </div>
        <div className="signin">
          <p>Dont have account? <Link href="/"><a>Sign In</a></Link></p>
        </div>
      </div>
    </div >
  )

}
