import React from 'react';
import "../styles.css";
import {API} from "../backend";
import Base from "./Base";
const Home = () => {
    console.log("API IS ",API);
    return (
       <Base title="Home Page" description="welcome for shopping with us">
           <div className="row">
               <div className="col-4">
                   <button className="btn btn-success"> Test</button>
               </div> 
                <div className="col-4">
                   <button className="btn btn-success"> Test</button>
               </div> 
                <div className="col-4">
                   <button className="btn btn-success"> Test</button>
               </div>
           </div>
            <h1 className="text-white">Hello front end </h1>
      </Base>
    );
}

export default Home;
