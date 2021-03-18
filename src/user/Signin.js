import React ,{useState} from 'react';
import Base from '../core/Base';
import Link from "react-router-dom";

const Signin = () => {

    const signinForm =()=>{
        return(
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form action="">
                        <div className="form-group">
                            <label className="text-light">Email</label>
                            <input className="form-control" type="email" />
                        </div>
                        <div className="form-group">
                            <label className="text-light">password</label>
                            <input className="form-control" type="password" />
                        </div>
                        <button className="btn btn-success btn-block">Sign In</button>
                    </form>
                </div>
            </div>
        )
    }


    return (
        <Base title="Sign in page" description="welcome User">
            {signinForm()}
        </Base>
    );
}

export default Signin;
