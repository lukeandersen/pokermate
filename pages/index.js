import Head from 'next/head'
import Link from 'next/link'
import Navbar from '../components/navbar'
import Footer from '../components/footer'

const Home = () => {
    return (
        <div>
            <Head>
                <title>Pokermate</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Navbar />

            <main>
                <section className="section bg-dark hero">
                    <div className="container">
                        <h1 className="title">Poker night has just gone <span className="text-gradient">digital</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        <Link href="/register"><a className="btn btn-lg btn-primary">Get Started &rarr;</a></Link>
                    </div>
                </section>

                <section className="section">
                    <div className="container flex">
                        <div className="col" style={{ maxWidth: '600px' }}>
                            <h1>Play poker with your crew</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit possimus corporis dolores, sed esse perferendis ipsam temporibus tenetur aliquid fugit aspernatur voluptates similique fuga, ad obcaecati magni, delectus expedita quod.</p>
                        </div>
                        <div className="col" style={{ maxWidth: '400px' }}>
                            <img src="undraw_game_day_ucx9.svg" alt="The crew"/>
                        </div>
                    </div>
                </section>

                <section className="section">
                    <div className="container flex">
                        <div className="col" style={{ maxWidth: '400px' }}>
                            <img src="undraw_remote_meeting_cbfk.svg" alt="The crew"/>
                        </div>
                        <div className="col" style={{ maxWidth: '600px' }}>
                            <h1>Chat with live video</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit possimus corporis dolores, sed esse perferendis ipsam temporibus tenetur aliquid fugit aspernatur voluptates similique fuga, ad obcaecati magni, delectus expedita quod.</p>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    )
}

export default Home
