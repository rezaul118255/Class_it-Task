// import { useContext } from "react";
// import { Link } from 'react-router-dom';
// import img from '../../assets/login.svg'
// import { AuthContext } from "../../providers/AuthProvider";

// const SignUp = () => {
//     const { createUser } = useContext(AuthContext);

//     const handleSignUp = event => {
//         event.preventDefault();
//         const form = event.target;
//         const name = form.name.value;
//         const email = form.email.value;
//         const password = form.password.value;
//         console.log(name, email, password)

//         createUser(email, password)
//             .then(result => {
//                 const user = result.user;
//                 console.log(user)
//             })
//             .catch(error => console.log(error))

//     }
//     return (
//         <div>
//             <div className="hero min-h-screen bg-base-200">
//                 <div className="hero-content flex-col lg:flex-row">
//                     <div className="w-1/2 mr-12">
//                         <img src={img} alt="" />
//                     </div>
//                     <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
//                         <div className="card-body">
//                             <h1 className="text-3xl text-center font-bold">Sign Up</h1>
//                             <form onSubmit={handleSignUp}>
//                                 <div className="form-control">
//                                     <label className="label">
//                                         <span className="label-text">Name</span>
//                                     </label>
//                                     <input type="text" name='name' placeholder="name" className="input input-bordered" />
//                                 </div>
//                                 <div className="form-control">
//                                     <label className="label">
//                                         <span className="label-text">Email</span>
//                                     </label>
//                                     <input type="text" name='email' placeholder="email" className="input input-bordered" />
//                                 </div>
//                                 <div className="form-control">
//                                     <label className="label">
//                                         <span className="label-text">Confirm Password</span>
//                                     </label>
//                                     <input type="text" name='password' placeholder="password" className="input input-bordered" />
//                                     <label className="label">
//                                         <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
//                                     </label>
//                                 </div>
//                                 <div className="form-control mt-6">
//                                     <input className="btn btn-primary" type="submit" value="Sign Up" />
//                                 </div>
//                             </form>
//                             <p className='my-4 text-center'>Already Have an Account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default SignUp;



import img from '../../assets/login.svg'
// import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import { AuthContext } from '../../../providers/AuthProvider';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
import { useContext, useState } from 'react';
import { AuthContext } from '../../providers/AuthProvider';


const SignUp = () => {
    const { createUser } = useContext(AuthContext)
    const [accepted, setAccepted] = useState(false);
    const [passwords, setPasswords] = useState('');
    const [error, setError] = useState('');
    const handelRegister = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)
        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                setPasswords(createdUser);
            })
            .catch(error => {
                const wrong = error.message
                setError(wrong);
            })
    }
    const handleAccepted = event => {
        setAccepted(event.target.checked)
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className="w-1/2 mr-12">
                        <img src={img} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <div className="card-body">
                            <Container className='w-25 mx-auto'>
                                <h3 className='text-2xl p-2'>Please Register</h3>
                                <Form onSubmit={handelRegister} >
                                    <Form.Group className="mb-3" controlId="formBasicEmail">

                                        <Form.Control className='border-2' type="text" name='name' placeholder="Your Name" required />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Photo URL</Form.Label>
                                        <Form.Control className='border-2' type="text" name='photo' placeholder="Photo URL" required />
                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>Email address</Form.Label>
                                        <Form.Control className='border-2' type="email" name='email' placeholder="Enter email" required />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicPassword">
                                        <Form.Label>Password</Form.Label>
                                        <Form.Control className='border-2' type="password" name='password' placeholder="Password" required />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                        <Form.Check
                                            onClick={handleAccepted}


                                            type="checkbox"
                                            name="accept"
                                            label={<>Accept <Link to="/blog">Terms and Conditions</Link> </>} />
                                    </Form.Group>
                                    <Form.Text className="text-danger">
                                        {
                                            <p>{error}</p>
                                        }


                                    </Form.Text>

                                    <Button variant="primary" disabled={!accepted} type="submit">
                                        Register
                                    </Button>
                                    <br />
                                    <Form.Text className="text-black">
                                        Already Have an Account? <Link to="/login">Login</Link>
                                    </Form.Text>
                                    <Form.Text className="text-success">
                                        {
                                            passwords && toast('register succesfull ')


                                        }
                                        <ToastContainer></ToastContainer>

                                    </Form.Text>
                                    <Form.Text className="text-danger">

                                    </Form.Text>
                                </Form>
                            </Container>


                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default SignUp;