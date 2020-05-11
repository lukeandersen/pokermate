import { db, firebase } from '../components/firebase'
import Footer from '../components/footer'

const Login = () => {
    const login = () => {
        // this.setState({ loading: true })
        firebase
            .auth()
            .signInWithEmailAndPassword('luke@lawebdesign.com.au', 'password')
            .then((user) => {
                console.log(user)
                // this.props.history.push(`/user/${user.user.uid}`)
            })
            .catch((error) => {
                // this.setState({ loading: false })
                console.log('error', error)
                // toast.error(error.message)
            })
    }
    // login()

    return (
        <div className="container">
            <main>
                <h1 className="title">Login</h1>
            </main>

            <Footer />

            <style jsx>{`
                .container {
                    min-height: 100vh;
                    padding: 0 0.5rem;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                main {
                    padding: 5rem 0;
                    flex: 1;
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-items: center;
                }

                a {
                    color: inherit;
                    text-decoration: none;
                }

                .title a {
                    color: #0070f3;
                    text-decoration: none;
                }

                .title a:hover,
                .title a:focus,
                .title a:active {
                    text-decoration: underline;
                }

                .title {
                    margin: 0;
                    line-height: 1.15;
                    font-size: 4rem;
                }

                .title,
                .description {
                    text-align: center;
                }

                .description {
                    line-height: 1.5;
                    font-size: 1.5rem;
                }
            `}</style>

            <style jsx global>{`
                html,
                body {
                    padding: 0;
                    margin: 0;
                    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
                }

                * {
                    box-sizing: border-box;
                }
            `}</style>
        </div>
    )
}

export default Login
