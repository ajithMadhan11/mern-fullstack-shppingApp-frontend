import React from 'react';

const Base = ({
    title="My title",
    description="My Description",
    className="bg-dark text-white p-4",
    children
}) => {
    return (
        <div>
            <div className="container-fluid">
                <div className="jumbotron bg-dark tet-white text-center">
                    <h2 className="display-4 text-white" >{title}</h2>
                    <p className="lead text-white">{description}</p>
                </div>
                <div className={className}>{children}</div>
            </div>
                <footer className="footer bg-dark mt-auto py-3">
                    <div className="container-fluid bg-success text-white text-center py-3">
                        <h4>If you have any Question,feel free to contact us</h4>
                        <button className="btn btn-warning btn-lg">Contact us</button>
                    </div>
                    <div className="container">
                        <span className="text-muted">
                            Find amazing collection of T-shirts
                        </span>
                    </div>
                </footer>
               
        </div>
    );
}

export default Base;
