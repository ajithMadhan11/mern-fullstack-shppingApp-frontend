import React ,{useState} from 'react';
import Base from '../core/Base';
import {Link,Redirect} from "react-router-dom";

import {signin,authenticate,isAuthenticated} from "../auth/helper"

const Signin = () => {


    const [values,setValues]=useState({
        email:"",
        password:"",
        error:"",
        loading:false,
        didRedirect:false
    })

    const {email,password,error,loading,didRedirect}=values;

    const {user}= isAuthenticated();

    const handleChange = name => event =>{
        setValues({...values,error:false,[name]:event.target.value})
    }
    const onSubmit = event =>{
        event.preventDefault()
        setValues({...values,error:false,loading:true})
        signin({email,password})
        .then(data =>{
            if(data.error){
                setValues({...values,error:data.error,loading:true})
            }else{
                authenticate(data,()=>{
                    setValues({
                        ...values,
                        didRedirect:true
                    })
                })
            }
        })
        .catch(console.log("signIn failed"))
    }
    const performRedirect = ()=>{
        if(didRedirect){
            if(user && user.role ===1){
                return <p>Redirect to admin</p>
            }else{
                return <p>Redirect to User dashboard</p>
            }
        }
        if(isAuthenticated()){
            return <Redirect to ="/" />;
        }
    }

    const loadingMessage = () =>{
     return (
         loading && (
             <div className="alert alert-info">
             <h2>Loading...</h2>
             </div>
     )
     );
     };
     const errorMessage = () =>{

       return(  
                  <div className="row">
                      <div className="col-md-6 offset-sm-3 text-left">
                             <div className=" alert alert-danger" 
                                  style={{display:error ?"" : "none"}}>
                                        {error}
         
                             </div> 
                         </div> 
                  </div> 
         );
     
     }

    const signinForm =()=>{
        return(
            <div className="row">
                <div className="col-md-6 offset-sm-3 text-left">
                    <form action="">
                        <div className="form-group">
                            <label className="text-light">Email</label>
                            <input onChange={handleChange("email")} className="form-control" type="email" value={email}/>
                        </div>
                        <div className="form-group">
                            <label className="text-light">password</label>
                            <input onChange={handleChange("password")} className="form-control" type="password" value={password}/>
                        </div>
                        <button onClick={onSubmit} className="btn mt-4 btn-success btn-block w-100">Sign In</button>
                    </form>
                </div>
            </div>
        )
    }


    return (
        <Base title="Sign in page" description="welcome User">
            {loadingMessage()}
            {errorMessage()}
            {signinForm()}
            {performRedirect()}
            <p className="text-white text-center">{JSON.stringify(values)}</p>
        </Base>
    );
}

export default Signin;
