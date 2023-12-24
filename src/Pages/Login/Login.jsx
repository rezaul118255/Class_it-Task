
import img from '../../assets/login.svg'
import { Button, Form } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';


const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const provider = new GoogleAuthProvider();
    const auth = getAuth();
    // eslint-disable-next-line no-unused-vars
    const [user, setUser] = useState(null);
    const [error, setError] = useState('');
    const location = useLocation();
    console.log('login page location', location)
    const from = location.state?.from?.pathname || '/'





    const handleLogin = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                setUser(loggedUser);
                navigate(from, { replace: true })
                toast.success('Login successful!');
            })
            .catch(error => {
                setError(error.message)
            })
    }
    const handelGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                const GoogleUser = result.user;
                setUser(GoogleUser)

            })
            .catch(error => {
                setError(error.message);
            })
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-12">
                    <img src={img} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">Login</h1>
                        <Form onSubmit={handleLogin}>
                            <Form.Group className="mb-3 " controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control className='border-2' type="email" name='email' placeholder="Enter email" required />
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control className='border-2' type="password" name='password' placeholder="Password" required />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                            <br />
                            <Form.Text className="text-black">
                                Dont Have an Account? <Link to="/signup">Register</Link>
                            </Form.Text>
                            <Form.Text className="text-success">

                            </Form.Text>
                            <Form.Text className="text-danger">
                                {
                                    <p>{error}</p>
                                }
                            </Form.Text>
                            <button onClick={handelGoogleSignIn} className='btn btn-outline-primary mt-3'>continue with google</button>

                            <ToastContainer></ToastContainer>
                        </Form>



                    </div>

                </div>
            </div>
        </div>




    );
};

export default Login;