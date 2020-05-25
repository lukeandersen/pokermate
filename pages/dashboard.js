import { useEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { db, firebase } from '../utils/firebase'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const Home = () => {
    const [user, setUser] = useState()
    const router = useRouter()
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            console.log('user:', user)
            if (!user) {
                router.push('/login')
            }
            setUser(user)
        })
    }, [])

    if (!user) return 'Loading...'

    return (
        <>
            <Navbar auth fluid />
            <div className='container container-fluid'>
                <main>
                    <h1 className="title">Dashboard</h1>
                    <p>{user.email}</p>
                    <hr />
                    <nav>
                        <Link href="/login"><a>New game</a></Link> &nbsp;
                        <Link href="/login"><a>Join a game</a></Link>
                    </nav>
                </main>
            </div>
            <Footer />
        </>
    )
}

export default Home
