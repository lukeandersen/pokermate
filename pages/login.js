import Form from '@rjsf/core'
import { useRouter } from 'next/router'
import { db, firebase } from '../components/firebase'
import Footer from '../components/footer'

// const Form = JSONSchemaForm.default;
const schema = {
  type: 'object',
  required: ['email', 'password'],
  properties: {
    email: {
        type: 'string',
        title: 'Email',
    },
    password: {
        type: 'string',
        title: 'Password',
    }
  }
}

const Login = () => {
    const router = useRouter()

    const login = ({ formData }) => {
        // this.setState({ loading: true })
        const { email, password } = formData
        firebase
            .auth()
            .signInWithEmailAndPassword(email, password)
            .then((user) => {
                console.log(user)
                router.push('/dashboard')
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
        <div className='container'>
            <main>
                <h1 className='title'>Login</h1>
            </main>

            <Form schema={schema} onSubmit={login} />

            <Footer />
        </div>
    )
}

export default Login
