import Head from 'next/head'
import Link from 'next/link'
import Footer from '../components/footer'

const Home = () => {
    return (
        <div className="container">
            <Head>
                <title>Pokermate</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main>
                <h1 className="title">Pokermate</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <hr />
                <nav>
                    <Link href="/login"><a>Login</a></Link> &nbsp;
                    <Link href="/login"><a>Register</a></Link>
                </nav>
            </main>

            <Footer />
        </div>
    )
}

export default Home
