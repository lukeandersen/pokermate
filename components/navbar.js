import Link from 'next/link'
import { firebase } from '../utils/firebase'

const Navbar = ({ auth, fluid }) => {
    const logout = () => {
        firebase.auth().signOut().then(() => {
            // No need to handle route as the auth handler will redirect to login
        })
    }

    return (
        <div className="navbar">
            <div className={`${fluid ? 'container container-fluid' : 'container'}`}>
                <div className="logo text-light">
                    <Link href="/"><a>🐶 Pokermate</a></Link>
                </div>
                <nav>
                    {!auth ? (
                        <>
                            <a href="/">Home</a>
                            <a href="/">About</a>
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
