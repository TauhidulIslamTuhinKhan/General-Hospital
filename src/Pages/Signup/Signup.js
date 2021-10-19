import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import './Signup.css'

const Signup = () => {
    const {handleSignup, signIn, handleNameChange, handleEmailChange, handlePasswordChange, signInWithGoogle, error} = useAuth();
    return (
        <div className="container my-5">
            <form onSubmit={handleSignup}>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Name</label>
                    <div className="col-sm-10">
                    <input onBlur={handleNameChange} type="text" className="form-control" id="inputEmail3" placeholder="Your name" required/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputEmail3" className="col-sm-2 col-form-label">Email</label>
                    <div className="col-sm-10">
                    <input onBlur={handleEmailChange} type="email" className="form-control" id="inputEmail3" placeholder="Your email" required/>
                    </div>
                </div>
                <div className="row mb-3">
                    <label htmlFor="inputPassword3" className="col-sm-2 col-form-label">Password</label>
                    <div className="col-sm-10">
                    <input onBlur={handlePasswordChange} type="password" className="form-control" id="inputPassword3" placeholder="Your password" required/>
                    </div>
                </div>                
                <div className="row mb-3 text-danger">{error}</div>
                <button onClick={signIn} type="submit" className="btn btn-primary">Sign up</button>
            </form>
            <br />
            <br />
            
            <div className="text-center mb-5">
                <Link to="/signin">Already Signup?</Link>
                <br />
                <button className="btn btn-common" onClick={signInWithGoogle}>Google SignIn</button>                
            </div>
            
        </div>
    );
};

export default Signup;