import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../hook/useAuth';
import './Signin.css'

const Signin = () => {
    const {handleSignup, signIn, handleEmailChange, handlePasswordChange, signInWithGoogle, error} = useAuth();
    return (
        <div className="container my-5">
           
                <form onSubmit={handleSignup}>                
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
                    <button onClick={signIn} type="submit" className="btn btn-primary">Sign in</button>
                </form>
            
            <br />
            <br />
            <br />
            <div className="text-center mb-5">
                <button onClick={signInWithGoogle} className="btn btn-common">Google SignIn</button>
                <br />
                <Link to="/signup">New User?</Link>
            </div>
            
        </div>
    );
};

export default Signin;