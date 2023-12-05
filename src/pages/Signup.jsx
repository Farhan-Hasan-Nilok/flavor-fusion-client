/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { UserContext } from "../context/AuthContext";
import useTitle from "../hooks/useTitle";

const Signup = () => {
    useTitle('Sign up')
    const [showPassword, setPassword] = useState(false);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const { googleSignIn, createUser, updateUserInfo } = useContext(UserContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname;

    const handleGoogleSignIn = () =>{
        setSuccess('');
        setError('');
        googleSignIn()
            .then(res => {
                setSuccess('Registration Successfull !');
                navigate(from, {replace: true});
            })
            .catch(err => setError(err.message))
    }

    const handleSubmit = e => {
        e.preventDefault();
        setSuccess('');
        setError('');
        const form = e.target;
        const name = form.name.value;
        const photoURL = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        createUser(email, password)
        .then(res => {
            setSuccess('Email registration successfull');
            updateUserInfo(name, photoURL);
            navigate(from, { replace: true });
            form.reset();
        })
        .catch(err => setError(err.message))
    }
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold"><span className="text-[#d51b28]">Sign up</span> now!</h1>
                        <p className="text-green-600 py-3">{success}</p>
                        <p className="text-red-600">{error}</p>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body" onSubmit={handleSubmit}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" placeholder="name" name="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo url</span>
                                </label>
                                <input type="text" placeholder="photo url" name="photo" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="email" name="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={showPassword ? "text" : "password"} name="password" placeholder="password" className="input input-bordered" required />
                                <div className="form-control py-2">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">Show Password</span>
                                        <input type="checkbox" checked={showPassword} onChange={() => setPassword(!showPassword)} className="checkbox checkbox-primary" />
                                    </label>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary" type="submit">Login</button>
                            </div>

                            <div className="py-2">
                                <p>Already have an account <Link className="link link-hover text-[#d51b28]" to='/login'>Log in</Link></p>
                            </div>
                        </form>
                            <hr />
                            <div className="mt-2 text-center">
                                <button className="btn btn-primary mb-4" onClick={handleGoogleSignIn}>Sign in with google</button>
                                <button className="btn btn-primary">Sign in with github</button>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Signup;