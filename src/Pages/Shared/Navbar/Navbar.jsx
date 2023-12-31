/* eslint-disable no-undef */
import { Link } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { useContext } from "react";
import { getAuth, signOut } from "firebase/auth";
import app from "../../../Firebase/firebase.config";
import { Button } from "react-bootstrap";
// import logo from "../../../assets/image/3.jpg"
import { FaUserCircle } from 'react-icons/fa';


const Navbar = () => {
    const { user } = useContext(AuthContext);

    const auth = getAuth(app);

    const handelLogOut = () => {
        signOut(auth)
            .then(result => {
                console.log(result)
                setUser(null)

            })
            .catch(error => console.log(error))
    }
    // eslint-disable-next-line no-unused-vars
    const photo = auth.currentUser;
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link>About</Link>
                            </li>


                            <li>
                                <Link>About</Link>
                            </li>
                        </ul>
                    </div>
                    <Link to='/' className="btn btn-ghost text-xl">
                        <h1 className="text-3xl text-orange-600">REZAUL</h1>

                        {/* <img className="h-12 w-16" src={logo} alt="" /> */}
                    </Link>

                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="addProduct">Add Product</Link>
                        </li>


                        <li>
                            <Link>About</Link>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className='gap-2 flex'>
                        <div>
                            {user && < FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle>
                            }
                        </div>

                        <div>
                            {user ?
                                <Button onClick={handelLogOut} >Logout</Button> :
                                <Link to="/login">
                                    <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">Login</Button>
                                </Link>
                            }
                        </div>
                        <div>
                            {
                                !user && <Link to="/signup">
                                    <Button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" >SingUp</Button>
                                </Link>
                            }

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Navbar;