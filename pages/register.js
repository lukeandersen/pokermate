import Form from '@rjsf/core'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { db, firebase } from '../utils/firebase'

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
        format: 'password'
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
            .createUserWithEmailAndPassword(email, password)
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
        <div className="auth-layout bg-dark">
            <div className="container container-sm">
                <div className="logo">
                    <Link href="/"><a>🐶 Pokermate</a></Link>
                </div>
                <h1 className="title text-gradient m-0">Register</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <Form schema={schema} onSubmit={login}>
                    <button type="submit" className="btn btn-primary btn-lg btn-block">Sign Up</button>
                </Form>
            </div>
        </div>
    )
}

export default Login
