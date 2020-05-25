import Link from 'next/link'
import { useState } from 'react'
import { firebase } from '../utils/firebase'

const Navbar = ({ auth, fluid }) => {
    const logout = () => {
        firebase.auth().signOut().then(() => {
            // No need to handle route as the auth handler will redirect to login
        })
    }

    const [show, setShow] = useState(false)

    return (
        <div className="navbar">
            <div className={`${fluid ? 'container container-fluid' : 'container'}`}>
                <div className="logo text-light">
                    <Link href="/"><a>🐶 Pokermate</a></Link>
                </div>
                <button className="mobile-menu" onClick={() => setShow(!show)}>&#9776; Menu</button>
                <nav className={`${show ? 'show' : ''}`}>
                    <button className="btn btn-link mobile-menu-close" onClick={() => setShow(!show)}>&times; Close</button>
                    {!auth ? (
                        <>
                            <a href="/">Pricing</a>
                            <Link href="/register"><a>Register</a></Link>
                            <Link href="/login"><a className="btn btn-outline">Login</a></Link>
                        </>
                    ) : (
                        <>
                            <Link href="/settings"><a>Settings</a></Link>
                            <Link href="/profile"><a>Profile</a></Link>
                            <button className="btn btn-link" onClick={logout}>Sign Out</button>
                        </>
                    )}
                </nav>
            </div>
        </div>
    )
}

export default Navbar
