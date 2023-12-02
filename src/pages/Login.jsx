import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
    const [showPassword, setPassword] = useState(false);
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold"><span className="text-[#d51b28]">Login</span> now!</h1>
                    </div>
                    <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form className="card-body">
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
                                <input type={showPassword ? "text" : "password"} placeholder="password" className="input input-bordered" required />
                                <div className="form-control py-2">
                                    <label className="label cursor-pointer">
                                        <span className="label-text">Show Password</span>
                                        <input type="checkbox" checked={showPassword} onChange={() => setPassword(!showPassword)} className="checkbox checkbox-primary" />
                                    </label>
                                </div>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>

                            <div className="py-2">
                                <p>Don&apos;t have an account <Link className="link link-hover text-[#d51b28]" to='/signup'>Sign up</Link></p>
                            </div>
                            <hr />
                            <div className="mt-2 text-center">
                                <button className="btn btn-primary mb-4">Sign in with google</button>
                                <button className="btn btn-primary">Sign in with github</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;