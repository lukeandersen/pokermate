import { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { db, firebase } from '../components/firebase'
import Footer from '../components/footer'

const Home = () => {
    const [user, setUser] = useState()
    const router = useRouter()
    useEffect(() => {
        firebase.auth().onAuthStateChanged((user) => {
            console.log('user:', user)
            if (!user) {
                router.push(routes.SIGN_IN)
            }
            setUser(user)
        })
    }, [])

    if (!user) return 'Loading...'

    return (
        <div className="container">
            <Head>
                <title>Pokermate</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1 className="title">Dashboard</h1>
                <p>{user.email}</p>
                <hr />
                <nav>
                    <Link href="/login"><a>New game</a></Link> &nbsp;
                    <Link href="/login"><a>Join a game</a></Link>
                </nav>
            </main>

            <Footer />
        </div>
    )
}

export default Home
